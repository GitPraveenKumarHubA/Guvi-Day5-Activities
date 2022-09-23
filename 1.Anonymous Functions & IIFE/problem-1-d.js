//Return all the prime numbers in an array
let arrayNumber = [5,12,32,101,153,171,192,376,33,5743,23,7,553,199,11101]
let resultPrime = (function (arrayNumber) {
    return (arrayNumber.filter((item) => {
        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }
        return true
    }))
})(arrayNumber);
console.log(resultPrime)