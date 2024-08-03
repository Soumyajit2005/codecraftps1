const showmodal = () => {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".loginform").classList.add("showloginform");
};

const closemodal = () => {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(".loginform").classList.remove("showloginform");
};

document
  .getElementsByClassName("register-button")[0]
  .addEventListener("click", showmodal);
let closeButton = document.querySelector(".modalCloseButton");
closeButton.addEventListener("click", closemodal);
