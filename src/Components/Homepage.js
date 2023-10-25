import React, { useState, useEffect } from "react";
import '../Styles/Homepage.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { getBearerToken } from "./Datastore";
function Homepage() {
  const [Data, setData] = useState([]);
  const [isPostLiked, setPostLiked] = useState(false);
  let api1 =
    'https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"Carmen Shanahan"}';
  let api = "https://academics.newtonschool.co/api/v1/facebook/post";
  useEffect(() => {
    GetData(); 
    setPostLiked(false);
  }, [isPostLiked]);

  const GetData = async () => {
    const response = await fetch(api, {
      headers: {
        projectID: "f104bi07c490",
      },
    });
    const r = await response.json();
    // console.log(r)
    setData(r["data"]);
    console.log(Data);
  };

  ////like count//
  
  console.log(Data);

  const likePost = async (postId) => {

    // const token = getBearerToken();
    const token = localStorage.getItem('token');
    const token_ = "Bearer " + token;
    console.log(token_);

    console.log(postId);
      const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/like/${postId}`, {
        method: "POST",
        headers: {
          Authorization: token_,
          projectID: "f104bi07c490",
        },
      });
    console.log(response);
    const d= await response.json();
    console.log(d);
    if(response.ok){
      setPostLiked(true);
    }

    };
    

  /////

  return (
    <div className="post-box"> 
      {Data &&
        Data.map((post) => (
          <Card sx={{ maxWidth: 450, maxHeight: 700}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src={post.author.profileImage} alt="..."/>
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.author.name}
            subheader="September 14, 2016"
          />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="194"
            image={post.channel.image}
            alt="Paella dish"
          />
          <div>
            <p>{post.likeCount}</p>
          </div>
          <div className="footer">
            <button onClick={()=>likePost(post._id)}> like
            {/* <span><ThumbUpOffAltOutlinedIcon onClick={()=>likePost(post.id)}/>
            <span>Like</span></span> */}
            </button>
            <ChatBubbleOutlineOutlinedIcon/>
            <ShareOutlinedIcon/>
          </div>
      </Card>
        ))}
    </div>
  );
}

export default Homepage;