
import { useState, useRef } from "react";
import s from "./Faq.module.css";

const faq_list = [
    {
        question: "Are all of your gloves durable?",
        answer: "Yes, all of our gloves are designed with durability in mind. All gloves are built with high-quality materials and go through rigorous testing processes to ensure that our gloves can withstand the toughest wear and tear."
    },
    {
        question: "Can I wash the gloves?",
        answer: "Yes, most of our gloves are machine washable. Check the label inside the glove for specific washing instructions."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times may vary depending on your location."
    }
];

const FaqItem = ({ question, answer }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={s.item}>
            <div className={s.wrapper} onClick={() => setIsOpen(!isOpen)}>
                <p className={s.text}>{question}</p>
                <svg style={{
                    transform: isOpen ? `rotate(180deg)` : "rotate(0deg)"
                }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.3335 7.50008L10.0002 14.1667L16.6668 7.50008L15.0002 5.83342L10.0002 10.8334L5.00016 5.83342L3.3335 7.50008Z" fill="black"/></svg>
            </div>
            <div
                className={s.descriptionWrapper}
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef?.current?.scrollHeight}px` : "0px"
                }}
            >
                <p className={s.description}>{answer}</p>
            </div>
        </div>
    );
};

const Faq = () => {
    const faqs = faq_list.map((item, i) => (
        <FaqItem key={i} {...item} />
    ));

    return (
        <section className={s.faq}>
            <div className="container">
                <h1 className={s.title}>FAQ's</h1>
                <div className={s.list}>{faqs}</div>
            </div>
        </section>
    );
};

export default Faq;