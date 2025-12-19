import { getAllPosts } from "@/lib/posts";
import Blog from "./home-page";

const Page = () => {
  const posts = getAllPosts();

  return <Blog posts={posts} />;
};

export default Page;
