import Main from '../../pages/Main/Main';
import './App.css';
import { Route, Routes } from "react-router-dom";
import RegisterCustomer from '../../pages/RegisterCustomer/RegisterCustomer';
import { useEffect } from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import LoginCustomer from '../../pages/LoginCustomer/LoginCustomer';
import RegisterMerchant from '../../pages/RegisterMerchant/RegisterMerchant';
import LoginMerchant from '../../pages/LoginMerchant/LoginMerchant';

const App = (props: any) => {
    useEffect(() => {
        props.getUser();
    }, []);
    return (
        <>
            <HeaderContainer />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Main /> } />
                    <Route path="/auth/register/customer" element={<RegisterCustomer /> } />
                    <Route path="/auth/login/customer" element={<LoginCustomer /> } />
                    <Route path="/auth/register/merchant" element={<RegisterMerchant /> } />
                    <Route path="/auth/login/merchant" element={<LoginMerchant /> } />
                </Routes>
            </main>
        </>
    );
}

export default App;
