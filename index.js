const pass1 = document.getElementById('pass1');
const button1 = document.getElementById('show1');
const pass2 = document.getElementById('pass2');
const button2 = document.getElementById('show2');

function showPassword(pass, show){
    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}

function checkPassword(){
    if(pass1.value === pass2.value){
        return true
    }else{
        window.alert("No")
    }
}
