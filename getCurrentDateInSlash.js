const getCurrentDateInSlash = () => {
    // return date in mm/dd/yyyy format
    let d = new Date();
    let date = d.getDate();
    let mon = d.getMonth()+1;
    let yr = d.getFullYear();
    return `${mon}/${date}/${yr}`
}