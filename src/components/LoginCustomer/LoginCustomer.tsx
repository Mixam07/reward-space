import s from "./LoginCustomer.module.css";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";

import email from "../../assets/icons/email.svg";
import password from "../../assets/icons/password.svg";
import { useEffect } from "react";

const LoginCustomer = (props: any) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
        navigate("/");
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            phoneNumber: "",
            password: "",
            error: ""
        },
        validate: (values: any) => {
            const errors: Record<string, string> = {};

            if (!values.phoneNumber) {
                errors.phoneNumber = "Телефон обов’язковий";
            } else if (!/^\+?[0-9]{10,15}$/.test(values.phoneNumber)) {
                errors.phoneNumber = "Некоректний номер";
            }

            if (!values.password) {
                errors.password = "Пароль обов’язковий";
            } else if (values.password.length < 8) {
                errors.password = "Мінімум 8 символів";
            } else if (values.password.length > 128) {
                errors.password = "Максимум 128 символів";
            }

            return errors;
        },
        onSubmit: async (values, { setErrors }) => {
            const result = await props.loginCustomer({
                phoneNumber: values.phoneNumber,
                password: values.password
            });

            if (result === null) {
                setErrors({ error: 'Реєстрація не вдалася. Спробуйте ще раз.' });
            } else {
                props.getUser();

                navigate('/');
            }
        },
    });
    return (
        <section className={s.register}>
            <div className="container">
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <h1 className={s.title}>Увійти в обліковий запис</h1>

                    <div className={s.wrapper}>
                        <input
                            className={s.input}
                            type="tel"
                            name="phoneNumber"
                            placeholder="+380964856781"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                        />
                        <label className={s.label} htmlFor="phoneNumber">Телефон</label>
                        <div className={s.icon}>
                            <img src={email} alt="" />
                        </div>
                        {formik.touched.phoneNumber && typeof formik.errors.phoneNumber === 'string' && (
                            <div className={s.error}>{formik.errors.phoneNumber}</div>
                        )}
                    </div>

                    <div className={s.wrapper}>
                        <input
                            className={s.input}
                            type="text"
                            name="password"
                            placeholder="*****************"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <label className={s.label} htmlFor="password">Пароль</label>
                        <div className={s.icon}>
                            <img src={password} alt="" />
                        </div>
                        {formik.touched.password  && typeof formik.errors.password === 'string' && (
                            <div className={s.error}>{formik.errors.password}</div>
                        )}
                    </div>

                    <button type="submit" className={s.submit}>Увійти</button>
                    {formik.errors.error && (
                        <div className={s.error}>{formik.errors.error}</div>
                    )}
                    <div className={s.text}>Ще не маєш обліковий запис? <NavLink className={s.link} to="/auth/register/customer">Зареєструватися</NavLink></div>
                </form>
            </div>
        </section>
    )
}

export default LoginCustomer;