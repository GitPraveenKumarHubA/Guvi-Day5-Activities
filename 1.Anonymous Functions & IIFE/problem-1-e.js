//return all the palindromes in an array
let arrayNumber = [5,12,32,101,153,171,192,376,33,5743,23,7,553,199,11101]
let resultPalindrome = (function (arrayNumber) {
    return (arrayNumber.filter((item) => {
        let temp = item + ""
        if ((temp.split('').reverse().join('')) === item + "")
            return true
        return false
    }))
})(arrayNumber);
console.log(resultPalindrome)
