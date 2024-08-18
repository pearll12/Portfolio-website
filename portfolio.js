let home = document.querySelector("#home");
let project = document.querySelector("#projects");
let contact = document.querySelector("#contact");

home.addEventListener("click", () => {
  window.location.href = "portfolio.html";
});

projects.addEventListener("click", () => {
  window.location.href = "projects.html";
});

contact.addEventListener("click", () => {
  window.location.href = "contact.html";
});
