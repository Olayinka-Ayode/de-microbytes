const passwordInput = document.getElementById("password");
const passwordButton = document.getElementById("show");

passwordButton.addEventListener("click", () => {
    if(passwordInput.type === "text"){
        passwordInput.type = "password";
    }else if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }
})
