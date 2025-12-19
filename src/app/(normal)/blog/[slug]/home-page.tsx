"use client";
import Layout from "@/containers/Layout";
import { Post } from "@/lib/posts";
import TopRightGray from "@/assets/illustrations/blog/top-right-yellow.svg";
import MobileTopRightGray from "@/assets/illustrations/blog/mobile-top-right-yellow.svg";
import TopLeftGray from "@/assets/illustrations/blog/top-left-gray.svg";
import MobileTopLeftGray from "@/assets/illustrations/blog/mobile-top-left-gray.svg";
import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumb from "@/components/Breadcrumb";
import Icon from "@/components/Icon";

type PostBySlugProps = {
  post?: Post;
  posts?: Post[];
  source: string;
};

const PostBySlug = ({ post, posts = [], source }: PostBySlugProps) => {
  if (!post) {
    return null;
  }

  return (
    <Layout>
      <section className="relative flex flex-col justify-center min-h-inherit px-8 tablet:px-20 desktop:px-20">
        <div className="hidden desktop:block absolute top-0 left-0 z-0">
          <TopLeftGray />
        </div>
        <div className="block desktop:hidden absolute top-0 left-0">
          <MobileTopLeftGray />
        </div>
        <div className="hidden desktop:block absolute top-0 right-0">
          <TopRightGray />
        </div>
        <div className="block desktop:hidden absolute top-0 right-0">
          <MobileTopRightGray />
        </div>
        <div className="flex flex-col desktop:flex-row max-w-6xl mx-auto gap-2 desktop:gap-10">
          <div className="z-10 flex flex-col gap-6 py-[90px]">
            <Breadcrumb currentPath={post.frontMatter.title} />
            {post.frontMatter?.title && (
              <h1 className="mt-6 text-dark-blue-heading font-bold text-3xl">
                {post.frontMatter.title}
              </h1>
            )}
            <div className="flex flex-col desktop:flex-row items-start gap-6 desktop:gap-0 desktop:items-center desktop:justify-between">
              <div className="flex flex-col desktop:flex-row items-start desktop:items-center gap-4 desktop:gap-8">
                <div className="flex flex-row items-center gap-2">
                  <Icon iconName="post-date" className="text-description" />
                  <h4 className="desktop:my-6 text-sm text-description">
                    {post.frontMatter.date}
                  </h4>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Icon iconName="clock" className="text-description" />
                  <h4 className="desktop:my-6 text-sm text-description">
                    {post.readingTime.text}
                  </h4>
                </div>
              </div>
              {/* <Button type="primary" className="!rounded-full w-[148px]">
                <Icon iconName="link" />
                Copiar link
              </Button> */}
            </div>
            <div
              className="min-w-full h-[446px] z-0 rounded-lg rounded-br-3xl"
              style={{
                backgroundImage: `linear-gradient(#0009, #0009), url(${post.featuredImage})`,
              }}
            />
            <article
              className="max-w-4xl mx-auto text-black"
              dangerouslySetInnerHTML={{ __html: source }}
            />
          </div>
          <div className="desktop:pt-[350px]">
            <BlogSidebar
              className="max-w-xs"
              setSearch={() => {}}
              lastPosts={posts.slice(0, 5)}
              shouldShowSearchInput={false}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostBySlug;
