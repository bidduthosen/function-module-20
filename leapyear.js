function leapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const defindLeapYaer = leapYear(2049);
console.log(defindLeapYaer);