"use client";

import Layout from "@/containers/Layout";
import TopRightGray from "@/assets/illustrations/blog/top-right-yellow.svg";
import MobileTopRightGray from "@/assets/illustrations/blog/mobile-top-right-yellow.svg";
import TopLeftGray from "@/assets/illustrations/blog/top-left-gray.svg";
import MobileTopLeftGray from "@/assets/illustrations/blog/mobile-top-left-gray.svg";
import Icon from "@/components/Icon";
import { getAllPosts, Post } from "@/lib/posts";
import Image from "next/image";
import Button from "@/components/Button";
import BlogSidebar from "@/components/BlogSidebar";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts = [] }: BlogProps) => {
  const [search, setSearch] = useState<string>("");
  const pathname = usePathname();
  const routePrefix = pathname.startsWith('/afiliados-facility') ? '/afiliados-facility' : '';
  const featuredPost = posts?.[0];

  const filteredPosts = useMemo(() => {
    if (search) {
      return posts.filter(
        (post) =>
          post.frontMatter.title.toLowerCase().includes(search) ||
          post.frontMatter.excerpt.toLowerCase().includes(search)
      );
    }

    return posts;
  }, [posts, search]);

  return (
    <Layout>
      <section className="relative flex flex-col justify-center min-h-inherit px-8 tablet:px-20 desktop:px-20">
        <div className="hidden desktop:block absolute top-0 left-0">
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

        <div className="flex flex-col items-center z-10 pt-[90px] gap-6">
          <div className="flex items-center justify-center w-[60px] h-[60px] bg-secondary rounded-full">
            <Icon iconName="blog" />
          </div>

          <span className="text-[2rem] desktop:text-[2.5rem] leading-[2.75rem] font-bold text-dark-blue-heading">
            Blog
          </span>
          <span className="text-center desktop:text-start text-lg text-grey-light-text">
            Fique por dentro de todas as novidades da Facility Pay!
          </span>
        </div>

        <div className="relative desktop:mx-32 mt-[30px] bg-gray-dark h-[380px] rounded-lg rounded-br-3xl">
          <div
            className="absolute w-full h-full z-0 rounded-lg rounded-br-3xl"
            style={{
              backgroundImage: `linear-gradient(#0009, #0009), url(${featuredPost.featuredImage})`,
            }}
          />
          <div className="absolute min-w-full min-h-full z-40 bg-transparent flex gap-6 px-12 flex-col pb-10 justify-end">
            <div className="flex flex-row items-center gap-4">
              <Icon iconName="post-date" className="text-secondary" />
              <p className="text-secondary text-xs font-semibold">
                {featuredPost.frontMatter.date}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between min-w-full">
              <p className="text-white text-xl desktop:text-3xl font-bold">
                {featuredPost.frontMatter.title}
              </p>
              <Button type="primary" className="h-[60px] !min-w-[60px]">
                <Icon iconName="chevron-right" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[1px] bg-gray-divider-1 mx-52 my-[40px]" />
      <div className="flex flex-col gap-10 desktop:gap-0 desktop:flex-row px-8 tablet:px-20 desktop:px-20 desktop:mx-32">
        <div className="flex flex-wrap gap-8 desktop:min-w-[700px] desktop:max-w-[700px]">
          {filteredPosts.length > 0 &&
            filteredPosts.map((post) => {
              return (
                <div
                  key={post.frontMatter.title}
                  className="w-full desktop:max-h-[540px] desktop:max-w-[320px] drop-shadow-[0px_5px_30px_rgba(0,0,0,0.08)] bg-white p-[10px] rounded-xl"
                >
                  <div className="w-full flex items-center justify-center h-[190px] bg-gray-divider-1">
                    <Image
                      alt={post.frontMatter.title}
                      src={post.featuredImage ?? ""}
                      width={100}
                      height={190}
                    />
                  </div>
                  <div className="min-h-[calc(100%-190px)] flex flex-col justify-between gap-4 px-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center gap-4 pt-[32px]">
                        <Icon
                          iconName="post-date"
                          className="text-description"
                        />
                        <p className="opacity-80 text-description text-xs font-medium">
                          {post.frontMatter.date}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="text-black text-base font-bold">
                          {post.frontMatter.title}
                        </p>
                        <p className="text-description text-sm">
                          {post.frontMatter.excerpt.substring(0, 150) + "..."}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`${routePrefix}/blog/${post.frontMatter.slug}`}
                      className="group/post flex flex-row items-center gap-6 cursor-pointer"
                    >
                      <Button
                        type="primary"
                        className="h-[60px] !min-w-[60px] group-hover/post:bg-black"
                      >
                        <Icon
                          iconName="chevron-right"
                          className="group-hover/post:text-secondary"
                        />
                      </Button>

                      <p className="font-semibold text-gray-dark text-sm group-hover/post:underline group-hover/post:text-secondary">
                        Leia mais
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
          {filteredPosts.length === 0 && (
            <div className="max-w-lg mx-auto">
              <p className="text-center text-black text-sm">
                Não foi possível encontrar o post com essas palavras-chaves.
                Tente novamente!
              </p>
            </div>
          )}
        </div>
        <BlogSidebar
          search={search}
          className="min-w-sm"
          setSearch={setSearch}
          lastPosts={posts.slice(0, 5)}
        />
      </div>
    </Layout>
  );
};

export const getInitialProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
