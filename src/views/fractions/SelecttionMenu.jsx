import React from "react";

function SelectionMenu({ operation, setOperation, operationOptions, setStartGame }) {
    const handleOperationClick = (selectedOperation) => {
        setOperation(selectedOperation);
    };

    const handleGameStart = () => {
        setStartGame(true);
    }

    return (
        <div className="flex flex-col items-center justify-cente gap-3">

            <label className="text-white">Select Operation </label>

            <ul className="ml-2 bg-gray-100 p-2 rounded-md flex gap-2">
                {operationOptions.map((op) => (
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

            <button
                className=" bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleGameStart}
            >
                Start
            </button>
        </div>
    );
}

export default SelectionMenu;
