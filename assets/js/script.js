// code that interacts with DOM wrapped in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
$(document).ready(function () {
  
  $(".saveBtn").on("click", function() { //listener for click events
    const time = $(this).parent().attr("id"); //used DOM traversal to find time
    const description = $(this).siblings(".description").val(); //used DOM traversal to find description
    localStorage.setItem(time, description);
  });
 
  //function to apply past, present, and future class comparing to id wo current hour
function updater () {
  const currentHour = dayjs().hour()
  $(".time-block").each(function(){
    const hour = parseInt($(this).attr("id").split('-')[1]);
    if (hour < currentHour) {
      $(this).addClass("past")
    } else if (currentHour === hour){
      $(this).removeClass("past"); 
      $(this).addClass("present");
     
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

    };
  });
};
updater();

//code to get user input that was saved in localStorage and set values to corresponding textarea elements
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Displays the current date in the header of the page
$('#currentDay').text(dayjs().format('MMMM DD, YYYY'));
});
