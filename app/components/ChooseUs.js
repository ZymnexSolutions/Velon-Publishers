import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ChooseUs() {
    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };

    return (
        <>
            <section className="overflow-hidden" >
                <div className="brand-choose-us-section ms-auto relative left-0 md:left-52 px-12 md:px-16 mt-20 mb-8 " >
                    <div className="flex items-center flex-col md:flex-row" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500">
                        <div className="basis-1/3 brand-choose-us-vector">
                            {/* <Image src={"/brand-img/why-choose-us-img.webp"} width={350} height={200} className="brand-choose-us-img"></Image> */}
                            <div className="relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-full md:h-[420px] md:w-[420px]">
                                <Image
                                    src={"/images/new-img/choose-us.webp"}
                                    fill
                                    sizes="(max-width: 768px) 280px, 420px"
                                    loading="lazy"
                                    alt="about img"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="basis-1/3 md:ml-20 py-8">
                            <h2 className="text-white font-poppins text-3xl md:text-4xl uppercase mt-20 md:mt-0 font-bold" data-aos="zoom-in-left" data-aos-delay="100">Why Choose Us</h2>
                            <p className="text-white mt-2">Because we don’t just publish books, we build authors. In a world full of shortcuts, hidden contracts, and false promises, we stand for clarity, control, and results. You keep 100% ownership, maximum royalties, and full creative freedom, while our expert team handles everything from editing and design to global distribution and marketing. No confusing processes. No fine print. Just real guidance, real support, and real outcomes. We treat your book like a brand, your words like an asset, and your success like our responsibility. If you are serious about publishing professionally, not just uploading a file, this is where your journey begins.</p>
                            {/* <div className="flex gap-10 mt-6">
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.webp"} className="icon" width={13} height={13} />Affordable Price</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.webp"} className="icon" width={13} height={13} />Tailored Creativity</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.webp"} className="icon" width={13} height={13} />Expert Craftsmanship</li>
                                </ul>
                                <ul>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.webp"} className="icon" width={13} height={13} />Engaging Narratives</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm mb-2"><Image src={"/images/check-mark.webp"} className="icon" width={13} height={13} />On-Time Deliveries</li>
                                    <li className="font-poppins flex items-center gap-3 text-sm"><Image src={"/images/check-mark.webp"} className="icon" width={13} height={13} />Pristine Publication</li>
                                </ul>
                            </div> */}
                            {/* <BrandAudioPlayer src="/brand-img/why-choose-us-voice.wav" /> */}
                            <button className="brand-nav-btn-white bg-white shadow-xl md:mt-10 mt-4 cursor-pointer ml-2 md:ml-3" onClick={handleOpenChat}><Link href={'javascript:;'}>Speak to our Consultant</Link></button>
                            <button className="brand-nav-btn-white bg-white shadow-xl md:mt-10 mt-4 cursor-pointer ml-2 md:ml-3"><Link href='tel:(866) 841-7469'>Call Now</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
