import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
// import { format } from "date-fns";
// import ptBR from "date-fns/locale/pt-BR";

import { remark } from "remark";
import remarkHtml from "remark-html";
// import remarkPrism from "remark-prism";

export type FrontMatter = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

export type Post = {
  frontMatter: FrontMatter;
  content: string;
  readingTime: ReadTimeResults;
  featuredImage?: string;
  views?: number;
};

export type ReadTimeResults = {
  text: string;
  time: number;
  words: number;
  minutes: number;
};

export type File = {
  fileName: string;
  locale: string;
};

export const formatData = (
  data: { [key: string]: unknown },
  content: string,
  slug: string
): Post => {
  const readingData = readingTime(content);

  const reading = {
    ...readingData,
    text: readingData.text.replace("read", "de leitura"),
  };

  const formattedDate = format(
    new Date(data?.date as string),
    "MMMM dd, yyyy",
    {
      locale: ptBR,
    }
  );

  return {
    ...data,
    content,
    frontMatter: {
      title: data?.title as string,
      excerpt: data?.excerpt as string,
      slug,
      date: formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1),
    },
    featuredImage: data?.featuredImage as string,
    readingTime: reading,
  };
};

const postDirectory = path.join(process.cwd(), "src/posts");

const readFile = (fileName: string) => {
  const fullPath = path.join(postDirectory, fileName);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  return fileContents;
};

const getFileNames = (): File[] => {
  if (fs.existsSync(postDirectory)) {
    const fileNames = fs.readdirSync(postDirectory);

    return fileNames.map((fileName) => {
      const fileContents = readFile(fileName);
      const { data } = matter(fileContents);

      return { fileName, locale: data.locale };
    });
  }

  return [];
};

export const getAllPosts = (): Post[] => {
  if (fs.existsSync(postDirectory)) {
    const fileNames = getFileNames();

    if (fileNames.length === 0) return [];

    const filteredData = fileNames
      .map(({ fileName }) => {
        const slug = fileName.replace(".mdx", "");

        const fileContents = readFile(fileName);
        const { data, content } = matter(fileContents);
        const post = formatData(data, content, slug);

        return post;
      })
      .filter(Boolean);

    return filteredData.sort((a, b) => {
      if (new Date(a.frontMatter.date) < new Date(b.frontMatter.date)) {
        return 1;
      } else {
        return -1;
      }
    });
  } else return [];
};

export const getAllPostSlugs = () => {
  if (fs.existsSync(postDirectory)) {
    const fileNames = getFileNames();

    const slugs = fileNames.map(({ fileName }) => {
      return {
        params: {
          slug: fileName.replace(".mdx", ""),
        },
      };
    });

    return slugs;
  } else {
    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  const fileContents = readFile(`${slug}.mdx`);
  const { data, content } = matter(fileContents);

  const post = formatData(data, content, slug);

  return {
    slug,
    ...post,
  };
};

export const markdownToHtml = async (markdown: string) => {
  const result = await remark()
    .use(remarkHtml, { sanitize: false, quoteSmart: true })
    // .use(remarkPrism)
    .process(markdown);

  return result.toString();
};
