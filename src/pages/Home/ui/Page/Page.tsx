import { FC, useState, useEffect } from "react";

const Home: FC = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Busca novos produtos dentro dessa API publica para listar 20 exemplos
    // na tela principal.
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json => setProdutos(json))
  }, [])

  return (
    <>
        {produtos.map((produto) => (
          <section>
          <div key={produto.id} className="hero min-h-[calc(100vh-64px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={produto.image}
                className="max-w-sm rounded-lg shadow-2xl"
                alt={produto.title}
              />
              <div>
                <h1 className="text-5xl font-bold">{produto.title}</h1>
                <button className="btn-primary btn">Comprar</button>
              </div>
            </div>
          </div>
          </section>
        ))}
    </>
  );
};

export default Home;
