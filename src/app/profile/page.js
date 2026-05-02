"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { User, Mail, Calendar, Edit, Shield, BookOpen, Clock, Settings } from "lucide-react";

export default function Profile() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && session === null) {
            router.push("/login");
        }
    }, [session, isPending, router]);
    if (!session) {
        return null;
    }
    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }
    const { user } = session;

    return (
        <div className="container mx-auto px-4 md:px-5 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-black mb-10">My <span className="text-primary">Profile</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 flex flex-col gap-8">
                        <div className="bg-base-100 p-8 rounded-4xl shadow-2xl border border-base-200 text-center relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-32 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                            
                            <div className="z-10 flex flex-col items-center">
                                <div className="avatar mb-6">
                                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
                                        <img src={user.image || "https://ui-avatars.com/api/?name=" + user.name} alt="profile" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-black">{user.name}</h2>
                                <p className="opacity-60 text-sm font-medium mb-6">{user.email}</p>
                                
                                <div className="badge badge-primary badge-outline py-3 px-4 font-bold rounded-lg mb-8">
                                    Premium Member
                                </div>

                                <Link href="/profile/update" className="btn btn-primary w-full rounded-xl gap-2 shadow-lg shadow-primary/20">
                                    <Edit size={18} />
                                    Update Information
                                </Link>
                            </div>
                        </div>

                        <div className="bg-base-200 p-6 rounded-2xl border border-base-300 flex gap-1 flex-col">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Shield size={18} className="text-primary" />
                                Security
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between text-sm">
                                    <span className="opacity-60">Status</span>
                                    <span className="badge badge-success badge-sm">Verified</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="opacity-60">Auth Method</span>
                                    <span className="font-bold">Email/Pass</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="bg-base-100 p-10 rounded-4xl shadow-2xl border border-base-200">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-black">Account Details</h3>
                                <div className="p-2 bg-base-200 rounded-lg text-primary">
                                    <Settings size={20} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-center gap-4 p-4 bg-base-300/50 rounded-2xl">
                                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-50 uppercase font-black tracking-widest mb-1">Full Name</p>
                                        <p className="font-bold text-lg">{user.name}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-base-300/50 rounded-2xl w-full">
                                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-50 uppercase font-black tracking-widest mb-1">Email Address</p>
                                        <p className="font-bold text-lg truncate max-w-50">{user.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-base-300/50 rounded-2xl">
                                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-50 uppercase font-black tracking-widest mb-1">Member Since</p>
                                        <p className="font-bold text-lg">May 2024</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-base-300/50 rounded-2xl">
                                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-50 uppercase font-black tracking-widest mb-1">User Role</p>
                                        <p className="font-bold text-lg">Bibliophile</p>
                                    </div>
                                </div>
                            </div>

                            <div className="divider my-10 opacity-40"></div>

                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                <BookOpen size={24} className="text-primary" />
                                Borrowing Stats
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center">
                                    <div className="text-3xl font-black text-primary mb-1">12</div>
                                    <div className="text-xs opacity-60 font-bold uppercase">Borrowed</div>
                                </div>
                                <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10 text-center">
                                    <div className="text-3xl font-black text-secondary mb-1">08</div>
                                    <div className="text-xs opacity-60 font-bold uppercase">Returned</div>
                                </div>
                                <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10 text-center">
                                    <div className="text-3xl font-black text-accent mb-1">04</div>
                                    <div className="text-xs opacity-60 font-bold uppercase">Pending</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-base-100 p-10 rounded-4xl shadow-2xl border border-base-200">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                                <Clock size={24} className="text-primary" />
                                Recent Activity
                            </h3>
                            <div className="flex flex-col gap-4">
                                {[
                                    { action: "Borrowed 'The Silent Shadows'", date: "2 hours ago" },
                                    { action: "Updated profile information", date: "Yesterday" },
                                    { action: "Returned 'AI: The New Era'", date: "3 days ago" },
                                ].map((activity, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-base-200/30 rounded-xl">
                                        <span className="font-medium">{activity.action}</span>
                                        <span className="text-xs opacity-50">{activity.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
