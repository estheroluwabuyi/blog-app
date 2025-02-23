import { useState } from "react";
import PostLists from "../Posts/PostLists";
import ViewAll from "../Posts/ViewAll";
import AdCard from "../AdCard/AdCard";

const posts = [
  {
    img: "post1.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author2.jpg",
    name: "Tracy Wilson",
  },
  {
    img: "post2.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author.jpg",
    name: "Jason Francisco",
  },
  {
    img: "post3.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author3.jpg",
    name: "Elizabeth Slavin",
  },
  {
    img: "post4.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author4.jpg",
    name: "Erinie Smith",
  },
  {
    img: "post5.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author5.jpg",
    name: "Eric Smith",
  },
  {
    img: "post6.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author.jpg",
    name: "Tracy Wilson",
  },
  {
    img: "post7.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author.jpg",
    name: "Jason Francisco",
  },
  {
    img: "post8.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author3.jpg",
    name: "Elizabeth Salvin",
  },
  {
    img: "post9.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author4.jpg",
    name: "Ernie Smith",
  },
  {
    img: "post1.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author2.jpg",
    name: "Tracy Wilson",
  },
  {
    img: "post8.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author3.jpg",
    name: "Elizabeth Salvin",
  },
  {
    img: "post7.jpg",
    title: "Technology",
    texts:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: "author.jpg",
    name: "Jason Francisco",
  },
];

function Main() {
  const [post, setPost] = useState(posts);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <main className="main">
      <PostLists
        post={post}
        setPost={setPost}
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
      />
      <ViewAll
        post={post}
        setPost={setPost}
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
      />
      <AdCard />
    </main>
  );
}

export default Main;
