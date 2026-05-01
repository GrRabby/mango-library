import { Book, Globe, Send, Camera, Code, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content pt-16 pb-8 border-t border-base-300">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
                        <div className="bg-primary p-2 rounded-xl text-white shadow-lg shadow-primary/20">
                            <Book size={24} />
                        </div>
                        <span className="text-primary">Mango</span>
                        <span>Library</span>
                    </Link>
                    <p className="opacity-70">
                        Digitizing the traditional library experience. Access thousands of books digitally with a seamless and modern platform designed for readers.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-6 text-primary">Quick Links</h3>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">Home</Link></li>
                        <li><Link href="/all-books" className="hover:text-primary transition-colors flex items-center gap-2">All Books</Link></li>
                        <li><Link href="/profile" className="hover:text-primary transition-colors flex items-center gap-2">My Profile</Link></li>
                        <li><Link href="/login" className="hover:text-primary transition-colors flex items-center gap-2">Login</Link></li>
                    </ul>
                </div>
                <div id="contact-us">
                    <h3 className="text-lg font-bold mb-6 text-primary">Contact Us</h3>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-3 opacity-80">
                            <Mail size={18} className="text-primary" />
                            <span>support@mangolib.com</span>
                        </li>
                        <li className="flex items-center gap-3 opacity-80">
                            <Phone size={18} className="text-primary" />
                            <span>+1 (234) 567-890</span>
                        </li>
                        <li className="flex items-center gap-3 opacity-80">
                            <MapPin size={18} className="text-primary" />
                            <span>123 Library Lane, Booktown</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-6 text-primary">Newsletter</h3>
                    <p className="text-sm opacity-70 mb-4">Subscribe to get updates on new arrivals and discounts.</p>
                    <div className="join w-full max-w-75">
                        <input className="input input-bordered join-item w-full bg-base-100" placeholder="Email" />
                        <button className="btn btn-primary join-item">Join</button>
                    </div>
                </div>
            </div>

            <div className="divider container mx-auto px-4 md:px-8 mt-12 opacity-50"></div>

            <div className="text-center opacity-60 text-sm mt-4">
                <p>&copy; {new Date().getFullYear()} Mango Library. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;