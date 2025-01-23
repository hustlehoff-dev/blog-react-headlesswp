import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import "./socials.css";

const Socials = ({ slug }) => {
  const like = () => {};
  const share = () => {};
  const copyLink = () => {
    const articleUrl = `${window.location.origin}/news/${slug}`;
    navigator.clipboard
      .writeText(articleUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.log("Failed to copy link: ", err);
      });
  };
  return (
    <div className="socials-share">
      <button className="like" onClick={like}>
        <ThumbUpIcon />
      </button>
      <button className="share" onClick={share}>
        <ShareIcon />
      </button>
      <button className="copy-link" onClick={copyLink}>
        <LinkIcon />
      </button>
    </div>
  );
};

export default Socials;
