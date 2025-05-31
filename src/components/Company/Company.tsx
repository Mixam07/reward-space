import s from "./Company.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { useRef } from "react";

const Company = () => {
    return (
        <section className={s.company}>
            <div className="container">
                <div className={s.list}>
                    <div className={s.item}>
                        <div className={s.wrapper}>
                            <p className={s.name}>Comfy</p>
                            <button className={s.add}>Перейти</button>
                        </div>
                        <Swiper
                            modules={[Scrollbar]}
                            navigation={false}
                            scrollbar={{ 
                                el: '.d1',
                                draggable: true
                            }}
                            breakpoints={{
                                100: {
                                    slidesPerView: 2,
                                    spaceBetween: 5
                                },
                                300: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                },
                                600: {
                                    slidesPerView: 4,
                                    spaceBetween: 15
                                },
                                900: {
                                    slidesPerView: 5,
                                    spaceBetween: 15
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 20
                                },
                            }}
                            className={s.products}
                        >
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                        </Swiper>
                        <div className="custom-scrollbar d1" />
                    </div>
                    <div className={s.item}>
                        <div className={s.wrapper}>
                            <p className={s.name}>Comfy</p>
                            <button className={s.add}>Перейти</button>
                        </div>
                        <Swiper
                            modules={[Scrollbar]}
                            navigation={false}
                            scrollbar={{ 
                                el: '.d2',
                                draggable: true
                            }}
                            breakpoints={{
                                100: {
                                    slidesPerView: 2,
                                    spaceBetween: 5
                                },
                                300: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                },
                                600: {
                                    slidesPerView: 4,
                                    spaceBetween: 15
                                },
                                900: {
                                    slidesPerView: 5,
                                    spaceBetween: 15
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 20
                                },
                            }}
                            className={s.products}
                        >
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                        </Swiper>
                        <div className="custom-scrollbar d2" />
                    </div>
                    <div className={s.item}>
                        <div className={s.wrapper}>
                            <p className={s.name}>Comfy</p>
                            <button className={s.add}>Перейти</button>
                        </div>
                        <Swiper
                            modules={[Scrollbar]}
                            navigation={false}
                            scrollbar={{ 
                                el: '.d3',
                                draggable: true
                            }}
                            breakpoints={{
                                100: {
                                    slidesPerView: 2,
                                    spaceBetween: 5
                                },
                                300: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                },
                                600: {
                                    slidesPerView: 4,
                                    spaceBetween: 15
                                },
                                900: {
                                    slidesPerView: 5,
                                    spaceBetween: 15
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 20
                                },
                            }}
                            className={s.products}
                        >
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                            <SwiperSlide className={s.product}>
                                <div className={s.photo}>
                                    <img src="https://content1.rozetka.com.ua/goods/images/preview/550313784.jpg" alt="photo" />
                                </div>
                                <p className={s.title}>Кабель живлення 70mai UP02 для дзеркала реєстратора Dash..</p>
                                <p className={s.price}>750 к</p>
                            </SwiperSlide>
                        </Swiper>
                        <div className="custom-scrollbar d3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Company;