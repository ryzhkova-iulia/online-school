$(document).ready(function () {
    svg4everybody({});
});

$(document).ready(function () {

    $('[name="phone"]').inputmask('+7 (999) 999-99-99');


    $('[name="phone"]').attr('type', 'tel');

    $(".show-more").on("click", function () {
       $(this).parents(".about-text").find(".hide").slideToggle();
    });

    $(".show-more").on("click", function () {
        $(this).parents(".comment__text").find(".hide").css("display", "inline-block");
        $(this).hide();
    });

    $('.js-comments').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    });

    $('.js-callback').magnificPopup({
        items: {
            src: '#popup-form',
            type: 'inline'
        },
        callbacks: {
            elementParse: function(item) {

                var mp = $.magnificPopup.instance,
                    cur = mp.st.el,
                    title = cur.attr('data-header');

                $(item.src).find('.title_form').text(title);
            }
        }
    });

});
