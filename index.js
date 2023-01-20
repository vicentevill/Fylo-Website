//Selectors
const nav = document.querySelectorAll("p.navigation");
const getStarted = document.querySelector("button#startButton");
const howFyloWorks = document.querySelector("a#howFyloWorks");
const emailSubmit = document.querySelector("#emailSubmit");
const footerLinks = document.querySelectorAll("p.footerLinks");
const footerLocation = document.querySelector("p#location");
const socialIcons = document.querySelectorAll(".svgPaths");
const socialOutline = document.querySelectorAll("div.socialOutline");
const arrowIcon = document.querySelector("#arrowFill");
const blueButtons = [getStarted, emailSubmit];
//Functions

//Run
for (let i = 0; i < socialOutline.length; i++) {
  //onClick:Changes color of the social media buttons in the footer
  socialOutline[i].addEventListener("click", () => {
    socialOutline[i].style.borderColor = "#64ddd6";
    socialIcons[i].style.fill = "#64ddd6";
    setTimeout(() => {
      socialOutline[i].style.borderColor = "";
      socialIcons[i].style.fill = "";
    }, 200);
  });
}

for (let i = 0; i < nav.length; i++) {
  //onClick:Changes text and font weight of header navigation
  nav[i].addEventListener("click", () => {
    nav[i].style.textDecoration = "underline";
    setTimeout(() => {
      nav[i].style.textDecoration = "";
    }, 200);
  });
}

for (let i = 0; i < footerLinks.length; i++) {
  //onClick:Changes text and font weight of footer links
  footerLinks[i].addEventListener("click", () => {
    footerLinks[i].style.textDecoration = "underline";
    setTimeout(() => {
      footerLinks[i].style.textDecoration = "";
    }, 200);
  });
}

for (let i = 0; i < blueButtons.length; i++) {
  //onClick:Changes color of blue buttons
  blueButtons[i].addEventListener("click", () => {
    blueButtons[i].style.backgroundColor = "#8cdae4";
    setTimeout(() => {
      blueButtons[i].style.backgroundColor = "";
    }, 200);
  });
}

footerLocation.addEventListener("click", () => {
  //onClick:Changes text and font weight of location text in footer
  footerLocation.style.textDecoration = "underline";
  setTimeout(() => {
    footerLocation.style.textDecoration = "";
  }, 200);
});

howFyloWorks.addEventListener("click", () => {
  //onClick:Changes color of link and icon to white
  howFyloWorks.style.color = "white";
  arrowIcon.style.fill = "white";
});
//test
