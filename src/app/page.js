import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedBooks from "@/components/FeaturedBooks";
import { CircleCheck, Globe, Layers, Shield, Zap } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
        <Banner></Banner>
        <Marquee></Marquee>
        <FeaturedBooks></FeaturedBooks>
        <section className="bg-base-200 py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mx-auto mb-16">
                    <h2 className="text-4xl font-black mb-6">Why Choose <span className="text-primary">Mango Library?</span></h2>
                    <p className="opacity-70 text-lg">We provide a premium reading experience with features designed for modern readers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: <Zap />, title: "Instant Access", desc: "Borrow and start reading immediately without any waiting time." },
                        { icon: <Shield />, title: "Secure Platform", desc: "Your data and reading history are protected with industry-standard security." },
                        { icon: <Globe />, title: "Universal Access", desc: "Read on any device, anywhere in the world, with our responsive web app." }
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-8 bg-base-100 rounded-3xl shadow-lg border border-base-200 hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-primary/10 p-5 rounded-2xl text-primary mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="opacity-70">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 md:px-8 pt-10">
            <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Layers size={300} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="flex justify-center flex-col">
                        <h2 className="text-4xl md:text-5xl font-black mb-8">Join Thousands of <span className="text-secondary">Readers</span> Globally.</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-black mb-1">10k+</div>
                                <div className="opacity-70">Books Available</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black mb-1">50k+</div>
                                <div className="opacity-70">Active Borrowers</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black mb-1">99%</div>
                                <div className="opacity-70">Happy Readers</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black mb-1">24/7</div>
                                <div className="opacity-70">Digital Support</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <CircleCheck className="text-secondary" />
                            Membership Benefits
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                <span>Unlimited book borrowing</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                <span>Access to exclusive tech journals</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                <span>Personalized reading recommendations</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                <span>Early access to new arrivals</span>
                            </li>
                        </ul>
                        <button className="btn btn-secondary w-full mt-10 rounded-2xl shadow-xl shadow-secondary/20">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
