import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="ps-6 pe-6 bg-shade flex flex-col pt-5 pb-5">
            <section className="md:flex md:items-center md:justify-between mb-5 pt-5 pb-5">
                <div className="flex justify-center md:justify-start">
                    <img src={`/images/logo.webp`} alt="image" className="md:w-24  w-20" />
                </div>
                <ul className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between gap-3 text-base mb-5">
                    <li>
                        <a href="/" className="px-3 py-2">Home</a>
                    </li>
                    <li>
                        <a href="#projects" className="rounded-md px-3 py-2">Projects</a>
                    </li>
                    <li>
                        <a href="#about" className="rounded-md px-3 py-2">About me</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="rounded-md px-3 py-2">Testimonials</a>
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-3">
                    <img src={"/images/facebook.webp"} alt="facebook.webp" className="h-5 w-auto" />
                    <img src={"/images/instagram.webp"} alt="instagram.webp" className="h-5 w-auto" />
                    <img src={"/images/twitter.webp"} alt="twitter.webp" className="h-5 w-auto" />
                    <img src={"/images/linkedin.webp"} alt="linkedin.webp" className="h-5 w-auto" />
                </div>
            </section>
            <section className="flex flex-col items-center justify-between md:flex-row pt-5 pb-5 border-t">
                <p className="mb-5">Made with 💖 by Airdokan</p>
                <ul className="flex flex-col items-center justify-between gap-5 md:flex-row">
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