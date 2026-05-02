"use client";

import { useParams, useRouter } from "next/navigation";
import booksData from "../../../../public/books.json";
import { authClient } from "@/lib/auth-client";
import { toast } from 'sonner';
import { BookOpen, User, Info, ArrowLeft, BookmarkPlus, CircleCheck } from "lucide-react";
import Link from "next/link";
import { useEffect} from "react";
import Image from "next/image";

export default function BookDetails() {
    const { id } = useParams();
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const book = booksData.find(book => book.id === id);
    useEffect(() => {
        if (!isPending && session === null) {
            router.replace("/login");
        }
    }, [session, isPending, router]);
    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-xl text-primary"></span>
            </div>
        );
    }
    if (!book) {
        return (
            <div className="flex flex-col items-center justify-center py-50 bg-base-100 border-2 border-dashed border-base-300">
                <BookOpen size={64} className="opacity-20 mb-4" />
                <h3 className="text-2xl font-bold mb-2">No books found</h3>
            </div>
        )
    }

    const handleBorrow = () => {
        toast.success(`Success! You have borrowed "${book.title}". Enjoy your read!`, {
            icon: <CircleCheck className="text-success" />,
        });
    };
    const handleWishlist = () => {
        toast.success(`Success! "${book.title}" has been added to your wishlist!`, {
            icon: <CircleCheck className="text-success" />,
        });
    };
    return (
        <div className="container mx-auto px-4 md:px-8 py-12">
            <Link href="/all-books" className="btn btn-ghost mb-8 gap-2 hover:bg-primary/10 rounded-xl">
                <ArrowLeft size={18} /> Back to Books
            </Link>

            <div className="bg-base-100 rounded-[2.5rem] shadow-2xl border border-base-200 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 p-8 lg:p-12 bg-base-200 flex items-center justify-center">
                        <div className="relative w-full">
                            <Image 
                                src={book.image_url} 
                                alt={book.title} 
                                width={300}
                                height={400}
                                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 hover:rotate-y-12"
                                style={{ boxShadow: '25px 25px 50px rgba(0,0,0,0.3)' }}
                            />
                            <div className="absolute top-6 left-6 badge badge-primary badge-lg py-4 font-bold shadow-xl">
                                {book.category}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/5 p-8 lg:p-16 flex flex-col gap-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{book.title}</h1>
                            <div className="flex items-center gap-3 text-lg opacity-70">
                                <User className="text-primary" size={20} />
                                <span className="font-semibold">By {book.author}</span>
                            </div>
                        </div>

                        <div className="divider opacity-50"></div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Info className="text-primary" size={20} />
                                About this book
                            </h3>
                            <p className="text-lg opacity-80 leading-relaxed">
                                {book.description}
                            </p>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex items-center justify-between">
                            <div>
                                <div className="text-sm opacity-60 uppercase tracking-widest font-bold mb-1">Availability</div>
                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${book.available_quantity > 0 ? "bg-success animate-pulse" : "bg-error"}`}></div>
                                    <span className="text-xl font-black">{book.available_quantity} copies left</span>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <BookOpen size={40} className="text-primary opacity-20" />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <button 
                                onClick={handleBorrow}
                                className="btn btn-primary btn-lg grow sm:grow-0 px-12 rounded-2xl shadow-xl shadow-primary/30 gap-3"
                                disabled={book.available_quantity === 0}
                            >
                                <BookmarkPlus size={20} />
                                Borrow This Book
                            </button>
                            <button onClick={handleWishlist} className="btn btn-outline btn-lg rounded-2xl">
                                Add to Wishlist
                            </button>
                        </div>
                        
                        <p className="text-xs opacity-50 text-center sm:text-left italic">
                            * By borrowing this book, you agree to our digital library terms and conditions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-primary/5 p-8 rounded-3xl">
                    <h4 className="font-bold mb-2">Instant Delivery</h4>
                    <p className="text-sm opacity-70">Get immediate access to the digital copy once borrowed.</p>
                </div>
                <div className="bg-primary/5 p-8 rounded-3xl">
                    <h4 className="font-bold mb-2">14-Day Period</h4>
                    <p className="text-sm opacity-70">You can keep this title for up to 14 days before auto-return.</p>
                </div>
                <div className="bg-primary/5 p-8 rounded-3xl">
                    <h4 className="font-bold mb-2">Offline Reading</h4>
                    <p className="text-sm opacity-70">Download and read even without an active internet connection.</p>
                </div>
            </div>
        </div>
    );
}
