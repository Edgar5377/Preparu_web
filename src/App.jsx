import { useState, useEffect } from "react";
import "./App.css";

import FractionDisplay from "./components/fractions";
import {
    generateRandomFraction,
    // addFractions,
} from "./functions/operations/fractions";

function App() {
    const [fraction, setFraction] = useState(generateRandomFraction(5));
    const [userAnswer, setUserAnswer] = useState("");
    const [result, setResult] = useState("");
    const [score, setScore] = useState(0);

    const handleInputChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const handleButtonClick = () => {
        setFraction(generateRandomFraction(5));
        setResult("");
        setUserAnswer("");
        setScore(score + 1);
    };

    const handleValidateClick = () => {
        const correctAnswer = fraction.result;

        if (userAnswer === correctAnswer) {
            setResult("Correct!");
        } else {
            setResult("Incorrect");
        }
    };
    return (
        <div className="h-screen w-screen bg-gray-700 flex flex-col items-center justify-center gap-2">
            <h2 className="text-2xl font-medium text-white mb-2">
                Solve the following fraction {score}
            </h2>
            <div className="flex flex-row items-center border-2  rounded-lg px-6 py-3 gap-4">
                <FractionDisplay fraction={fraction["values"][0]} />
                <span className="divider text-white"> + </span>
                <FractionDisplay fraction={fraction["values"][1]} />
            </div>
            {/* <h2 className="text-2xl font-medium text-white mb-2 ">
                {fraction["result"]}
            </h2> */}
            <div
                className={`mt-4 
            ${result !== "" ? "border-2" : ""} p-3 rounded-lg 
            ${result === "Correct!" ? "border-green-400" : "border-red-500"}`}
            >
                <input
                    type="text"
                    value={userAnswer}
                    onChange={handleInputChange}
                    placeholder="Enter your answer"
                    className="bg-gray-100 p-2 rounded-md"
                />
                <button
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={handleValidateClick}
                >
                    Validate Answer
                </button>
            </div>
            {/* <h2 className="text-2xl font-medium text-white mb-2">{result}</h2> */}
            {result === "Correct!" && (
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={handleButtonClick}
                >
                    Generate New Fraction
                </button>
            )}
        </div>
    );
}

export default App;
