import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProduct } from "./productReducer";


const rootReducer = combineReducers({
    allProducts:productReducer,product:selectedProduct
})


export default rootReducer