import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandPrimaryHeader(props) {

    return (
        <>
            <section className="brand-primary-header-bg py-12">
                <div className="container max-w-screen-xl mx-auto px-5">
                    <div className="flex flex-col md:flex-row items-center gap-10">

                        {/* LEFT: TEXT */}
                        <div className="w-full md:w-1/2 text-black">
                            <h3 className="text-sm md:text-sm font-poppins pt-4 font-bold">
                                {props.pretitle}
                            </h3>
                            <h1 className="text-3xl md:text-4xl pt-2 font-poppins font-bold text-[#144d52]">
                                {props.title}
                            </h1>

                            <p className="text-lg md:text-xl pt-4">
                                {props.desc}
                            </p>
                        </div>

                        {/* RIGHT: IMAGE */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <img
                                src={props.image}
                                alt="Header visual"
                                className="w-full max-w-md rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}