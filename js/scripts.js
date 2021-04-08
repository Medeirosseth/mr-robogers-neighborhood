// ///Business logic

  function beepboop(slang) {
    let robotSlang = ("1,2,3,4,5,5,6");
    let robotLanguage = robotSlang.map(function(slang) {
      if (slang.includes("3")) {
        return "Wont you be my neighbor";
      } else if ( slang.includes("2")) {
        return "BEEP!";
      } else (slang.includes("1")); {
        return "BOOP!";
      }
      
    })
  };  


console.log(robotSlang(3))



//User Interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
   let robotSlang = $("input#translator").val()
    $("#results").text(robotSlang);

  });
  robotSlang
});

// // function beepboop(num) {
// //   let robotSlang = [];
// //   for(let i = 0; i <= 50 ; i++){
// //     robotSlang.push(i.toString());
// //     if (robotTalk[i].include(1)) {
// //     robotSlang.push("Beep");
// //    } else {
// //       robotSlang.push(num);
// //     }
// // } return robotSlang
// // }