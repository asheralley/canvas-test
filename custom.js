// Custom JavaScript -> Asher Alley

// sticky nav on scoll
function stickyNavOnScroll () {
    window.onscroll = function() {myFunction()};

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