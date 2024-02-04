function noDuplicate(arr){
    let unique = [];
    for(let item of arr){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    console.log(unique)
}

const nameList = ['abul', 'babul','biddut', 'kabul', 'babul','biddut', 'sabul', 'abul', 'kabul'];
const numberList = [3, 55, 23, 22, 5, 3, 23, 44, 22, 44];
const noDuplicatesArray = noDuplicate(numberList);
console.log(noDuplicatesArray);