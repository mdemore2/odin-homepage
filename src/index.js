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
  var name = document.createElement("h1");
  name.textContent = "Mark Demore II";
  portrait.appendChild(img);
  portrait.appendChild(name);

  var bioDiv = document.createElement("div");
  bioDiv.classList.add("bio");
  var aboutHeading = document.createElement("h2");
  aboutHeading.textContent = "About Me";
  var bio = document.createElement("p");
  bio.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim dolor nec mi pulvinar accumsan. Vestibulum lobortis ultricies mauris, sed lacinia tellus facilisis et. Duis vel augue quis mi tincidunt porta sit amet in diam. Curabitur vulputate mi tincidunt nisi fermentum, et iaculis justo euismod. In tincidunt neque velit, eu bibendum erat luctus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

  bioDiv.appendChild(aboutHeading);
  bioDiv.appendChild(bio);

  about.appendChild(portrait);
  //  about.appendChild(name);
  about.appendChild(bioDiv);
}
