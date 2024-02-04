function oddAndEven(numbers){
    let oddNumbers = [];
    let evenNumbers = [];
    for(let number of numbers){
        if(number % 2 === 1){
            oddNumbers.push(number)
        }
        else{
            evenNumbers.push(number);
        }
    }
    // odd number and average mark----------------
    let sum = 0;
    for(let oddNumber of oddNumbers){
        sum +=oddNumber

    }
    let count = oddNumbers.length;
    const average = sum /count;
    return average;
}

const numberList = [ 2, 5, 6, 7, 9, 5]
const averages = oddAndEven(numberList)
console.log(averages);