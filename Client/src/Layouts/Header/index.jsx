import "./index.scss"
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";



const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="header">
                <div className="header-left">
                    <h2>COLO<span>SHOP</span></h2>

                    <nav>
                        <ul>
                            <li>
                                <NavLink>Home</NavLink>
                            </li>
                            <li>
                                <NavLink>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink>Promotion</NavLink>
                            </li>
                            <li>
                                <NavLink>Pages</NavLink>
                            </li>
                            <li>
                                <NavLink>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="icons">
                        <IoIosSearch />
                        <FaUser />
                        <SlBasket />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header