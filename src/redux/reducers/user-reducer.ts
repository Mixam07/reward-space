import { Dispatch } from "redux";
import { getCustomer, getMerchant, loginCustomer, loginMerchant, registerCustomer, registerMerchant } from "../../api/user";

const SET_USER = "SET-USER/user";

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
    user: Customer | Merchant | null | {}
}

const initialState: UserState = {
    user: null
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
        default:
            return state;
    }
};

export const setUser = (user: Customer | Merchant | {}) => ({type: SET_USER, user});

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
        return null
    }
};

export const loginCustomerThunkCreator = (user: Customer) => async (dispatch: Dispatch) => {
    const result = await loginCustomer(user);
    
    if(result) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("type", "customer");

        return result
    } else {
        return null
    }
};

export const registerMerchantThunkCreator = (user: Merchant) => async (dispatch: Dispatch) => {
    const result = await registerMerchant(user);
    
    if(result) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("type", "merchant");

        return result
    } else {
        return null
    }
};

export const loginMerchantThunkCreator = (user: Merchant) => async (dispatch: Dispatch) => {
    const result = await loginMerchant(user);
    
    if(result) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("type", "merchant");

        return result
    } else {
        return null
    }
};

export default userReducer;