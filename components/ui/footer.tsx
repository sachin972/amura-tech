import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
    return (
        <footer>
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                {/* Footer illustration */}
                <div
                    className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
                    aria-hidden="true"
                >
                    <Image
                        className="max-w-none"
                        src={FooterIllustration}
                        width={1076}
                        height={378}
                        alt="Footer illustration"
                    />
                </div>
                <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
                    {/* 1st block */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-200">
                            Our Offices
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Pune
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Mumbai
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Bengaluru
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    NCR
                                </a>
                            </li>
                            {/* <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Our method
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  User policy
                </a>
              </li> */}
                        </ul>
                    </div>
                    {/* 2nd block */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-200">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Diversity &amp; Inclusion
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Financial statements
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* 3rd block */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-200">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    In the News
                                </a>
                            </li>
                            {/* <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Careers
                </a>
              </li> */}
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Sitemap
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* 4th block */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-200">
                            Key Pages
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Industries
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Clients
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Our Work
                                </a>
                            </li>
                            {/* <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  About Amura
                </a>
              </li> */}
                            <li>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Technologies
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* 5th block */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
                        <div className="mb-3">
                            <Logo />
                        </div>
                        <div className="text-sm">
                            <p className="mb-3 text-indigo-200/65">
                                © amura-tech.com
                                <span className="text-gray-700"> · </span>
                                <a
                                    className="text-indigo-200/65 transition hover:text-indigo-500"
                                    href="#0"
                                >
                                    Terms
                                </a>
                            </p>
                            <ul className="inline-flex gap-1">
                                <li>
                                    <a
                                        className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                                        href="#0"
                                        aria-label="Twitter"
                                    >
                                        <svg
                                            className="h-8 w-8 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 512 512"
                                            viewBox="0 0 512 512"
                                            id="twitter"
                                        >
                                            <g>
                                                <path
                                                    fill="#212121"
                                                    d="M462.39,5.231C460.641,2.008,457.268,0,453.6,0H378.4c-3.384,0-6.538,1.711-8.383,4.548
		L237.199,208.756L104.383,4.548c-3.01-4.629-9.205-5.941-13.835-2.931c-4.63,3.011-5.942,9.205-2.931,13.835L225.27,227.097
		L50.017,496.548c-2,3.074-2.156,6.997-0.407,10.221c1.749,3.224,5.123,5.231,8.79,5.231h75.2c3.384,0,6.538-1.711,8.383-4.548
		l132.815-204.204l132.819,204.204c1.916,2.946,5.121,4.548,8.393,4.548c1.868,0,3.76-0.523,5.442-1.618
		c4.63-3.011,5.942-9.206,2.931-13.835l-137.656-211.64L461.982,15.452C463.982,12.378,464.139,8.455,462.39,5.231z M128.175,492
		H76.833l168.619-259.252c0.034-0.05,0.065-0.101,0.098-0.151L383.825,20h51.341L128.175,492z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                                        href="#0"
                                        aria-label="facebook"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="facebook"
                                            className="h-8 w-8 fill-current"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    stroke="#303c42"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M21 1.5H3A1.5 1.5 0 0 0 1.5 3v18A1.5 1.5 0 0 0 3 22.5h8.5v-8h-2v-3h2v-2a4 4 0 0 1 4-4h3v3h-3a1 1 0 0 0-1 1v2h4l-.5 3h-3.5v8H21a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 21 1.5Z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                                        href="#0"
                                        aria-label="Instagram"
                                    >
                                        {/* <svg
                                            
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        > */}
                                        <svg
                                            className="h-8 w-8 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="instagram"
                                        >
                                            <g
                                                fill="none"
                                                stroke="#303c42"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <rect
                                                    width="21"
                                                    height="21"
                                                    x="1.5"
                                                    y="1.5"
                                                    rx="5.48"
                                                    ry="5.48"
                                                ></rect>
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="5.5"
                                                ></circle>
                                                <circle
                                                    cx="18"
                                                    cy="5"
                                                    r=".5"
                                                ></circle>
                                            </g>
                                        </svg>
                                        {/* <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                        </svg> */}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                                        href="#0"
                                        aria-label="linkedin"
                                    >
                                        {/* <svg
                                            
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        > */}

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 512 512"
                                            viewBox="0 0 512 512"
                                            id="linkedin"
                                            className="h-8 w-8 fill-current"
                                        >
                                            <path
                                                fill="none"
                                                d="M134.3,92.7c-15.1,0-27.5,12.3-27.5,27.5s12.3,27.5,27.5,27.5s27.5-12.3,27.5-27.5S149.4,92.7,134.3,92.7z"
                                            ></path>
                                            <rect
                                                width="54.9"
                                                height="192.1"
                                                x="106.8"
                                                y="224.5"
                                                fill="none"
                                            ></rect>
                                            <path
                                                fill="none"
                                                d="M399.5,263.1c-6.7-3.9-15.8-6.7-27.6-8.4c-14.6-2.2-29.2-1.3-43.3,2.5c-7.5,2-15.2,4.9-22.8,8.5
		c-3.1,1.4-6.7,1.2-9.6-0.6c-2.9-1.8-4.6-5-4.6-8.4v-32.1h-54.9v192.1h54.9v-75.3c0-20.6,16.8-37.4,37.4-37.4
		c20.6,0,37.4,16.8,37.4,37.4v78h54.9V302.6C421.3,286.5,412.6,270.7,399.5,263.1z"
                                            ></path>
                                            <path
                                                fill="none"
                                                d="M464.1,26H47.9C35.8,26,26,35.8,26,47.9v416.1c0,12.1,9.8,21.9,21.9,21.9h416.1c12.1,0,21.9-9.8,21.9-21.9
		V47.9C486,35.8,476.2,26,464.1,26z M181.8,426.6c0,5.5-4.5,10-10,10H96.8c-5.5,0-10-4.5-10-10V214.5c0-5.5,4.5-10,10-10h74.9
		c5.5,0,10,4.5,10,10V426.6z M134.3,167.6c-26.2,0-47.5-21.3-47.5-47.5c0-26.2,21.3-47.5,47.5-47.5c26.2,0,47.5,21.3,47.5,47.5
		C181.8,146.3,160.5,167.6,134.3,167.6z M441.3,429.3c0,5.5-4.5,10-10,10h-74.9c-5.5,0-10-4.5-10-10v-88c0-9.6-7.8-17.4-17.4-17.4
		s-17.4,7.8-17.4,17.4v85.3c0,5.5-4.5,10-10,10h-74.9c-5.5,0-10-4.5-10-10V214.5c0-5.5,4.5-10,10-10h74.9c5.5,0,10,4.5,10,10v27.1
		c3.9-1.4,7.9-2.7,11.8-3.7c16.8-4.6,34.2-5.6,51.6-3c14.4,2.1,25.7,5.7,34.7,10.9c19.3,11.2,31.8,33.5,31.8,56.8V429.3z"
                                            ></path>
                                            <path
                                                fill="#231f20"
                                                d="M464.1,6H47.9C24.8,6,6,24.8,6,47.9v416.1C6,487.2,24.8,506,47.9,506h416.1c23.1,0,41.9-18.8,41.9-41.9V47.9
		C506,24.8,487.2,6,464.1,6z M486,464.1c0,12.1-9.8,21.9-21.9,21.9H47.9c-12.1,0-21.9-9.8-21.9-21.9V47.9C26,35.8,35.8,26,47.9,26
		h416.1c12.1,0,21.9,9.8,21.9,21.9V464.1z"
                                            ></path>
                                            <path
                                                fill="#231f20"
                                                d="M171.8 204.5H96.8c-5.5 0-10 4.5-10 10v212.1c0 5.5 4.5 10 10 10h74.9c5.5 0 10-4.5 10-10V214.5C181.8 208.9 177.3 204.5 171.8 204.5zM161.8 416.6h-54.9V224.5h54.9V416.6zM409.6 245.8c-9-5.2-20.3-8.8-34.7-10.9-17.4-2.6-34.8-1.6-51.6 3-3.9 1.1-7.8 2.3-11.8 3.7v-27.1c0-5.5-4.5-10-10-10h-74.9c-5.5 0-10 4.5-10 10v212.1c0 5.5 4.5 10 10 10h74.9c5.5 0 10-4.5 10-10v-85.3c0-9.6 7.8-17.4 17.4-17.4s17.4 7.8 17.4 17.4v88c0 5.5 4.5 10 10 10h74.9c5.5 0 10-4.5 10-10V302.6C441.3 279.3 428.9 257 409.6 245.8zM421.3 419.3h-54.9v-78c0-20.6-16.8-37.4-37.4-37.4-20.6 0-37.4 16.8-37.4 37.4v75.3h-54.9V224.5h54.9v32.1c0 3.4 1.7 6.6 4.6 8.4 2.9 1.8 6.5 2.1 9.6.6 7.7-3.6 15.4-6.4 22.8-8.5 14.1-3.9 28.7-4.7 43.3-2.5 11.8 1.8 20.8 4.5 27.6 8.4 13.1 7.6 21.8 23.5 21.8 39.5V419.3zM134.3 72.7c-26.2 0-47.5 21.3-47.5 47.5 0 26.2 21.3 47.5 47.5 47.5 26.2 0 47.5-21.3 47.5-47.5C181.8 94 160.5 72.7 134.3 72.7zM134.3 147.6c-15.1 0-27.5-12.3-27.5-27.5s12.3-27.5 27.5-27.5 27.5 12.3 27.5 27.5S149.4 147.6 134.3 147.6z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
