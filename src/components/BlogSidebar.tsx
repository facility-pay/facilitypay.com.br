import { Post } from "@/lib/posts";
import Button from "./Button";
import Icon from "./Icon";
import Image from "next/image";
import Link from "next/link";

type BlogSidebarProps = {
  search?: string;
  setSearch: (search: string) => void;
  lastPosts?: Post[];
  className?: string;
  shouldShowSearchInput?: boolean;
};

const BlogSidebar = ({
  search = "",
  setSearch,
  lastPosts = [],
  className,
  shouldShowSearchInput = true,
}: BlogSidebarProps) => {
  return (
    <div className={["flex flex-col gap-6", className ?? ""].join(" ")}>
      {shouldShowSearchInput && (
        <div className="hidden desktop:flex flex-col gap-4">
          <p className="text-xl font-bold text-black">Buscar</p>
          <div className="relative flex flex-row justify-between max-h-[60px] items-center border border-description-55 rounded-full py-4 pl-4 pr-1">
            <input
              type="text"
              inputMode="numeric"
              className="w-full text-sm text-black outline-0 outline-none bg-transparent placeholder:text-xs placeholder:font-medium"
              placeholder="Buscar por palavra-chave..."
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <Button
              type="primary"
              className="!rounded-full !min-w-[52px] !h-[52px]"
            >
              <Icon iconName="chevron-right" />
            </Button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-black">Nos siga</p>
        <div className="flex flex-row items-center gap-4">
          <Button
            href="https://www.facebook.com/profile.php?id=100095252897063"
            type="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="group !min-w-[52px] !h-[52px]"
          >
            <Icon
              iconName="facebook"
              className="text-black group-hover:text-secondary"
            />
          </Button>
          <Button
            href="https://www.instagram.com/sejafacility/"
            type="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="group !min-w-[52px] !h-[52px]"
          >
            <Icon
              iconName="instagram"
              className="text-black group-hover:text-secondary"
            />
          </Button>
          <Button
            href="https://www.youtube.com/@sejafacility"
            type="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="group !min-w-[52px] !h-[52px]"
          >
            <Icon
              iconName="ytb"
              className="text-black group-hover:text-secondary"
            />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-black">Posts recentes</p>
        {lastPosts.map((post, index) => {
          const isLast = index === lastPosts.length - 1;

          return (
            <div key={post.frontMatter.title}>
              <Link
                href={`/blog/${post.frontMatter.slug}`}
                className="flex flex-row items-start gap-6"
              >
                <Image
                  alt="post_image"
                  width={60}
                  height={60}
                  src={post.featuredImage ?? ""}
                  className="rounded-lg rounded-br-3xl"
                />
                <div className="flex flex-col gap-4">
                  <p className="text-gray-dark text-xs desktop:text-sm font-semibold">
                    {post.frontMatter.title}
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <Icon iconName="post-date" className="text-description" />
                    <p className="text-description text-xs font-semibold">
                      {post.frontMatter.date}
                    </p>
                  </div>
                </div>
              </Link>
              {!isLast && (
                <div className="min-w-full h-[1px] bg-gray-divider-1 my-4 desktop:my-8" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSidebar;
