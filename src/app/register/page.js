"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from 'sonner';
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { User, Mail, Lock, Image as ImageIcon, UserPlus, Globe, ArrowRight, Book } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
    const handleRegister = async (data) => {
        setLoading(true);
        try {
            const { error } = await authClient.signUp.email({
                email: data.email,
                password: data.password,
                name: data.name,
                image: data.photoUrl,
            });

            if (error) {
                toast.error(error.message || "Registration failed");
            } else {
                toast.success("Account created! Please login.");
                router.push("/login");
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
            
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (err) {
            toast.error("Social login failed");
        }
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center p-4 bg-base-200">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden border border-base-200">
                <div className="p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black mb-2">Create Account</h1>
                        <p className="opacity-60 font-medium">Join our community of passionate readers</p>
                    </div>

                    <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <fieldset>
                                <label className="label font-bold">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40 z-10">
                                        <User size={18} />
                                    </div>
                                    <input 
                                        type="text" 
                                        {...register("name", { required: "Name is required" })}
                                        placeholder="John Doe" 
                                        className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all"
                                    />
                                </div>
                                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                            </fieldset>
                            <fieldset>
                                <label className="label font-bold">Photo URL</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40 z-10">
                                        <ImageIcon size={18} />
                                    </div>
                                    <input 
                                        type="text" 
                                        {...register("photoUrl", { required: "Photo URL is required" })}
                                        placeholder="https://image.link" 
                                        className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all"
                                    />
                                </div>
                                {errors.photoUrl && <p className="text-red-600">{errors.photoUrl.message}</p>}
                            </fieldset>
                        </div>

                        <fieldset>
                            <label className="label font-bold">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40 z-10">
                                    <Mail size={18} />
                                </div>
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all"
                                    {...register("email", { required: "Email is required" })}
                                />
                            </div>
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </fieldset>

                        <fieldset>
                            <label className="label font-bold">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40 z-10">
                                    <Lock size={18} />
                                </div>
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all"
                                    {...register("password", { required: "Password is required" })}
                                />
                            </div>
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                        </fieldset>

                        <button 
                            type="submit" 
                            className={`btn btn-primary h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 mt-4 ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {!loading && <UserPlus size={20} className="mr-2" />}
                            {loading ? "Creating Account..." : "Create Free Account"}
                        </button>
                    </form>

                    <div className="divider my-8 opacity-60">OR REGISTER WITH</div>

                    <button 
                        onClick={handleSocialLogin}
                        className="btn btn-outline h-14 rounded-xl gap-3 hover:bg-base-200 hover:text-base-content border-base-300"
                    >
                        <FcGoogle size={20} />
                        Register with Google
                    </button>

                    <p className="text-center mt-10 font-medium flex items-center justify-center gap-1">
                        <span className="opacity-60">Already have an account? </span>
                        <Link href="/login" className="text-primary font-bold hover:underline flex items-center gap-1">
                            Login Here <ArrowRight size={16} />
                        </Link>
                    </p>
                </div>

                <div className="hidden lg:flex flex-col justify-between p-16 bg-primary text-white relative overflow-hidden order-1 lg:order-2">
                    <div className="absolute top-0 left-0 p-20 opacity-10">
                        <Book size={400} />
                    </div>
                    
                    <div className="z-10">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-black mb-12">
                            <div className="bg-white p-2 rounded-xl text-primary">
                                <Book size={24} />
                            </div>
                            Mango Library
                        </Link>
                        <h2 className="text-5xl font-black mb-6 leading-tight">Start Your <br />Journey Today</h2>
                        <p className="text-lg opacity-80 leading-relaxed max-w-md">
                            Knowledge is power. Information is liberating. Education is the premise of progress.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 opacity-60 text-sm relative z-10">
                        <div className="flex -space-x-3">
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-base-300"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-base-300"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-base-300"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-base-300"></div>
                        </div>
                        <span>Join 50,000+ knowledge seekers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
