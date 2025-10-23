import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation"; //  add the ..  to get out of the pages folder
import Footer from "./components/Footer";
const Layout = () => {
    return (
        
        <div id = "content">
            <Header />
            <Navigation />
            

            <Outlet />
            <Footer />
        </div>


    );
};

export default Layout;