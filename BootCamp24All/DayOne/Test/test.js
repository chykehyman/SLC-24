'use strict';

const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const getPrimeApp = require('../Script/getPrime.js');



describe("Return an array of prime numbers", function() {
    it("Should return [2, 3, 5] as prime numbers with range of 0 to 5", () => {
        assert.deepEqual(getPrimeApp.getPrimeNumbers(5), [2, 3, 5]);
    })
    it("should return [2, 3, 5, 7] as prime numbers with a range of 0 to 7", () => {
        assert.deepEqual(getPrimeApp.getPrimeNumbers(7), ([2, 3, 5, 7]));
    })
})

describe("Check if a number is prime", () => {
    it("should return true if number is prime", () => {
        assert(getPrimeApp.checkIfPrime(23) === true);
    });
    it("should return false if number is not prime", () => {
        assert(getPrimeApp.checkIfPrime(65) === false);
    });
});

describe("Check for correct data type", () => {
    it("should return `Argument passed is empty`", () => {
        assert(getPrimeApp.getPrimeNumbers(" ") === "Argument passed is empty");
    });
    it("should return `Passed argument is undefined`", () => {
        assert(getPrimeApp.getPrimeNumbers(undefined) === "Passed argument is undefined");
    });
    it("should return `Passed argument must be a number`", () => {
        assert(getPrimeApp.getPrimeNumbers("Five") === "Passed argument must be a number");
    });
    it("should return `Passed argument is undefined`", () => {
        assert(getPrimeApp.getPrimeNumbers(false) === "Passed argument is undefined");
    });
    it("should return `Passed argument must be an number greater than one`", () => {
        assert(getPrimeApp.getPrimeNumbers(0) === "Passed argument must be an number greater than one");
    });
    it("should return `Passed argument must be an number greater than one`", () => {
        assert(getPrimeApp.getPrimeNumbers(0) === "Passed argument must be an number greater than one");
    });
    // it("should return `Input should be a number`", () => {
    //     assert(getPrimeApp.getPrimeNumbers(null) === "Input should be a number");
    // });
});


