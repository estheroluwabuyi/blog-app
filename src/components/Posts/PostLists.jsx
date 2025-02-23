function PostLists({ post, visibleCount }) {
  return (
    <div className="posts">
      <h2 className="posts-title">Latest Post</h2>

      <section className="posts-cards">
        {post.slice(0, visibleCount).map((post, index) => (
          <div key={index} className="post-card">
            <div className="posts-card--img">
              <img src={post.img} alt="bg" width="150" height="150" />
            </div>

            <div className="posts-card--badge">{post.title}</div>
            <h2 className="posts-card--texts">{post.texts}</h2>

            <div className="posts-card--footer">
              <div className="posts-card--author">
                <div className="posts-card--author-img">
                  <img
                    src={post.avatar}
                    alt="avatar"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="posts-card--name">{post.name}</div>
              </div>

              <div className="posts-card--date">August 20, 2022</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PostLists;

/*
// useEffect(function () {
  //   async function getPostDetails() {
  //     try {
  //       const res = await fetch(
  //         ` https://artistic-insights-alley-api.onrender.com/api/posts/`
  //       );

  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }

  //       const data = await res.json();
  //       console.log(data);

  //       // setPost(data);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     }
  //   }

  //   getPostDetails();
  // }, [post]);
 */
