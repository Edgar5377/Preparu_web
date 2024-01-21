import React from "react";
import { Link } from "react-router-dom";

function HomeScreen({ props }) {
    return (
        <div className="h-screen w-screen bg-gray-700 flex flex-col items-center justify-center gap-2">
            <h2 className="text-2xl font-medium text-white mb-2">
                Welcome to Preparu!
            </h2>
            <Link to="/menu">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Start
                </button>
            </Link>
        </div>
    );
}

export default HomeScreen;
