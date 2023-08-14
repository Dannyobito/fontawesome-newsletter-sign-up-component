const image = document.getElementById('image');
const form = document.getElementById('form');
const errMsg = document.getElementById('err-msg')

let emailInput = ``
const changeImage = () => {
    window.innerWidth < 640
    ? image.src = "assets/images/illustration-sign-up-mobile.svg"
    : image.src = "assets/images/illustration-sign-up-desktop.svg"
}
const validEmail = (mail) => {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EMAIL_REGEX.test(mail);
}
form.onchange = (()=>{
})
form.onsubmit = ((e)=> {
    e.preventDefault();
    email = document.getElementById('email');
    emailInput = email.value.trim();
    if(!emailInput){
        errMsg.textContent = "input valid email please";
        errMsg.classList.add('error');
        return;
    }
    if(!validEmail(emailInput)){
      errMsg.textContent = "valid email required";
      errMsg.classList.add('error');
      return;
    }
    window.location.href = `subscribed.html?email=${encodeURIComponent(emailInput)}`;
});


changeImage();
window.addEventListener('resize',changeImage)