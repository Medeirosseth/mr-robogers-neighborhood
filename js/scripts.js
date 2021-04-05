///Business logic
const beep = "BeEp!";
const boop = "BoOp!";
function beepboop(num) {
  let robotSlang = [];
  for(let i = 0; i <= num ; i++){
     robotSlang.push(i.toString());
  }

  let robotLanguage = robotSlang.map(function (slang) {
    if (slang.includes("1")) {
      return slang = boop
    } else
    return boop;
  }

}
console.log(robotSlang)



//User Interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
   const robotTalk = $("input#translator").val()
    $("#results").text(robotTalk);

  });
});