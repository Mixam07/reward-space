import axios from 'axios';
import { Customer, Merchant } from '../redux/reducers/user-reducer';

const url = "https://lg50zswp-3000.euw.devtunnels.ms";

const getCustomer = async (accessToken: string) => {
    try {
        const response = await axios.get(`${url}/v1/me/customer`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        
        return response.data;
    } catch (error: any) {
        localStorage.clear();
        
        return null;
    }
};

const registerCustomer = async (user: Customer) => {
    try {
        const preparedUser = {
            ...user,
            firstName: user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1),
            lastName: user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1),
        };

        const response = await axios.post(`${url}/v1/auth/customer/register`, preparedUser);

        return response.data;
    } catch (error: any) {
        if(error.response?.data?.message){
            return {
                "error": error.response?.data?.message
            }
        } else {
            return null;
        }
    }
}

const loginCustomer = async (user: Customer) => {
    try {
        const response = await axios.post(`${url}/v1/auth/customer/login`, user);

        return response.data;
    } catch (error: any) {
        if(error.response?.data?.message){
            return {
                "error": error.response?.data?.message
            }
        } else {
            return null;
        }
    }
}

const getMerchant = async (accessToken: string) => {
    try {
        const response = await axios.get(`${url}/v1/me/merchant`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        
        return response.data;
    } catch (error: any) {
        localStorage.clear();

        return null;
    }
};


const registerMerchant = async (user: Merchant) => {
    try {
        const formData = new FormData();

        formData.append('name', user.name);
        formData.append('description', user.description);
        formData.append('cashbackRate', `${user.cashbackRate / 100}`);
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('logo', user.logo);

        const response = await axios.post(`${url}/v1/auth/merchant/register`, formData);
      
        return response.data;
    } catch (error: any) {
        if(error.response?.data?.message){
            return {
                "error": error.response?.data?.message
            }
        } else {
            return null;
        }
    }
}

const loginMerchant = async (user: Merchant) => {
    try {
        const response = await axios.post(`${url}/v1/auth/merchant/login`, user);

        return response.data;
    } catch (error: any) {
        if(error.response?.data?.message){
            return {
                "error": error.response?.data?.message
            }
        } else {
            return null;
        }
    }
}

const createKey = async (accessToken: string) => {
    try {
        const response = await axios.post(`${url}/v1/auth/merchant/api-key`, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        return response.data;
    } catch (error: any) {
        return null;
    }
};

const putKey = async (accessToken: string) => {
    try {
        const response = await axios.put(`${url}/v1/auth/merchant/api-key`, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        return response.data;
    } catch (error: any) {
        if(error.response?.data?.message){
            return {
                "error": error.response?.data?.message
            }
        } else {
            return null;
        }
    }
};

const createCertificate = async (accessToken: string, data: any) => {
    try {
        const response = await axios.post(`${url}/v1/certificates`, data, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        return response.data;
    } catch (error: any) {
        if(error.response?.data?.message){
            return {
                "error": error.response?.data?.message
            }
        } else {
            return null;
        }
    }
};

const createDiscount = async (accessToken: string, data: any) => {
    try {
        const response = await axios.post(`${url}/v1/discounts`, data, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

        return response.data;
    } catch (error: any) {
        if(error.response?.data?.message){
            return {
                "error": error.response?.data?.message
            }
        } else {
            return null;
        }
    }
};

export { registerCustomer, getCustomer, loginCustomer, registerMerchant, getMerchant, loginMerchant, createKey, putKey, createCertificate, createDiscount }