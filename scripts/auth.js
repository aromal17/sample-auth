// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // console.log(email,password);

    //signup the user
    auth.createUserWithEmailAndPassword(email,password).then(cred =>{
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();

    })  

})