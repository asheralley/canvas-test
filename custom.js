// Custom JavaScript -> Asher Alley

// sticky nav on scoll
function stickyNavOnScroll() {
  window.onscroll = function () {
    addRemoveClass();
  };
  window.onload = function () {
    addRemoveClass();
  };

  // Get the header
  let header = document.getElementById('stickyNav');
  let about = document.getElementById('about');

  // Get the offset position of the navbar
  let sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function addRemoveClass() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
      about.classList.add('nav-offset');
    } else {
      header.classList.remove('sticky');
      about.classList.remove('nav-offset');
    }
  }
}

// call the sticky nav onscroll function
stickyNavOnScroll();

function formSubmit(event) {
  let url = 'send_message.php';
  let request = new XMLHttpRequest();
  let feedBack = document.getElementById('feedBackMsg');
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let messageInput = document.getElementById('message');
  let service = document.getElementById('serviceCheck');

  if (service.checked) {
    feedBack.innerHTML = 'Thanks for getting in touch!';
    event.preventDefault();
    return;
  }

  // hide send message button
  let submitBtn = document.getElementById('submitBtn');
  submitBtn.style.display = 'none';
  feedBack.innerHTML = 'Sending message...';

  request.open('POST', url, true);
  request.onload = function () {
    // request successful
    // we can use server response to our request now
    // handle successful send message here
    if (request.status == 200) {
      let messageText = 'Message sent! Thanks for getting in touch.';
      feedBack.innerHTML = messageText;
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    } else {
      let messageText = 'Whoops! Something went wrong, please try again later.';
      feedBack.innerHTML = messageText;
    }
  };

  request.onerror = function () {
    // request failed
    // handle errors here
    let messageText = 'Whoops! Something went wrong, please try again later.';
    feedBack.innerHTML = messageText;
  };

  request.send(new FormData(event.target)); // create FormData from form that triggered event
  event.preventDefault();
}

// and you can attach form submit event like this for example
function attachFormSubmitEvent(formId) {
  document.getElementById(formId).addEventListener('submit', formSubmit);
}

attachFormSubmitEvent('contactForm');

// smooth scroll to elements
<<<<<<< HEAD
//function smoothScroll(e, offSetVal) {
//  let el = e.target;
//  let parent = el.parentElement;
//  let anchor = parent.getAttribute("loc");
//  let yOffset = offSetVal;
//  //document.getElementById(anchor).scrollIntoView({ behavior: "smooth" });
//  let element = document.getElementById(anchor);
//  if (anchor === "contact") {
//    yOffset = 0;
//  }
//  let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//  window.scrollTo({ top: y, behavior: "smooth" });
//}
//
//document.getElementById("stickyNav").addEventListener("click", function (e) {
//  smoothScroll(e, 0);
//});
//document.getElementById("mainNav").addEventListener("click", function (e) {
//  smoothScroll(e, -80);
//});
=======
function smoothScroll(e, offSetVal) {
  let el = e.target;
  let parent = el.parentElement;
  let anchor = parent.getAttribute('loc');
  let yOffset = offSetVal;
  //document.getElementById(anchor).scrollIntoView({ behavior: "smooth" });
  let element = document.getElementById(anchor);
  if (anchor === 'contact') {
    yOffset = 0;
  }
  let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

document.getElementById('stickyNav').addEventListener('click', function (e) {
  smoothScroll(e, 0);
});
document.getElementById('mainNav').addEventListener('click', function (e) {
  smoothScroll(e, -80);
});
>>>>>>> 209b6417a5ed6fb48fb266098c566711e95379bb
