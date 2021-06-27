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
    writeMonth.innerHTML = "<h4>"+ monthArray[mon] + " " +  d.getFullYear() +"</h4>";

    // Create Header of days of week names
    let table = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

    // Spaces for the first row
    for(let i = 0; i < d.getDay(); i++) {
        table += "<td></td>";
    }

    // Actual Dates
    while(d.getMonth() === mon) {

        if(d.getMonth() === today.getMonth() && d.getDate() === today.getDate() && d.getFullYear() === today.getFullYear()) {
            table += "<td class='bg-danger'><p class='today' onclick='showTimeTable(this)'>" + d.getDate() + "</p></td>";
        } else if(d.getMonth() > today.getMonth() || d.getDate() > today.getDate() || d.getFullYear() > today.getFullYear()) {
            table += "<td class='bg-primary'><p class='validDay' onclick='showTimeTable(this)'>" + d.getDate() + "</p></td>";
        } else  {
            table += "<td><p>" + d.getDate() + "</p></td>";
        }

        // Saturday last day of week
        if(d.getDay() === 6) {
            table += "</tr><tr>"
        }

        d.setDate(d.getDate() + 1);
    }

    // Spaces for last row
    if(d.getDay() !== 0) {
        for(let i = d.getDay(); i < 7; i++) {
            table += "<td></td>";
        }
    }

    // Close the table
    table += "</tr>"

    elem.innerHTML = table;
}

// Create initial calendar of today's date
createCalendar(calendar, date.getFullYear(), date.getMonth());

// Function to change months forward or back
function changeMonth (direction) {
    let newMonth = date.getMonth();
    let newYear = date.getFullYear();

    let buttons = document.getElementById("buttons");

    if(direction === 1) {
        newMonth++;

        buttons.innerHTML = '<p class="btn btn-secondary" id="prev" onClick="changeMonth(0)" style="margin-right: 20px">Prev</p>' +
            '                <p class="btn btn-secondary" onclick="changeMonth(1)">Next</p>'

    } else {
        newMonth--;
        if(newMonth === today.getMonth() && date.getFullYear() === today.getFullYear()) {
            buttons.innerHTML = '<p class="btn btn-secondary" onclick="changeMonth(1)">Next</p>'
        }
    }
    if(newMonth === -1) {
        newMonth = 11;
        newYear--;
    }
    if(newMonth === 12) {
        newMonth = 0;
        newYear++;
    }
    date.setMonth(newMonth);
    date.setFullYear(newYear)
    createCalendar(calendar, newYear, newMonth)
}

function showTimeTable(elem){

    const day = parseInt(elem.innerHTML);
    date.setDate(day);

    const maxTime = 22;
    const minTime = 9;
    const currHour = date.getHours();


    const timeDiv = document.getElementById("timeDiv");
    timeDiv.style.visibility = "visible";

    const times = document.getElementById("times");
    let timeStringBuilder = "";

    if(day === today.getDate()) {

        for(let i = currHour + 1; i <= maxTime; i++) {
            timeStringBuilder += "<p class='times btn btn-primary' style='width:75px' onclick='makeAppointment(this)'>" +  i + ":00"  + "</p>";
        }

    } else {

        for(let i = minTime; i <= maxTime; i++) {
            timeStringBuilder += "<p class='times btn btn-primary' style='width:75px' onclick='makeAppointment(this)'>" +  i + ":00"  + "</p>";
        }

    }

    times.innerHTML = timeStringBuilder;

}

function makeAppointment(time) {

    const month = date.getMonth();
    const year = date.getFullYear();
    const inputDate = new Date(year, month);
    inputDate.setDate(date.getDate());
    const inputTime = time.innerHTML;

    let parsedTime;
    if(inputTime.length > 4) {
        parsedTime = parseInt(inputTime.substr(0,2));
    } else {
        parsedTime = parseInt(inputTime[0])
    }

    inputDate.setHours(parsedTime);
    window.location.href ="http://localhost:9000/calendar/"+ inputDate;
    return inputDate;
}


