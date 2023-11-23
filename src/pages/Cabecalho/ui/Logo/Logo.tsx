import { FC } from "react";
import { Logo } from "pages/Cabecalho/model/types.ts";

const Logo: FC<Logo> = ({ logoName }: Logo) => {
  return (
    <div className="navbar-center">
      <a className="btn-ghost btn text-xl normal-case">{logoName}</a>
    </div>
  );
};

export default Logo;
