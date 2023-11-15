import React,{useEffect,useState}from "react";
import Navbar from "../Navbar";
import Avatar from "@mui/material/Avatar";
import "./myProfile.css";
import { UserMap } from "../Datastore";

function MyProfile(){

    const [userProfile, setUserProfile] = useState(null);
    const bearerToken = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const fetchData = async () => {
      console.log("inside myProfile");
      console.log(userId);
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/facebook/user/${userId}`,
          {
            method:"Get",
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              projectID: "f104bi07c490",
            },
          }
        );
        const data = await response.json();
        setUserProfile(data.data);
        console.log("profile Data", data);
      };

      useEffect(() => {
        fetchData("userId");
      }, []);

      const User = {
        photoURL:
          "https://scontent.fbbi4-1.fna.fbcdn.net/v/t39.30808-6/384470156_621637833475535_5680275089051804810_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hAceM4VMwKMAX_mV2pN&_nc_ht=scontent.fbbi4-1.fna&oh=00_AfA0t1N7_IgPHFr-wkBDtnRylfpFZsrEKwOSPXZ-QcOpfA&oe=655A21FB",
        displayName: "Pratik",
      };
      
    return(
        <div >
            <Navbar />
            <section className="myProfileContent">
            <section className="profileHeader">
            <section className="profileImage">
                <img id="profileimg" src={User.photoURL}  alt="user" />
            </section>
            <section className="profileAvtar">
                <div className="profileAvtarDiv">
            <section className="avtarProfile">
            
                            <Avatar sx={{ width: 135, height: 135 }} src={User.photoURL} ></Avatar>
                          
           </section>
            
            <section>
            <h3 className="userProfileName">{userProfile?.name}</h3>
            </section>
            <section>
                <button>Learn More</button>
                <button>Following</button>
                <button>Message</button>
            </section>
            </div>
            </section>

            </section>
            </section>
            
        </div>
    )
}

export default MyProfile;