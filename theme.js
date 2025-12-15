// COOKIE MELDING
const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");

if (acceptBtn){
  acceptBtn.addEventListener("click", () => {
    cookieBanner.style.display = "none";
    localStorage.setItem("cookiesAccepted","1");
  });
}
if (localStorage.getItem("cookiesAccepted")==="1" && cookieBanner){
  cookieBanner.style.display="none";
}

// DARK MODE
const toggle = document.getElementById("darkmode-toggle");
const savedMode = localStorage.getItem("darkMode");
if (savedMode==="enabled"){
  document.body.classList.add("dark-mode");
  if(toggle) toggle.checked = true;
}
if(toggle){
  toggle.addEventListener("change",()=>{
    if(toggle.checked){
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode","enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode","disabled");
    }
  });
}
