import {
  getAllPosts,
  getAllPostSlugs,
  getPostBySlug,
  markdownToHtml,
} from "@/lib/posts";
import PostBySlug from "./home-page";

type PageProps = {
  params: Promise<{
    slug?: string;
  }>;
};

export const generateStaticParams = () => {
  const slugs = getAllPostSlugs();

  return slugs;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const posts = getAllPosts();
  const post = slug ? await getPostBySlug(slug) : undefined;
  const source = post ? await markdownToHtml(post.content) : "";

  return <PostBySlug post={post} source={source} posts={posts} />;
};

export default Page;
