import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

import profile from "../../assets/icons/profile.svg";
import search from "../../assets/icons/search.svg";
import heart from "../../assets/icons/heart.svg";

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.wrapper}>
                    <NavLink className={s.logo} to="/">Reward Space</NavLink>
                    <nav className={s.navigation}>
                        <NavLink to="/">
                            <img src={heart} alt="heart" />
                        </NavLink>
                        <NavLink to="/">
                            <img src={search} alt="search" />
                        </NavLink>
                        <NavLink to="/">
                            <img src={profile} alt="profile" />
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;