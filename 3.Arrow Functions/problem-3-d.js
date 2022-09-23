//Return all the prime numbers in an array
let numberArray = [1,2,3,4,5,6,9,8,101,461,23,7,12,25,1012,321,473]
console.log(numberArray.filter((item) => {
        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;
    }))