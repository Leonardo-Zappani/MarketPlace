import { FC } from "react"
import { Cabecalho } from '../../../pages/Cabecalho'
import { Rodape } from '../../../pages/Rodape'
import { Outlet } from "react-router-dom"

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <Cabecalho />
        <Outlet />
      <Rodape />
    </div>
  )
}

export default Layout
