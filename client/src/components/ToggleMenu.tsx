'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

/**
 * Header component.
 * 
 * @returns {JSX.Element} Header component.
 */
export default function Header () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                    <Link href="/services" className="hover:underline font-bold p-2">Services</Link>
                    <Link href="/contact" className="hover:underline font-bold p-2">Contact</Link>
                </nav>
            </div>
            {isOpen && (
                <nav className="bg-gray-800 lg:hidden">
                    <ul className="flex flex-col items-center space-y-2 p-4">
                        <li><Link href="/" className="hover:underline font-bold block p-2">Home</Link></li>
                        <li><Link href="/about" className="hover:underline font-bold block p-2">About</Link></li>
                        <li><Link href="/users" className="hover:underline font-bold block p-2">Users</Link></li>
                        <li><Link href="/artists" className="hover:underline font-bold block p-2">Artists</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};