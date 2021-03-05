// add date with this variable from Luxon, adding the "luxon." to DateTime.now
var dt = luxon.DateTime.now();
// format the dt
dt.toLocaleString(luxon.DateTime.DATETIME_FULL);
// add the formatted dt to the currentDay <p>
$("#currentDay").text(dt.toLocaleString(luxon.DateTime.DATETIME_FULL));
//id="currentDay" class="lead"
// create a row for each time block, color coded for past, present, future 

// click a time block to enter an event

// click save to save text in local storage so that it persists



/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */