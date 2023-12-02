// const funcation1=()=>{
    
//     // name=>^[A-Z]{1,1}[a-z]{2,20}$
//     result=document.getElementById("name").value
//     if(result==""){
//         display(msg,c,)
//     }
//     else if(!result.match(/^[A-Z]{1,1}[a-z]{2,20}&/))
//     {
//         display("name most be more then 3 characters","red","spanname")
//     }
//     else{
//         display("name valid","green","spanname")

//     }
// }
// const display=(message,col,id)=>{
//     document.getElementById(id).innerHTML=message
//     document.getElementById(id).style.color=col
  
// }


//email validation

const validateEmail = () => {
    const email = document.getElementById("email").value.trim();
    const messageContainer = document.getElementById("spanemail");
  
    if (email === "") {
      displayMessage("Please enter an email address", "red", messageContainer);
    } else if (!isValidEmail(email)) {
      displayMessage("Invalid email address", "red", messageContainer);
    } else {
      displayMessage("Email address is valid", "green", messageContainer);
    }
  };
  
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  const displayMessage2 = (message, color, element) => {
    element.textContent = message;
    element.style.color = color;
  };
  




//name validation
const validateName = () => {
    const name = document.getElementById("name").value.trim();
    const messageContainer = document.getElementById("spanname");
  
    if (name === "") {
      displayMessage("Please enter a name", "red", messageContainer);
    } else if (name.length < 3) {
      displayMessage("Name must be at least 3 characters long", "red", messageContainer);
    } else if (!name.match(/^[A-Z][a-zA-Z]{2,20}$/)) {
      displayMessage("Name must start with an uppercase letter and have 3-20 characters", "red", messageContainer);
    } else {
      displayMessage("Name is valid", "green", messageContainer);
    }
  };
  



  const displayMessage1 = (message, color, element) => {
    element.textContent = message;
    element.style.color = color;
  };
  





  // const validateUsername = () => {
  //   const username = document.getElementById("username").value.trim();
  //   const messageContainer = document.getElementById("spanusername");
  
  //   if (username === "") {
  //     displayMessage("Please enter a username", "red", messageContainer);
  //   } else if (username.length < 3) {
  //     displayMessage("Username must be at least 3 characters long", "red", messageContainer);
  //   } else if (!username.match(/^[a-zA-Z0-9_]{3,20}$/)) {
  //     displayMessage("Username can only contain letters, numbers, and underscores (3-20 characters)", "red", messageContainer);
  //   } else {
  //     displayMessage("Username is valid", "green", messageContainer);
  //   }
  // };
  
  // const displayMessage4 = (message, color, element) => {
  //   element.textContent = message;
  //   element.style.color = color;
  // };
  








//password validation
const validatePassword = () => {
    const password = document.getElementById("password").value.trim();
    const messageContainer = document.getElementById("spanpassword");

    if (password === "") {
      displayMessage("Please enter a password", "red", messageContainer);
    } else if (password.length < 4) {
      displayMessage("Password must be at least 8 characters long", "red", messageContainer);
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/)) {
      displayMessage("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character", "red", messageContainer);
    } else {
      displayMessage("Password is valid", "green", messageContainer);
    }
  } 

  const displayMessage = (message, color, element) => {
    element.textContent = message;
    element.style.color = color;
  };



  //Conform password
  const validateConfirmPassword = () => {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const messageContainer = document.getElementById("spanconfirmPassword");
  
    if (confirmPassword === "") {
      displayMessage("Please enter a confirm password", "red", messageContainer);
    } else if (password !== confirmPassword) {
      displayMessage("Passwords do not match", "red", messageContainer);
    } else {
      displayMessage("Password is confirmed", "green", messageContainer);
    }
  };
  
  const displayMessage4 = (message, color, element) => {
    element.textContent = message;
    element.style.color = color;
  };
  