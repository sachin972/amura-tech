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

// "use client";

// import Link from "next/link";
import Logo from "./logo";
// import Enquiry from "../../images/enquiry.webp";
// import VideoThumb from "../../images/hero-image-01.webp";
import React from "react";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
        setIsMenuOpen(!isMenuOpen);
    };

    const togglePopup = () => {
        setIsPopupOpen((prev) => !prev);
        setIsMenuOpen((prev) => !prev);
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [company, setCompany] = useState("");

    const handleNameChange = (e) => {
        const { id, value } = e.target;
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        const { id, value } = e.target;
        setEmail(e.target.value);
        setErrors({
            ...errors,
            email: validateEmail(value) ? "" : "Invalid email address.",
        });
    };
    const handleContactChange = (e) => {
        const { id, value } = e.target;
        setContact(e.target.value);
        setErrors({
            ...errors,
            contactNumber: validateContactNumber(value)
                ? ""
                : "Invalid contact number.",
        });
    };
    const handleCompanyChange = (e) => {
        const { id, value } = e.target;
        setCompany(e.target.value);
    };

    const [errors, setErrors] = useState({
        email: "",
        contactNumber: "",
    });

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateContactNumber = (number) => /^\+?[0-9]{9,15}$/.test(number);

    const handleSubmit = (e) => {
        e.preventDefault();

        // const { name, email, contact, message } = formData;

        if (!name || !email || !contact || !company) {
            toast.error("Please fill in all fields before submitting.");
            return;
        }

        emailjs
            .send(
                "service_ktdvgr8", // Replace with your EmailJS service ID
                "template_d7kmy5u", // Replace with your EmailJS template ID
                {
                    name: name,
                    email: email,
                    contact: contact,
                    company: company,
                },
                "bI4RIzSRyg4184cPm" // Replace with your EmailJS public key
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response);
                    toast.success("Your enquiry has been sent successfully!");
                },
                (error) => {
                    console.error("Error sending email:", error);
                    toast.success("Failed to send!");
                }
            );

        // setFormData({ name: "", email: "", contactNumber: "", message: "" });
        setName("");
        setEmail("");
        setContact("");
        setCompany("");
    };

    return (
        <>
            {/* Header */}
            <header className="z-30 mt-0 w-full md:mt-0 sticky top-0">
                <div className="mx-0 px-0 w-full">
                    <div
                        className={`relative flex h-20 items-center justify-between gap-3 transition-all ${
                            isScrolled ? "bg-black" : "bg-transparent"
                        } px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 `}
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
                                { name: "Home", route: "" },
                                {
                                    name: "Industries & Services",
                                    route: "services",
                                },
                                { name: "Careers", route: "careers" },
                                { name: "Contact Us", route: "contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={`/${item.route.toLowerCase()}`}
                                        onClick={toggleMenu}
                                        className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    id="enquire-now"
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-green/80 backdrop-blur-sm">
                    <div className="bg-green-950 rounded-lg p-6 w-full max-w-fit relative">
                        <button
                            className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl focus:outline-none"
                            onClick={togglePopup}
                        >
                            ✖
                        </button>

                        <h2 className="pt-5 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-xl font-semibold text-transparent md:text-2xl">
                            Tell Us How can we reach you
                        </h2>
                        <div className="grid gap-0 grid-cols-2 md:gap-28 max-md:grid-cols-1 items-center">
                            <div>
                                <form
                                    className="space-y-4"
                                    onSubmit={handleSubmit}
                                >
                                    <div>
                                        <label className="block text-sm font-medium text-yellow-200/65 transition hover:text-yellow-500 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={handleNameChange}
                                            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-yellow-200/65 transition hover:text-yellow-500 mb-1">
                                            Contact Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={contact}
                                            onChange={handleContactChange}
                                            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                            placeholder="Enter your contact number"
                                            required
                                        />
                                        {errors.contactNumber && (
                                            <p style={{ color: "red" }}>
                                                {errors.contactNumber}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-yellow-200/65 transition hover:text-yellow-500 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                            placeholder="Enter your email"
                                            required
                                        />
                                        {errors.email && (
                                            <p style={{ color: "red" }}>
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-yellow-200/65 transition hover:text-yellow-500 mb-1">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            value={company}
                                            onChange={handleCompanyChange}
                                            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                            placeholder="Enter your company name"
                                            required
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
                            <div>
                                <div className="space-y-8 max-md:hidden ">
                                    <img
                                        src="/images/hero-image-01.webp"
                                        alt={"Enquiry Image"}
                                        height={550}
                                        width={550}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
