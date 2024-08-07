import React from "react";
import logo from "../assets/sail_the_world_v80.png"; // Upewnij się, że ścieżka do obrazu jest poprawna

const Navbar: React.FC = () => {
    return (
        <div className="w-screen flex justify-between items-center md:px-10 lg:px-72 py-6 text-white fixed bg-black">
            <img src={logo} alt="Logo" className="h-11" />{" "}
            
            <ul className="flex h-full space-x-4">
                <li className="cursor-pointer hover:text-purple-500 duration-200">
                    Home
                </li>
                <li className="cursor-pointer hover:text-purple-500 duration-200">
                    About
                </li>
                <li className="cursor-pointer hover:text-purple-500 duration-200">
                    Contact
                </li>
                <li>
                    <div className="w-[1px] h-full bg-white"></div>
                </li>
                <li className="cursor-pointer hover:text-purple-500 duration-200">
                    My portfolio
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
