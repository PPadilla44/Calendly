const monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";

const today = new Date();
const date = new Date();

const calendar = document.getElementById("calendar");




function createCalendar(elem, year, month) {
    let mon = month;
    let d = new Date(year, mon);

    // Write Current month from monthArray
    let writeMonth = document.getElementById("month");
    writeMonth.innerHTML = "<h4>" + monthArray[mon] + " " + d.getFullYear() + "</h4>";

    // Create Header of days of week names
    let table = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

    // Spaces for the first row
    for (let i = 0; i < d.getDay(); i++) {
        table += "<td class='filler'></td>";
    }

    // Actual Dates
    while (d.getMonth() === mon) {

        if (d.getMonth() === today.getMonth() && d.getDate() === today.getDate() && d.getFullYear() === today.getFullYear()) {
            table += "<td onmouseover='dim(this)' onmouseout='undim(this)' class='day'><p class='validDay' onclick='showTimeTable(this)'>*" + d.getDate() + "*</p></td>";
        } else if (d.getMonth() > today.getMonth() || d.getDate() > today.getDate() || d.getFullYear() > today.getFullYear()) {
            table += "<td onmouseover='dim(this)' onmouseout='undim(this)' class='day'><p class='validDay' onclick='showTimeTable(this)'>" + d.getDate() + "</p></td>";
        } else {
            table += "<td><p>" + d.getDate() + "</p></td>";
        }

        // Saturday last day of week
        if (d.getDay() === 6) {
            table += "</tr><tr>"
        }

        d.setDate(d.getDate() + 1);
    }

    // Spaces for last row
    if (d.getDay() !== 0) {
        for (let i = d.getDay(); i < 7; i++) {
            table += "<td class='filler'></td>";
        }
    }

    // Close the table
    table += "</tr>"

    elem.innerHTML = table;
}

// Create initial calendar of today's date
createCalendar(calendar, date.getFullYear(), date.getMonth());

// Function to change months forward or back
function changeMonth(direction) {
    let newMonth = date.getMonth();
    let newYear = date.getFullYear();

    let buttons = document.getElementById("buttons");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");

    if (direction === 1) {
        newMonth++;
        if (newMonth >= today.getMonth() + 1  && date.getFullYear() === today.getFullYear()) {
            next.style.visibility = "hidden";
            prev.style.visibility = "visible";
        } else {
            next.style.visibility = "visible";
            prev.style.visibility = "visible";
        }


    } else {
        newMonth--;
        if (newMonth === today.getMonth() && date.getFullYear() === today.getFullYear()) {
            next.style.visibility = "visible";
            prev.style.visibility = "hidden";
        }
    }
    if (newMonth === -1) {
        newMonth = 11;
        newYear--;
    }
    if (newMonth === 12) {
        newMonth = 0;
        newYear++;
    }
    date.setMonth(newMonth);
    date.setFullYear(newYear)
    createCalendar(calendar, newYear, newMonth)
}

function showTimeTable(elem) {


    const day = parseInt(elem.innerHTML);
    date.setDate(day);

    const maxTime = 22;
    const minTime = 9;
    const currHour = date.getHours();


    const timeDiv = document.getElementById("timeDiv");
    timeDiv.style.visibility = "visible";

    const times = document.getElementById("times");
    let timeStringBuilder = "";

    if (day === today.getDate()) {

        for (let i = currHour + 1; i <= maxTime; i++) {
            timeStringBuilder += "<p class='times btn btn-primary' style='width:75px' onclick='makeAppointment(this)'>" + i + ":00" + "</p>";
        }

    } else {

        for (let i = minTime; i <= maxTime; i++) {
            timeStringBuilder += "<p class='times btn btn-primary' style='width:75px' onclick='makeAppointment(this)'>" + i + ":00" + "</p>";
        }

    }
    // day = [13] each element is hour max = 3
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    // Make 2 hour appointment at 11 am
    // [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0]
    // Make 1 hour appointment at 11 am
    // [0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0]
    // Make 2 hour appointment at 10 am
    // [0,1,3,1,0,0,0,0,0,0,0,0,0,0,0,0]

    //Month [days[], days[]]

    times.innerHTML = timeStringBuilder;

}

function makeAppointment(time) {

    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const inputDate = new Date(year, month);
    inputDate.setDate(date.getDate());
    const inputTime = time.innerHTML;

    let parsedTime;
    if (inputTime.length > 4) {
        parsedTime = parseInt(inputTime.substr(0, 2));
    } else {
        parsedTime = parseInt(inputTime[0])
    }
    inputDate.setHours(parsedTime);

    let day = inputDate.getDate();
    let hour = inputDate.getHours();

    console.log(day)

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }

    //2021-06-28T07:00:00
    let formatDateString = `${year}-${month}-${day}T${hour}:00:00`
    window.location.href = "http://localhost:9000/calendar/" + formatDateString;

//     let url = "http://localhost:9000/calendar/confirmation";
//     let data = {date: formatDateString};
//
//     fetch(url, {
//         body: JSON.stringify(data),
//         method: "POST",
//         headers: {"Content-Type": "application; charset=UTF-8"},
// })
// .then(res => {
//     console.log(res);
//     /*return res.json();*/
// })
//     .catch(err => {
//         console.log(err)
//     })
}

function dim(elem) {
    elem.className = "hoveredDay";
}
function undim(elem) {
    elem.className = "day";
}

