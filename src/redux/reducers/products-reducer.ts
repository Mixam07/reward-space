import { Dispatch } from "redux";
import { buyCertificates, buyDiscount, getCertificates, getCompanies, getDiscounts } from "../../api/products";

const SET_COMPANIES = "SET-COMPANIES/products";
const SET_MYPRODUCTS = "SET-MYPRODUCTS/products"

export interface ProductsState {
    companies: any,
    myProducts: any
}

const initialState: ProductsState = {
    companies: null,
    myProducts: null
};

const productsReducer = (state = initialState, action: any): ProductsState => {
    switch(action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                companies: action.data
            };
        case SET_MYPRODUCTS:
            return {
                ...state,
                myProducts: action.data
            }
        default:
            return state;
    }
};

export const setCompanies = (data: any) => ({type: SET_COMPANIES, data});
export const setMyProdycts = (data: any) => ({type: SET_MYPRODUCTS, data});

export const getCompaniesThunkCreator = () => async (dispatch: Dispatch) => {
    const result = await getCompanies();

    if(result) {
        dispatch(setCompanies(result));
    }

    const accessToken = localStorage.getItem("accessToken");

    if(!accessToken) return

    const discounts = await getDiscounts(accessToken);
    const certificates = await getCertificates(accessToken);

    if(discounts && certificates) {
        dispatch(setMyProdycts([...discounts, ...certificates]))
    }
};

export const buyProductThunkCreator = (id: string) => async (dispatch: Dispatch) => {
    const accessToken = localStorage.getItem("accessToken");

    if(!accessToken) return

    const result = await buyDiscount(accessToken, id) || await buyCertificates(accessToken, id);

    if(result) {
        return true
    }
};

export default productsReducer;