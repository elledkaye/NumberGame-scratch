//boolean vlue to change the color of the button based on the answer the user gives 
var timeLimit, timerStart,currentDot;

var playingField = document.getElementById('playingField'); //get element id from html doc named 'playingField'
var timer = document.getElementById('timer'); //get element id from html doc named 'timer'
const maxTimeLimit = 10;
const initialState ="Start";
const restartState ="Quit";
const second_interval = 1000;
const dotsPerlevel = 10;


//function play button
function play(playButton) {
    if (playButton.innerHTML === initialState){ //if playbutton is equal to the initial state (onclick)
        playButton.innerHTML = restartState; //change button text to "Quit" and to restart state
        timeLimit = maxTimeLimit; //time limit is sewt to max time limit which is 10 seconds
        currentDot = 1;
        removeDots(); //function call removeDots
        addDots(); //function call addDots
        timerStart = setInterval(time, second_interval);

    } 

    else{
        playButton.innerHTML = initialState; 
      clearInterval(timerStart); 
      setTimeLimit();
      
    }
}
function time(){
    timeLimit --; 
    if(timeLimit >= 0){
    timer.innerHTML = ":" + timeLimit;
    }

    else{ 
        alert("Sorry You Lost!")
        clearInterval(timerStart);
    } 
}
function setTimeLimit(){
  timer.innerHTML = ":" + maxTimeLimit;
}

function addDots(){ 
   
    for(var num = 1; num <= dotsPerlevel; num++){
        var dot  = document.createElement('div');
    dot.className = "dot";
    dot.id = "dot"+num; 
    dot.innerHTML = num; 
    dot.onclick =verify;
    playingField.append(dot);
    }  
}
    
    function removeDots(){
        if(playingField.children.length > 0){ 
            for(var num =1; num <= dotsPerlevel; num++) {
                var dot = document.getElementById("dot"+ num); 
             //if the button is set to restart state and the user clicks the button remove all child elements 
             //(if onclick playbutton.innerHTML = restartState) remove all dot child elements
                playingField.removeChild(dot);
            }

        }
     
    } 
function verify(element){
    if(currentDot == element.srcElement.innerHTML){
        element.srcElement.className = "correct-dot";
        if(currentDot === dotsPerlevel && timer.innerHTML !== "0")
        alert("You Won!");
        currentDot++;
    }
    else{
        if(element.srcElement.className !== "correct-dot")
        element.srcElement.className = "incorrect-dot";
    }

}