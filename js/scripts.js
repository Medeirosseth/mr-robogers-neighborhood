///Business logic

  function beepboop(num) {
    let robotSlang = [0,1,2,3,4,5,6,7,8,9,];
    let robotLanguage = []
    robotSlang.forEach(function(num) {
      robotSlang.push(i.toString());
      if (robotSlang[i].includes(1)) {
        robotLanguage.push("BEEP!")
      } else {
        robotLanguage.push(num);
      } return robotLanguage 
    })
  }  
//User Interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
   let robotSlang = $("input#translator").val()
    $("#results").text(robotLanguage);

  });
});

// function beepboop(num) {
//   let robotSlang = [];
//   for(let i = 0; i <= 50 ; i++){
//     robotSlang.push(i.toString());
//     if (robotTalk[i].include(1)) {
//     robotSlang.push("Beep");
//    } else {
//       robotSlang.push(num);
//     }
// } return robotSlang
// }