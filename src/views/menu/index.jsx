import React from "react";
import { Link } from "react-router-dom";

const navigation_links = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Fractions",
        link: "/fractions",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

function MenuScreen({ props }) {
    return (
        <div className="h-screen w-screen bg-gray-700 flex flex-col items-center justify-center gap-2">
            <nav>
                <ul className="flex flex-row gap-3">
                    {navigation_links.map((link) => (
                        <Link to={link.link}>
                            <li
                                className="
                                border-2 rounded-lg 
                                p-4 h-24 w-24 
                                bg-blue-500 hover:bg-blue-700
                                flex items-center justify-center"
                            >
                                <text className="text-white">{link.name}</text>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default MenuScreen;
