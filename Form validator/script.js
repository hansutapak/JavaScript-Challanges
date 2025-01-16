

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



//showError message

function showError(input, message) {
    const formList = input.parentElement;
    formList.className = 'form-list error';
    const small = formList.querySelector('small');
    small.innerText = message;
}


//showSuccess message

function showSuccess(input, message) {
    const formList = input.parentElement;
    formList.className = 'form-list success';
}


//getFieldName

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//check email valid (long code)

// function isValidEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   } 


//check email valid (clean code)

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }


//check input required (clean code)

function checkElement(inputArr) {
   inputArr.forEach(function(input) {
    if (input.value === '') {
        showError(input,`${getFieldName(input)} required`);
    } else {
        showSuccess(input);
    }
  });
}


//check input length (clean code)

function checkLength(input,min,max) {
    if (input.value.length < min) {
    showError(input,`${getFieldName(input)} gotta be atleast ${min} characters`);
    } else if (input.value.length > max) {
        showError(input,`${getFieldName(input)} must be  be within ${max} characters`);
    } else {
        showSuccess(input);
    }
}



//check password match

function checkPassword (input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'password do not match');
    }
}



// event listerners (clean code)

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    checkElement([username,email,password,password2]);
    checkLength(username,5,15);
    checkLength(password,5,15);
    checkPassword(password,password2);
    checkEmail(email);
});


// event listerners (long code)

// form.addEventListener('submit', function(e){
    
//     e.preventDefault();
  
//     //username
//     if(username.value === '') {
//        showError(username,'usersame incorrect');
//     } else  {
//        showSuccess(username);
//     }

//      email
//     if(email.value === '') {
//        showError(email,'email incorrect');
//     } else if(!isValidEmail(email.value)) {
//         showError(email,'email is not valid');
//     }else {
//        showSuccess(email); 
//     }

//      //password
//     if(password.value === '') {
//        showError(password,'password incorrect');
//     } else  {
//        showSuccess(password);
//     }

//      //password
//     if(password2.value === '') {
//        showError(password2,'password2 incorrect');
//     } else  {
//        showSuccess(password2);
//     }

//     });