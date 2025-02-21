
$(document).ready(function () {
    let images = [
        { src: "imgs/housenumbers.png", title: "Where Numbers Rest, 2024", fraction: "1/4" },
        { src: "imgs/belt.gif", title: "On Belt Buckles, 2024", fraction: "2/4" },
        { src: "imgs/knitfullscan.png", title: "Born to be Somebody, 2024", fraction: "3/4" },
        { src: "imgs/home.png", title: "Found Homes, 2024", fraction: "4/4" }
    ];

    let index = 0;

    $(".selectedworks").html(`<img src="${images[0].src}" class="active" alt="${images[0].title}">`);
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


