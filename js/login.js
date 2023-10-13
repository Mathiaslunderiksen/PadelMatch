const login = {};

login.init = () => {
    const signUpBtn = document.querySelector(".sign-up-btn");
    const signUpModal = document.querySelector(".sign-up-modal"); 
    const closeBtn = document.querySelector(".close-signup-modal");
    const success = document.querySelector(".success");

    /* Adds eventlistener on signUp button. Modal shows, and email + password is saved to storage, success message on success */
    signUpBtn.addEventListener("click", () => {
        signUpModal.classList.toggle("hidden");

        const signUpForm = document.querySelector(".sign-up-form");
        signUpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let email = document.querySelector("#emailModal");
            let password = document.querySelector("#passwordModal");

            if(email.value != "" && password.value != ""){
                localStorage.setItem("email", email.value);
                localStorage.setItem("password", password.value);

                success.classList.remove("hidden");
            }

        });
        
    });

    /* Adds eventlistener on close button in sign up modal, to close the modal. */
    closeBtn.addEventListener("click", () => {
        signUpModal.classList.add("hidden");
        success.classList.add("hidden");
    })

    /* Adds eventlistener on login form. Gets email and password from storage. If they exist and email + password typed is equal to storage. 
    Goto frontpage.html. */
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let emailStorage = localStorage.getItem("email");
        let passwordStorage = localStorage.getItem("password");

        const notSuccess = document.querySelector(".notSuccess");

        if(emailStorage && passwordStorage){
            if(email.value == emailStorage && password.value == passwordStorage){
                location.assign("./frontpage.html");
            } else {
                notSuccess.classList.remove("hidden")
            }
        }
    });

}

login.init();