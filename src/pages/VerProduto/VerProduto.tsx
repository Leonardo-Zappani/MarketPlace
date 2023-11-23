import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const VerProdutoDetalhes: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(produto => setProduto(produto))
    }, [id]);

    if (!produto) {
        return <p>Produto não encontrado.</p>;
    }

    return (
        <div className="container mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <img src={produto.image} alt={produto.title} className="w-full h-64 object-cover mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{produto.title}</h2>
                    <p className="text-gray-700 mb-4">{produto.description}</p>
                    <p className="text-xl font-semibold mb-2">Preço: R${produto.price.toFixed(2)}</p>
                    <button
                        onClick={() => addToCart(produto)}
                        className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerProdutoDetalhes;
