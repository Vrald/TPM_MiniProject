function validateName() {
    let inputName = document.querySelector("#name");
    let valueName = inputName.value;
    let errorName = document.querySelector("#error-name");
  
    if (valueName == "") {
      errorName.innerHTML = "First name cannot be empty!";
      inputName.style.border = "1px solid red";
      return false;
    } else {
      errorName.innerHTML = "";
      inputName.style.border = "1px solid black";
      return true;
    }
  }

  function validateName2() {
    let inputName2 = document.querySelector("#name2");
    let valueName2 = inputName2.value;
    let errorName2 = document.querySelector("#error-name2");
  
    if (valueName2 == "") {
      errorName2.innerHTML = "Last name cannot be empty!";
      inputName2.style.border = "1px solid red";
      return false;
    } else {
      errorName2.innerHTML = "";
      inputName2.style.border = "1px solid black";
      return true;
    }
  }
  
  function validateEmail() {
    let inputEmail = document.querySelector("#email");
    let valueEmail = inputEmail.value;
    let errorEmail = document.querySelector("#error-email");
  
    if (valueEmail == "") {
      errorEmail.innerHTML = "Email cannot be empty!";
      inputEmail.style.border = "1px solid red";
      return false;
    } else if (!valueEmail.includes("@")) {
      errorEmail.innerHTML = "Email must contain '@'!";
      inputEmail.style.border = "1px solid red";
      return false;
    } else {
      errorEmail.innerHTML = "";
      inputEmail.style.border = "1px solid black";
      return true;
    }
  }
  
  function validatePhone() {
    let inputPhone = document.querySelector("#number");
    let valuePhone = inputPhone.value;
    let errorPhone = document.querySelector("#error-number");
  
    if (valuePhone == "") {
      errorPhone.innerHTML = "Phone Number cannot be empty!";
      inputPhone.style.border = "1px solid red";
      return false;
    } else if (!valuePhone.length == 12) {
      errorPhone.innerHTML = "Phone Number must have 12 integers!";
      inputPhone.style.border = "1px solid red";
      return false;
    } else {
      errorPhone.innerHTML = "";
      inputPhone.style.border = "1px solid black";
      return true;
    }
  }

  function validateMsg() {
    let inputMsg = document.querySelector("#msg");
    let valueMsg = inputMsg.value;
    let errorMsg = document.querySelector("#error-msg");
  
    if (valueMsg == "") {
      errorMsg.innerHTML = "Message cannot be empty!";
      inputMsg.style.border = "1px solid red";
      return false;
    } else {
      errorMsg.innerHTML = "";
      inputMsg.style.border = "1px solid black";
      return true;
    }
  }
  
  let registerBtn = document.querySelector("#register-btn");
  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
  
    let isNameValid = validateName();
    let isNameValid2 = validateName2();
    let isEmailValid = validateEmail();
    let isPhoneValid = validatePhone();
    let isMsgValid = validateMsg();
  
    if (
      isNameValid &&
      isNameValid2 &&
      isEmailValid &&
      isPhoneValid &&
      isMsgValid
    ) {
      let registerForm = document.querySelector("#register-form");
      alert("FORM SUBMITTED!");
      registerForm.submit(); // SUBMIT FORM
    }
  });