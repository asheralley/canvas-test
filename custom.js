// Custom JavaScript -> Asher Alley

// sticky nav on scoll
function stickyNavOnScroll() {
  window.onscroll = function () {
    myFunction();
  };
  window.onload = function () {
    myFunction();
  };

  // Get the header
  let header = document.getElementById("stickyNav");

  // Get the offset position of the navbar
  let sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

// call the sticky nav onscroll function
stickyNavOnScroll();

function formSubmit(event) {
  let url = "send_message.php";
  let request = new XMLHttpRequest();
  let feedBack = document.getElementById("feedBackMsg");
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");

  // hide send message button
  let submitBtn = document.getElementById("submitBtn");
  submitBtn.style.display = "none";
  feedBack.innerHTML = "Sending message...";

  request.open("POST", url, true);
  request.onload = function () {
    // request successful
    // we can use server response to our request now
    // handle successful send message here
    if (request.status == 200) {
      let messageText = "Message sent! Thanks for contacting me.";
      feedBack.innerHTML = messageText;
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    } else {
      let messageText = "Whoops! Something went wrong, please try again later.";
      feedBack.innerHTML = messageText;
    }
  };

  request.onerror = function () {
    // request failed
    // handle errors here
    let messageText = "Whoops! Something went wrong, please try again later.";
    feedBack.innerHTML = messageText;
  };

  request.send(new FormData(event.target)); // create FormData from form that triggered event
  event.preventDefault();
}

// and you can attach form submit event like this for example
function attachFormSubmitEvent(formId) {
  document.getElementById(formId).addEventListener("submit", formSubmit);
}

attachFormSubmitEvent("contactForm");

// smooth scroll to elements
function smoothScroll(e) {
  let el = e.target;
  let parent = el.parentElement;
  let anchor = parent.getAttribute("loc");
  document.getElementById(anchor).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("stickyNav").addEventListener("click", smoothScroll);
document.getElementById("mainNav").addEventListener("click", smoothScroll);
