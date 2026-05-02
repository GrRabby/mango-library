"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";
import { User, Image as ImageIcon, Save, ArrowLeft, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";

export default function UpdateProfile() {
    const { data: session, isPending } = authClient.useSession();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
            defaultValues: {
                name: "",
                image: "",
            },
    });

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
        } else if (session) {
            setValue("name", session.user.name || "");
            setValue("image", session.user.image || "");
        }
    }, [session, isPending, router, setValue]);

    const handleUpdate = async (data) => {
        setLoading(true);
        try {
            const { error } = await authClient.updateUser({
                name: data.name,
                image: data.image,
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
        } catch {
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

                    <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col gap-6">
                        <div className="flex flex-col items-center mb-8">
                            <div className="avatar">
                                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                                    <img src={watch("image") || "https://ui-avatars.com/api/?name=" + watch("name")} alt="preview" />
                                </div>
                            </div>
                            <span className="mt-4 text-xs font-bold uppercase opacity-40">Profile Preview</span>
                        </div>

                        <fieldset>
                            <label className="label font-bold">Display Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40">
                                    <User size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    {...register('name', { required: "Name is required" })}
                                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all bg-base-200/50"
                                />
                            </div>
                            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                        </fieldset>

                        <div className="form-control">
                            <label className="label font-bold">Profile Photo URL</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-40">
                                    <ImageIcon size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    {...register('image', { required: "Image URL is required" })}
                                    className="input input-bordered w-full pl-12 h-14 rounded-xl focus:border-primary transition-all bg-base-200/50"
                                    placeholder="https://images.com/my-photo.jpg"
                                />
                            </div>
                            {errors.image && <p className="text-red-600">{errors.image.message}</p>}
                            <label className="label">
                                <span className="label-text-alt opacity-60">Paste a direct link to an image file (Live Preview)</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 mt-4 ${loading ? "pointer-events-none" : ""}`}
                        >
                            {loading ? <span className="loading loading-spinner text-primary-content"></span> : (
                                <>
                                    <Save size={20} />
                                    Update Information
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
