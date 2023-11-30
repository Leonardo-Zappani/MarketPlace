import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../../../app/Context/ContextoCarrinho"

const Cabecalho = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart()
  const history = useNavigate()

  function calcularSubtotal(cartItems) {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0)
    return subtotal.toFixed(2)
  }

  function mostrarCarrinho() {
    history("/carrinho")
  }

  function retornarHomePage() {
    history('/')
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="navbar bg-base-100">
        {isMobile && (
          <div className="flex-none">
            <button className="btn btn-square btn-ghost" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}

        <div className="flex-1 px-2 mx-2">
          <button onClick={retornarHomePage} className="btn btn-ghost normal-case text-xl">E-conomize</button>
        </div>

        <div className="flex-none">
          <div className="form-control">
            <input type="text" placeholder="Pesquisar" className="input input-bordered" />
          </div>
        </div>

        {cart && cart.length > 0 && (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="badge badge-sm indicator-item">{cart.length}</span>
                </div>
              </label>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">{cart.length} Itens</span>
                  <div className="flex flex-col mt-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center mb-2">
                        <span>{item.title}</span>
                        <span>R${item?.price?.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <hr className="my-3" />
                  <span className="text-info">Subtotal: R${calcularSubtotal(cart)}</span>
                  <div className="card-actions">
                    <button onClick={mostrarCarrinho} className="btn btn-primary btn-block">Ver carrinho</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
   { !isMobile && ( <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://s2-g1.glbimg.com/KijX0QgEENLEh2xN2h6bEyRnt_4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/e/EYKMBXR72tNdkUAgmZzQ/azul-caneta.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Manuel Gomes
                </a>
              </li>
              <li><a>Configurações</a></li>
              <li><a>Deslogar</a></li>
            </ul>
          </div>)}

        {isMobile && isOpen && (
          <div className="fixed bg-base-100 top-0 left-0 w-full h-full z-50 flex flex-col items-start justify-start pt-5 pl-4">
            <button className="btn btn-ghost" onClick={() => history('/carrinho')}>Ver Carrinho</button>
            <button className="btn btn-ghost" onClick={() => history('/')}>Menu Principal</button>
            <button className="btn btn-ghost" onClick={() => history('/faq')}></button>
            <button className="btn btn-ghost" onClick={() => setIsOpen(false)}>Fechar Menu</button>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle pl-4 avatar">
              <div className="w-10 rounded-full">
                <img src="https://s2-g1.glbimg.com/KijX0QgEENLEh2xN2h6bEyRnt_4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/e/EYKMBXR72tNdkUAgmZzQ/azul-caneta.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Manuel Gomes
                </a>
              </li>
              <li><a>Configurações</a></li>
              <li><a>Deslogar</a></li>
            </ul>
          </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cabecalho