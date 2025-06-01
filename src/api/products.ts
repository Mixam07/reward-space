import axios from 'axios';

const url = "https://lg50zswp-3000.euw.devtunnels.ms";

const getCompanies = async () => {
    try {
        const response = await axios.get(`${url}/v1/merchants`);
        
        return response.data;
    } catch (error: any) {

        return null;
    }
};

const getDiscounts = async (accessToken: string) => {
    try {
        const response = await axios.get(`${url}/v1/me/customer/discounts`,
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': '*/*',
            },
        });
        
        return response.data;
    } catch (error: any) {

        return null;
    }
};

const getCertificates = async (accessToken: string) => {
    try {
        const response = await axios.get(`${url}/v1/me/customer/certificates`,
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': '*/*',
            },
        });
        
        return response.data;
    } catch (error: any) {

        return null;
    }
};

const buyDiscount = async (accessToken: string, discountId: string) => {
    try {
        const response = await axios.post(`${url}/v1/discounts/${discountId}/buy`, {},
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': '*/*',
            },
        });
        
        return response.data;
    } catch (error: any) {
        return null;
    }
};

const buyCertificates = async (accessToken: string, discountId: string) => {
    try {
        const response = await axios.post(`${url}/v1/certificates/${discountId}/buy`, {},
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': '*/*',
            },
        });
        
        return response.data;
    } catch (error: any) {
        return null;
    }
};

export { getCompanies, buyDiscount, buyCertificates, getDiscounts, getCertificates }