import React from "react";
import "./loadcat.css";

const LoadCat = ({ isLoading, hasMore }) => {
  return (
    <div className="load-cat">
      <img
        src="https://comeincrypto.com/cms/wp-content/uploads/2025/01/loadcat.gif"
        alt="Cat that loads content xd"
      />
      {isLoading && "Loading more posts..."}
      {!hasMore && "No more posts to meow..."}
    </div>
  );
};

export default LoadCat;
