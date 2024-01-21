import React from "react";

const FractionDisplay = ({ fraction }) => {
    const [numerator, denominator] = fraction.split("/");

    return (
        <div className="flex flex-col items-center ">
            <span className="numerator font-light text-white text-2xl">
                {numerator}
            </span>
            <span className="divider font-light text-white text-2xl">-</span>
            <span className="denominator font-light text-white text-2xl">
                {denominator}
            </span>
        </div>
    );
};

export default FractionDisplay;
