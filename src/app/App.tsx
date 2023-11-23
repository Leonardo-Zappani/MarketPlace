import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { PaginaProdutos, NoMatch } from "@/pages";
import { MostrarCarrinho } from "@/pages/Carrinho/mostrarCarrinho.tsx";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PaginaProdutos />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/carrinho" element={<MostrarCarrinho />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
