import {Link} from "react-router-dom";
import {useState} from "react";
import "./../css/Navigation.css"

const Navigation = () => {
    //  only way I can change whats stored in menuOpen, is calling setMenuOpen which is set to false
    //  setMenuOpen is called as a function to change the first vairable
    const [menuOpen, setMenuOpen] = useState(flase);
    const [downArrow, setDownArrow] = useState(true);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setDownArrow(!downArrow);
       

    }

    return (
        <nav id = "main-nav">
            <a onClick = {toggleMenu} id = "toggle-nav" href = "#">
                {downArrow?(<p>&darr;</p>):(<p>&udarr;</p>)}
            </a>
            <ul className = {menuOpen ? "" : "hide-small"}>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/houses">Houses</Link></li>
                <li><Link to = "/contact">Contact</Link></li>
            </ul>

        </nav>

    );

};

export default Navigation;