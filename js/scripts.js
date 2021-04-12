
  function beepboop(slang) {
    let robotSlang = [];
    for(let index = 0; index<= slang; index ++){
      if (index.toString().includes('3')){
        robotSlang.push("Wont you be my neighbor?");
      } else if (index.toString().includes('2')) {
        robotSlang.push("BOOP");
      } else if (index.toString().includes('2')) {
        robotSlang.push("BEEP!");
      } else {
        robotSlang.push(index.toString());
      }
    }
    return robotSlang
  }


//User Interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
   let robotSlang = $("input#translator").val()
   let robotLanguage = beepboop(robotSlang);
    $("#results").text(robotLanguage.toString());
  });
  
});

