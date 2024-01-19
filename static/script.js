document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".navigation-bar a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            var content = document.querySelector(".content");

            content.classList.add("content-slide-out");

            setTimeout(function () {
                window.location.href = link.getAttribute("href");

                setTimeout(function () {
                    content.classList.remove("content-slide-out");
                }, 500);
            }, 500);
        });
    });
});
