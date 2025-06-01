import s from "./Discount.module.css";
import { useFormik } from "formik";

const Discount = (props: any) => {
    const formik = useFormik({
        initialValues: {
            rate: "",
            pointPrice: "",
            durationDays: "",
            error: ""
        },
        validate: (values: any) => {
            const errors: Record<string, string> = {};

            if (!values.rate) {
                errors.rate = "Обов’язковий поле";
            } else if (values.rate > 100) {
                errors.rate = "Максимальне значення 100";
            }

            if (!values.pointPrice) {
                errors.pointPrice = "Обов’язковий поле";
            } else if (values.pointPrice > 10000) {
                errors.pointPrice = "Максимальне значення 10000";
            }

            if (!values.durationDays) {
                errors.durationDays = "Обов’язковий поле";
            } else if (values.durationDays > 10000) {
                errors.durationDays = "Максимальне значення 10000";
            }

            return errors;
        },
        onSubmit: async (values, { setErrors, resetForm }) => {
            const result = await props.createDiscount({
                rate: +values.rate / 100,
                pointPrice: values.pointPrice,
                durationDays: values.durationDays
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
            <h1 className={s.title}>Створити знижку</h1>

            <div className={s.wrapper}>
                <input
                    className={s.input}
                    type="number"
                    name="rate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rate}
                />
                <label className={s.label} htmlFor="count">Знижка</label>
                {formik.touched.rate && typeof formik.errors.rate === 'string' && (
                    <div className={s.error}>{formik.errors.rate}</div>
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
                <label className={s.label} htmlFor="pointPrice">Ціна знижки</label>
                {formik.touched.pointPrice  && typeof formik.errors.pointPrice === 'string' && (
                    <div className={s.error}>{formik.errors.pointPrice}</div>
                )}
            </div>

            <div className={s.wrapper}>
                <input
                    className={s.input}
                    type="number"
                    name="durationDays"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.durationDays}
                />
                <label className={s.label} htmlFor="amount">Термін дії</label>
                {formik.touched.durationDays  && typeof formik.errors.durationDays === 'string' && (
                    <div className={s.error}>{formik.errors.durationDays}</div>
                )}
            </div>

            <button type="submit" className={s.submit}>Створити</button>
            {formik.errors.error && (
                <div className={s.error}>{formik.errors.error}</div>
            )}
        </form>
    )
}

export default Discount;