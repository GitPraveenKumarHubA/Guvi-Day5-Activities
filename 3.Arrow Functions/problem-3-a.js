//print odd numbers in an array
let numberArray = [1,2,3,4,5,6,98,101,46,123,7,12125,101,7123217]
console.log(numberArray.filter((item) => {
    return item % 2 !== 0
}))