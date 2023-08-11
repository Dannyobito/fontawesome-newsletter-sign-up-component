const image = document.getElementById('image');
const changeImage = () => {
    window.innerWidth < 640
    ? image.src = "assets/images/illustration-sign-up-mobile.svg"
    : image.src = "assets/images/illustration-sign-up-desktop.svg"
}
changeImage();
window.addEventListener('resize',changeImage)