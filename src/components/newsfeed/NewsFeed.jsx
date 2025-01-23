import React, { useEffect, useState, useRef, useCallback } from "react";
import BlogPost from "./../blogpost/BlogPost";
import useFetch from "./../usefetch/UseFetch";
import LoadCat from "../loadcat/LoadCat";
import { useParams, useNavigate } from "react-router-dom";

const NewsFeed = () => {
  const { slug } = useParams();
  const {
    data: posts,
    isLoading,
    isError,
    hasMore,
    observerRef,
    getPostedAgo,
  } = useFetch("https://comeincrypto.com/cms/wp-json/wp/v2/posts?_embed");

  const [initialPost, setInitialPost] = useState(null);
  const [fetchedFirstPost, setFetchedFirstPost] = useState(false);
  const navigateUrl = useNavigate();

  // Fetch initial post by slug
  useEffect(() => {
    const fetchInitial = async () => {
      if (!slug || fetchedFirstPost) return;

      try {
        const response = await fetch(
          `https://comeincrypto.com/cms/wp-json/wp/v2/posts?_embed&slug=${slug}`
        );

        if (!response.ok) {
          throw new Error("Could not load initial post:", slug);
        }
        const result = await response.json();

        if (result.length > 0) {
          setInitialPost(result[0]);
        }
        setFetchedFirstPost(true);
      } catch (err) {
        console.error("Error fetching initial post:", err.message);
      }
    };

    fetchInitial();
  }, [slug, fetchedFirstPost]);

  // Filter out initial post
  const filteredPosts = initialPost
    ? posts.filter((post) => post.id !== initialPost.id)
    : posts;

  // callback update url when visible
  const handlePostVisible = useCallback(
    (visiblePostSlug) => {
      if (visiblePostSlug !== slug) {
        navigateUrl(`/news/${visiblePostSlug}`, { replace: true });
      }
    },
    [slug, navigateUrl]
  );

  return (
    <>
      {initialPost && (
        <BlogPost
          getPostedAgo={getPostedAgo}
          posts={[initialPost]}
          onPostVisible={handlePostVisible}
        />
      )}
      {posts && (
        <BlogPost
          getPostedAgo={getPostedAgo}
          posts={filteredPosts}
          onPostVisible={handlePostVisible}
        />
      )}
      {isError && <div>{isError}</div>}
      {<LoadCat isLoading={isLoading} hasMore={hasMore} />}

      {/* The div used by IntersectionObserver for infinite scroll */}
      <div ref={observerRef} style={{ height: "20px" }}></div>
    </>
  );
};

export default NewsFeed;
