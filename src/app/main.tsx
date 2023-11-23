import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { CartProvider } from "../app/Context/ContextoCarrinho.tsx"; // Import CartProvider

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <CartProvider> {/* Wrap the existing providers with CartProvider */}
                <App />
            </CartProvider>
        </Provider>
    </BrowserRouter>,
);
