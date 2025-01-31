import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import "./socials.css";
import { useState } from "react";

const Socials = ({ slug }) => {
  /*const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const like = () => {
    if (isLike) {
      setIsLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setIsLike(true);
      setLikeCount(likeCount + 1);
    }
  };*/

  /*const share = () => {};*/
  const copyLink = () => {
    const articleUrl = `${window.location.origin}/news/${slug}`;
    navigator.clipboard
      .writeText(articleUrl)
      .then(() => {
        //alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.log("Failed to copy link: ", err);
      });
  };
  return (
    <div className="socials-share">
      {/*<button className={`like ${isLike ? "liked" : ""}`} onClick={like}>
        <ThumbUpIcon /> {likeCount}
      </button>
      <button className="share" onClick={share}>
        <ShareIcon />
      </button>*/}
      <button className="copy-link" onClick={copyLink}>
        <ShareIcon />
      </button>
    </div>
  );
};

export default Socials;
