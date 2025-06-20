import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <img src={`/images/logo.png`} alt="image" style={{ width: "9rem" }}/>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/">About me</Link>
                        </li>
                        <li>
                            <Link to="/">Testimonials</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={"/images/facebook.png"} alt="facebook.png" />
                    <img src={"/images/instagram.png"} alt="instagram.png" />
                    <img src={"/images/twitter.png"} alt="twitter.png" />
                    <img src={"/images/linkedin.png"} alt="linkedin.png" />
                </div>
            </section>
            <section>
                <p>Made with 💖 by Airdokan</p>
                <ul>
                  <li>
                      <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                      <Link to="/">Terms of Service</Link>
                  </li>
                  <li>
                      <Link to="/">Cookies Settings</Link>
                  </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;