export function generateRandomFraction(maxDenominator = 10, quantity = 2) {
    const fractionString = [];

    for (let i = 1; i <= quantity; i++) {
        const numerator = Math.floor(Math.random() * maxDenominator) + 1;
        const denominator = Math.floor(Math.random() * maxDenominator) + 1;

        fractionString.push(`${numerator}/${denominator}`);
    }

    // Generate random numerator and denominator (between 1 and 10 for simplicity)

    // Create the fraction string

    return {"values":fractionString, "result":addFractions(fractionString[0], fractionString[1])};
}
console.log(generateRandomFraction(5)); 
// console.log(generateRandomFraction());

export function addFractions(fraction1, fraction2) {
    // Parse the fractions
    const [numerator1, denominator1] = fraction1.split('/').map(Number);
    const [numerator2, denominator2] = fraction2.split('/').map(Number);
  
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
  
  // Function to find the greatest common divisor (GCD) using Euclid's algorithm
  function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
  }

//   console.log(addFractions('1/4', '3/3'));