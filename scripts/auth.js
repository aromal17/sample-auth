
//auth state changes tracking
auth.onAuthStateChanged(user => {
    if(user){
        console.log("user is logged in");
        db.collection('guides').get().then(snapshot => {
            setUpGuides(snapshot.docs);
            setupUI(user);
     });
    
    }
    else{
        console.log("logged out through state change")
        setupUI();
        setUpGuides([]);
    }

});


//adding data to firestore 
const createForm = document.querySelector('#create-form');

createForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value
    }).then(() =>{
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        console.log(err.message);
    });
});


// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

   

    //signup the user
    auth.createUserWithEmailAndPassword(email,password).then(cred =>{

        console.log("user signed in");
        //closeing the signupform and resetign the form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});



//logout
const logout = document.querySelector("#logout");
logout.addEventListener(('click'), (e) =>{
    e.preventDefault();
    auth.signOut().then(() =>{
        // console.log("user logged out");
    });

});


//login form
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit' , (e)=>{
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred =>{
        // console.log("user logged in");

        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();

    });

});
