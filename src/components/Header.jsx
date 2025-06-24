import {Link} from "react-router-dom";
import {useState} from "react";

const Header = () => {
    const [menus, setMenus] = useState([
        {
            title: "Home",
            link: "/",
            isActive: true,
        },
        {
            title: "Projects",
            link: "#projects",
            isActive: false,
        },
        {
            title: "About",
            link: "#about",
            isActive: false,
        },
        {
            title: "Testimonials",
            link: "#testimonials",
            isActive: false,
        }
    ]);
    const [open, setOpen] = useState(false);
    const handleActiveMenu = (title) => {
        for (const menu of menus) {
            menu.isActive = menu.title === title;
        }
        setMenus([...menus]);
    }
    const handleOpenMenu = () => {
        setOpen(true);
    }
    const handleCloseMenu = () => {
        setOpen(false);
    }

    return (
        <header className="pt-5 pb-5 pe-5 md:ps-6 md:pe-6 shadow relative">
            <nav className="flex items-center justify-between">
                <a href="/">
                    <img className="md:w-24 w-20" src="/images/logo.png" alt="logo"/>
                </a>
                <ul className="hidden md:flex items-center gap-3 text-base">
                    {menus.map((item, i) => (
                        <li key={i}>
                            <a href={item.link} className={`p-2 ${item.isActive ? "bg-primary text-light rounded" : ""}`} onClick={() => handleActiveMenu(item.title)}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <Link to={`#`} className="hidden md:inline-block text-base p-2 border border-primary rounded text-primary">Contact me</Link>
                {open ? (
                    <div className="absolute bg-light w-full top-0 pt-3 pb-5 shadow-2xl">
                        <ul className="mb-5">
                            <li className="pb-3 border-b border-primary" onClick={handleCloseMenu}>
                                <span className="text-primary flex justify-end items-center pe-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                                </span>
                            </li>
                            {menus.map((item, i) => (
                                <li key={i} className="mb-3">
                                    <a href={item.link} className="text-center border-b border-primary text-primary block pt-3 pb-3">{item.title}</a>
                                </li>
                            ))}
                        </ul>
                        <Link to={`#`} className="text-base p-2 border border-primary rounded text-primary">Contact me</Link>
                    </div>
                ) :(
                    <button className="md:hidden text-primary" onClick={handleOpenMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                )}
            </nav>
        </header>
    );
}

export default Header