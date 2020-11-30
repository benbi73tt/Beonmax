$(document).ready(function() {
    $('.main_btna, .main_btn, a[href="#sheldure"]').click(() => {
        $('.overlay').fadeIn(1500);
        $('.modal').slideDown(1500);
    });

    $('.close').click(() => {
        $('.overlay').fadeOut(1500);
        $('.modal').slideUp(1500);
    })
})