"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";
import { User, Image as ImageIcon, Save, ArrowLeft, ShieldCheck } from "lucide-react";

export default function UpdateProfile() {
    const { data: session, isPending } = authClient.useSession();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
        } else if (session) {
            setName(session.user.name || "");
            setImage(session.user.image || "");
        }
    }, [session, isPending, router]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { error } = await authClient.updateUser({
                name,
                image,
            });

            if (error) {
                toast.error(error.message || "Update failed");
            } else {
                toast.success("Profile updated successfully!", {
                    icon: <ShieldCheck className="text-success" />,
                });
                router.push("/profile");
                router.refresh();
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    if (isPending || !session) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-8 py-12">
            <div className="max-w-2xl mx-auto">
                <Link href="/profile" className="btn btn-ghost mb-8 gap-2 hover:bg-primary/10 rounded-xl">
                    <ArrowLeft size={18} /> Back to Profile
                </Link>

                <div className="bg-base-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-base-200">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black mb-2">Update <span className="text-primary">Information</span></h1>
                        <p className="opacity-60 font-medium">Keep your profile fresh and up to date</p>
                    </div>

                    <form onSubmit={handleUpdate} className="flex flex-col gap-6">
                        <div className="flex flex-col items-center mb-8">
                            <div className="avatar">
                                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                                    <img src={image || "https://ui-avatars.com/api/?name=" + name} alt="preview" />
                                </div>
                            </div>
                            <span className="mt-4 text-xs font-bold uppercase opacity-40">Profile Preview</span>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Display Name</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40">
                                    <User size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all bg-base-200/50"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Profile Photo URL</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40">
                                    <ImageIcon size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all bg-base-200/50"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="https://images.com/my-photo.jpg"
                                />
                            </div>
                            <label className="label">
                                <span className="label-text-alt opacity-60">Paste a direct link to an image file</span>
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            className={`btn btn-primary h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 mt-4 ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {!loading && <Save size={20} className="mr-2" />}
                            {loading ? "Saving Changes..." : "Update Information"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
