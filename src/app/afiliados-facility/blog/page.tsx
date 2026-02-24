import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import Blog from "./home-page";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dicas e novidades sobre maquininhas de cartão, taxas, empreendedorismo e gestão financeira para o seu negócio. Acompanhe o blog da FacilityPay.",
  openGraph: {
    title: "Blog - FacilityPay",
    description:
      "Dicas e novidades sobre maquininhas de cartão, taxas, empreendedorismo e gestão financeira para o seu negócio.",
    url: "https://facilitypay.com.br/afiliados-facility/blog",
  },
};

const Page = () => {
  const posts = getAllPosts();

  return <Blog posts={posts} />;
};

export default Page;
