import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="ps-6 pe-6">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;