import s from "./RegisterCustomer.module.css";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";

import name from "../../assets/icons/name.svg";
import email from "../../assets/icons/email.svg";
import password from "../../assets/icons/password.svg";
import { useEffect, useState } from "react";

const RegisterCustomer = (props: any) => {
    const [id, setId] = useState("");
    const [bool, setBool] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            password: "",
            error: ""
        },
        validate: (values: any) => {
            const errors: Record<string, string> = {};

            const nameRegex = /^[А-Яа-яІіЇїЄєҐґ']+$/u;

            if (!values.firstName) {
                errors.firstName = "Ім’я обов’язкове";
            } else if (values.firstName.length > 64) {
                errors.firstName = "Максимум 64 символи";
            } else if (!nameRegex.test(values.firstName)) {
                errors.firstName = "Ім’я повинно містити лише українські літери";
            }

            if (!values.lastName) {
                errors.lastName = "Прізвище обов’язкове";
            } else if (values.lastName.length > 64) {
                errors.lastName = "Максимум 64 символи";
            } else if (!nameRegex.test(values.lastName)) {
                errors.lastName = "Прізвище повинно містити лише українські літери";
            }

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
            const result = await props.registerCustomer({
                firstName: values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                password: values.password
            });

            if (result === null || result.error) {
                setErrors({ error: result.error? result.error: 'Реєстрація не вдалася. Спробуйте ще раз.' });
            } else {
                await props.getUser();

                setId(props.user?.telegramCode);
                const t = result
                debugger

                setBool(true)
            }
        },
    });

    const onclick = (e: any) => {
        if(e.target.classList.contains(s.canvas)){
            setBool(false);

            navigate('/profile/customer');
        }
    }

    return (
        <>
            <section className={s.register}>
                <div className="container">
                    <form onSubmit={formik.handleSubmit} className={s.form}>
                        <h1 className={s.title}>Створити новий обліковий запис</h1>

                        <div className={s.wrap}>
                            <div className={s.wrapper}>
                                <input
                                    className={s.input}
                                    type="text"
                                    name="firstName"
                                    placeholder="Давід"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                />
                                <label className={s.label} htmlFor="firstName">ІМ'Я</label>
                                <div className={s.icon}>
                                    <img src={name} alt="" />
                                </div>
                                {formik.touched.firstName && typeof formik.errors.firstName === 'string' && (
                                    <div className={s.error}>{formik.errors.firstName}</div>
                                )}
                            </div>

                            <div className={s.wrapper}>
                                <input
                                    className={s.input}
                                    type="text"
                                    name="lastName"
                                    placeholder="Метьюз"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                />
                                <label className={s.label} htmlFor="lastName">ПРІЗВИЩЕ</label>
                                <div className={s.icon}>
                                    <img src={name} alt="" />
                                </div>
                                {formik.touched.lastName  && typeof formik.errors.lastName === 'string' && (
                                    <div className={s.error}>{formik.errors.lastName}</div>
                                )}
                            </div>
                        </div>

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

                        <button type="submit" className={s.submit}>СТВОРИТИ АККАУНТ</button>
                        {formik.errors.error && (
                            <div className={s.error}>{formik.errors.error}</div>
                        )}
                        <div className={s.text}>Вже маєш обліковий запис? <NavLink className={s.link} to="/auth/login/customer">Увійти</NavLink></div>
                    </form>
                </div>
            </section>
            <div onClick={ (e: any) => { onclick(e) } } className={`${s.canvas} ${bool && s.active}`}>
                <div className={s.popup}>
                    <p className={s.headline}>Підключись в телеграм</p>
                    <a className={s.href} target="_blank" href={`https://t.me/Reward_Space_Bot?start=${id}`}>Перейти</a>
                </div>
            </div>
        </>
    )
}

export default RegisterCustomer;