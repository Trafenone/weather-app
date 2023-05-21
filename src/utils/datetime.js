export const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

export const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
]

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
    let hours = ("0" + date.getHours()).slice(-2);
    let minutes = ("0" + date.getMinutes()).slice(-2);

    return hours + ":" + minutes;
}

export const info = (date) => {
    date = getDate(date);

    let dayOfWeek = days[date.getDay()];
    let dayOfMonth = date.getDate();
    let month = months[date.getMonth()];

    return [dayOfWeek, dayOfMonth, month];
}