
$(document).ready(function () {
    let images = [
        { src: "imgs/housenumbers.png", title: "<a href=\"https://jenlliu.com/wherenumbers/\">Where Numbers Rest, 2024</a>", fraction: "1/4" },
        { src: "imgs/belt.gif", title: "<a href=\"https://jenlliu.com/onbeltbuckles/\">On Belt Buckles, 2024</a>", fraction: "2/4" },
        { src: "imgs/knitfullscan.png", title: "<a href=\"https://jenlliu.com/borntobe/\">Born to be Somebody, 2024</a>", fraction: "3/4" },
        { src: "imgs/home.png", title: "<a href=\"https://jenlliu.com/foundhomes/\">Found Homes, 2024</a>", fraction: "4/4" }
    ];

    let index = 0;

    $(".selectedworks").html(`<img src="${images[0].src}" class="active">`);
    $(".caption").html(`
        <span class="title">${images[0].title}</span>
        <span class="fraction">${images[0].fraction}</span>
    `);

    $(".selectedworks").click(function () {
        index = (index + 1) % images.length;

        $(".selectedworks img").attr("src", images[index].src).attr("alt", images[index].title);

        $(".caption").html(`
            <span class="title">${images[index].title}</span>
            <span class="fraction">${images[index].fraction}</span>
        `);
    });
});


