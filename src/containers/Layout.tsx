import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
