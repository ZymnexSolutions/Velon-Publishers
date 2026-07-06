"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
// import Fab from "@mui/material/Fab";
import Image from "next/image";

// Dynamic imports so Next.js does not SSR them
const StackedCarousel = dynamic(
    () =>
        import("react-stacked-center-carousel").then(
            (mod) => mod.StackedCarousel
        ),
    { ssr: false }
);

const ResponsiveContainer = dynamic(
    () =>
        import("react-stacked-center-carousel").then(
            (mod) => mod.ResponsiveContainer
        ),
    { ssr: false }
);

export const data = [
    { cover: "/images/book-1.webp" },
    { cover: "/images/book-2.webp" },
    { cover: "/images/book-4.webp" },
    { cover: "/images/book-1.webp" },
    { cover: "/images/book-2.webp" },
    { cover: "/images/book-3.webp" },
    { cover: "/images/book-1.webp" },
    { cover: "/images/book-2.webp" },
    { cover: "/images/book-3.webp" },
    { cover: "/images/book-1.webp" },
];

// Card slide component
export const Card = React.memo(function Card(props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];

    return (
        <div
            style={{ width: 300, height: 400, position: "relative" }}
            className="my-slide-component"
        >
            <Image
                src={cover}
                alt="cover"
                fill
                style={{ objectFit: "fit" }}
                sizes="30vw"
            />
        </div>
    );
});

// SVG ICONS
const ArrowBackSVG = () => (
    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
);

const ArrowForwardSVG = () => (
    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
);

export default function ResponsiveCarousel() {
    const ref = useRef(null);

    return (
        <>
            <div style={{ width: "100%", position: "relative" }} className="mt-14 max-w-7xl mx-auto mb-14">
                <h1 class="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl text-center mb-5">Your Book Deserves a Global Audience
                </h1>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => {
                        let currentVisibleSlide = 5;
                        if (parentWidth <= 1440) currentVisibleSlide = 5;
                        if (parentWidth <= 1080) currentVisibleSlide = 1;

                        return (
                            <StackedCarousel
                                ref={carouselRef}
                                slideComponent={Card}
                                slideWidth={parentWidth < 500 ? parentWidth - 40 : 400}
                                carouselWidth={parentWidth}
                                data={data}
                                currentVisibleSlide={currentVisibleSlide}
                                maxVisibleSlide={5}
                                useGrabCursor
                            />
                        );
                    }}
                />

                {/* Left Arrow */}
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: 10,
                        zIndex: 10,
                        background: "#333",
                    }}
                    size="small"
                    onClick={() => ref.current?.goBack()}
                >
                    <ArrowBackSVG />
                </div>

                {/* Right Arrow */}
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        right: 10,
                        zIndex: 10,
                        background: "#333",
                    }}
                    size="small"
                    onClick={() => ref.current?.goNext(6)}
                >
                    <ArrowForwardSVG />
                </div>
            </div>
        </>
    );
}
