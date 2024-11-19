const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const userInfo = document.getElementById("userInfo");
const userShare = document.getElementById("userShare");
const userDiv = document.getElementById("userDiv");

btnOpen.addEventListener("click", () => {
    userShare.style.display = 'flex';
    userInfo.style.display = 'none';
    userDiv.classList.add('bg-color');
});

btnClose.addEventListener("click", () => {
    userInfo.style.display = 'flex';
    userShare.style.display = 'none';
    userDiv.classList.remove('bg-color');
});
