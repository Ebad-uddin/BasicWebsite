// main background switcher
$(document).ready(function () {
    backgroundSwitcher();
});

function backgroundSwitcher() {
    var images = [
        "assets/images/lunch-1-min.jpg",
        "assets/images/snacks-2-min.jpg",
        "assets/images/beverages-3-min.jpg",
        "assets/images/lunch-4-min.jpg",
        "assets/images/snacks-4-min.jpg",
        "assets/images/regular-4-min.jpg",
        "assets/images/beverages-1-min.jpg",
        "assets/images/beverages-2-min.jpg",
        "assets/images/lunch-2-min.jpg",
        "assets/images/desserts-5-min.jpg",
        "assets/images/desserts-4-min.jpg",
    ];

    $(".main")
        .css({
            background: "url(" + images[2] + ") center/cover no-repeat",
            "background-blend-mode": "multiply",
            position: "relative",
            "z-index": "1",
        })
        .prepend('<div class="overlay"></div>');
    var interval = setInterval(function () {
        var randomIndex = Math.floor(Math.random() * images.length);
        $(".overlay").fadeOut(400, function () {
            $(".main").css({
                background:
                    "url(" + images[randomIndex] + ") center/cover no-repeat",
                "background-blend-mode": "multiply",
            });
            $(this).fadeIn("fast");
        });
    }, 5000);
}
