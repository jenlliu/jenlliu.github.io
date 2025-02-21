// $(document).ready(function () {
//     $(".works").hover(
//         function () {
//             let image = $(this).find(".hoverpics"); 
//             let offset = $(this).offset();
//             let topPosition = offset.top;
//             let leftPosition = offset.left - image.outerWidth() - 30;

//             image.css({
//                 display: "block",
//                 position: "absolute",
//                 top: topPosition + "px",
//                 left: leftPosition + "px"
//             });
//         },
//         function () {
//             $(this).find(".hoverpics").css("display", "none");
//         }
//     );
// });

$(document).ready(function () {
    $(".works").hover(
        function () {
            let image = $(this).find(".hoverpics");
            let worksDiv = $(this);
            let offset = worksDiv.offset();
            let imageHeight = image.outerHeight();
            let worksBottom = offset.top + worksDiv.outerHeight();
            let leftPosition = offset.left - image.outerWidth() - 30;

            let topPosition = worksBottom - imageHeight;

            image.css({
                display: "block",
                position: "absolute",
                top: topPosition + "px",
                left: leftPosition + "px"
            });
        },
        function () {
            $(this).find(".hoverpics").css("display", "none");
        }
    );
});