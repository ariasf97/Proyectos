import '../../assets/styles/SlideContent.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ButtonAction } from '../Buttons/ButtonAction'
import bg from '../../assets/img/1920x-690-Banner-inferior-1.0.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

export function SlideContent() {
    return (
        <Swiper
            style={{
                '--swiper-navigation-color': '#f24f2f',
                '--swiper-pagination-color': '#2E85E4',
            }}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            speed={600}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Parallax, Pagination, Navigation]}
            className="mySwiper"
        >
            <div
                slot="container-start"
                className="parallax-bg"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
                data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                    ¿Sueñas con tener tu <strong>Propio auto?</strong>
                </div>
                <article className="text" data-swiper-parallax="-200">
                    <p>
                        Estamos aquí para ayudarte a alcanzar ese sueño. Ofrecemos tasas competitivas y
                        plazos flexibles para que puedas elegir el auto de tus sueños sin comprometer tu
                        presupuesto.
                    </p>
                    <ButtonAction />
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                    Slide 2
                </div>
                <div className="text" data-swiper-parallax="-200">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                    Slide 3
                </div>
                <div className="text" data-swiper-parallax="-200">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}