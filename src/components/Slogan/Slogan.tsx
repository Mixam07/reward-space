import s from "./Slogan.module.css";

const Slogan = () => {
    return (
        <section className={s.slogan}>
            <div className="container">
                <div className={s.wrapper}>Накопичуй. Збирай бонуси. Насолоджуйся.</div>
            </div>
        </section>
    )
}

export default Slogan;