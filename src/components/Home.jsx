import {Link} from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Home = () => {
    return (
        <>
            <section className="md:flex md:items-center md:justify-between bg-shade pt-5 mb-5 md:pt-0">
                <div className="mb-5">
                    <p className="text-sm mb-5">Hey, I am Ismoil</p>
                    <h1 className="text-4xl font-bold mb-5">I am <span className="text-primary">React.js & Node.js</span> developer</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <Link to="/" className="bg-primary text-light p-3 rounded">Get in Touch</Link>
                </div>
                <div>
                    <img src={"/images/ustoz.png"} className="w-8/12" alt={"Group_11_1.png"} />
                </div>
            </section>
            <section>
                <p className="text-sm mb-5">My skills</p>
                <h3 className="text-4xl font-bold mb-5">My Expertise</h3>
            </section>
            <section className="md:flex md:items-center md:justify-between md:gap-5">
                <div className="bg-shade rounde p-5d">
                    <img src={"/images/product-chain_1.png"} alt={"product-chain_1"} className="h-14 mb-5" />
                    <h4 className="font-bold mb-5">Strategy & Direction</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="bg-shade rounded p-5">
                    <img src={"/images/tag_1.png"} alt={"tag_1.png"} className="h-14 mb-5" />
                    <h4 className="font-bold mb-5">Branding & Logo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="bg-shade rounded p-5">
                    <img src={"/images/feather-pen_2.png"} alt={"feather-pen_2.png"} className="h-14 mb-5" />
                    <h4 className="font-bold mb-5">UI & UX Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="bg-shade rounded p-5">
                    <img src={"/images/feather-pen_1.png"} alt={"feather-pen_1.png"} className="h-14 mb-5" />
                    <h4 className="font-bold mb-5">Webflow Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </section>
            <section className="md:flex md:items-center md:justify-center mb-20" id="about">
                <div className="md:mb-0 mb-10">
                    <img src={"/images/ustoz.png"} alt={"ustoz.png"} className="w-9/12" />
                </div>
                <div>
                    <p className="text-sm font-bold mb-5">About</p>
                    <h3 className="text-4xl font-bold mb-5">About Me</h3>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
                    <p className="mb-5">Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                </div>
            </section>
            <section className="mb-20" id="projects">
                <p className="font-bold text-sm mb-5">Recent Projects</p>
                <div className="md:flex md:items-center md:justify-between">
                    <h1 className="font-bold text-4xl mb-5">My projects</h1>
                    <Link to={"#"} className="p-3 bg-purple rounded text-light"><GlobeAltIcon className="inline-flex h-10 w-10 text-light" /> Visit My Dribbble</Link>
                </div>
            </section>
            <section className="md:flex md:items-center md:justify-between pb-20 gap-3">
                <div className="shadow rounded mb-5">
                    <img src={"/images/personal_portfolio_website.png"} alt={"personal_portfolio_website.png"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Ahuse</h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <Link to={"#"} className="inline-flex items-center border-b border-b-primary pb-2">
                            View In Dribbble
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/personal_portfolio_website_community.png"} alt={"personal_portfolio_website_community.png"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">App Dashboard</h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <Link to={"#"} className="inline-flex items-center border-b border-b-primary pb-2">
                            View In Dribbble
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/personal_portfolio_website_community_1.png"} alt={"personal_portfolio_website_community_1.png"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Easy Rent</h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <Link to={"#"} className="inline-flex items-center border-b border-b-primary pb-2">
                            View In Dribbble
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-shade pt-20" id="testimonials">
                <p className="mb-3 text-sm font-bold">Clients Feedback</p>
                <h2 className="font-bold text-4xl">Customer testimonials</h2>
            </section>
            <section className="md:flex md:items-center md:justify-between pt-20 pb-20 md:gap-5 bg-shade">
                <div className="border border-primary rounded p-5 mb-5">
                    <div className="flex items-center justify-start gap-2 mb-5">
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                    </div>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center justify-start gap-3">
                        <img src={"/images/Dianne_Russell.png"} alt={"Dianne_Russell.png"} className="w-14" />
                        <div>
                            <h6 className="font-bold">Dianne Russell</h6>
                            <span>Starbucks</span>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded p-5 mb-5">
                    <div className="flex items-center justify-start gap-2 mb-5">
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                    </div>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center justify-start gap-3">
                        <img src={"/images/Kristin_Watson.png"} alt={"Kristin_Watson.png"} className="w-14" />
                        <div>
                            <h6>Kristin Watson</h6>
                            <span>Louis Vuitton</span>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded p-5">
                    <div className="flex items-center justify-start gap-2 mb-5">
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                    </div>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center justify-start gap-3">
                        <img src={"/images/Kathryn_Murphy.png"} alt={"Kathryn_Murphy.png"} className="w-14" />
                        <div>
                            <h6>Kathryn Murphy</h6>
                            <span>McDonald's</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center pt-20 pb-20">
                <form className="md:w-6/12 w-full">
                    <div className="mb-10">
                        <p className="font-bold text-center mb-5 text-sm">Get In Touch</p>
                        <h3 className="font-bold text-center text-4xl mb-5">Contact me</h3>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
                        <div className="flex flex-col">
                            <label htmlFor="firstName">First name</label>
                            <input id="firstName" type="text" className="h-8 border border-primary rounded outline-none indent-2"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName">Last name</label>
                            <input id="lastName" type="text" className="h-8 border border-primary rounded outline-none indent-2" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email name</label>
                            <input id="email" type="email" className="h-8 border border-primary rounded outline-none indent-2" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input id="phoneNumber" type="tel" className="h-8 border border-primary rounded outline-none indent-2" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="topic">Choose a topic</label>
                        <select id="topic" className="border border-primary rounded outline-none h-8">
                            <option value="0">Select one...</option>
                            <option value="0">Select one...</option>
                            <option value="0">Select one...</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" cols="30" placeholder="Type your message..." className="border border-primary rounded outline-none indent-2"></textarea>
                    </div>
                    <div className="mb-5">
                        <input type="checkbox" id="accept_terms" className="me-2" />
                        <label htmlFor="accept_terms">I accept the terms</label>
                    </div>
                    <div className="flex items-center justify-center">
                        <input type="submit" value="Submit" className="pt-3 pb-3 ps-8 pe-8 rounded text-light bg-primary" />
                    </div>
                </form>
            </section>
        </>
    );
}

export default Home;