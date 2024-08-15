import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import { Home, Product, Register, SignIn } from "../Pages";
import { Cart, SingleProduct } from "../Section";

const router = createBrowserRouter([{
    path : "/",
    element : <Root />,
    children : [{
        path : "/",
        element : <Home />
    },{
        path : "/Product",
        element :<Product />
    },{
        path : "/Register",
        element : <Register />
    },{
        path : "/SignIn",
        element : <SignIn />
    }
    ,{
        path : "/:p",
        element : <SingleProduct />
    },{
        path :"/Cart",
        element : <Cart />
    }
]
}])
export default router