"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../../../public/next.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import path from "path";
import { useAuthStore } from "@/stores/authStore";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linksColor, setLinksColor] = useState("#fff");
    
    const { isLoggedIn, logout } = useAuthStore()
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/loginform");
    }

    useEffect(() => {
            setNavBg("#ecf0f3");
            setLinksColor(" #00008B");  
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* Incorporate lazy loading of Image */}
        <Link href="/">
          <Image src={Logo} alt="logo" width={60} height={60} />
        </Link>
        <div>
            {
                isLoggedIn ? (
                    <ul style={{ color: `${linksColor}` }} className="hidden md:flex">
                        <Link href="/">
                            <li className="text-sm ml-10 uppercase hover:border-b ">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="text-sm ml-10 uppercase hover:border-b ">Posts</li>
                        </Link>
                    </ul>
                ) : (
                    <ul style={{ color: `${linksColor}` }} className="hidden md:flex">
                        <li onClick={handleLogout} className="text-sm ml-10 uppercase hover:border-b ">
                            Logout
                        </li>
                    </ul>
                )
            }

          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {/* Mobile view */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* side drawer menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 bg-[#ecf0f3] ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={Logo} alt="logo" width={60} height={60} />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Welcome To Talosmart
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            {
                isLoggedIn ? (
                    <ul className="uppercase">
                        <Link href="/">
                            <li
                                onClick={() => setNav(false)}
                                className="py-4 text-sm ml-10 uppercase hover:border-b "
                            >
                                Home
                            </li>
                        </Link>
                        <Link href="/#about">
                            <li
                                onClick={() => setNav(false)}
                                className="py-4 text-sm ml-10 uppercase hover:border-b "
                            >
                                Posts
                            </li>
                        </Link>
                        <li
                            onClick={handleLogout}
                            className="py-4 text-sm ml-10 uppercase hover:border-b cursor-pointer"
                        >
                            Logout
                        </li>

                    </ul>
                ) : (
                    <ul 
                        style={{ color: `${linksColor}` }} 
                        className="uppercase"
                    >
                        
                    <Link href="/loginform">
                        <li
                            onClick={() => setNav(false)}
                            className="py-4 text-sm ml-10 uppercase hover:border-b cursor-pointer"
                        >
                            Login
                        </li>
                    </Link>
                    </ul>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
