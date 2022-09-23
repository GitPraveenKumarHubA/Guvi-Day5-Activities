//Sum of all numbers in an array
let numberArray = [1,2,3,4,5,6,9,8,101,46,1,23,7,12,1,25,101,7,12,321,7]
let sum = numberArray.reduce((Total, item) => {
    return Total + item
}, 0)
console.log(sum)