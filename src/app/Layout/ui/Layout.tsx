import { FC } from "react";
import { Rodape, Cabecalho } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <Cabecalho />
        <Outlet />
      <Rodape />
    </div>
  );
};

export default Layout;
