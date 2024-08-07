'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

/**
 * Header component.
 * 
 * @returns {JSX.Element} Header component.
 */
export default function Header () {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when the path changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className="bg-gradient-to-r from-splash to-razzmatazz text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">TikTok Concerts</h1>
                <div className="text-2xl lg:hidden" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <nav className={`hidden lg:flex space-x-4`}>
                    <Link href="/" className="hover:underline font-bold p-2">Home</Link>
                    <Link href="/about" className="hover:underline font-bold p-2">About</Link>
                    <Link href="/users" className="hover:underline font-bold p-2">Users</Link>
                    <Link href="/artists" className="hover:underline font-bold p-2">Artists</Link>
                    <Link target="_blank" href="https://github.com/sirus-the-beaver/tiktok-concerts" className="hover:underline font-bold p-2">GitHub Repo</Link>
                </nav>
            </div>
            {isOpen && (
                <nav className="bg-gray-800 lg:hidden">
                    <ul className="flex flex-col items-center space-y-2 p-4">
                        <li><Link href="/" className="hover:underline font-bold block p-2">Home</Link></li>
                        <li><Link href="/about" className="hover:underline font-bold block p-2">About</Link></li>
                        <li><Link href="/users" className="hover:underline font-bold block p-2">Users</Link></li>
                        <li><Link href="/artists" className="hover:underline font-bold block p-2">Artists</Link></li>
                        <li><Link target="_blank" href="https://github.com/sirus-the-beaver/tiktok-concerts" className="hover:underline font-bold block p-2">GitHub Repo</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};