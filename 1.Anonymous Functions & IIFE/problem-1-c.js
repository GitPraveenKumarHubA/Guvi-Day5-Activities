//Sum of all numbers in an array
let arrayNumber = [5, 12, 32, 21, 15, 11, 192, 76, 33, 543, 11, 199, 3245]
let resultSum = (function (arrayNumber) {
    return (arrayNumber.reduce((total, item) => {
        return total + item
    }, 0))
})(arrayNumber);
console.log(resultSum)