//gets date in dd-mm-yyyy format
const getAnyDateInSlash = (datestring) => {
    // return date in mm/dd/yyyy format
    let date = datestring.split('-')[2]
    let mon = datestring.split('-')[1]
    let yr = datestring.split('-')[0]
    return `${mon}/${date}/${yr}`
}