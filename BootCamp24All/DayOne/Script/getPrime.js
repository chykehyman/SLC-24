'use strict';

   const getPrimeNumbers = (num) => {
        const primeArray = [];
        let j;
        if(num === " "){
            return "Argument passed is empty";
        }else if (num === undefined || num === false) {
            return "Passed argument is undefined";
        } else if (typeof num !== 'number') {
            return 'Passed argument must be a number';
        }else if (num <= 1) {
            return 'Passed argument must be an number greater than one';
        }else if (num instanceof Array) {
            return 'Passed argument must not be an an array';
        }else {
           
            for (j = 2; j <= num; ++j) {
                if (checkIfPrime(j))
                    primeArray.push(j);

            }
            console.log(primeArray);
            return primeArray;
        }
    }

        const checkIfPrime = (number) => {
            let i;
            if (number < 2) return false;
            for (i = 2; i < number; i++) {
                if (number % i === 0)
                    return false;
            }
            return true;
        }
        module.exports = {
            getPrimeNumbers, checkIfPrime
        }



