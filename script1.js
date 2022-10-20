//1
let numberArray = [1, 2, 3, 4, 5, 6, 98, 101, 467]

console.log("Odd Numbers in Number Array are: " + numberArray.filter((item) => {

    return item % 2 !== 0

}))


//2
let stringArray = ["Akshay", "is", "a", "smart", "developer"]

stringArray = stringArray.map((item) => {

    return item.toUpperCase()

})

console.log("Converted String Array is: " + stringArray)


//3
let sum = numberArray.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log("Sum of elements in Number Array: " + sum)


//4
console.log("Prime Number is Array are: " +
    numberArray.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))

//5

let arrayPallindrome = [111, 102, 505, 323, 612, 776, 707, 121]

console.log("Pallindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))