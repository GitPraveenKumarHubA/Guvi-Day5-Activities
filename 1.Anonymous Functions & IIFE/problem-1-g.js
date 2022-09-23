//Remove duplicates from an array
let withDuplicate = [22,22,11,10,1110,1,2,6,7,5,6,3,56,10,1,2,6,7,5,6,3,56,3,9]
let withoutDuplicate = ((withDuplicate, index) => {
    return [...new Set(withDuplicate)]
})(withDuplicate)
console.log(withoutDuplicate)