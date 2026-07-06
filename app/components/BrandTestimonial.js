
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, Autoplay } from "swiper";

export default function BrandTestimonial() {
    const swiperRef2 = useRef(null);
    return (
        <section className="brand-testimonials-section overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 mt-20 mb-10 relative py-22">
                <div className="text-center mb-6">
                    <h2 className="font-poppins text-4xl text-black font-bold">TESTIMONIALS</h2>
                </div>
                {/* Custom Previous Button */}
                <div
                    className="absolute top-1/2 -left-10 transform -translate-y-1/2 bk-sil3 portfoilio-slider4-icon prev cursor-pointer"
                    onClick={() => swiperRef2.current?.slidePrev()}
                >
                    <FontAwesomeIcon icon={faArrowLeft} color="#000" width={18} />
                </div>
                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={true}
                    onSwiper={(swiper) => (swiperRef2.current = swiper)}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="brand-testimonials-card relative aos-init aos-animate" data-aos="flip-left">
                            <Link href={"#"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">Aside from issues on what I wanted…</h2>
                                <p className="mb-5 pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <span className="absolute bottom-0 mb-2">EvanF, Oct 16, 2024</span>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-right">
                            <Link href={"#"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">I came to Pine Book Writing to…</h2>
                                <p className="mb-5 pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <span className="absolute bottom-0 mb-2">Unique Spencer, Oct 16, 2024</span>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-left">
                            <Link href={"#"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">Highly recommended</h2>
                                <p className="mb-5 pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <span className="absolute bottom-0 mb-2">Mary Gunn, Sep 5, 2024</span>
                            </Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-up" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"#"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">Top notch from beginning to end</h2>
                                <p className="mb-5 pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <span className="absolute bottom-0 mb-2">BigKid Gamez, Sep 13, 2024</span>
                            </Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"#"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">US</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">This is John Bowman</h2>
                                <p className="mb-5 pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <span className="absolute bottom-0 mb-2">John Bowman, May 30, 2024</span>
                            </Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="brand-testimonials-card relative aos-animate" data-aos="flip-down" data-aos-delay="0" data-aos-duration="500">
                            <Link href={"#"} target="_blank">
                                <div className="flex justify-between items-center mb-5">
                                    <Image src={"brand-img/stars.png"} width={140} height={100}></Image>
                                    <div className="flex items-center relative left-2">
                                        <FontAwesomeIcon icon={faLocation} color="#fff" className="me-2" width={20} />
                                        <span className="text-white">CA</span>
                                    </div>
                                </div>
                                <h2 className="font-poppins text-xl font-bold pt-3">
                                    results for value.</h2>
                                <p className="mb-5 pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <span className="absolute bottom-0 mb-2">kyle climer, Jul 21, 2024</span>
                            </Link>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                {/* Custom Next Button */}
                <div
                    className="absolute top-1/2 -right-10 transform -translate-y-1/2 bk-sil3 portfoilio-slider4-icon next cursor-pointer"
                    onClick={() => swiperRef2.current?.slideNext()}
                >
                    <FontAwesomeIcon icon={faArrowRight} color="#000" width={18} />
                </div>
            </div>
        </section>
    );
}
