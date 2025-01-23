import { Link } from "react-router-dom";
import "./bloglist.css";
import Socials from "../socials/Socials";
const BlogList = ({ posts, getPostedAgo }) => {
  return (
    <div className="post-feed">
      {/*<h2>{title}</h2>*/}
      {posts &&
        posts.map((post) => (
          <div className="post-card" key={post.id}>
            <Socials slug={post.slug} />
            <Link to={`/news/${post.slug}`}>
              {
                <img
                  src={post._embedded["wp:featuredmedia"]?.[0]?.source_url}
                  alt={post.title.rendered}
                />
              }

              <header>
                <h2>{post.title.rendered}</h2>
              </header>
              <footer>
                <p>By: {post._embedded?.author?.[0].name}</p>
                <p className="posted-ago">{getPostedAgo(post.date)}</p>
              </footer>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
