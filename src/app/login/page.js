"use client";

import { useState } from "react";
import { useForm } from 'react-hook-form';
import { authClient } from "@/lib/auth-client";
import {  toast, ToastContainer } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Mail, Lock, LogIn, ArrowRight, Book } from "lucide-react";
import { navigate } from "next/dist/client/components/segment-cache/navigation";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleLogin = async (signinData) => {
        setLoading(true);
        try {
            const { data, error } = await authClient.signIn.email({
                email: signinData.email,
                password: signinData.password,
                rememberMe: true,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message || "Invalid credentials");
            } else {
                toast.success("Welcome back! Logging you in...");
                navigate("/")
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
                <div className="hidden lg:flex flex-col justify-between p-16 bg-primary text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-10">
                        <Book size={400} />
                    </div>
                    
                    <div className="z-10">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-black mb-12">
                            <div className="bg-white p-2 rounded-xl text-primary">
                                <Book size={24} />
                            </div>
                            Mango Library
                        </Link>
                        <h2 className="text-5xl font-black mb-6 leading-tight">Welcome <br />Back Reader!</h2>
                        <p className="text-lg opacity-80 leading-relaxed max-w-md">
                            A reader lives a thousand lives before he dies... The man who never reads lives only one.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 opacity-60 text-sm relative z-10">
                        <span>Trusted by 50,000+ readers</span>
                        <div className="flex -space-x-3">
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-base-300"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-base-300"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-base-300"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-primary bg-base-300"></div>
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-16 flex flex-col justify-center">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black mb-2">Member Login</h1>
                        <p className="opacity-60 font-medium">Enter your details to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-5">
                        <fieldset>
                            <label className="label-text font-bold">Email</label>
                            <div className="relative">
                                <div className="absolute inset-0 left-4 flex items-center pointer-events-none opacity-40 z-10">
                                    <Mail size={18} />
                                </div>
                                <input 
                                    type="email" 
                                    {...register('email', { required: "Email is required" })}
                                    placeholder="your@email.com" 
                                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all"
                                    required
                                />
                            </div>
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </fieldset>

                        <fieldset>
                            <div className="flex justify-between items-center mb-1">
                                <label className="label-text font-bold">Password</label>
                                <a href="#" className="text-xs text-primary font-bold hover:underline">Forgot?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40 z-10">
                                    <Lock size={18} />
                                </div>
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    {...register('password', { required: "Password is required" })}
                                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all"
                                    required
                                />
                            </div>
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                        </fieldset>

                        <button 
                            type="submit" 
                            className={`btn btn-primary h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 mt-4 ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {!loading && <LogIn size={20} className="mr-2" />}
                            {loading ? "Verifying..." : "Login to Account"}
                        </button>
                    </form>

                    <div className="divider my-8 opacity-60">OR LOGIN WITH</div>

                    <button onClick={handleSocialLogin}className="btn btn-outline h-14 rounded-xl gap-3 hover:bg-primary/20 hover:text-base-content border-base-300 font-bold border-2">
                        <FcGoogle size={20}/>
                        Continue with Google
                    </button>

                    <p className="text-center mt-10 font-medium flex items-center justify-center gap-1">
                        <span className="opacity-60">Dont have an account?  </span>
                        <Link href="/register" className="text-primary font-bold hover:underline flex items-center gap-1">
                            Register Now <ArrowRight size={16} />
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
}
