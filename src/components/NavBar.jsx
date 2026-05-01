'use client'
import Link from 'next/link';
import { Book, LogIn, Menu } from "lucide-react";
import { usePathname } from 'next/navigation';
const NavBar = () => {
    const pathName = usePathname();
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Books", href: "/all-books" },
        { name: "My Profile", href: "/profile" },
    ];
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 md:px-8 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Menu size={24} />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={pathName === link.href ? "text-primary font-bold" : ""}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-lg text-white">
                        <Book size={20} />
                    </div>
                    <span className="text-primary">Mango</span>
                    <span>Library</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={`px-4 py-2 rounded-lg transition-all duration-200 ${pathName === link.href ? "bg-primary text-white" : "hover:bg-primary/10"}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link href="/login" className="btn btn-primary btn-md px-6 rounded-xl flex items-center gap-2">
                    <LogIn size={18} />
                    Login
                </Link>
            </div>
        </div>
    );
};

export default NavBar;