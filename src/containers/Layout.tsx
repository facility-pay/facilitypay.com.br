import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PropsWithChildren, ReactNode } from "react";

type LayoutProps = PropsWithChildren & {
  renderLoopBanner?: () => ReactNode;
};

const Layout = ({ renderLoopBanner, children }: LayoutProps) => {
  return (
    <div>
      {renderLoopBanner?.()}
      <Header />

      <div className="w-screen h-screen max-w-full bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
