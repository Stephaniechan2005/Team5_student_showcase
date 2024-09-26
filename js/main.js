/*Menu*/
const toggleButton = document.querySelector(".toggle_button");
const toggleButtonIcon = document.querySelector(".toggle_button i");
const mobileMenu = document.querySelector("#mobile_dropdown_menu");

toggleButton.addEventListener("click", () => {
  console.log("fired");

  if (mobileMenu.classList.contains("show")) {
    // 메뉴보이면 숨기기
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hide");
    
    // 메뉴 숨기기 전에 애니메이션 끝나기 기다려
    setTimeout(() => {
      mobileMenu.classList.remove("hide");
      mobileMenu.style.display = "none";
    }, 500); // 500ms matches the animation duration

    toggleButtonIcon.classList.remove("fa-regular", "fa-circle-xmark");
    toggleButtonIcon.classList.add("fa-solid", "fa-bars");
  } else {
    //  메뉴 숨겨진거 보이기
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
