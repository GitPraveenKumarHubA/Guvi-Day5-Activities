//print odd numbers in a array
let arrayNumber = [5, 12, 32, 211, 153, 171, 192, 376, 33, 5743, 553, 199, 11101]
let odd = (
    function (arrayNumber) 
{
    return (arrayNumber.filter((item) => 
    {
        return item % 2 !== 0
    }))
})(arrayNumber);
console.log(odd)