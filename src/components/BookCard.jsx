import Link from "next/link";
import { User, BookOpen } from "lucide-react";
import Image from "next/image";

const BookCard = ({ book }) => {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-base-200">
            <figure className="relative overflow-hidden h-64">
                <Image 
                    src={book.image_url} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={300}
                    height={200}
                />
                <div className="absolute top-4 right-4 badge badge-primary font-bold shadow-lg">
                    {book.category}
                </div>
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                    {book.title}
                </h2>
                <div className="flex items-center gap-2 text-sm opacity-70 mb-2">
                    <User size={14} />
                    <span>{book.author}</span>
                </div>
                <p className="text-sm opacity-80 line-clamp-2 min-h-10">
                    {book.description}
                </p>
                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold">
                        <div className={`w-2 h-2 rounded-full ${book.available_quantity > 0 ? "bg-success" : "bg-error"}`}></div>
                        <span>{book.available_quantity} copies left </span>
                    </div>
                    <Link href={`/book/${book.id}`} className="btn btn-primary btn-sm rounded-lg flex items-center gap-2">
                        <BookOpen size={14} />
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
