import { Dispatch } from "redux";

const SET_PRODUCTS = "SET-PRODUCTS/products";

export interface ProductsState {
    products: []
}

const initialState: ProductsState = {
    products: []
};

const productsReducer = (state = initialState, action: any): ProductsState => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.data
            };
        default:
            return state;
    }
};

export const setProducts = (data: []) => ({type: SET_PRODUCTS, data});

export const getProductsThunkCreator = () => async (dispatch: Dispatch) => {

};

export default productsReducer;