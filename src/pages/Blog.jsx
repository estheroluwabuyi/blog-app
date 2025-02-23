import HeroBgImg from "../components/HeroSection/HeroBgImg";
import NavBar from "../components/NavBar/NavBar";
import HeroCard from "../components/HeroSection/HeroCard";
// import PostLists from "../components/Posts/PostLists";

function Blog() {
  return (
    <div className="blog">
      <NavBar />
      <section className="blog-content">
        <HeroBgImg />

        <HeroCard heroCardImg="person.png" className="blog-hero-card">
          Tracy Wilson
        </HeroCard>

        {/* <PostLists
          post={post}
          setPost={setPost}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
        /> */}
      </section>
    </div>
  );
}

export default Blog;
