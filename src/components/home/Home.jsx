import BlogList from "./../bloglist/BlogList";
import useFetch from "./../usefetch/UseFetch";
import LoadCat from "../loadcat/LoadCat";
import HomeWidgets from "../homewidgets/HomeWidgets";

const Home = () => {
  const {
    data: posts,
    isLoading,
    isError,
    hasMore,
    observerRef,
    getPostedAgo,
  } = useFetch("https://comeincrypto.com/cms/wp-json/wp/v2/posts?_embed");

  return (
    <>
      <HomeWidgets />
      {posts && (
        <BlogList
          getPostedAgo={getPostedAgo}
          posts={posts}
          title="List of Posts"
        />
      )}
      {isError && <div>{isError}</div>}
      {<LoadCat isLoading={isLoading} hasMore={hasMore} />}

      {/* The div used by IntersectionObserver */}
      <div ref={observerRef} style={{ height: "20px" }}></div>
    </>
  );
};

export default Home;
