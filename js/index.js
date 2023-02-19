$(function () {
    let index = 0;
    let timer = setInterval(function () {
        $('.right_arrow').trigger('click');
    }, 3000);

    moveSlider();

    $('.left_arrow').click(function () {
        index--;
        moveSlider();
    });

    $('.right_arrow').click(function () {
        index++;
        moveSlider();
    });

    $('.slide_box').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            $('.right_arrow').trigger('click');
        }, 3000);
    });

    function moveSlider() {
        if(index < 0) {
            index = 3;
        }
        else if(index > 3) {
            index = 0;
        }

        $('.slide').animate({
            left: -(index * 1303)
        });
    }
});