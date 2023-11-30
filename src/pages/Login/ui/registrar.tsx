import React from "react"

export default function Registrar() {
    return (
        <div className="relative bg-base-100 flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-base-200 rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-white underline">
                    Crie uma conta!
                </h1>
                <form className="mt-6">
                    {["Email", "Senha"].map((label, index) => (
                        <div key={index} className="mb-2">
                            <label className="block text-sm font-semibold text-white">
                                {label}
                            </label>
                            <input
                                type={index === 0 ? "email" : "senha"}
                                className="block w-full px-4 py-2 mt-2 text-white bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    ))}
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Criar!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
