import React, { useState, useEffect } from "react";
import "../Styles/Homepage.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getBearerToken } from "./Datastore";
import like from "../Images/like.png";
import love from "../Images/thumbs-up (1).png";
import chat from "../Images/chat.png";
import like2 from "../Images/like 2.png";
import comment from "../Images/comment.png";
import send from "../Images/send.png";

function Homepage() {
  const [Data, setData] = useState([]);
  const [comments, setComments] = useState({});

  const bearerToken = localStorage.getItem("token");

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/facebook/post", {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setData(data.data);

        data.data.forEach((post) => {
          // Fetch comments for each post when the component loads
          handleFetchComments(post._id);
        });
      } else {
        console.error("Error while fetching data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFetchComments = async (postId) => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            projectID: "f104bi07c490",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setComments((prevComments) => ({
          ...prevComments,
          [postId]: data.data,
        }));
      } else {
        const errorData = await response.json();
        console.error("Error while fetching comments:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="post-box">
      {Data &&
        Data.map((post) => (
          <Card sx={{ maxWidth: 450, maxHeight: 800, height: "50em" }} key={post._id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img src={post.author.profileImage} alt="..." />
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
            <div className="like-icon">
              <div className="like-section-count">
                <img src={like} alt="..." />
                <img src={love} alt="..." />
                <p id="L-count">{post.likeCount}</p>
              </div>
              <div className="commemt-icon">
                <p>{post.commentCount}</p>
                <img
                  src={chat}
                  alt="..."
                  style={{ position: "relative", top: "10px", height: "21px" }}
                />
              </div>
            </div>
            <div className="line"></div>

            <div className="footer">
              <div className="like-post-like-btn">
                <span>
                  <img
                    src={like2}
                    alt="..."
                    style={{
                      cursor: "pointer",
                      height: "21px",
                      marginTop: "-4px",
                    }}
                  />
                  <span id="S-comment">Like</span>
                </span>
              </div>

              <div
                className="like-post-like-btn"
                style={{ marginRight: "31px", marginTop: "-3px" }}
              >
                <img
                  src={comment}
                  alt="..."
                />
                <span id="S-comment">Comment</span>
              </div>
            </div>
            <div className="line2"></div>
            <div className="chat-container">
              {comments[post._id] && (
                <div className="scroll-container">
                  {comments[post._id].map((comment) => (
                    <div key={comment._id}>
                      <div className="add-commnet-section" style={{ display: "flex" }}>
                        <Avatar
                          style={{
                            height: "35px",
                            width: "35px",
                            marginLeft: "12px",
                            marginRight: "4px",
                            cursor: "pointer",
                          }}
                        />
                        <div className="added-comment">
                          <p>
                            <strong style={{ fontSize: "12px" }}>{comment.author.name}</strong>
                          </p>
                          <p style={{ fontSize: "15px" }}>{comment.content}</p>
                        </div>
                      </div>
                      <div style={{ display: "flex" }} className="l-r-s">
                        <p>Like</p>
                        <p>Reply</p>
                        <p>Share</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
    </div>
  );
}

export default Homepage;
