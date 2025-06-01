import s from "./ProfileCustomer.module.css";

import coin from "../../assets/icons/dollar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileCustomer = (props: any) => {
    const navigate = useNavigate();
    const [type, setType] = useState(0);

    if(props.user && Object.keys(props.user).length == 0){
        props.setUser(null);
        navigate("/auth/register/customer");
    }
    
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
                    <div className={s.shop}>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                        <div className={s.item}>
                            <div className={s.photo}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <p className={s.price}>750 <img src={coin} alt="coin" /></p>
                            <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                        </div>
                    </div>:
                    <div className={s.history}>
                        <div className={s.element}>
                            <div className={s.image}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <div className={s.information}>
                                <p className={s.cost}>750 <img src={coin} alt="coin" /></p>
                                <p className={s.headline}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                            </div>
                        </div>
                        <div className={s.element}>
                            <div className={s.image}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <div className={s.information}>
                                <p className={s.cost}>750 <img src={coin} alt="coin" /></p>
                                <p className={s.headline}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                            </div>
                        </div>
                        <div className={s.element}>
                            <div className={s.image}>
                                <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                            </div>
                            <div className={s.information}>
                                <p className={s.cost}>750 <img src={coin} alt="coin" /></p>
                                <p className={s.headline}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default ProfileCustomer;