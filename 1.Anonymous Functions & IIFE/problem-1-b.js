//Convert all the strings to title caps in a string array
let stringArray = ["praveen", 'is', 'an', 'unlucky', 'man','who','does','not','choked.']
let resultStringArray = (function (stringArray) {
    return (stringArray.map((item) => {
        return item.toUpperCase()
    }))
})(stringArray);
console.log(resultStringArray)