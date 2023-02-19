$(function () {
    // 스크롤 시 상단 메뉴 고정 및 위로가기 버튼 추가
    $(window).scroll(function () {
        let gnbHeight = $('#gnb_top').height();
        if($(this).scrollTop() >= gnbHeight) {
            $('#header_top').css({
                position: 'fixed',
                top: 0
            });

            $('#arrow').fadeIn();
        }
        else {
            $('#header_top').css({
                position: 'static'
            });

            $('#arrow').fadeOut();
        }
    });
});