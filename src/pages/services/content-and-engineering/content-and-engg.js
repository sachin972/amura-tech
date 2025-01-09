// import Services from "../page";
import React from "react";

export default function ContentAndEngineering({}) {
    return (
        <>
            {/* <Services /> */}
            <div className="w-full p-8" id="content-and-engg">
                {/* Header Section */}
                <div className="bg-blue-800/10 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-yellow-400 text-lg uppercase tracking-wide">
                        02 Content & Engineering Marketing
                    </h2>
                    <h1 className="text-4xl font-bold mt-4 text-yellow-500/80">
                        The Essence of Sustainable Growth
                    </h1>
                    <p className="text-lg text-yellow-100/90 mt-4">
                        In a world full of distractions where customers have the
                        last say, acquisition is only the start. It will mean
                        nothing if people don’t stick to your product or
                        service. Our content & engagement marketing helps you
                        address this vital factor to achieve sustainable growth.
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
                                Content Marketing Services
                            </h3>
                            <p className="text-yellow-200/90">
                                Our omni-channel, measurable approach is built
                                around your audience
                                <br />
                                Our copy department being well-versed with
                                technology, each content marketing initiative is
                                backed by data and analysed for results. By
                                considering your audience’s online behaviour,
                                path to purchase and lifestyle preferences
                                across every channel, we create better
                                experiences across your web assets.
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
                                SEO Marketing: Search Engine Optimisation
                            </h3>
                            <p className="text-yellow-200/90">
                                From offering SEO expert ideas to delivering SEO
                                optimization services, we constantly evolve with
                                strategies
                                <br />
                                that keep your brand on the map. We create
                                on-trend, intuitive strategies to keep your
                                brand at the top of search engine results pages.
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
                                Diversified Social Strategies
                            </h3>
                            <p className="text-yellow-200/90">
                                We enable seamless conversations with your
                                audience, where they spend time everyday
                                <br />
                                From LinkedIn to Instagram. We combine each
                                social channel’s inherent attributes with your
                                audience’s purpose for it for both,
                                well-researched and dynamic social media
                                marketing strategies.
                            </p>
                        </article>
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
                                Engagement Planning
                            </h3>
                            <p className="text-yellow-200/90">
                                We encourage customers to interact and share in
                                the brand experiences
                                <br />
                                Our content engagement plans offer your
                                audiences something meaningful beyond a product
                                pitch - a brilliant end-to-end customer
                                experience through an interactive content
                                marketing strategy.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}
