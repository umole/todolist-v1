function getDate() {
    const currentDay = new Date();
    // const daysOfTheWeek = ["Sunday", "Monday", "Tueday", "Wednessday", "Thursday", "Friday", "Saturday"]
    // const day = daysOfTheWeek[currentDay.getDay()];

    const options = { 
        weekday: 'long', 
        //year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };

    day = currentDay.toLocaleDateString('en-us', options);
    return day;
}

module.exports = getDate;