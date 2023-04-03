import ProductDetails from "@/pages/ProductDetails/ProductDetails.jsx";
import Home from "@/pages/Home/Home.jsx";
import SignIn from "@/pages/Authentication/SignIn.jsx";
import SignUp from "@/pages/Authentication/SignUp.jsx";

const routes = [
    {
        path: "/",
        element: <Home />
    }, {
        path: "/sign-in",
        element: <SignIn />
    }, {
        path: "/sign-up",
        element: <SignUp />
    }, {
        path: "/product/:id",
        element: <ProductDetails />
    }, {
        path: "cart",
        lazy: () => import("@/pages/Cart/Cart.jsx")
    }
]


export default routes
