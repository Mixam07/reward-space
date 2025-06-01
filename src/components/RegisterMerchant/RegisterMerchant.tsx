import s from "./RegisterMerchant.module.css";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";

import name from "../../assets/icons/name.svg";
import email from "../../assets/icons/email.svg";
import password from "../../assets/icons/password.svg";
import description from "../../assets/icons/description.svg";
import cashback from "../../assets/icons/cashback.svg";
import add_photo from "../../assets/icons/add-photo.svg";
import { useEffect, useState } from "react";

const RegisterMerchant = (props: any) => {
    const [image, setImage] = useState<File>();
    const [previews, setPreviews] = useState<string>();

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
        navigate("/");
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            email: "",
            percent: "",
            password: "",
            error: "",
            image: ""
        },
        validate: (values: any) => {
            const errors: Record<string, string> = {};

            const nameRegex = /^[А-Яа-яІіЇїЄєҐґ']+$/u;

            if (!values.name) {
                errors.name = "Назва обов’язкова";
            } else if (values.name.length > 32) {
                errors.name = "Максимум 32 символи";
            }

            if (!values.description) {
                errors.description = "Опис обов’язковий";
            } else if (values.description.length > 128) {
                errors.description = "Максимум 128 символи";
            }

            if (!values.percent) {
                errors.percent = "Відсоток обов’язковий";
            } else if (isNaN(values.percent)) {
                errors.percent = "Має бути числом";
            } else if (values.percent > 100) {
                errors.percent = "Максимум 100";
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!values.email) {
                errors.email = "Email обов’язковий";
            } else if (!emailRegex.test(values.email)) {
                errors.email = "Некоректний email";
            }
            
            if (!values.password) {
                errors.password = "Пароль обов’язковий";
            } else if (values.password.length < 8) {
                errors.password = "Мінімум 8 символів";
            } else if (values.password.length > 128) {
                errors.password = "Максимум 128 символів";
            }

            const allowedTypes = ["image/svg+xml"];

            if (!image) {
                errors.image = "Додай фото";
            } else if (!allowedTypes.includes(image?.type)) {
                errors.image = "Тільки .svg";
            }

            return errors;
        },
        onSubmit: async (values, { setErrors }) => {
            const result = await props.registerMerchant({
                name: values.name,
                description: values.description,
                cashbackRate: values.percent,
                email: values.email,
                password: values.password,
                logo: image
            });

            if (result === null) {
                setErrors({ error: 'Реєстрація не вдалася. Спробуйте ще раз.' });
            } else {
                props.getUser();

                navigate('/');
            }
        },
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return

        const file = e.target.files[0];

        if (file) {
            setImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className={s.register}>
            <div className="container">
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <h1 className={s.title}>Створити новий обліковий запис</h1>

                    <div className={s.wrap}>
                        <div className={s.photoWrap}>
                            <label className={s.photo}>
                                {
                                    previews?
                                    <img className={s.preview} src={previews} alt="" />:
                                    <img src={add_photo} alt="add-photo" />
                                }
                                <input type="file" accept="image/*" multiple onChange={handleImageChange} hidden />
                            </label>
                            {typeof formik.errors.image === 'string' && (
                                <div className={s.error}>{formik.errors.image}</div>
                            )}
                        </div>
                        <div className={s.wrapper}>
                            <input
                                className={s.input}
                                type="text"
                                name="name"
                                placeholder="Comfy"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            <label className={s.label} htmlFor="name">Назва</label>
                            <div className={s.icon}>
                                <img src={name} alt="" />
                            </div>
                            {formik.touched.name && typeof formik.errors.name === 'string' && (
                                <div className={s.error}>{formik.errors.name}</div>
                            )}
                        </div>
                    </div>

                    <div className={s.wrapper}>
                        <input
                            className={s.input}
                            type="text"
                            name="description"
                            placeholder="Ми дуже відома компанія"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                        <label className={s.label} htmlFor="description">Опис</label>
                        <div className={s.icon}>
                            <img width="24px" src={description} alt="" />
                        </div>
                        {formik.touched.description && typeof formik.errors.description === 'string' && (
                            <div className={s.error}>{formik.errors.description}</div>
                        )}
                    </div>

                    <div className={s.wrapper}>
                        <input
                            className={s.input}
                            type="text"
                            name="percent"
                            placeholder="5"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.percent}
                        />
                        <label className={s.label} htmlFor="percent">Відсоток</label>
                        <div className={s.icon}>
                            <img width="24px" src={cashback} alt="" />
                        </div>
                        {formik.touched.percent && typeof formik.errors.percent === 'string' && (
                            <div className={s.error}>{formik.errors.percent}</div>
                        )}
                    </div>

                    <div className={s.wrapper}>
                        <input
                            className={s.input}
                            type="email"
                            name="email"
                            placeholder="comfy@gmail.com"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <label className={s.label} htmlFor="email">Пошта</label>
                        <div className={s.icon}>
                            <img src={email} alt="" />
                        </div>
                        {formik.touched.email && typeof formik.errors.email === 'string' && (
                            <div className={s.error}>{formik.errors.email}</div>
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
                    <div className={s.text}>Вже маєш обліковий запис? <NavLink className={s.link} to="/auth/login/merchant">Увійти</NavLink></div>
                </form>
            </div>
        </section>
    )
}

export default RegisterMerchant;