//rotate an array by k times
let arrayNumber = [5,12,32,101,153,171,192,376,33,5743,23,7,553,199,11101]
let rotatedArray = ((array, k) => {
    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array
})(arrayNumber, 5)
console.log(rotatedArray)