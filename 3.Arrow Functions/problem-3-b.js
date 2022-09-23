//convert all the strings to title caps in a string array
let stringArray = ["praveen", 'is', 'an', 'unlucky', 'man','who','does','not','choked.']
stringArray = stringArray.map((item) => {
    return item.toUpperCase()
})
console.log(stringArray)