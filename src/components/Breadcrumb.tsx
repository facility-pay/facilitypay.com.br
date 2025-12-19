"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbProps = {
  currentPath: string;
};

const Breadcrumb = ({ currentPath = "" }: BreadcrumbProps) => {
  const pathname = usePathname();
  const routePrefix = pathname.startsWith('/afiliados-facility') ? '/afiliados-facility' : '';

  return (
    <div className="flex flex-row">
      <Link href={routePrefix || "/"} className="text-black underline">
        Home
      </Link>
      <p className="text-description-55">&nbsp;/&nbsp;</p>
      <Link href={`${routePrefix}/blog`} className="text-black underline">
        {" "}
        Blog
      </Link>
      <p className="text-description-55">&nbsp;/&nbsp;</p>
      <p className="text-description-55">{currentPath}</p>
    </div>
  );
};

export default Breadcrumb;
