import React from "react";
import Image from "next/image";

export default function About(props) {
    return (
        <>
            <div className="container mx-auto max-w-7xl overflow-hidden pt-0 md:pt-20 pb-10">
                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row px-10 md:px-0 py-10 md:py-0">
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className="font-poppins text-2xl md:text-4xl uppercase font-bold text-[#182A42]">
                            About Us<br></br>
                            Velon Book Publishing</h2>
                        {/* <FadeIn> */}
                        <p className="font-poppins text-xl pt-4">
                            Velon Book Publishing is a premium self-publishing platform dedicated to empowering authors worldwide. Our mission is simple: to help writers transform their ideas into professionally published books, while retaining full ownership, creative control, and maximum royalties.                        </p>

                        <h3 className="font-poppins text-lg md:text-xl font-bold pt-4 text-[#182A42]">The Meaning Behind “Velon”</h3>
                        <p className="font-poppins text-xl pt-4">The name Velon is derived from the Latin word “Vela”, meaning “sail”. Just as a sail harnesses the wind to move a ship forward, Velon Book Publishing empowers authors to navigate the vast world of publishing and take their stories to global readers. Our name embodies growth, direction, and the freedom to chart your own journey — just like every author deserves.</p>
                        <h3 className="font-poppins text-lg md:text-xl font-bold pt-4 text-[#182A42]">Our Philosophy</h3>
                        <p className="font-poppins text-xl pt-4">At Velon, we believe that every author’s work deserves precision, professionalism, and visibility. From meticulous editing and elegant design to worldwide distribution and strategic marketing, we handle every step with care, ensuring that your book is not just published, but positioned as a premium, credible product.</p>
                        {/* <p className="font-poppins text-xl mb-5">
                            {props.subdesctwo}
                        </p>
                        <p className="font-poppins text-xl mb-8">
                            {props.subdescthree}
                        </p> */}
                        {/* </FadeIn> */}
                    </div>
                    <div className="basis-1/2 abt-pic text-center flex justify-center md:justify-end">
                        <div>
                            {/* <Image src={"/brand-img/about-img-1.webp"} width={400} height={470}
                                loading="lazy"
                                alt="about img"
                                className="pt-12"
                                onLoad={() => setIsLoaded(true)}
                            /> */}
                            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full md:h-[420px] md:w-[420px]">
                                <Image
                                    src={"/images/SVG/medium-shot-girl-studying-with-dictionary-laptop-optimized.webp"}
                                    fill
                                    sizes="(max-width: 768px) 300px, 420px"
                                    loading="lazy"
                                    alt="about img"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-center items-center flex-col-reverse md:flex-row lg:flex-row px-10 md:px-0">
                    <div className="basis-1/2 abt-pic text-center justify-center md:justify-start mt-12 md:mt-12">
                        <FadeIn>
                            <Image src={"/brand-img/happy-professional-multiethnic-business-team.png"} width={400} height={470}
                                loading="lazy"
                                alt="about img"
                            />
                        </FadeIn>
                    </div>
                    <div className="basis-1/2 abt-txt m1-h p1 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <p className="font-poppins text-xl mb-8 pt-20">
                            {props.subdesctwo}
                        </p>
                        {isHomePage && (
                            <Link href="/about" className="brand-about-btn font-poppins">READ MORE</Link>
                        )}
                    </div>
                </div> */}
                {/* <p className="font-poppins mt-14 text-xl w-4/5 mx-auto text-center mb-6">{props.subdescthree}</p> */}
            </div>
        </>
    );
}
