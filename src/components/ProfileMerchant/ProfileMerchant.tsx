import { useNavigate } from "react-router-dom";
import s from "./ProfileMerchant.module.css";
import { useState } from "react";
import Certificate from "./Certificate/Certificate";
import Discount from "./Discount/Discount";

const ProfileMerchant = (props: any) => {
    const navigate = useNavigate();
    const [type, setType] = useState(0);

    if(props.user && Object.keys(props.user).length == 0){
        props.setUser(null);
        navigate("/auth/register/customer");
    } else if(props.user?.phone) {
        navigate("/profile/customer");
    }

    return (
        <section className={s.profile}>
            <div className="container">
                <div className={s.key}>
                    <span>{props.apiKey}</span>
                    <button className={s.generate} onClick={ () => { props.getKey(props.user?.hasApiKey) }}>Згенерувати</button>
                </div>
                <div className={s.buttons}>
                    <button onClick={ () => { setType(0) } } className={`${s.button} ${type == 0 && s.active}`}>Сертифікат</button>
                    <button onClick={ () => { setType(1) } } className={`${s.button} ${type == 1 && s.active}`}>Знижка</button>
                </div>
                {
                    type == 0? <Certificate createCertificate={props.createCertificate} />: <Discount createDiscount={props.createDiscount} />
                }
            </div>
        </section>
    )
}

export default ProfileMerchant;