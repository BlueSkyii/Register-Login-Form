let btn = document.getElementById("btn");
btn.addEventListener("click",register);

function register(){
    let FN = document.getElementById("FN").value;
    let LN = document.getElementById("LN").value;
    let regEmail = document.getElementById("regEmail").value;
    let regPass = document.getElementById("regPass").value;
    let regRepPass = document.getElementById("regRepPass").value;

    let FNFlag = false;
    let LNFlag = false;
    let regEmailFlag = false;
    let regPassFlag = false;
    let regRepPassFlag = false;

    if(FN == ""){
        document.getElementById("FNError").innerHTML = "Please enter your first name";
    }else{
        document.getElementById("FNError").innerHTML = "";
        if(FN.length < 2 || FN.length > 10){
            document.getElementById("FNError").innerHTML = "Length should be between 3 and 10";
        }else{
            document.getElementById("FNError").innerHTML = "";
            FNFlag = true;
        }
    }

    if(LN == ""){
        document.getElementById("LNError").innerHTML = "Please enter your last name";
    }else{
        document.getElementById("LNError").innerHTML = "";
        if(LN.length < 2 || LN.length > 10){
            document.getElementById("LNError").innerHTML = "Length should be between 3 and 10";
        }else{
            document.getElementById("LNError").innerHTML = "";
            LNFlag = true;
        }
    }

    if(regEmail == ""){
        document.getElementById("regEmailError").innerHTML = "Please enter your email";
    }else{
        document.getElementById("regEmailError").innerHTML = "";
        regEmailFlag = true;
    }

    if(regPass == ""){
        document.getElementById("regPassError").innerHTML = "Please enter your password";
    }else{
        document.getElementById("regPassError").innerHTML = "";
        regPassFlag = true;
    }

    if(regRepPass == ""){
        document.getElementById("regRepPassError").innerHTML = "Please enter repeated password";
    }else{
        document.getElementById("regRepPassError").innerHTML = "";
        if(regPass != regRepPass){
            document.getElementById("regRepPassError").innerHTML = "Password does not match";
        }else{
            document.getElementById("regRepPassError").innerHTML = "";
            regRepPassFlag = true;
        }
    }

    if(FNFlag && LNFlag && regEmailFlag && regPassFlag && regRepPassFlag){
        window.location.href = "Home.html";
    }
}