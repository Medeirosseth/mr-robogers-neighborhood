///Business Interface

const numbers = ["0","1","2","3","4","5","6","7","8","9"]
function robotLanguage(num1, num2){
  const numbers = ["0","1","2","3","4","5","6","7","8","9"]
  const zero = 0;
    if (zero == 0 ){
      return true;
    } 
    return robotLanguage
}




///User Interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
   const robotLanguage = $("input#translator").val()
    $("#results").text(robotLanguage);

  });
});