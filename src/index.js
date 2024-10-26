import "./style.css";
import portraitImage from "./assets/headshot.jpg";

buildPage();

function buildPage() {
  var body = document.querySelector("body");
  var about = document.createElement("div");
  about.classList.add("about");
  var work = document.createElement("div");
  work.classList.add("work");
  var contact = document.createElement("div");
  contact.classList.add("contact");

  body.appendChild(about);
  body.appendChild(work);
  body.appendChild(contact);
}

function buildAbout() {
  var about = document.querySelector(".about");
  var portrait = document.createElement("div");
  portrait.classList.add("portrait");
  var img = document.createElement("img");
  img.src = portraitImage;
}
