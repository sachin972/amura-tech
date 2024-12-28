// "use client";

// // import Link from "next/link";
// // import Logo from "./logo";
// // import Dropdown from "../dropdown";
// // import { useEffect, useState } from "react";

// // export default function Header() {
// //     // const [isPopupOpen, setIsPopupOpen] = useState(false);

// //     // const openPopup = () => setIsPopupOpen(true);
// //     // const closePopup = () => setIsPopupOpen(false);
// //     const [isScrolled, setIsScrolled] = useState(false);

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             if (window.scrollY > 50) {
// //                 setIsScrolled(true);
// //             } else {
// //                 setIsScrolled(false);
// //             }
// //         };

// //         window.addEventListener("scroll", handleScroll);

// //         return () => {
// //             window.removeEventListener("scroll", handleScroll);
// //         };
// //     }, []);
// //     return (
// //         <header className="z-30 mt-2 w-full md:mt-2 sticky top-0">
// //             <div className="mx-auto px-4 sm:px-6">
// //                 <div
// //                     className={`relative flex h-20 items-center justify-between gap-3 rounded-2xl ${
// //                         isScrolled ? "bg-black" : "bg-transparent"
// //                     } px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm`}
// //                 >
// //                     {/* Site branding */}
// //                     <div className="flex flex-1 items-center">
// //                         <Logo height={115} width={115} />
// //                     </div>

// //                     {/* Desktop sign in links */}
// //                     <ul className="flex flex-1 items-center justify-end gap-3">
// //                         <li>
// //                             <Link
// //                                 href="/#"
// //                                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
// //                             >
// //                                 Home
// //                             </Link>
// //                         </li>
// //                         <li>
// //                             <Link
// //                                 href="/services"
// //                                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
// //                             >
// //                                 Industries & Services
// //                             </Link>
// //                         </li>
// //                         <li>
// //                             <Link
// //                                 href="/#"
// //                                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
// //                             >
// //                                 {/* <Dropdown options={["a", "b", "c"]} /> */}
// //                                 Careers
// //                             </Link>
// //                         </li>
// //                         <li>
// //                             <Link
// //                                 href="/contact"
// //                                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
// //                             >
// //                                 Contact Us
// //                             </Link>
// //                         </li>
// //                         <li>
// //                             <button
// //                                 className="btn-sm bg-gradient-to-t from-yellow-600/45 to-yellow-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
// //                                 // onClick={togglePopup}
// //                             >
// //                                 Enquire Now
// //                             </button>
// //                         </li>
// //                     </ul>
// //                 </div>
// //             </div>
// //         </header>
// //     );
// // }

// "use client";

// import Link from "next/link";
// import Logo from "./logo";
// import { useEffect, useState } from "react";

// export default function Header() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <header className="z-30 mt-2 w-full md:mt-2 sticky top-0">
//             <div className="mx-auto px-4 sm:px-6">
//                 <div
//                     className={`relative flex h-20 items-center justify-between gap-3 rounded-2xl ${
//                         isScrolled ? "bg-black" : "bg-transparent"
//                     } px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm`}
//                 >
//                     {/* Site branding */}
//                     <div className="flex flex-1 items-center">
//                         <Logo height={115} width={115} />
//                     </div>

//                     {/* Hamburger Menu Button for Mobile */}
//                     <button
//                         className="text-gray-300 text-2xl md:hidden focus:outline-none"
//                         onClick={toggleMenu}
//                     >
//                         ☰
//                     </button>

//                     {/* Navigation Links */}
//                     <ul
//                         className={`absolute md:static top-20 left-0 w-full md:w-auto md:flex items-center md:space-y-0 space-y-4 md:space-x-3 text-gray-300 bg-black md:bg-transparent p-6 md:p-0 transition-transform duration-300 rounded-2xl ${
//                             isMenuOpen ? "translate-y-0" : "hidden"
//                         }`}
//                     >
//                         <li>
//                             <Link
//                                 href="/#"
//                                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/services"
//                                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Industries & Services
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/#"
//                                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Careers
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/contact"
//                                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Contact Us
//                             </Link>
//                         </li>
//                         <li>
//                             <button
//                                 className="btn-sm bg-gradient-to-t from-yellow-600/45 to-yellow-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Enquire Now
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     );
// }

"use client";

import Link from "next/link";
import Logo from "./logo";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const togglePopup = () => {
        setIsPopupOpen((prev) => !prev);
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            {/* Header */}
            <header className="z-30 mt-2 w-full md:mt-2 sticky top-0">
                <div className="mx-auto px-4 sm:px-6">
                    <div
                        className={`relative flex h-20 items-center justify-between gap-3 rounded-2xl ${
                            isScrolled ? "bg-black" : "bg-transparent"
                        } px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm`}
                    >
                        {/* Logo */}
                        <div className="flex flex-1 items-center">
                            <Logo height={115} width={115} />
                        </div>

                        {/* Hamburger Menu Button for Mobile */}
                        <button
                            className="text-gray-300 text-2xl md:hidden focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? "✖" : "☰"}
                        </button>

                        {/* Navigation Links */}
                        <ul
                            className={`absolute md:static top-20 left-0 w-full md:w-auto md:flex items-center md:space-y-0 space-y-4 md:space-x-3 text-gray-300 bg-black md:bg-transparent p-6 md:p-0 rounded-2xl transition-all duration-500 ease-in-out ${
                                isMenuOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-10 pointer-events-none"
                            } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
                        >
                            {[
                                "Home",
                                "Industries & Services",
                                "Careers",
                                "Contact Us",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item
                                            .toLowerCase()
                                            .replace(/ & /g, "-")
                                            .replace(/ /g, "")}`}
                                        className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    className="btn-sm bg-gradient-to-t from-yellow-600/45 to-yellow-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                                    onClick={togglePopup}
                                >
                                    Enquire Now
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Popup */}
            {isPopupOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
                        <button
                            className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl focus:outline-none"
                            onClick={togglePopup}
                        >
                            ✖
                        </button>
                        <h2 className="text-xl font-semibold text-gray-100 mb-4">
                            Tell Us How can we reach you
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                    placeholder="Enter your contact number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                    placeholder="Enter your company name"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
