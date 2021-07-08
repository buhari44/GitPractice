const passwordCheck = document.getElementById("password");
const confirmPassword = document.getElementById("Cpassword");
console.log(passwordCheck);
const submitForm = () => {
  passwordCheck === confirmPassword
    ? alert("Your password is correct")
    : alert("incorrect password");
};
