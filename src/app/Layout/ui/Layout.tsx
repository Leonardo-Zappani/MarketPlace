import { FC } from "react";
import { LayoutFooter, Cabecalho } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
