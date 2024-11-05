$(document).ready(function() {
    $('.printbutton').click(function() {
        $('#lb, #yellowivy, #numbers, #analise, #9th, #homes, #closet').removeClass('hidden');
        $('#heartrot, #slow').addClass('hidden');
        $('.allbutton, .codebutton, .motionbutton').removeClass('underline');
        $('.printbutton').addClass('underline');
    });

    $('.codebutton').click(function() {
        $('#lb, #numbers').removeClass('hidden');
        $('#slow, #yellowivy, #analise, #9th, #homes, #closet, #heartrot').addClass('hidden');
        $('.allbutton, .printbutton, .motionbutton').removeClass('underline');
        $('.codebutton').addClass('underline');
    });

    $('.allbutton').click(function() {
        $('#slow, #lb, #yellowivy, #numbers, #analise, #9th, #homes, #closet, #heartrot').removeClass('hidden');
        $('.codebutton, .printbutton, .motionbutton').removeClass('underline');
        $('.allbutton').addClass('underline');
    });

    $('.motionbutton').click(function() {
        $('#lb, #yellowivy, #numbers, #analise, #9th, #homes, #closet').addClass('hidden');
        $('#heartrot, #slow').removeClass('hidden');
        $('.allbutton, .printbutton, .codebutton').removeClass('underline');
        $('.motionbutton').addClass('underline');
    });
});

$(document).ready(function() {
    function toggleHoverWithClass(trigger, targetClass) {
        $(trigger).hover(
            function() {
                $(targetClass).removeClass('hidden');
            },
            function() {
                $(targetClass).addClass('hidden');
            }
        );
    }

    toggleHoverWithClass('#lb', '#lbhover');
    toggleHoverWithClass('#yellowivy', '#yellowivyhover');
    toggleHoverWithClass('#numbers', '#numbershover');
    toggleHoverWithClass('#slow', '#slowhover');
    toggleHoverWithClass('#homes', '#homeshover');
    toggleHoverWithClass('#closet', '#closethover');
    toggleHoverWithClass('#heartrot', '#heartrothover');
});

