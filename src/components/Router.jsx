import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '/src/App'
import Shop from "./Shop";
import About from "./About";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

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
                            path: "about",
                            element: <About />,
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