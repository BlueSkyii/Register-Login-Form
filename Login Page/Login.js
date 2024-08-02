let btn = document.getElementById("btn");
btn.addEventListener("click",login);

function login(){
    let logEmail = document.getElementById("logEmail").value;
    let logPass = document.getElementById("logPass").value;

    let logEmailFlag = false;
    let logPassFlag = false;

    if(logEmail == ""){
        document.getElementById("logEmailError").innerHTML = "Please enter your email";
    }else{
        document.getElementById("logEmailError").innerHTML = "";
        logEmailFlag = true;
    }

    if(logPass == ""){
        document.getElementById("logPassError").innerHTML = "Please enter your Password";
    }else{
        document.getElementById("logPassError").innerHTML = "";
        logPassFlag = true;
    }

    if(logEmailFlag && logPassFlag){
        window.location.href = "Home.html";
    }
}