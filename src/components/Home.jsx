import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <section>
                <div>
                    <span>Hey, I am John</span>
                    <h1>I create product design and brand experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <Link to="/">Get in Touch</Link>
                </div>
                <div>
                    <img src={"/images/Group_11_1.png"} alt={"Group_11_1.png"} />
                </div>
            </section>
            <section>
                <span>My skills</span>
                <h3>My Expertise</h3>
            </section>
            <section>
                <div>
                    <img src={"/images/product-chain_1.png"} alt={"product-chain_1"} />
                    <h4>Strategy & Direction</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div>
                    <img src={"/images/tag_1.png"} alt={"tag_1.png"} />
                    <h4>Branding & Logo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div>
                    <img src={"/images/feather-pen_2.png"} alt={"feather-pen_2.png"} />
                    <h4>UI & UX Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div>
                    <img src={"/images/feather-pen_1.png"} alt={"feather-pen_1.png"} />
                    <h4>Webflow Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </section>
            <section>
                <div>
                    <img src={"/images/About_Me.png"} alt={"About_Me.png"} />
                </div>
                <div>
                    <span>About</span>
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
                    <p>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                </div>
            </section>
            <section>
                <span>Recent Projects</span>
                <div>
                    <h1>My Portfolio</h1>
                    <Link to={"#"}>Visit My Dribbble</Link>
                </div>
            </section>
            <section>
                <div>
                    <img src={"/images/personal_portfolio_website.png"} alt={"personal_portfolio_website.png"} />
                    <h5>Ahuse</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Link to={"#"}>View In Dribbble</Link>
                </div>
                <div>
                    <img src={"/images/personal_portfolio_website_community.png"} alt={"personal_portfolio_website_community.png"} />
                    <h5>App Dashboard</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Link to={"#"}>View In Dribbble</Link>
                </div>
                <div>
                    <img src={"/images/personal_portfolio_website_community_1.png"} alt={"personal_portfolio_website_community_1.png"} />
                    <h5>Easy Rent</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Link to={"#"}>View In Dribbble</Link>
                </div>
            </section>
            <section>
                <span>Clients Feedback</span>
                <h2>Customer testimonials</h2>
            </section>
            <section>
                <div>
                    <div>
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div>
                        <img src={"/images/Dianne_Russell.png"} alt={"Dianne_Russell.png"} />
                        <div>
                            <h6>Dianne Russell</h6>
                            <span>Starbucks</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div>
                        <img src={"/images/Kristin_Watson.png"} alt={"Kristin_Watson.png"} />
                        <div>
                            <h6>Kristin Watson</h6>
                            <span>Louis Vuitton</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                        <img src={"/images/star.png"} alt={"star.png"} />
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div>
                        <img src={"/images/Kathryn_Murphy.png"} alt={"Kathryn_Murphy.png"} />
                        <div>
                            <h6>Kathryn Murphy</h6>
                            <span>McDonald's</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <form>
                    <div>
                        <p>Get In Touch</p>
                        <h3>Contact me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="firstName">First name</label>
                            <input id="firstName" type="text" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last name</label>
                            <input id="lastName" type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="email">Email name</label>
                            <input id="email" type="email" />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input id="phoneNumber" type="tel" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="topic">Choose a topic</label>
                        <select id="topic">
                            <option value="0">Select one...</option>
                            <option value="0">Select one...</option>
                            <option value="0">Select one...</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" cols="30" placeholder="Type your message..."></textarea>
                    </div>
                    <div>
                        <input type="checkbox" id="accept_terms" />
                        <label htmlFor="accept_terms">I accept the terms</label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </section>
        </>
    );
}

export default Home;