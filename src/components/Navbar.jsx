"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <nav className="lg:px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.png"
            className="x"
            alt="Streamverse Logo"
            width={40}
            height={40}
          />
          <span className="self-center text-white hover:text-gray-300 text-xl whitespace-nowrap">
            StreamVerse
          </span>
        </Link>

        <button
          onClick={toggleDropdown}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-purple-500 rounded-lg lg:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isDropdownOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full lg:block lg:w-auto ${
            isDropdownOpen ? "block" : "hidden"
          }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/movies"
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/feed"
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                Feed
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <button
                onClick={handleSignOut}
                className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
