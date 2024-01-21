import React from "react";
import { Link } from "react-router-dom";

function HomeScreen({ props }) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/fractions">Fraction</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HomeScreen;
