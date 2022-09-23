//return all the palindromes in an array
let numberArray = [101,461,237,12,25,1012,321,473,7654567,34543]
console.log(numberArray.filter((item) => {
        let temp = item + "";
        if (temp.split('').reverse().join('') === item + "")
            return true
        return false
    }))