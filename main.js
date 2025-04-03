$(document).ready(function(){
    $('.index').click(function (){
        $('.indexpopup').removeClass('hidden');

    })

    $('.close').click(function (){
        $('.indexpopup').addClass('hidden');
    })
})


let images = [
    { 
        src: "<video width='100%' height='auto' autoplay playsinline loop muted><source src='imgs/borntobe.mp4' type='video/mp4'>Your browser does not support the video tag.</video>", 
        title: "<a href=\"https://jenlliu.com/borntobe/\">Born to be Somebody, 2024</a>",
        textcolor: "black"
    },
    { 
        src: "imgs/numbers.webp", 
        srcSmall: "imgs/numbers2.webp",
        title: "<a href=\"https://jenlliu.com/wherenumbers/\">Where Numbers Rest, 2024</a>",
        textcolor: "white"
    },
    { 
        src: "imgs/lb.webp",
        srcSmall: "imgs/lb2.webp",
        title: "<a href=\"https://jenlliu.com/loosebuttons/\">Loose Buttons, 2025</a>", 
        textcolor: "white"
    },
    { 
        src: "imgs/home.webp",
        srcSmall: "imgs/home2.webp",
        title: "<a href=\"https://jenlliu.com/foundhomes/\">Found Homes in New York, 2024</a>", 
        textcolor: "black"
    },
    { 
        src: "imgs/belt.webp",
        srcSmall: "imgs/belt2.webp",
        title: "<a href=\"https://jenlliu.com/onbeltbuckles/\">On Belt Buckles, 2024</a>", 
        textcolor: "black"
    },
    { 
        src: "imgs/azxlb.webp",
        srcSmall: "imgs/azxlb2.webp",
        title: "<a href=\"https://jenlliu.com/azxlb/\">Amanda Zheng by LB, 2025</a>", 
        textcolor: "white"
    }
];

let index = 0;

function updateContent() {
    let currentItem = images[index];
    let screenWidth = window.innerWidth;

    let imageSrc = screenWidth > 750 ? currentItem.src : currentItem.srcSmall;

    if (currentItem.src.includes("<video")) {
        $(".selectedworks").html(currentItem.src);  
    } else {
        $(".selectedworks").html(`<img src="${imageSrc}" class="active" alt="Image">`); 
    }

    $(".caption").html(`
        <span class="title">${currentItem.title}</span>
    `);

    if (currentItem.textcolor === "white") {
        $(".homepagelink, .caption a, .info").addClass('white');
    } else {
        $(".homepagelink, .caption a, .info").removeClass('white');
    }
}

updateContent();

window.addEventListener("resize", updateContent);

$(".selectedworks").click(function () {
    index = (index + 1) % images.length;
    updateContent(); 
});

