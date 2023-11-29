const mapMonth = (value) => {
    let monthValue;
    switch (value) {
        case 0:
            monthValue = 'Jan'
            break;
        case 1:
            monthValue = 'Fab'
            break;
        case 2:
            monthValue = 'March'
            break;
        case 3:
            monthValue = 'April'
            break;
        case 4:
            monthValue = 'May'
            break;
        case 5:
            monthValue = 'June'
            break;
        case 6:
            monthValue = 'July'
            break;
        case 7:
            monthValue = 'August'
            break;
        case 8:
            monthValue = 'September'
            break;
        case 9:
            monthValue = 'October'
            break;
        case 10:
            monthValue = 'November'
            break;
        case 11:
            monthValue = 'December'
            break;
        default:
            break;
    }
    return monthValue;

}
const locationMapping={
    0:'Offline',
    1:'Virtual'
}
export {
    mapMonth,
    locationMapping,
}