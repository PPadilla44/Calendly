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
        table += "<td>" + d.getDate() + "</td>";

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

    if(direction === 1) {
        newMonth++;
    } else {
        newMonth--;
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


