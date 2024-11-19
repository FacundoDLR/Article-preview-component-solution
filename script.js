const btnToggle = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const userInfo = document.getElementById("userInfo");
const userShare = document.getElementById("userShare");
const userDiv = document.getElementById("userDiv");

function toggleShare() {
    const isLargeScreen = window.innerWidth > 768;

    if (isLargeScreen) {
        const isPopupVisible = userPopup.style.display === "flex";
        userPopup.style.display = isPopupVisible ? "none" : "flex";
        userDiv.classList.toggle(!isPopupVisible);
    } else {
        const isShareVisible = userShare.style.display === "flex";
        userShare.style.display = isShareVisible ? "none" : "flex";
        userInfo.style.display = isShareVisible ? "flex" : "none";
        userDiv.classList.toggle("bg-color", !isShareVisible);
    }
  }
  
  btnToggle.addEventListener("click", toggleShare);
  btnClose.addEventListener("click", toggleShare);