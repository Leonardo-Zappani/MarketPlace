import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "@/app/Layout"
import { PaginaProdutos, NoMatch } from "@/pages"
import { MostrarCarrinho } from "@/pages/Carrinho/mostrarCarrinho.tsx"
import VerProdutoDetalhes from "@/pages/VerProduto/VerProduto.tsx"
import Login from "@/pages/Login/ui/login"
import Registrar from "@/pages/Login/ui/registrar"
import Faq from "@/pages/Faq/ui/faq"


const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<PaginaProdutos />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/carrinho" element={<MostrarCarrinho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/produto/:id" element={<VerProdutoDetalhes />} />
          <Route path="/faq" element={<Faq />} />
        </Route>  
      </Routes>
    </>
  )
}

export default App
