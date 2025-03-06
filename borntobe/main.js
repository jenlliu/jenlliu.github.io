// $(document).on("wheel", function (event) {
//     let $scan = $(".scan");
//     let scanOffset = $scan.offset().top;
//     let windowScroll = $(window).scrollTop();
//     let windowHeight = $(window).height();
//     let scanMiddle = scanOffset - (windowHeight / 2); // Middle of viewport

//     // Step 1: Allow normal vertical scroll until `.scan` reaches middle of viewport
//     if (windowScroll < scanMiddle) {
//         return; // Do nothing, allow normal scrolling
//     }

//     // Step 2: Stop vertical scrolling and scroll `.scan` horizontally
//     if (windowScroll >= scanMiddle && windowScroll < scanOffset + $scan.height()) {
//         event.preventDefault(); // Stop vertical scroll
//         $scan.scrollLeft($scan.scrollLeft() + event.originalEvent.deltaY); // Move `.scan` horizontally

//         // Step 3: If `.scan` is fully scrolled horizontally, re-enable vertical scrolling
//         if ($scan.scrollLeft() + $scan.innerWidth() >= $scan[0].scrollWidth) {
//             $(document).off("wheel"); // Remove listener to allow normal scrolling
//         }
//     }
// });


