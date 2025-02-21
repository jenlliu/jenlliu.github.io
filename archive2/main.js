$(document).ready(function() {
    $('.printbutton').click(function() {
        $('#beltbook, #knit, #lb, #yellowivy, #numbers, #analise, #9th, #homes, #closet').removeClass('hidden');
        $('#heartrot, #slow').addClass('hidden');
        $('.allbutton, .codebutton, .motionbutton').removeClass('underline');
        $('.printbutton').addClass('underline');
    });

    $('.codebutton').click(function() {
        $('#lb, #numbers').removeClass('hidden');
        $('#beltbook, #knit, #slow, #yellowivy, #analise, #9th, #homes, #closet, #heartrot').addClass('hidden');
        $('.allbutton, .printbutton, .motionbutton').removeClass('underline');
        $('.codebutton').addClass('underline');
    });

    $('.allbutton').click(function() {
        $('#beltbook, #knit, #slow, #lb, #yellowivy, #numbers, #analise, #9th, #homes, #closet, #heartrot').removeClass('hidden');
        $('.codebutton, .printbutton, .motionbutton').removeClass('underline');
        $('.allbutton').addClass('underline');
    });

    $('.motionbutton').click(function() {
        $('#beltbook, #lb, #yellowivy, #numbers, #analise, #9th, #homes, #closet').addClass('hidden');
        $('#knit, #heartrot, #slow').removeClass('hidden');
        $('.allbutton, .printbutton, .codebutton').removeClass('underline');
        $('.motionbutton').addClass('underline');
    });
});

$(document).ready(function() {
    $('.gridbutton').click(function(){
        $('.labels, .name, .medium, .year, .line, .hoverpics').addClass('hidden');
        $('#beltbook, #knit, #lb, #yellowivy, #numbers, #slow, #homes, #closet, #heartrot').addClass('listitem');
        $('.list').addClass('list2');
        $('.works').addClass('works2');
        $('.works2').removeClass('works');
        $('.listbutton').removeClass('underline');
        $('.gridbutton').addClass('underline');
    });

    $('.listbutton').click(function(){
        $('.labels, .name, .medium, .year, .line, .hoverpics').removeClass('hidden');
        $('#beltbook, #knit, #lb, #yellowivy, #numbers, #slow, #homes, #closet, #heartrot').removeClass('listitem');
        $('.list').removeClass('list2');
        $('.works2').addClass('works');
        $('.works2').removeClass('works2');
        $('.listbutton').addClass('underline');
        $('.gridbutton').removeClass('underline');
    });

    $('.archive').click(function(){
        $('.list, .list2, .categories, .about').addClass('hidden');
        $('.archivepics').removeClass('hidden');
        $('.archive').addClass('underline');
        $('.work').removeClass('underline');
    });

    $('.work').click(function(){
        $('.list, .list2, .categories, .about').removeClass('hidden');
        $('.archivepics').addClass('hidden');
        $('.work').addClass('underline');
        $('.archive').removeClass('underline');
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

    toggleHoverWithClass('#beltbook', '#belthover');
    toggleHoverWithClass('#knit', '#knithover');
    toggleHoverWithClass('#lb', '#lbhover');
    toggleHoverWithClass('#yellowivy', '#yellowivyhover');
    toggleHoverWithClass('#numbers', '#numbershover');
    toggleHoverWithClass('#slow', '#slowhover');
    toggleHoverWithClass('#homes', '#homeshover');
    toggleHoverWithClass('#closet', '#closethover');
    toggleHoverWithClass('#heartrot', '#heartrothover');
});

