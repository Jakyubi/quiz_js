let x1 = 0; //points for each team
let x2 = 0;
let x3 = 0;

let qurentQuestionNumber = 1; //checks which team's turn it is


//let correctAnswer = null;
const input = document.getElementById("plik");
const question = document.getElementById("zawartosc");
const ans1 = document.getElementById("first_ans");
const ans2 = document.getElementById("second_ans");
const ans3 = document.getElementById("third_ans");


input.addEventListener("change", function() {
  const plik = this.files[0];   //read json file
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const json = JSON.parse(e.target.result);
    
    correctAnswer = json.correctAnswer;
    
    question.innerText = json.quest; //show question on website

    ans1.innerText = json.answer1; //show answers on website
    ans2.innerText = json.answer2;
    ans3.innerText = json.answer3;
    
    
    
    ans1.addEventListener("click", function(){ //when first answer is correct
      
      if(correctAnswer === "1"){
        if(qurentQuestionNumber % 3 === 1){ //if its first team turn
          x1++; //add point
          document.getElementById("pkt1").innerHTML = x1; //show updated point number
        }else if(qurentQuestionNumber % 3 === 2){ //if its second team turn
          x2++;
          document.getElementById("pkt2").innerHTML = x2;
        }else { //if its third team turn
          x3++;
          document.getElementById("pkt3").innerHTML = x3;
        }
        qurentQuestionNumber++; //update turn
      }
      
    });
    
    ans2.addEventListener("click", function(){ //when second answer is correct
      if(correctAnswer === "2"){
        if(qurentQuestionNumber % 3 === 1){
          x1++;
          document.getElementById("pkt1").innerHTML = x1;
        }else if(qurentQuestionNumber % 3 === 2){
          x2++;
          document.getElementById("pkt2").innerHTML = x2;
        }else {
          x3++;
          document.getElementById("pkt3").innerHTML = x3;
        }
        qurentQuestionNumber++;
      }
      
    });
    
    ans3.addEventListener("click", function(){ //whne third answer is correct
      if(correctAnswer === "3"){
        if(qurentQuestionNumber % 3 === 1){
          x1++;
          document.getElementById("pkt1").innerHTML = x1;
        }else if(qurentQuestionNumber % 3 === 2){
        x2++;
        document.getElementById("pkt2").innerHTML = x2;
      }else {
        x3++;
        document.getElementById("pkt3").innerHTML = x3;
      }
      qurentQuestionNumber++;
    }
  });

  
}
reader.readAsText(plik);


});



const music = document.getElementById("music"); //music
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "Wyłącz muzykę";
  } else {
    music.pause();
    musicBtn.textContent = "Włącz muzykę";
  }
});
