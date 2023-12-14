const declineButton = document.getElementById("decline");
const acceptButton = document.getElementById("accept");

declineButton.addEventListener("click",declineCookies);
acceptButton.addEventListener("click", acceptCookies);

const cookieNotice = document.getElementById("cookie-notice");

const cookiesAccepted = document.cookie.includes("cookiesAccepted");
if (!cookiesAccepted) {
  cookieNotice.style.display = "block";
}

function acceptCookies() {
    document.cookie = "cookiesAccepted=true";
    console.log("cookies accepted");
    cookieNotice.style.display = "none";
}

function declineCookies() {
    document.cookie = "cookiesAccepted=false";
    console.log("cookies declined")
    cookieNotice.style.display = "none";
}


const darkModeBtn = document.getElementById("darkmode");
const lightModeBtn = document.getElementById("lightmode");

darkModeBtn.addEventListener("click", () => {
    document.cookie = "darkTheme=true";
    localStorage.setItem("darkTheme", "true");
    document.body.classList.add("dark");
});

lightModeBtn.addEventListener("click", () => {
    document.cookie = "darkTheme=false";
    localStorage.setItem("darkTheme", "false");
    document.body.classList.remove("dark");
});


//Check localStorage on page load
    window.onload = () => {
    const darkThemeSetting = localStorage.getItem("darkTheme");
        if (darkThemeSetting === "true") {
            document.body.classList.add("dark");
            }
        };


