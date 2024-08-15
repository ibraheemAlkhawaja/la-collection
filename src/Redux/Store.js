import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const Store =configureStore(
    {
        reducer : {
            ProductSlice :ProductSlice
        }
    }
)
export default Store