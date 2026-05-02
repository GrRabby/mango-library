"use client";

import { useState, useMemo } from "react";
import booksData from "../../../public/books.json";
import BookCard from "@/components/BookCard";
import { Search, X, BookOpen, Layers } from "lucide-react";

export default function AllBooks() {
    const [searchText, setsearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Story", "Tech", "Science"];
    const filteredBooks = useMemo(() => {
        let result = booksData;

        if (searchText) {
            result = result.filter(book => 
                book.title.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (selectedCategory !== "All") {
            result = result.filter(book => book.category === selectedCategory);
        }

        return result;
    }, [searchText, selectedCategory]);

    return (
        <div className="container mx-auto px-4 md:px-8 py-12 min-h-screen">
            <div className="flex flex-col gap-8 mb-16">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-black mb-4">Explore Our <span className="text-primary">Collection</span></h1>
                    <p className="opacity-70">Find the perfect book for your next reading session. Use the filters to narrow down your search.</p>
                </div>
                
                <div className="relative group max-w-3xl">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-primary z-10">
                        <Search size={22} />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search books by title..." 
                        className="input input-bordered w-full h-16 pl-14 pr-6 rounded-2xl shadow-xl shadow-primary/5 focus:shadow-primary/20 border-base-300 focus:border-primary transition-all text-lg"
                        value={searchText}
                        onChange={(e) => setsearchText(e.target.value)}
                    />
                    {searchText && (
                        <button 
                            onClick={() => setsearchText("")}
                            className="absolute inset-y-0 right-5 flex items-center text-error hover:scale-110 transition-transform"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-85 flex flex-col gap-8">
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Layers size={18} className="text-primary" />
                            Categories
                        </h3>
                        <div className="flex flex-col gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`btn justify-start gap-3 rounded-xl transition-all ${selectedCategory === category ? "btn-primary shadow-lg shadow-primary/20" : "btn-ghost hover:bg-primary/10"}`}>
                                    <div className={`w-2 h-2 rounded-full ${selectedCategory === category ? "bg-white" : "bg-primary"}`}></div>
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <h4 className="font-bold mb-2 text-primary">Need Help?</h4>
                        <p className="text-sm opacity-70 mb-4">Can&apos;t find what you&apos;re looking for? Contact our support team.</p>
                        <button className="btn btn-primary btn-sm btn-outline w-full rounded-lg">Contact Us</button>
                    </div>
                </div>
                <div className="grow">
                    <div className="flex justify-between items-center mb-8 w-full">
                        <span className="font-semibold opacity-60">
                            Showing {filteredBooks.length} books
                        </span>
                    </div>
                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
                            <BookOpen size={64} className="opacity-20 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">No books found</h3>
                            <p className="opacity-60">Try adjusting your search or category filters.</p>
                            <button 
                                onClick={() => {setsearchText(""); setSelectedCategory("All");}}
                                className="btn btn-primary mt-6 rounded-xl"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
