

$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values

        // save in localStorage
        localStorage.setItem('hour-9', '#hour-9 .description');
        localStorage.setItem('hour-10', '#hour-10 .description');
        localStorage.setItem('hour-11', '#hour-11 .description');
        localStorage.setItem('hour-12', '#hour-12 .description');
        localStorage.setItem('hour-13', '#hour-13 .description');
        localStorage.setItem('hour-14', '#hour-14 .description');
        localStorage.setItem('hour-15', '#hour-15 .description');
        localStorage.setItem('hour-16', '#hour-16 .description');
        localStorage.setItem('hour-17', '#hour-17 .description');
        
        // Show notification that item was saved to localStorage by adding class 'show'

        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    });
    function hourUpdater() {
        // get current number of hours (preferably with moment.js)

        // loop over time blocks
        // loop over time blocks ---> https://api.jquery.com/each/
        // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file

        // check if we've moved past this time
    }

    hourUpdater();
   

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    ///need to repeat line 21 for all the other hours


    // display current day on page
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY'));

    console.log(moment());

    var time = moment();
    var hour = moment().hours();
});