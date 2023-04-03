const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const signUpBtn = document.querySelector("#sign-up-btn");

openBtn.addEventListener("click", () => {
  modal.showModal();
});

closeBtn.addEventListener("click", () => {
  modal.close();
});

signUpBtn.addEventListener("click", () => {
  validateSignupForm();
  console.log(email);
  console.log(password);
});

function validateSignupForm() {
  let email = document.getElementById("input-email").value;
  let password = document.getElementById("input-password").value;
  console.log(password);

  if (email == "" || password == "") {
    document.getElementById("errorMsg").innerHTML =
      "Please fill the required fields";
    return false;
  } else if (password.length < 8) {
    document.getElementById("errorMsg").innerHTML =
      "Your password must include atleast 8 characters";
    return false;
  } else {
    alert("Successfully signed up");
    return true;
  }
}
