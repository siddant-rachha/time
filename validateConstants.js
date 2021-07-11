// const startDate = constants.startDate;
// const futureDate = constants.futureDate;
// window.hasError = false;

// /**
//  * Get the number of days in any particular month
//  * @link https://stackoverflow.com/a/1433119/1293256
//  * @param  {integer} m The month (valid: 0-11)
//  * @param  {integer} y The year
//  * @return {integer}   The number of days in the month
//  */
//  var daysInMonth = function (m, y) {
//     switch (m) {
//         case 1 :
//             return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
//         case 8 : case 3 : case 5 : case 10 :
//             return 30;
//         default :
//             return 31
//     }
// };

// /**
//  * Check if a date is valid
//  * @link https://stackoverflow.com/a/1433119/1293256
//  * @param  {[type]}  d The day
//  * @param  {[type]}  m The month
//  * @param  {[type]}  y The year
//  * @return {Boolean}   Returns true if valid
//  */
// var isValidDate = function (d, m, y) {
//     m = parseInt(m, 10) - 1;
//     return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
// };


// // if(!isValidDate(startDate.split("-")[0], startDate.split("-")[1], startDate.split("-")[2])){
// //     alert('Invalid start Date in constants')
// //     window.hasError = true;
// // }
// // console.log(isValidDate(31, 11 , 2017));