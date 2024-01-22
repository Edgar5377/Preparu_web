export function generateRandomFraction(
    maxDenominator = 10,
    quantity = 2,
    operation = "add"
) {
    const fractionString = [];

    for (let i = 1; i <= quantity; i++) {
        const numerator = Math.floor(Math.random() * maxDenominator) + 1;
        const denominator = Math.floor(Math.random() * maxDenominator) + 1;

        fractionString.push(`${numerator}/${denominator}`);
    }

    const result_answer =
        operation === "add"
            ? addFractions(fractionString[0], fractionString[1])
            : operation === "subtract"
            ? subtractFractions(fractionString[0], fractionString[1])
            : operation === "multiply"
            ? multiplyFractions(fractionString[0], fractionString[1])
            : "Invalid operation";
    const simbol =
        operation === "add"
            ? "+"
            : operation === "subtract"
            ? "-"
            : operation === "multiply"
            ? "*"
            : "Invalid operation";
    const operationOptions = ["add", "subtract", "multiply"];
    return {
        values: fractionString,
        result: result_answer,
        simbol: simbol,
        operationOptions: operationOptions,
    };
}
// ------------------------------------------------------------------------------------------
export function addFractions(fraction1, fraction2) {
    // Parse the fractions
    const [numerator1, denominator1] = fraction1.split("/").map(Number);
    const [numerator2, denominator2] = fraction2.split("/").map(Number);

    // Find a common denominator
    const commonDenominator = denominator1 * denominator2;

    // Add the numerators with the common denominator
    const sumNumerator = numerator1 * denominator2 + numerator2 * denominator1;

    // Simplify the result
    const gcd = findGCD(sumNumerator, commonDenominator);
    const simplifiedNumerator = sumNumerator / gcd;
    const simplifiedDenominator = commonDenominator / gcd;

    // Return the result as a string
    return `${simplifiedNumerator}/${simplifiedDenominator}`;
}
// ------------------------------------------------------------------------------------------
// Function to subtract two fractions
export function subtractFractions(fraction1, fraction2) {
    // Parse the fractions
    const [numerator1, denominator1] = fraction1.split("/").map(Number);
    const [numerator2, denominator2] = fraction2.split("/").map(Number);

    // Find a common denominator
    const commonDenominator = denominator1 * denominator2;

    // Subtract the numerators with the common denominator
    const subtractedNumerator =
        numerator1 * denominator2 - numerator2 * denominator1;

    // Simplify the result
    const gcd = findGCD(Math.abs(subtractedNumerator), commonDenominator);
    const simplifiedNumerator = subtractedNumerator / gcd;
    const simplifiedDenominator = commonDenominator / gcd;

    // Determine the sign of the result
    const sign = subtractedNumerator < 0 ? "-" : "";

    // Return the result as a string
    return `${sign}${Math.abs(simplifiedNumerator)}/${simplifiedDenominator}`;
}
// ------------------------------------------------------------------------------------------
// Function to multiply two fractions
export function multiplyFractions(fraction1, fraction2) {
    // Parse the fractions
    const [numerator1, denominator1] = fraction1.split("/").map(Number);
    const [numerator2, denominator2] = fraction2.split("/").map(Number);

    // Multiply the numerators and denominators separately
    const productNumerator = numerator1 * numerator2;
    const productDenominator = denominator1 * denominator2;

    // Simplify the result
    const gcd = findGCD(Math.abs(productNumerator), productDenominator);
    const simplifiedNumerator = productNumerator / gcd;
    const simplifiedDenominator = productDenominator / gcd;

    // Determine the sign of the result
    const sign = productNumerator < 0 ? "-" : "";

    // Return the result as a string
    return `${sign}${Math.abs(simplifiedNumerator)}/${simplifiedDenominator}`;
}
// ------------------------------------------------------------------------------------------
// Function to find the greatest common divisor (GCD) using Euclid's algorithm
function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
}
