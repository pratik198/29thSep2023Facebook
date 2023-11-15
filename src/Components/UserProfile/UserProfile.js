import React,{useEffect,useState} from "react";
import Navbar from "../Nav/Navbar";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../Context/Context";


function UserProfile(){

    const [userProfile, setUserProfile] = useState("");
    const bearerToken = localStorage.getItem("token");
    const {puId} = useAuth();

    const fetchData = async () => {
        console.log(puId)
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/facebook/user/${puId}`,
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
        console.log("User profile Data", data);
      };

      useEffect(() => {
        fetchData();
      }, []);
    return(

        ////user  profile
        <div >
            <Navbar />
            <section className="myProfileContent">
            <section className="profileHeader">
            <section className="profileImage">
                <img id="profileimg" src={userProfile?.profileImage} alt="userImage"/>
            </section>
            <section className="profileAvtar">
                <div className="profileAvtarDiv">
            <section className="avtarProfile">
            
                            <Avatar sx={{ width: 135, height: 135 }} src={userProfile?.profileImage}></Avatar>
                           
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

export default UserProfile;