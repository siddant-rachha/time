const endDate = new Date(constants.futureDate)
const setCurrentTime = () => {
    const d = new Date();
    let currentDate = `${d.getFullYear()}-${singleToDoubleDigit(d.getMonth() + 1)}-${d.getDate()},
    hrs: ${d.getHours()}, min: ${d.getMinutes()}, sec: ${d.getSeconds()}`;
    document.getElementById('todaysdate').innerHTML = currentDate;
}
const getHoursRemaining = () => {
    const d = new Date();
    const diffTime = Math.abs(endDate - d);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let currentDate = `Days: ${diffDays} hrs: ${(diffTime / 3600000).toFixed(0)},
     min: ${((diffTime / 3600000) * 60).toFixed(0)},
      sec: ${((diffTime / 3600000) * 60 * 60).toFixed(0)}`;
    document.getElementById('remainingtime').innerHTML = currentDate;
}