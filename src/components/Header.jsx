import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                <img src={`/images/logo.png`} alt="logo" style={{ width: "9rem" }}/>
            </div>
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
            <div>
                <Link to={`#`}>Contact Me</Link>
            </div>
        </header>
    );
}

export default Header