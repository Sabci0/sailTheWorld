import React from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
    const openBar = () => {
        // Add your logic here to open the navigation bar
    };

    return (
        <nav className="navbar bg-zinc-950 w-full p-2 z-2 backdrop-filter backdrop-blur-2xl sticky">
            <div className="container p-4 text-xl">
                <div className="flex flex-row items-center justify-center text-gray-50 font-medium">
                    <h1 className="logo text-gray-50 absolute left-5">
                        <Link
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to="headerbg"
                            className="text-3xl"
                        >
                            DarkLeas
                        </Link>
                    </h1>
                    <ul className="bar flex flex-row space-x-4">
                        <li>
                            <Link
                                onClick={openBar}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                to="headerbg"
                                className="text-xl"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={openBar}
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                className="text-xl"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={openBar}
                                to="about-scroll"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                activeClass="active"
                                className="text-xl"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={openBar}
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                activeClass="active"
                                className="text-lg"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="button" onClick={openBar}>
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
