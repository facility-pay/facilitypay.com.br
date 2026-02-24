import { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Blog",
    };
  }

  const post = await getPostBySlug(slug);

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.excerpt,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt,
      type: "article",
      publishedTime: post.frontMatter.date,
      url: `https://facilitypay.com.br/blog/${slug}`,
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: post.frontMatter.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const posts = getAllPosts();
  const post = slug ? await getPostBySlug(slug) : undefined;
  const source = post ? await markdownToHtml(post.content) : "";

  return <PostBySlug post={post} source={source} posts={posts} />;
};

export default Page;
