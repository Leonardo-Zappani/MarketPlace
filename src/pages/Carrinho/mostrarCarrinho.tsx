import React from "react"
import { useCart } from "../../app/Context/ContextoCarrinho"

export const MostrarCarrinho: React.FC = () => {
    const { cart } = useCart()

    function calcularSubtotal() {
        const subtotal = cart.reduce((acc, item) => acc + item.price, 0)
        return subtotal.toFixed(2)
    }

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
            {cart.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
                                <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-4" />
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-700">Preço: R${item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <hr className="my-8" />
                    <div className="flex justify-end">
                        <p className="text-xl font-bold">Subtotal: R${calcularSubtotal()}</p>
                    </div>
                </>
            )}
        </div>
    )
}
