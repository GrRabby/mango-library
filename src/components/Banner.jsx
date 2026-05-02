"use client";

import Link from "next/link";
import { ArrowRight} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Banner() {
    const bannerSlides = [
        {
            title: "Find Your Next Read with Mango.",
            desc: "Explore a vast collection of books, from gripping stories to cutting-edge tech guides.",
            img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
        },
        {
            title: "Master the Future of Technology.",
            desc: "Deep dive into our extensive Tech collection featuring AI, Web3, and Quantum Computing.",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
        },
        {
            title: "Explore the Frontiers of Science.",
            desc: "From the cosmic wonders of the universe to the genetic blueprint of life.",
            img: "https://www.frostscience.org/wp-content/uploads/2024/02/Frost-Science-Journey-To-Space-2024-Exhibition-Page-Image--e1714676548156-1600x500.jpg"
        }
    ];
    return (
        <div className="relative h-[80vh] overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                className="h-full w-full"
            >
                {bannerSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full flex items-center bg-base-200">
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-linear-to-r from-base-100 via-base-100/90 to-transparent z-10"></div>
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="container mx-auto px-4 md:px-8 z-20">
                                <div className="max-w-2xl">
                                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                                        {slide.title.split(' ').map((word, index) => (
                                            <span key={index} className={word === "Mango." || word === "Technology." || word === "Science." ? "text-primary" : ""}>
                                                {word}{' '}
                                            </span>
                                        ))}
                                    </h1>
                                    <p className="text-xl md:text-2xl opacity-80 mb-12 font-medium">
                                        {slide.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-6">
                                        <Link href="/all-books" className="btn btn-primary btn-lg px-10 h-16 rounded-2xl shadow-2xl shadow-primary/50 group text-lg">
                                            Browse Now
                                            <ArrowRight/>
                                        </Link>
                                        <a href="#featured" className="btn font-medium btn-soft opacity-80 btn-lg px-10 h-16 rounded-2xl shadow-2xl shadow-primary/30 text-lg border-2 border-primary/50 hover:bg-primary/10 hover:text-primary">
                                            See Featured
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
