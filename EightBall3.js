
function myFunction(){
    var userName = document.getElementById("name").value;
    localStorage.setItem("name", userName)
    if(userName != ""){
        
        document.getElementById("demo1").innerHTML =  "\"Hello" + " " +userName +"\""
        document.getElementById("fortune").style.display= "block";
    }
    else{
        document.getElementById("demo1").innerHTML = "Hello Almighty, It will be easy for me if you will enter your name.";
        document.getElementById("fortune").style.display= "none";
    }
}
   
function myFunction3(){
    document.getElementById("userName").innerHTML = + userName;
}

function myFunction2(){
    var eightBall = "";
    var num = Math.random();
    randomNumber = Math.floor(Math.random() * 8);

    switch(randomNumber){
    case 0: 
    eightBall = "It is certain";
    break;

    case 1: 
    eightBall = "It is decidedly so";
    break;

    case 2: 
    eightBall = "Reply hazy try again";
    break;

    case 3: 
    eightBall = "Cannot predict now";
    break;

    case 4: 
    eightBall = "Do not count on it";
    break;

    case 5: 
    eightBall = "My sources say no";
    break;

    case 6: 
    eightBall = "Outlook not so good";
    break;

    case 7: 
    eightBall = "Signs point to yes";
    break;
}
document.getElementById("demo2").innerHTML = eightBall;
document.getElementById("que").style.display= "none";
}

function yourName(){
    document.getElementById("username").innerHTML = "Enter Your Question" +" " +localStorage.getItem("name");
}
