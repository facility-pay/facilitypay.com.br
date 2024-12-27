import Link from "next/link";

type BreadcrumbProps = {
  currentPath: string;
};

const Breadcrumb = ({ currentPath = "" }: BreadcrumbProps) => {
  return (
    <div className="flex flex-row">
      <Link href="/" className="text-black underline">
        Home
      </Link>
      <p className="text-description-55">&nbsp;/&nbsp;</p>
      <Link href="/blog" className="text-black underline">
        {" "}
        Blog
      </Link>
      <p className="text-description-55">&nbsp;/&nbsp;</p>
      <p className="text-description-55">{currentPath}</p>
    </div>
  );
};

export default Breadcrumb;
