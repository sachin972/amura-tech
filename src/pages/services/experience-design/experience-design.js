// import Services from "../page";

export default function ExperienceDesign({}) {
    return (
        <>
            {/* <Services /> */}
            <div className="w-full p-8" id="experience-design">
                {/* Header Section */}
                <div className="bg-blue-800/10 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-yellow-400 text-lg uppercase tracking-wide">
                        05 Experience Design
                    </h2>
                    <h1 className="text-4xl font-bold mt-4 text-yellow-500/80">
                        Design-driven for your Growth
                    </h1>
                    <p className="text-lg text-yellow-100/90 mt-4">
                        Whatever we design has a direct impact on growth
                        <br /> Even our design teams are well-versed with
                        technology platforms, ensuring with constant
                        optimisation that creative translate well into results.
                    </p>
                </div>

                {/* Scope Section */}
                <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                        Scope
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Market and Buyer Analysis */}
                        <article>
                            <svg
                                className="mb-3 fill-yellow-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                            >
                                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                                <path
                                    fillOpacity=".48"
                                    d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                                />
                            </svg>
                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-yellow-400">
                                Advertising campaign design
                            </h3>
                            <p className="text-yellow-200/90">
                                By pairing design research with relevant content
                                for effective branding and advertising
                                campaigns, we follow an integrated approach
                                <br />
                                that combines the best of creative design with
                                data-driven digital marketing. Our customizable
                                website development services create
                                highly-engaging online brand experiences.
                            </p>
                        </article>

                        {/* Marketing Strategy */}
                        <article>
                            <svg
                                className="mb-3 fill-yellow-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                            >
                                <path
                                    fillOpacity=".48"
                                    d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z"
                                />
                                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
                            </svg>
                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-yellow-400">
                                Video and storyboarding
                            </h3>
                            <p className="text-yellow-200/90">
                                Building a story that truly engages your
                                audience with today’s hottest medium - video.
                                <br />A combination of demographics data and
                                digital usage information to align design
                                solutions that don’t just look great, but work
                                in term of creating meaningful experiences.
                            </p>
                        </article>

                        {/* Communication & Creative Strategy */}
                        <article>
                            <svg
                                className="mb-3 fill-yellow-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                            >
                                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                                <path
                                    fillOpacity=".48"
                                    d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                                />
                            </svg>
                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-yellow-400">
                                UI/UX
                            </h3>
                            <p className="text-yellow-200/90">
                                Balancing user-centricity with great design to
                                deliver visually stunning and functional design
                                solutions.
                                <br />
                                we understand user interaction patterns to build
                                a user experience that is custom targeted to
                                your audience.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}
