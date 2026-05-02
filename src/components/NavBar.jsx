'use client'
import Link from 'next/link';
import { Book, LogIn, LogOut, Menu, User } from "lucide-react";
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
const NavBar = () => {
    const { data: session, isPending } = authClient.useSession();
    const pathName = usePathname();
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Books", href: "/all-books" },
        { name: "My Profile", href: "/profile" },
    ];
    const handleLogout = async () => {
        await authClient.signOut();
        window.location.href = "/login";
    };
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 md:px-8 sticky top-0 z-50 gap-2">
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
                {isPending ? (
                    <span className="loading loading-spinner loading-md"></span>
                ) : session ? (
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-sm font-semibold">{session.user.name}</span>
                            <span className="text-xs opacity-60">Member</span>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-primary">
                                <div className="w-10 rounded-full">
                                    <img src={session.user.image || "https://ui-avatars.com/api/?name=" + session.user.name} alt="profile" width={40} height={40} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><Link href="/profile"><User size={16} /> Profile</Link></li>
                                <li><button onClick={handleLogout} className="text-error"><LogOut size={16} /> Logout</button></li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <Link href="/login" className="btn btn-primary btn-md px-6 rounded-xl flex items-center gap-2">
                        <LogIn size={18} />
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;