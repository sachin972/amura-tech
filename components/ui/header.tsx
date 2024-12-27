"use client";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "../dropdown";
import { useEffect, useState } from "react";

export default function Header() {
    // const [isPopupOpen, setIsPopupOpen] = useState(false);

    // const openPopup = () => setIsPopupOpen(true);
    // const closePopup = () => setIsPopupOpen(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className="z-30 mt-2 w-full md:mt-2 sticky top-0">
            <div className="mx-auto px-4 sm:px-6">
                <div
                    className={`relative flex h-20 items-center justify-between gap-3 rounded-2xl ${
                        isScrolled ? "bg-black" : "bg-transparent"
                    } px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm`}
                >
                    {/* Site branding */}
                    <div className="flex flex-1 items-center">
                        <Logo height={115} width={115} />
                    </div>

                    {/* Desktop sign in links */}
                    <ul className="flex flex-1 items-center justify-end gap-3">
                        <li>
                            <Link
                                href="/#"
                                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                            >
                                Industries & Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#"
                                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                            >
                                {/* <Dropdown options={["a", "b", "c"]} /> */}
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <button
                                className="btn-sm bg-gradient-to-t from-yellow-600/45 to-yellow-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                                // onClick={togglePopup}
                            >
                                Enquire Now
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
