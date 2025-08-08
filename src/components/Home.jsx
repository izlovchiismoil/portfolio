import {Link} from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Home = () => {
    return (
        <>
            <section className="md:flex md:items-center md:justify-between bg-shade pt-5 mb-5 md:pt-0">
                <div className="mb-5">
                    <p className="text-sm mb-5">Hey, I am Ismoil</p>
                    <h1 className="text-4xl font-bold mb-5">I am <span className="text-primary">React.js & Node.js</span> developer</h1>
                </div>
                <div>
                    <img src={"/images/ustoz.webp"} className="w-5/12" alt={"Group_11_1.webp"} />
                </div>
            </section>
            <section className="mb-20" id="projects">
                <p className="font-bold text-sm mb-5">Recent Projects</p>
                <div className="md:flex md:items-center md:justify-between">
                    <h1 className="font-bold text-4xl mb-5">My projects</h1>
                    <Link to={"https://github.com/izlovchiismoil?tab=repositories"} target="_blank" className="p-3 bg-purple rounded text-light"><GlobeAltIcon className="inline-flex h-10 w-10 text-light" /> Visit Repositories</Link>
                </div>
            </section>
            <section className="md:flex md:items-center md:justify-between pb-20 gap-3">
                <div className="shadow rounded mb-5">
                    <img src={"/images/blog_post.webp"} className="w-full h-48 object-cover" alt={"blog_post.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Blog Post</h5>
                        <Link to={"https://blog.izlovchidev.uz"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/activate_user.webp"} className="w-full h-48 object-cover" alt={"activate_user.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Authenticate by google account</h5>
                        <Link to={"https://github.com/izlovchiismoil/authenticate_by_google_account.git"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/lotin_krill.webp"} className="w-full h-48 object-cover" alt={"lotin_krill.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Uzbek Latin to Uzbek Cyrillic converter</h5>
                        <Link to={"https://github.com/izlovchiismoil/lotin-krill.git"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/flower_shop.webp"} className="w-full h-48 object-cover" alt={"flower_shop.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Flower shop</h5>
                        <Link to={"https://github.com/izlovchiismoil/flower_shop.git"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-sm mb-5">Certification</p>
                <h3 className="text-4xl font-bold mb-5">My Certificates</h3>
            </section>
            <section className="md:flex md:items-center md:justify-between pb-20 gap-3">
                <div className="shadow rounded mb-5">
                    <img src={"/images/nodejs.webp"} className="w-full h-48 object-cover" alt={"nodejs.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">MOHIRDEV Node.js</h5>
                        <Link to={"https://assets.mohirdev.uz/users/6626635aabb2dadb4f3d78f9/certificates/cert-dd5b61a1-2912-4cc3-9d2b-e8c9000aadfd-prac-V5UxrC8Bm.pdf"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/sololearn_web_fundamental.webp"} className="w-full h-48 object-cover" alt={"sololearn_web_fundamental.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Sololearn web development fundamentals</h5>
                        <Link to={"https://www.sololearn.com/certificates/CT-8IWHT7AK"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/sololearn_css.webp"} className="w-full h-48 object-cover" alt={"sololearn_css.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Sololearn CSS</h5>
                        <Link to={"https://www.sololearn.com/certificates/CT-FBLNFT8S"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/sololearn_js.webp"} className="w-full h-48 object-cover" alt={"sololearn_js.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Sololearn JavaScript</h5>
                        <Link to={"https://www.sololearn.com/certificates/CT-2MIMPPEH"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="shadow rounded mb-5">
                    <img src={"/images/sololearn_php.webp"} className="w-full h-48 object-cover" alt={"sololearn_php.webp"} />
                    <div className="p-5">
                        <h5 className="font-bold mb-5">Sololearn PHP</h5>
                        <Link to={"https://www.sololearn.com/certificates/CT-P8W5ZBRT"} target="_blank" className="inline-flex items-center border-b border-b-primary pb-2">
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="md:flex md:items-center md:justify-between md:gap-5">
                <div className="bg-shade rounde p-5d">
                    <img src={"/images/product-chain_1.webp"} alt={"product-chain_1"} className="h-14 mb-5" />
                    <h4 className="font-bold mb-5">Strategy & Direction</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="bg-shade rounded p-5">
                    <img src={"/images/tag_1.webp"} alt={"tag_1.webp"} className="h-14 mb-5" />
                    <h4 className="font-bold mb-5">Branding & Logo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="bg-shade rounded p-5">
                    <img src={"/images/feather-pen_2.webp"} alt={"feather-pen_2.webp"} className="h-14 mb-5" />
                    <h4 className="font-bold mb-5">UI & UX Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="bg-shade rounded p-5">
                    <img src={"/images/feather-pen_1.webp"} alt={"feather-pen_1.webp"} className="h-14 mb-5" />
                    <h4 className="font-bold mb-5">Webflow Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </section>
            <section className="md:flex md:items-center md:justify-center mb-20" id="about">
                <div className="md:mb-0 mb-10">
                    <img src={"/images/ustoz.webp"} alt={"ustoz.webp"} className="w-6/12" />
                </div>
                <div>
                    <p className="text-sm font-bold mb-5">About</p>
                    <h3 className="text-4xl font-bold mb-5">About Me</h3>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
                    <p className="mb-5">Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                </div>
            </section>

            <section className="bg-shade pt-20" id="testimonials">
                <p className="mb-3 text-sm font-bold">Clients Feedback</p>
                <h2 className="font-bold text-4xl">Customer testimonials</h2>
            </section>
            <section className="md:flex md:items-center md:justify-between pt-20 pb-20 md:gap-5 bg-shade">
                <div className="border border-primary rounded p-5 mb-5">
                    <div className="flex items-center justify-start gap-2 mb-5">
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                    </div>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center justify-start gap-3">
                        <img src={"/images/Dianne_Russell.webp"} alt={"Dianne_Russell.webp"} className="w-14" />
                        <div>
                            <h6 className="font-bold">Dianne Russell</h6>
                            <span>Starbucks</span>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded p-5 mb-5">
                    <div className="flex items-center justify-start gap-2 mb-5">
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                    </div>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center justify-start gap-3">
                        <img src={"/images/Kristin_Watson.webp"} alt={"Kristin_Watson.webp"} className="w-14" />
                        <div>
                            <h6>Kristin Watson</h6>
                            <span>Louis Vuitton</span>
                        </div>
                    </div>
                </div>
                <div className="border border-primary rounded p-5">
                    <div className="flex items-center justify-start gap-2 mb-5">
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                        <img src={"/images/star.webp"} alt={"star.webp"} />
                    </div>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="flex items-center justify-start gap-3">
                        <img src={"/images/Kathryn_Murphy.webp"} alt={"Kathryn_Murphy.webp"} className="w-14" />
                        <div>
                            <h6>Kathryn Murphy</h6>
                            <span>McDonald's</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center pt-20 pb-20" id="contact">
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