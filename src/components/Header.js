import React, { useEffect } from "react";
import "./styles/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    useEffect(() => {
        let btnmenu = document.querySelector(".boutonmenu");
        let sectionmenu = document.querySelector(".sectionmenu");
        let ecransortie = document.querySelector(".ecransortie");
        let btnredirect = document.querySelectorAll(".btnredirect");

        btnmenu.addEventListener("click", () => {
            let opened = true;
            sectionmenu.style.right = "0";
            ecransortie.style.display = "block";
            ecransortie.style.animation = "fadein 0.5s ease-in-out";
        });

        btnredirect.forEach((btn) => {
            window.addEventListener("click", (e) => {
                console.log(e.target);
                if (
                    e.target === ecransortie ||
                    e.target === btnredirect ||
                    e.target === btn
                ) {
                    sectionmenu.style.right = "-120%";
                    ecransortie.style.display = "none";
                    ecransortie.style.animation = "fadeout 0.5s ease-in-out";
                }
            });
        });
    }, []);

    return (
        <div className="container">
            <div className="headall">
                <ul className="gauche">
                    <NavLink exact to="/" className="navlink">
                        <li>Home</li>
                    </NavLink>
                    <NavLink exact to="/news" className="navlink">
                        <li>News</li>
                    </NavLink>
                    <NavLink exact to="/contact" className="navlink">
                        <li>Contact</li>
                    </NavLink>
                    <NavLink exact to="/about" className="navlink">
                        <li>About</li>
                    </NavLink>
                </ul>
                <ul className="droite">
                    <NavLink exact to="/profil" className="navlink">
                        <li className="pdp">
                            <span className="rond"></span>
                            <span className="profil">Mon Profil</span>
                        </li>
                    </NavLink>
                    <NavLink exact to="/logout" className="navlink">
                        <li>Logout</li>
                    </NavLink>
                </ul>
            </div>
            <div className="hldiv">
                <span className="horizontalline"></span>
            </div>

            {/* responsive */}

            <div className="menu">
                <button className="boutonmenu">III</button>

                <div className="ecransortie"></div>

                <div className="sectionmenu">
                    <div className="div1">
                        <div className="menom">
                            <ul className="menomliste">
                                <NavLink exact to="/" className="navlink">
                                    <li>
                                        <p className="btnredirect">Home</p>
                                    </li>
                                </NavLink>
                                <NavLink exact to="/news" className="navlink">
                                    <li>
                                        <p className="btnredirect">News</p>
                                    </li>
                                </NavLink>
                                <NavLink
                                    exact
                                    to="/contact"
                                    className="navlink"
                                >
                                    <li>
                                        <p className="btnredirect">Contact</p>
                                    </li>
                                </NavLink>
                                <NavLink exact to="/about" className="navlink">
                                    <li>
                                        <p className="btnredirect">About</p>
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className="pdp2">
                            <NavLink
                                exact
                                to="/profil"
                                className="rond2"
                            ></NavLink>
                        </div>
                    </div>
                    <div className="div2">
                        <NavLink
                            exact
                            to="/logout"
                            className="navlink navlinklogot"
                        >
                            <p className="logot">Logout</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
