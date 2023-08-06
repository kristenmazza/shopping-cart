import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '/src/App'
import Shop from "./Shop";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import ShoppingCart from "./ShoppingCart";

const Router = () => {

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
                            element: <Shop />,
                        },
                        {
                            path: "cart",
                            element: <ShoppingCart />
                        },
                        { path: "*", element: <ErrorPage /> },
                    ],
                },
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;