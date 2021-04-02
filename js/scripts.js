///Business logic

const numbers = ["0","1","2","3","4","5","6","7","8","9"]
function robotLanguage(number){
  const numbers = ["0","1","2","3","4","5","6","7","8","9"]
  const one = [1];
  const two = [2];
  const three = [3];
  numbers.forEach(number){
    if (numbers.includes(number)){

    
  }
    return robotLanguag
}

///User Interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
   const robotLanguage = $("input#translator").val()
    $("#results").text(robotLanguage(number));

  });
})