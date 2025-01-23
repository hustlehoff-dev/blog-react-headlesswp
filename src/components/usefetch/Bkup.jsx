import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Add _embed parameter to the URL
        const newUrl = url.includes("?") ? `${url}&_embed` : `${url}?_embed`;
        const res = await fetch(newUrl);

        if (!res.ok) {
          throw new Error("Could not fetch the data from WordPress");
        }

        const posts = await res.json();

        // Extract unique author IDs to fetch authors
        const uniqueAuthorIds = [...new Set(posts.map((post) => post.author))];

        // Fetch all authors in parallel
        const authorRequests = uniqueAuthorIds.map((authorId) =>
          fetch(
            `https://comeincrypto.com/cms/wp-json/wp/v2/users/${authorId}`
          ).then((res) => res.json())
        );

        // Wait for all author data to be fetched
        const authors = await Promise.all(authorRequests);

        // Map through posts and enrich with author data and embedded media
        const postsData = posts.map((post) => {
          const author = authors.find((author) => author.id === post.author);
          const imageUrl =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          const postedAgo = getPostedAgo(post.date);

          return {
            ...post,
            author: author ? author.name : "Unknown Author",
            imageUrl,
            postedAgo,
          };
        });

        setData(postsData);
        setIsPending(false);
      } catch (err) {
        setIsPending(false);
        setError("Error: " + err.message);
      }
    };

    fetchData();
  }, [url]);

  const getPostedAgo = (date) => {
    const postDate = new Date(date);
    const now = new Date();
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} days ago`;
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
    return `${Math.floor(diffInMonths / 12)} years ago`;
  };

  return { data, isPending, error };
};

export default useFetch;
