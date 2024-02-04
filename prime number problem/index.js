function isPrime(number) {
    
    for (let i = 0; i < number; i++) {
       
        if (number % i === 0) {
            console.log(`${number} is not a prime number.`);
            return false;
        }
    }

    
    console.log(`${number} is a prime number.`);
    return true;
}


const number = 3; 
isPrime(number); 
