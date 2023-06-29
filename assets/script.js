// TODO: Which element is the following line of code selecting?
/*var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1;
    //length of array of images
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// next is the button listens for mouse click and triggers the event
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  //
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
*/
/* const form = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const email = emailInput.value;

  console.log("email recorded", email;
  form.r)
})
*/

function findMaxNumber(numbers) {
  if (!Array.isArray(numbers)){
    throw new Error('Input is not an array.');
  }
  if (numbers.length === 0) {
    throw new Error('Array is empty.');
  }
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}