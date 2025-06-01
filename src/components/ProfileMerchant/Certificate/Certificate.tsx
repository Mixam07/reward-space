import s from "./Certificate.module.css";
import { useFormik } from "formik";

const Certificate = (props: any) => {
    const formik = useFormik({
        initialValues: {
            count: "",
            pointPrice: "",
            amount: "",
            error: ""
        },
        validate: (values: any) => {
            const errors: Record<string, string> = {};

            if (!values.count) {
                errors.count = "Обов’язковий поле";
            } else if (values.count > 10000) {
                errors.count = "Максимальне значення 10000";
            }

            if (!values.pointPrice) {
                errors.pointPrice = "Обов’язковий поле";
            } else if (values.pointPrice > 10000) {
                errors.pointPrice = "Максимальне значення 10000";
            }

            if (!values.amount) {
                errors.amount = "Обов’язковий поле";
            } else if (values.amount > 10000) {
                errors.amount = "Максимальне значення 10000";
            }

            return errors;
        },
        onSubmit: async (values, { setErrors, resetForm }) => {
            const today = new Date();
            const formatted = today.toISOString().split('T')[0];

            const result = await props.createCertificate({
                count: values.count,
                pointPrice: values.pointPrice,
                amount: values.amount,
                expiresAt: formatted
            });

            if (result === null || result.error) {
                setErrors({ error: result.error? result.error: 'Щось пішло не так' });
            } else {
                resetForm();
            }
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <h1 className={s.title}>Створити сертифікат</h1>

            <div className={s.wrapper}>
                <input
                    className={s.input}
                    type="number"
                    name="count"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.count}
                />
                <label className={s.label} htmlFor="count">Кількість сертифікатів</label>
                {formik.touched.count && typeof formik.errors.count === 'string' && (
                    <div className={s.error}>{formik.errors.count}</div>
                )}
            </div>

            <div className={s.wrapper}>
                <input
                    className={s.input}
                    type="number"
                    name="pointPrice"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pointPrice}
                />
                <label className={s.label} htmlFor="pointPrice">Ціна в балах</label>
                {formik.touched.pointPrice  && typeof formik.errors.pointPrice === 'string' && (
                    <div className={s.error}>{formik.errors.pointPrice}</div>
                )}
            </div>

            <div className={s.wrapper}>
                <input
                    className={s.input}
                    type="number"
                    name="amount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.amount}
                />
                <label className={s.label} htmlFor="amount">Сума сертифікату</label>
                {formik.touched.amount  && typeof formik.errors.amount === 'string' && (
                    <div className={s.error}>{formik.errors.amount}</div>
                )}
            </div>

            <button type="submit" className={s.submit}>Створити</button>
            {formik.errors.error && (
                <div className={s.error}>{formik.errors.error}</div>
            )}
        </form>
    )
}

export default Certificate;