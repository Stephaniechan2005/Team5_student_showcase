/*Menu*/
const toggleButton = document.querySelector(".toggle_button");
const toggleButtonIcon = document.querySelector(".toggle_button i");
const mobileMenu = document.querySelector("#mobile_dropdown_menu");

toggleButton.addEventListener("click", () => {
  console.log("fired");

  if (mobileMenu.classList.contains("show")) {
    // Hide the menu
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hide");

    // wait for animation to finish before hide the menu
    setTimeout(() => {
      mobileMenu.classList.remove("hide");
      mobileMenu.style.display = "none";
    }, 500); // 500ms matches the animation duration

    toggleButtonIcon.classList.remove("fa-regular", "fa-circle-xmark");
    toggleButtonIcon.classList.add("fa-solid", "fa-bars");
  } else {
    // showing the hidden menu
    mobileMenu.style.display = "block";
    mobileMenu.classList.add("show");

    toggleButtonIcon.classList.remove("fa-solid", "fa-bars");
    toggleButtonIcon.classList.add("fa-regular", "fa-circle-xmark");
  }
});

/*const burgerButton = document.getElementById("button");
const closeButton = document.getElementById("close-btn");
const burgerCon = document.getElementById("burger-con");

burgerButton.addEventListener("click", () => {
  burgerCon.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
  burgerCon.classList.remove("show");
});*/

// (function () {
//   "use strict";
//   console.log("fired");

//   let burger = document.querySelector("#button");
//   let burgerCon = document.querySelector("#burger-con");

//   function hamburgerMenu() {
//     burger.classList.toggle("expanded");
//     burgerCon.classList.toggle("slide-toggle");
//   }

//   burger.addEventListener("click", hamburgerMenu, false);
// })();

const testimonialCon1 = document.querySelector("#testimonial-con1");
const testimonialCon2 = document.querySelector("#testimonial-con2");
const testimonialCon3 = document.querySelector("#testimonial-con3");

const testimonials = [
  {
    name: "John",
    image: "images/John.png",
    testimonial:
      "The work are awsome. The artwork is visually stunning and the service is exceptional. I highly recommend.",
  },
  {
    name: "Emily",
    image: "images/Emily.png",
    testimonial:
      "Good job everyone. Their work is very thoughtful and they really care about the client's feelings. I highly recommend their services.",
  },
  {
    name: "Lily",
    image: "images/Lily.png",
    testimonial:
      "The team is great. Their artwork is superb and they really care about the client's needs. I highly recommend their services.",
  },
];

function displayTestimonial(testimonialCon, testimonial) {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList.add("col-span-full");
  const testimonialParagraph = document.createElement("p");
  const testimonialName = document.createElement("h3");
  const testimonialImage = document.createElement("img");

  testimonialName.textContent = testimonial.name;
  testimonialParagraph.textContent = `"${testimonial.testimonial}"`;
  testimonialImage.src = testimonial.image;
  testimonialImage.alt = testimonial.name + "'s testimonial image";
  testimonialImage.classList.add("testimonial-image");

  testimonialCon.innerHTML = "";
  testimonialDiv.appendChild(testimonialImage);
  testimonialDiv.appendChild(testimonialName);
  testimonialDiv.appendChild(testimonialParagraph);

  testimonialCon.appendChild(testimonialDiv);
}

displayTestimonial(testimonialCon1, testimonials[0]);
displayTestimonial(testimonialCon2, testimonials[1]);
displayTestimonial(testimonialCon3, testimonials[2]);

//video
const player = new Plyr("video");

//change image for winning team

const theButtons = document.querySelectorAll(".changeimg");
const showImage = document.querySelector("#showimg");

function changeImage(event) {
  const newSrc = event.currentTarget.src;
  showImage.src = newSrc;
}

theButtons.forEach((button) => button.addEventListener("click", changeImage));

//portfolio
// I declared them with let so, we can change the data later
let portfolioData = [
  { id: 1, image: "images/Portfolio1.png", name: "Hailie" },
  { id: 2, image: "images/Portfolio2.png", name: "Stephanie" },
  { id: 3, image: "images/Portfolio3.png", name: "Tanya" },
  { id: 4, image: "images/Portfolio4.png", name: "Joy" },
  { id: 5, image: "images/Portfolio5.png", name: "Henry" },
  { id: 6, image: "images/Portfolio6.png", name: "Nate" },
  { id: 7, image: "images/Portfolio7.png", name: "Keith" },
  { id: 8, image: "images/Portfolio8.png", name: "Conny" },
  { id: 9, image: "images/Portfolio9.png", name: "Sheldon" },
  { id: 10, image: "images/Portfolio10.png", name: "Maggie" },
];

function createPortfolioItem(item) {
  // create new div
  const div = document.createElement("div");
  // give div id
  div.id = `portfolio-box${item.id}`;
  // indicate image and the name inside of the div
  div.innerHTML = `
    <img src="${item.image}" alt="Portfolio student image ${item.id}" />
    <p>${item.name}</p>
  `;
  return div;
}

function renderPortfolio() {
  // find the container element
  const portfolioContainer = document.getElementById("portfolio");
  //create three rows
  const rows = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
  ];

  // give each row id
  rows[0].id = "portfolio-first-row";
  rows[1].id = "portfolio-second-row";
  rows[2].id = "portfolio-third-row";

  portfolioData.forEach((item, index) => {
    const portfolioItem = createPortfolioItem(item);
    if (index < 3) {
      // add first three on first row
      rows[0].appendChild(portfolioItem);
    } else if (index < 6) {
      // add next three on second row
      rows[1].appendChild(portfolioItem);
    } else {
      // add rest three on third row
      if (index === 7 || index === 9) {
        // 8,10 are the execption
        if (!rows[2].querySelector("#box9-box10-container")) {
          const container = document.createElement("div");
          container.id = "box9-box10-container";
          rows[2].appendChild(container);
        }
        rows[2]
          .querySelector("#box9-box10-container")
          .appendChild(portfolioItem);
      } else {
        rows[2].appendChild(portfolioItem);
      }
    }
  });

  rows.forEach((row) => portfolioContainer.appendChild(row));

  const portfolioItems = document.querySelectorAll("#portfolio > div");

  for (let i = 0; i < portfolioItems.length; i++) {
    let t10 = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioItems[i],
        start: "top 100%",
        end: "bottom 90%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });

    t10.fromTo(
      portfolioItems[i],
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.2,
        ease: "power2.in",
      }
    );
  }
}

document.addEventListener("DOMContentLoaded", renderPortfolio);

//gsap animation

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#industrial-night",
    start: "top 90%",
    end: "bottom 80%",
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse",
  },
});

t1.to("#industrial-night-left", {
  opacity: 1,
  x: 400,
  y: -20,
  duration: 0.5,
  ease: "power2.out",
});

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#industrial-night",
    start: "top 90%",
    end: "bottom 80%",
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse",
  },
});

t2.to("#video", {
  opacity: 1,
  x: -400,
  y: -20,
  duration: 2,
  ease: "power2.out",
});

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#winning-projects-con",
    start: "top 20%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse",
  },
});

t3.to("#winning-projects-img", {
  opacity: 0,
  y: -70,
  duration: 0.5,
  ease: "power2.out",
});

let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#winning-projects-img-2",
    start: "top 10%",
    end: "bottom 10%",
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse",
  },
});

t4.to("#winning-projects-img-2 img", {
  opacity: 0,
  y: -70,
  stagger: 0.2,
  duration: 0.5,
  ease: "power2.out",
});

let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#testimonial",
    start: "top 60%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "play none none reverse",
  },
});

t5.to("#testimonial-box section", {
  opacity: 1,
  y: -30,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});

let t6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#program-introduction-img1",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

t6.fromTo(
  "#program-introduction-img1",
  {
    opacity: 0,
    x: 500,
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.2,
    ease: "power2.out",
  }
);

let t7 = gsap.timeline({
  scrollTrigger: {
    trigger: "#program-introduction-img2",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

t7.fromTo(
  "#program-introduction-img2",
  {
    opacity: 0,
    y: 30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.2,
    ease: "power2.out",
  }
);

let t8 = gsap.timeline({
  scrollTrigger: {
    trigger: "#program-introduction-img3",
    start: "top 100%",
    end: "bottom 10%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

t8.fromTo(
  "#program-introduction-img3",
  {
    opacity: 0,
    y: -40,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.2,
    ease: "power2.out",
  }
);

let t9 = gsap.timeline({
  scrollTrigger: {
    trigger: "#program-introduction-img2",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

t9.fromTo(
  "#program-introduction-img4",
  {
    opacity: 0,
    x: -500,
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.2,
    ease: "power2.out",
  }
);
