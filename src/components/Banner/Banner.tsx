import s from "./Banner.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const banners_list = [
    "https://content1.rozetka.com.ua/banner_main/images_mobile_ua/medium/555364055.jpg",
    "https://content2.rozetka.com.ua/banner_main/images_mobile_ua/medium/551536485.jpg",
    "https://content1.rozetka.com.ua/banner_main/images_mobile_ua/medium/555366744.jpg",
]

const Banner = () => {
    const banners = banners_list.map((item: string, i: number) => {
        return (
            <SwiperSlide key={i+1} className={s.item}>
                <img src={item} alt="banner" />
            </SwiperSlide>
        )
    });
    return (
        <section className={s.banner}>
            <div className="container">
                <div className={s.wrapper}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={false}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className={s.list}
                    >
                        {banners}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Banner;