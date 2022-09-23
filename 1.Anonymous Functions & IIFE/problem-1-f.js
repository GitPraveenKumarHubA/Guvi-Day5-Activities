//return median of two sorted arrays of same size
let arr1 = [1,2,3,5,7,8]
let arr2 = [7,8,9,11,12]
let resultMedian = function (arr1, arr2) {
    let result = []
    let lenArr1 = arr1.length
    let lenArr2 = arr2.length
    if (lenArr1 % 2 === 0) {
        console.log(arr1[lenArr1 / 2])
    } else {
        console.log(arr1[(lenArr1 + 1) / 2])
    }
    if (lenArr2 % 2 === 0) {
        console.log(arr2[lenArr2 / 2])
    } else {
        console.log(arr2[(lenArr2 + 1) / 2])
    }
    return
}(arr1, arr2)