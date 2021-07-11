//used to convert single digit month number to double digit
//7-->07
const singleToDoubleDigit = (digit) => {
    if(digit<10){
        return `0${digit}`
    }
    return digit;
}