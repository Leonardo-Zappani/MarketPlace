import { FC, useState, useEffect } from "react";

const Home: FC = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Busca novos produtos dentro dessa API pública para listar 20 exemplos
    // na tela principal.
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProdutos(json))
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-32 my-8">
      {produtos.map((produto) => (
        <div key={produto.id} className="rounded-lg shadow-2xl bg-base-300">
          <img
            src={produto.image}
            className="w-full h-64 object-cover rounded-t-lg"
            alt={produto.title}
          />
          <div className="p-4">
            <h1 className="text-xl font-bold">{produto.title}</h1>
            <button className="mt-2 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600">
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
