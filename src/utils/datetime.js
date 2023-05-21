export const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

export const getDate = (timestamp) => new Date(timestamp * 1000);

export const formattedDate = (date) => {
    date = getDate(date);
    let dayOfWeek = days[date.getDay()];
    let dayOfMonth = date.getDate();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);

    return dayOfWeek + " " + dayOfMonth + "." + month;
}

export const time = (date) => {
    date = getDate(date);
    var hours = ("0" + date.getHours()).slice(-2);
    var minutes = ("0" + date.getMinutes()).slice(-2);

    return hours + ":" + minutes;
}