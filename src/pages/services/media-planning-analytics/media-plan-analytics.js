// import Services from "../page";

export default function MediaPlanning({}) {
    return (
        <>
            {/* <Services /> */}
            <div className="w-full p-8" id="media-planning">
                {/* Header Section */}
                <div className="bg-blue-800/10 p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-yellow-400 text-lg uppercase tracking-wide">
                        03 Media Planning & Analytics
                    </h2>
                    <h1 className="text-4xl font-bold mt-4 text-yellow-500/80">
                        Growing in an omni-channel world
                    </h1>
                    <p className="text-lg text-yellow-100/90 mt-4">
                        Our media planning team has the acumen and agility to
                        work across the funnel, running omnichannel campaigns
                        that increase conversions and then leveraging the right
                        media to ensure maximum CLTV. Smaller, quicker
                        experiments help gain the right insights faster, which
                        are then scaled for maximum impact and results - saving
                        you time, and boosting your ROI.
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
                                Omni-channel planning
                            </h3>
                            <p className="text-yellow-200/90">
                                Our comprehensive media plans, across a mix of
                                carefully-chosen channels
                                <br /> Maximize budget & deliver on ROI. From
                                search engine marketing to Facebook marketing,
                                our systematic approach ensures your campaign
                                works intuitively along with your audience’s
                                journey to purchase while our SEM services
                                provide enhanced customer experiences.
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
                                Advertising automation & campaign execution
                            </h3>
                            <p className="text-yellow-200/90">
                                Automated set up, budget allocation and
                                optimisation of campaigns courtesy Advertise.Do
                                <br />
                                Our proprietary ad automation platform. It uses
                                machine learning and AI to set up campaigns,
                                allocate budgets and track, analyse & optimise
                                in real time for maximum ROI, constantly
                                supervised by our in-house team of experts.
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
                                Analytics & insights
                            </h3>
                            <p className="text-yellow-200/90">
                                Set up, run, analyse, repeat - adaptive learning
                                is the key to a successful campaign
                                <br />
                                We track & analyse your campaigns in real time
                                using a variety of tools and platforms,
                                leveraging the insights for the next
                                optimisation, or the next strategy.
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
                                Custom attribution models
                            </h3>
                            <p className="text-yellow-200/90">
                                We take into account the complex buyer behaviour
                                of today
                                <br />
                                And create custom attribution models that track
                                the customer journey right from the first ad
                                impression to the end transaction, begins online
                                & ends offline, or vice versa.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}
