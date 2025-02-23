function ViewAll(post, setPost, visibleCount, setVisibleCount) {
  function handleViewAll() {
    if (visibleCount < post.length) {
      setVisibleCount(post.length);
    }
  }

  return (
    <div className="view-all-container">
      <div className="view-all" onClick={handleViewAll}>
        View All Posts
      </div>
    </div>
  );
}

export default ViewAll;
