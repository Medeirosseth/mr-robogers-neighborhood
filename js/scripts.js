///Business Interface
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
function beepboop(number){
  const numbers = ["0","1","2","3","4","5","6","7","8","9"]
  numbers.forEach(function(number) {
    ;
  })  
}

/

/// if number contains 3 overrides other numbers
/// if number contains 2 and is not with 3 return "BOOP"
/// numbers 4-9 should return their value i.e. 4,5,6,7,8,9




///User Interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
   const robotLanguage = $("input#translator").val()
    $("#results").text(robotLanguage);

  });
});