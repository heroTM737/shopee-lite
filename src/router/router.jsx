import {createBrowserRouter,} from "react-router-dom";
import ProductDetails from "@/pages/ProductDetails/ProductDetails.jsx";
import Home from "@/pages/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }, {
        path: "/products/:id",
        element: <ProductDetails/>
    },
]);


export default router
