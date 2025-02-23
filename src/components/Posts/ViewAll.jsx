function ViewAll({ post, visibleCount, setVisibleCount }) {
  function handleViewAll() {
    if (visibleCount < post.length) {
      setVisibleCount(post.length);
    }
    if (visibleCount === post.length) {
      setVisibleCount(6);
    }
  }

  return (
    <div className="view-all-container">
      <div className="view-all" onClick={handleViewAll}>
        {visibleCount < post.length ? "View All Posts" : "View Less"}
      </div>
    </div>
  );
}

export default ViewAll;
