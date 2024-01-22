import React from "react";
import { useState, useEffect } from "react";
import FractionDisplay from "../../components/fractions";
import { generateRandomFraction } from "../../functions/operations/fractions";

// -------------------------------------------------------
import SelectionMenu from "./SelecttionMenu";

function FractionScreen({ props }) {
    const [fraction, setFraction] = useState();
    const [userAnswer, setUserAnswer] = useState("");
    const [result, setResult] = useState("");
    const [score, setScore] = useState(0);
    const [operation, setOperation] = useState("multiply");
    const [startGame, setStartGame] = useState(false);

    useEffect(() => {
        setFraction(generateRandomFraction(5, 2, operation));
    }, [startGame]);

    const handleInputChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const handleButtonClick = () => {
        setFraction(generateRandomFraction(5, 2, operation));
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

    // const handleOperationChange = (event) => {
    //     setOperation(event.target.value);
    // };

    return (
        <div className="h-screen w-screen bg-gray-700 flex flex-col items-center justify-center gap-2">
            {/* <div className="mb-4">
                <label className="text-white">Select Operation:</label>
                <select
                    value={operation}
                    onChange={handleOperationChange}
                    className="ml-2 bg-gray-100 p-2 rounded-md"
                >
                    <option value="add">Add</option>
                    <option value="subtract">Subtract</option>
                    <option value="multiply">Multiply</option>
             
                </select>
            </div> */}
            {!startGame && (
                <>
                    {fraction && (
                        <SelectionMenu
                            operation={operation}
                            setOperation={setOperation}
                            operationOptions={fraction["operationOptions"]}
                            setStartGame={setStartGame}
                        />
                    )}
                </>
            )}
            {/* <div className="mb-4">
                <label className="text-white">Select Operation:</label>
                <ul className="ml-2 bg-gray-100 p-2 rounded-md flex gap-2">
                    {fraction["operationOptions"].map((op) => (
                        <li
                            key={op}
                            onClick={() => handleOperationClick(op)}
                            className={`cursor-pointer ${
                                op === operation ? "bg-blue-500 text-white" : ""
                            } px-3 py-1 rounded-md`}
                        >
                            {op.charAt(0).toUpperCase() + op.slice(1)}
                        </li>
                    ))}
                </ul>
            </div> */}
            {startGame && (
                <>
                    <h2 className="text-2xl font-medium text-white mb-2">
                        Solve the following fraction {score}
                    </h2>
                    {fraction && (
                        <div className="flex flex-row items-center border-2  rounded-lg px-6 py-3 gap-4">
                            <FractionDisplay fraction={fraction["values"][0]} />
                            <span className="divider text-white">
                                {" "}
                                {fraction["simbol"]}{" "}
                            </span>
                            <FractionDisplay fraction={fraction["values"][1]} />
                        </div>
                    )}

                    <div
                        className={`mt-4 
                                ${
                                    result !== "" ? "border-2" : ""
                                } p-3 rounded-lg 
                                ${
                                    result === "Correct!"
                                        ? "border-green-400"
                                        : "border-red-500"
                                }`}
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
                </>
            )}
        </div>
    );
}

export default FractionScreen;
