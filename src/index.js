import "./style.css";
import portraitImage from "./assets/mark.jpeg";
import linkedIcon from "./assets/linkedin.svg";
import gitIcon from "./assets/github.svg";
import emailIcon from "./assets/email-outline.svg";
import phoneIcon from "./assets/phone-outline.svg";
import openIcon from "./assets/open-in-new.svg";
import twitterIcon from "./assets/twitter.svg";
import projectImage from "./assets/project.png";

buildPage();
buildAbout();

buildWork();

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

  var links = document.createElement("div");
  var git = document.createElement("img");
  git.src = gitIcon;
  git.classList.add("icon");
  var linked = document.createElement("img");
  linked.src = linkedIcon;
  linked.classList.add("icon");
  var twitter = document.createElement("img");
  twitter.src = twitterIcon;
  twitter.classList.add("icon");
  links.appendChild(git);
  links.appendChild(linked);
  links.appendChild(twitter);
  links.classList.add("links");

  bioDiv.appendChild(aboutHeading);
  bioDiv.appendChild(bio);
  bioDiv.appendChild(links);

  about.appendChild(portrait);
  //  about.appendChild(name);
  about.appendChild(bioDiv);
}

function buildWork() {
  var work = document.querySelector(".work");
  var heading = document.createElement("h2");
  heading.textContent = "My Work";
  var container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < 6; i++) {
    container.appendChild(buildCard());
  }

  work.appendChild(heading);
  work.append(container);
}

function buildCard() {
  var card = document.createElement("div");
  card.classList.add("card");
  var img = document.createElement("img");
  img.src = projectImage;

  var textDiv = document.createElement("div");
  textDiv.classList.add("card-text");

  var titleDiv = document.createElement("div");
  titleDiv.classList.add("card-title");
  var title = document.createElement("h3");
  title.textContent = "my project";

  var cardIcons = document.createElement("div");
  var git = document.createElement("img");
  git.src = gitIcon;
  git.classList.add("icon");
  var open = document.createElement("img");
  open.src = openIcon;
  open.classList.add("icon");
  cardIcons.appendChild(git);
  cardIcons.appendChild(open);

  titleDiv.appendChild(title);
  titleDiv.appendChild(cardIcons);

  var description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim dolor nec mi pulvinar accumsan. Vestibulum lobortis ultricies mauris, sed lacinia tellus facilisis et. Duis vel augue quis mi tincidunt porta sit amet in diam. Curabitur vulputate mi tincidunt nisi fermentum, et iaculis justo euismod. In tincidunt neque velit, eu bibendum erat luctus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
  textDiv.appendChild(title);
  textDiv.appendChild(description);

  card.appendChild(img);
  card.appendChild(textDiv);

  return card;
}
