import { useState, useEffect, useRef } from "react";

const UseFetch = (url, slug) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPosts, setTotalPosts] = useState(0);
  const observerRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      if (!hasMore) return;
      setIsLoading(true);
      try {
        const response = await fetch(`${url}&page=${page}&per_page=2`);
        if (!response.ok) {
          throw new Error("Could not fetch the data from database");
        }

        if (
          !response.headers.get("content-type").includes("application/json")
        ) {
          throw new Error("Received non-JSON response");
        }

        const result = await response.json();
        const total = response.headers.get("X-WP-Total");
        setTotalPosts(parseInt(total, 10)); // Total posts count

        setData((prevData) => [...prevData, ...result]);
        setHasMore(data.length + result.length < total); // Total reahc check
        setIsError(null);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, page]);

  // Fetching trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (ent) => {
        const target = ent[0];
        if (target.isIntersecting && !isLoading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, isLoading]);

  // Fetching & converting post date
  const getPostedAgo = (date) => {
    const postDate = new Date(date);
    const now = new Date();
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays}d ago`;
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
    return `${Math.floor(diffInMonths / 12)} years ago`;
  };

  return { data, isLoading, isError, hasMore, observerRef, getPostedAgo };
};

export default UseFetch;
