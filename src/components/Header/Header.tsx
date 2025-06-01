import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

import profile from "../../assets/icons/profile.svg";
import search from "../../assets/icons/search.svg";
import heart from "../../assets/icons/heart.svg";

const Header = (props: any) => {
    return (
        <>
            <header className={s.header}>
                {/*
                <section className={s.slogan}>
                    <div className="container">
                        <div className={s.text}>Накопичуй. Збирай бонуси. Насолоджуйся.</div>
                    </div>
                </section>
                */}
                <div className="container">
                    <div className={s.wrapper}>
                        <div className={s.logo}>Reward Space</div>
                        <nav className={s.navigation}>
                            {/*
                            <NavLink to="/">
                                <img src={heart} alt="heart" />
                            </NavLink>
                            <NavLink to="/">
                                <img src={search} alt="search" />
                            </NavLink>
                            */}
                            {/*
                                props.user?
                                <NavLink className={s.profile} to={`${props.user?.phoneNumber? "/profile/customer": "/"}`}>
                                    <img src={profile} alt="profile" />
                                </NavLink>:
                                <NavLink className={s.item} to="/auth/login/customer">
                                    Увійти
                                </NavLink>
                            */}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;