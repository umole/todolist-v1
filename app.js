const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const dayOfTheWeek = new Date();
    let day = "";

    switch (dayOfTheWeek.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tueday";
            break;
        case 3:
            day = "Wednessday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        
        default:
            break;
    }
    // if (dayOfTheWeek.getDay() == 6 || dayOfTheWeek.getDay() == 0) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";
    // };

    res.render("list", {kindOfDay: day});
});

app.listen(3000, () => {
    console.log("Server is listening on PORT: 3000");
});  