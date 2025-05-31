import Main from '../../pages/Main/Main';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { PropsFromRedux } from './AppContainer';
import Slogan from '../Slogan/Slogan';
import Header from '../Header/Header';

const App = (props: PropsFromRedux) => {
    return (
        <>
            <Slogan />
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Main /> } />
                    <Route path="/auth/register/customer" element={<Main /> } />
                </Routes>
            </main>
        </>
    );
}

export default App;
