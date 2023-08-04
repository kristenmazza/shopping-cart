import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '/src/App'
import Shop from "./Shop";
import About from "./About";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react"

const Router = () => {
    const [cart, setCart] = useState([]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    errorElement: <ErrorPage />,

                    children: [
                        { index: true, element: <Home /> },
                        {
                            path: "shop",
                            element: <Shop cart={cart} setCart={setCart} />,
                        },
                        {
                            path: "about",
                            element: <About />,
                        },
                        {
                            path: "cart",
                            element: <ShoppingCart cart={cart} setCart={setCart} />
                        },
                        { path: "*", element: <ErrorPage /> },
                    ],
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;