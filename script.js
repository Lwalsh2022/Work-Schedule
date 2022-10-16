
var currentTime = moment().format('H'); 
var time = moment();
var hour = moment.duration().hours();

// moment function to display current date and time
$(document).ready(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY'));

    // console.log(moment());
    

    // local storage and user value recall function
    function plannerActions() {
        $('.time-block').each(function () {
            var id = $(this).attr('id');
            var userInput = localStorage.getItem(id);

            if (userInput != null) {
                $(this).find('.description').val(userInput);

            }  
        });
    }


    plannerActions();
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function () {
        var id = $(this).parent().attr('id');
        var userInput = $(this).siblings('.description').val();
        localStorage.setItem(id, userInput);
    });

    // class change function
    
      function timeColor() {
        hour = time.hour();
        $('.time-block').each(function () {
            // var targetHour = parseInt($(this).attr('id'));
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockTime, currentTime);

            if (blockTime < currentTime) {
                $(this).addClass('past');
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockTime === currentTime) {
                $(this).addClass('present');
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else if (blockTime > currentTime) {
                $(this).addClass('future');
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        });
    }

    // timeColor();
})



