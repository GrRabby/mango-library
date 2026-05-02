import { ArrowRight} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import BookCard from './BookCard';
import booksData from "../../public/books.json";
const FeaturedBooks = () => {
    const featuredBooks = booksData.slice(0, 4);
    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Handpicked</span>
                    <h2 className="text-4xl font-bold mt-2">Featured Books</h2>
                </div>
                <Link href="/all-books" className="btn btn-ghost text-primary hidden sm:flex items-center gap-2">
                    View All <ArrowRight size={18} />
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedBooks;