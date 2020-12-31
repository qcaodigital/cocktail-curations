export default function covertPrismicDate(date){
    let [year, month, day] = date.split("-");
    switch(month){
        case '1': month = 'Jan.'; break;
        case '2': month = 'Feb.'; break;
        case '3': month = 'Mar.'; break;
        case '4': month = 'Apr.'; break;
        case '5': month = 'May'; break;
        case '6': month = 'June'; break;
        case '7': month = 'July.'; break;
        case '8': month = 'Aug.'; break;
        case '9': month = 'Sept.'; break;
        case '10': month = 'Oct.'; break;
        case '11': month = 'Nov.'; break;
        case '12': month = 'Dec.'; break;
    }
    return `${month} ${day}, ${year}`
}