import { Dispatch } from "redux";
import { createCertificate, createDiscount, createKey, getCustomer, getMerchant, loginCustomer, loginMerchant, putKey, registerCustomer, registerMerchant } from "../../api/user";

const SET_USER = "SET-USER/user";
const SET_KEY = "SET-KEY/user";

export interface Merchant {
    name: string,
    description: string,
    cashbackRate: number,
    email: string,
    password: string,
    logo: any
}

export interface Customer {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string
}

export interface UserState {
    user: Customer | Merchant | null | {},
    apiKey: null | string
}

const initialState: UserState = {
    user: null,
    apiKey: null
};

const userReducer = (state = initialState, action: any): UserState => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: {
                    ...action.user
                }
            };
        case SET_KEY:
            return {
                ...state,
                apiKey: action.key
            };
        default:
            return state;
    }
};

export const setUser = (user: Customer | Merchant | {}) => ({type: SET_USER, user});
export const setKey = (key: string | null) => ({type: SET_KEY, key});

export const getUserThunkCreator = () => async (dispatch: Dispatch) => {
    const accessToken = localStorage.getItem("accessToken");
    const type = localStorage.getItem("type") || "customer";

    if(type == "customer") {
        const result = await getCustomer(accessToken || "");

        if(result) dispatch(setUser(result));
        else dispatch(setUser({}));
    } else if(type == "merchant") {
        const result = await getMerchant(accessToken || "");

        if(result) dispatch(setUser(result));
        else dispatch(setUser({}));
    } else{
        dispatch(setUser({}));
    }
};

export const registerCustomerThunkCreator = (user: Customer) => async (dispatch: Dispatch) => {
    const result = await registerCustomer(user);
    
    if(result) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("type", "customer");

        return result
    } else {
        return result
    }
};

export const loginCustomerThunkCreator = (user: Customer) => async (dispatch: Dispatch) => {
    const result = await loginCustomer(user);
    
    if(result) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("type", "customer");

        return result
    } else {
        return result
    }
};

export const registerMerchantThunkCreator = (user: Merchant) => async (dispatch: Dispatch) => {
    const result = await registerMerchant(user);
    
    if(result) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("type", "merchant");

        return result
    } else {
        return result
    }
};

export const loginMerchantThunkCreator = (user: Merchant) => async (dispatch: Dispatch) => {
    const result = await loginMerchant(user);
    
    if(result) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("type", "merchant");

        return result
    } else {
        return result
    }
};

export const getKeyThunkCreator = (hasApiKey: null | boolean) => async (dispatch: Dispatch) => {
    const accessToken = localStorage.getItem("accessToken");

    if(!accessToken) return
   
    if(!hasApiKey) {
        const result = await createKey(accessToken);

        if(result) {
            dispatch(setKey(result.apiKey))
        }
    } else {
        const result = await putKey(accessToken);

        if(result) {
            dispatch(setKey(result.apiKey))
        }
    }
};

export const createCertificateThunkCreator = (data: any) => async (dispatch: Dispatch) => {
    const accessToken = localStorage.getItem("accessToken");

    if(!accessToken) return
   
    const result = await createCertificate(accessToken, data);

    if(result) {
        return true
    } else{
        return result
    }
};

export const createDiscountThunkCreator = (data: any) => async (dispatch: Dispatch) => {
    const accessToken = localStorage.getItem("accessToken");

    if(!accessToken) return

    const result = await createDiscount(accessToken, data);

    if(result) {
        return true
    } else{
        return result
    }
};

export default userReducer;