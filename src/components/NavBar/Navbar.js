import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [drop, setDrop] = useState(false);
    const data = useSelector((state) => state);
    const close = () => {
        document.querySelector(".responsiv").style.transform = "translateX(-100%)";
    };
    const open = () => {
        document.querySelector(".responsiv").style.transform = "translateX(0%)";
    };

    return (
        <>
            <nav className='navbar'>
                <h1>SETronics   </h1>
                <button className='open' onClick={open}>
                    <i class='fa fa-navicon' style={{ fontSize: "25px", color: "white" }}></i>
                </button>

                <div>
                    <div className='menu-icon'>
                        <i className='fas fa-times'></i>
                    </div>
                    <ul className='nav-menu active'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                Our Products
                                <i className='fas fa-caret-down space-left'></i>
                            </Link>
                            {Categories && <Categories />}
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links'>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/card' className='nav-links'>
                                <i class='fa fa-shopping-cart' style={{ fontSize: "30px" }}></i>
                                <span>{data.card.length}</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Register' className='nav-links'>
                            Register
                            </Link>
                        </li>

                    </ul>
                </div>

                {/*responsiv navbar*/}
                <div className='responsiv'>
                    <button onClick={close}>
                        <i className='fas fa-times'></i>
                    </button>

                    <ul className='nav-menu active'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                Our Products
                                <i className='fas fa-caret-down space-left'></i>
                            </Link>
                            {Categories && <Categories />}
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links'>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/card' className='nav-links'>
                                <i class='fa fa-shopping-cart' style={{ fontSize: "30px" }}></i>
                                <span>{data.card.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
