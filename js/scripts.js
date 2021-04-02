// const zero = 0 
// const one = 1
// function beepboop(number){
//  if (zero == one){
//    return true;
//  }
  
// }
// console.log(beepboop(number))

const text = "hello there "
function wordCounter(text) {
 let wordCount = 0;
 const wordArray = text.split(" ");
 wordArray.forEach(function(word) {
   wordCount++;
 });
 return wordCount;
 console.log(text);
}

