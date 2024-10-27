import "./style.css";
import portraitImage from "./assets/mark.jpeg";

buildPage();
buildAbout();

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
  img.classList.add("portrait");
  var caption = document.createElement("span");
  caption.textContent = "Mark Demore II";
  caption.classList.add("name");
  var bio = document.createElement("div");
  bio.innerHTML =
    "<h2>About me<h2><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim dolor nec mi pulvinar accumsan. Vestibulum lobortis ultricies mauris, sed lacinia tellus facilisis et. Duis vel augue quis mi tincidunt porta sit amet in diam. Curabitur vulputate mi tincidunt nisi fermentum, et iaculis justo euismod. In tincidunt neque velit, eu bibendum erat luctus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<p>";
  about.appendChild(img);
  about.appendChild(caption);
  about.appendChild(bio);
}
