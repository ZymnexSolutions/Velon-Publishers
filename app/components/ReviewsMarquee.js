"use client";

import React from "react";

const row1 = [
    {
        name: "Melvin Shoales",
        text: "There is no other company on the face of the planet that’s going to put themselves in your shoes every step of the way and help you, as a published author, develop a backbone!",
        initial: "M",
    },
    {
        name: "Hikeem Wallace",
        text: "I had the most phenomenal and pleasurable experience. Every request I had was met with a delightful spirit and willingness to help me win the day.",
        initial: "H",
    },
    {
        name: "Deandre Jefferson",
        text: "Spines can take the idea you are passionate about and facilitate bringing it into reality. I highly recommend them to all aspiring authors.",
        initial: "D",
    },
    {
        name: "Glenn Diehll",
        text: "The team was supportive and patient as I worked through the process. Ready to tackle book #2!",
        initial: "G",
    },
];

const row2 = [
    {
        name: "Delores Coleman",
        text: "I HIGHLY recommend them to any author, whether you are new or not. Professional, patient and amazing to work with.",
        initial: "D",
    },
    {
        name: "Carlos Andromeda",
        text: "I sent my book to 17 publishers and got rejected every time. With Spines, I got my book published in less than 30 days!",
        initial: "C",
    },
    {
        name: "Joshua Holton",
        text: "I’ve paid over $3,500 for editors in the past. With Spines, I had complete creative control over how my book turned out.",
        initial: "J",
    },
    {
        name: "Valerie Price",
        text: "I’m a total beginner when it comes to computers, but I managed to design a professional-looking cover in just 3 minutes!",
        initial: "V",
    },
];

function ReviewCard({ item }) {
    return (
        <div className="review-card">
            <p className="review-text">{item.text}</p>
            <div className="review-footer">
                <div className="avatar">{item.initial}</div>
                <div>
                    <div className="author">Author {item.name}</div>
                    <div className="stars">★★★★★</div>
                </div>
            </div>
            <div className="quote-mark">❝</div>
        </div>
    );
}

export default function ReviewsMarquee() {
    return (
        <section className="reviews-section">
            <div className="heading-wrap">
                <h2 className="heading">
                    <span className="accent text-[#144d52]">2,800+ Authors</span> Have Published
                    <br />
                    Their Books With Rockwell
                </h2>
                <p className="subheading">
                    All without needing tech or design expertise.
                </p>
            </div>

            <div className="marquee-wrap">
                {/* Top row */}
                <marquee
                    behavior="scroll"
                    direction="left"
                    scrollAmount="4"
                    onMouseOver={(e) => e.currentTarget.stop()}
                    onMouseOut={(e) => e.currentTarget.start()}
                >
                    <div className="marquee-inner">
                        {row1.map((item, i) => (
                            <ReviewCard key={i} item={item} />
                        ))}
                    </div>
                </marquee>

                {/* Bottom row */}
                <marquee
                    behavior="scroll"
                    direction="right"
                    scrollAmount="4"
                    onMouseOver={(e) => e.currentTarget.stop()}
                    onMouseOut={(e) => e.currentTarget.start()}
                >
                    <div className="marquee-inner">
                        {row2.map((item, i) => (
                            <ReviewCard key={i} item={item} />
                        ))}
                    </div>
                </marquee>
            </div>

            <div className="cta-wrap">
                <button className="cta-btn bg-[#144d52] rounded-lg">Get Started ›</button>
            </div>
        </section>
    );
}
