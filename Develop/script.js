// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var today = dayjs();
//add text to paragraph using dayjs
$('#currentDay').text(today.format('dddd'+' MMM D, YYYY'));
$(function () {

  //locate the save button then add event handler for clicking on the save button
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);

})

//create function to change the highlight of the time blocks depending on the current time
  function timeChanger(){
    var exactTime = dayjs().format('H');
    var timeCheck = 0;
    var timePiece = $('#hour-' + timeCheck);
    console.log(exactTime);

    for(i = 0; i < 18;i++){
    
      if(exactTime > timeCheck){
        timePiece = $('#hour-' + timeCheck);
        timePiece.removeClass("future");
        timePiece.removeClass("present");
        timePiece.addClass('past');
        timeCheck++;

      }else if(exactTime == timeCheck){
        timePiece = $('#hour-' + timeCheck);
        timePiece.removeClass("future");
        timePiece.removeClass('past');
        timePiece.addClass("present");
        timeCheck++;
     
      }else{
        timePiece = $('#hour-' + timeCheck);
        timePiece.removeClass("past");
        timePiece.removeClass("present");
        timePiece.addClass('future');
        timeCheck++;
 
      }
    }
 
    
  }
  
  timeChanger();
  //bellow we need to access the local storage so when user refreshes the page the data entered from before is still there
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
