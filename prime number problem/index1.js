function isPrime(number) {
    if (number < 2) {
        console.log(`${number} is not a prime number because it is less than 2.`);
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} is divisible by ${i}, so it is not a prime number.`);
            return false;
        }
    }

    console.log(`${number} is a prime number.`);
    return true;
}

// Example usage
const number = 29;
isPrime(number);  // The function itself will log the result
