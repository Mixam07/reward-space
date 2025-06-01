import s from "./ProfileCustomer.module.css";

import coin from "../../assets/icons/dollar.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileCustomer = (props: any) => {
    const navigate = useNavigate();
    const [type, setType] = useState(0);

    if(props.user && Object.keys(props.user).length == 0){
        props.setUser(null);
        navigate("/auth/register/customer");
    } else if(props.user?.email) {
        navigate("/profile/merchant");
    }

    useEffect(() => {
        props.getProducts();
    }, []);

    useEffect(() => {
        if(props.user?.email) {
            navigate("/profile/merchant");
        }
    }, [props.user]);

    const buy = async (e: any) => {
        const id = e.target.getAttribute("data-id");

        await props.buyProduct(id);
        props.getUser();
    }

    const products = props.companies?.map((elem: any, q: number) => {
        return [...elem.certificates, ...elem.discounts].map((item: any, i: number) => {
            return(
                <div className={s.item}>
                    <div className={s.photo}>
                        <img src={elem.logoUrl} alt="photo" />
                    </div>
                    <p className={s.price}>{item.pointPrice} <img src={coin} alt="coin" /></p>
                    {
                        item.rate?
                        <p className={s.title}>Знижка {item.rate * 100}%</p>:
                        <p className={s.title}>Знижка на {item.amount}грн</p>
                    }
                    <button className={s.buy} data-id={item.id} onClick={buy} >Купити</button>
                </div>
            )
        })
    });

    const myProducts = props.myProducts?.map((item: any, i: number) => {
        const elem = item.certificate || item.discount;
     
        return(
            <div key={i+1} className={s.element}>
                <div className={s.image}>
                    <img src={elem.merchant?.logoUrl} alt="photo" />
                </div>
                <div className={s.information}>
                    <p className={s.cost}>{elem.pointPrice} <img src={coin} alt="coin" /></p>
                    {
                        item.rate?
                        <p className={s.headline}>Знижка {elem.rate * 100}%</p>:
                        <p className={s.headline}>Знижка на {elem.amount}грн</p>
                    }
                </div>
            </div>
        )
    });

    
    return (
        <section className={s.profile}>
            <div className="container">
                <h1 className={s.caption}>Програма лояльності</h1>
                <div className={s.coin}>
                    {props.user?.pointCount}
                    <img src={coin} alt="coin" />
                </div>
                <div className={s.buttons}>
                    <button onClick={ () => { setType(0) } } className={`${s.button} ${type == 0 && s.active}`}>Магазин</button>
                    <button onClick={ () => { setType(1) } } className={`${s.button} ${type == 1 && s.active}`}>Придбане</button>
                </div>
                {
                    type == 0?
                    <div className={s.shop}>{products}</div>:
                    <div className={s.history}>{myProducts}</div>
                }
            </div>
        </section>
    )
}

export default ProfileCustomer;