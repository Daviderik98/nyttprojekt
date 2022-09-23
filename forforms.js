function answerOne(){
    document.getElementById('firstans').innerHTML = "Etre et durer";
}
function answerTwo(){
    document.getElementById('firstans').innerHTML = "To be and To Last";
}
function answerThree(){
    document.getElementById('firstans').innerHTML = "Strength of Character";
}
function answerFour(){
    document.getElementById('firstans').innerHTML = "Be Strong Be Useful";
}





function twoClickOne(){
    document.getElementById('secondans').innerHTML = "Parkour";
}
function twoClickTwo(){
    document.getElementById('secondans').innerHTML = "I meditated in a cave";
}
function twoClickThree(){
    document.getElementById('secondans').innerHTML = "I got it from friends";
}
function twoClickFour(){
    document.getElementById('secondans').innerHTML = " Parkour, Training, and Life";
}





function thirdClickOne(){
    document.getElementById('thirdans').innerHTML = "The complete philosphies of Parkour";
}
function thirdClickTwo(){
    document.getElementById('thirdans').innerHTML = "Philosophies I learned from school";
}
function thirdClickThree(){
    document.getElementById('thirdans').innerHTML = "I undertook them on a university course";
}
function thirdClickFour(){
    document.getElementById('thirdans').innerHTML = "My interpretation of parkour philosophies, mixed with my views";
}





function fourthClickOne(){
    document.getElementById('4thans1').innerHTML = "Correct. This was the year I started film editing an got a taste for it."
}
function fourthClickTwo(){
    document.getElementById('4thans2').innerHTML = "Incorrect."
}
function fourthClickThree(){
    document.getElementById('4thans3').innerHTML = "Incorrect. THis was before I started."
}
function fourthClickFour(){
    document.getElementById('4thans4').innerHTML = "Close, but still incorrect. This year had another kind of impact."
}





function filledIn(){



    let abs = document.getElementById('firstans').innerHTML;
    let dec = document.getElementById('secondans').innerHTML;
    let efz = document.getElementById('thirdans').innerHTML;

let ray = [0, 0, 0, 0];
    if(abs == "Strength of Character"){
        document.getElementById('correct1').innerHTML = "Correct!";
        
    }
    else if(abs == ""){

    }
    else{
        document.getElementById('correct1').innerHTML = "Incorrect!";
       
    }

    if(dec == " Parkour, Training, and Life"){        //Pro-tip : Copy paste the right answers when you can, it can save days of work
document.getElementById('correct2').innerHTML = "Correct, yay!";

    }
    else if(dec == ""){
        
    }
    else{
        document.getElementById('correct2').innerHTML = "Incorrect, boo!";
       
    }

if(efz == "My interpretation of parkour philosophies, mixed with my views"){
    document.getElementById('correct3').innerHTML = "You are correct! That is good";
    
}
else if(efz == ""){
    
}
else{
    document.getElementById('correct3').innerHTML = "This is not correct, sadly"
    
}

 let ans41 = document.getElementById('4thans1').innerHTML;
 let ans42 = document.getElementById('4thans2').innerHTML;
 let ans43 = document.getElementById('4thans3').innerHTML;
 let ans44 = document.getElementById('4thans4').innerHTML;

if( ans41 == "" && ans42 == "" && ans43 == "" && ans44 == ""){

}
else{
   
}

let j = 11;
for (i = 0; i < ray.length; i++){
    if (ray[i] = 1){
       j++;
    }
    else if (ray[i] = 0){
       j = 0;
    }
}
if (j == 0){
    alert("You have filled in everything. The test is now over!" + ray[0] + " " + ray[1] + " " + ray[2] + " " + ray[3] + " " + j);
}
else{
    alert("Everything has to be filled in!" + ray[0] + " " + ray[1] + " " + ray[2] + " " + ray[3] + " " + j);
}

}
