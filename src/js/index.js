//Smooth scrolling
(function smoothScrolling() {
    const navLink = document.querySelector('.navbar__link');

    navLink.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(navLink.hash).scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });
})();