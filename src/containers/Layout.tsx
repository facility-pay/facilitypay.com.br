import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

type LayoutProps = PropsWithChildren & {
  renderLoopBanner?: () => ReactNode;
  className?: string;
};

const Layout = ({ renderLoopBanner, children, className }: LayoutProps) => {
  return (
    <div>
      {renderLoopBanner?.()}
      <Header />

      <div
        className={[
          "w-screen h-screen max-w-full bg-white",
          className ?? "",
        ].join(" ")}
      >
        {children}

        <div className="fixed bottom-[2rem] right-[2rem] z-50">
          <Link
            href="http://wa.me/5527998126432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-4 bg-whatsapp !rounded-full hover:bg-whatsapp p-4"
          >
            <Icon iconName="whatsapp" />
            <span className="hidden desktop:block font-semibold text-white">
              Fale conosco
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
