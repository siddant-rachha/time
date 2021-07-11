const calculateDateDiff = (param1, param2) => {
    //in mm/dd/yyyy format
    let date1 = new Date(param1);
    let date2 = new Date(param2);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
