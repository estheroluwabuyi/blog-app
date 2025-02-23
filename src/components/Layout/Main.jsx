import PostLists from "../Posts/PostLists";
import ViewAll from "../Posts/ViewAll";
import AdCard from "../AdCard/AdCard";

function Main() {
  return (
    <main className="main">
      <PostLists />
      <ViewAll />
      <AdCard />
    </main>
  );
}

export default Main;
