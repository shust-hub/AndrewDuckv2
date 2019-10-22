"use strict";
$(document).ready(function(){
    $('#sliderShirts').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: document.querySelector('#arrow-next1'),
        prevArrow: document.querySelector('#arrow-prev1')

    });
    $('#sliderSuits').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: document.querySelector('#arrow-next2'),
        prevArrow: document.querySelector('#arrow-prev2')

    });
    $('#sliderAccessories').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: document.querySelector('#arrow-next3'),
        prevArrow: document.querySelector('#arrow-prev3')

    });
    $('#sliderGift').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: document.querySelector('#arrow-next4'),
        prevArrow: document.querySelector('#arrow-prev4')

    });
      //Плавная прокрутка якорей
    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault();
            const sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            $('html, body').animate({scrollTop: dn}, 1000);
        });
    });

    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('.arr-up').fadeIn();
            } else {
                $('.arr-up').fadeOut();              
            }
        });
        $('.arr-up').click(function() {
        $('body,html').animate({scrollTop:0},800);
        });
    });

    $(function() {
        $(window).scroll(function() {
            let $this = $(this);
            if($this.scrollTop() != ($(document).height() - $(window).height())) {
                $('.arr-down').fadeIn();
                
            } else {
                $('.arr-down').fadeOut();              
            }
        });
        $('.arr-down').click(function() {
        $('body,html').animate({scrollTop: $(document).height() + $(window).height()},800);
        });
    });
});
// "use strict";

// function validateForm(form) {
//     console.log("hi!");
//     if ((document.getElementById('check-konf').checked)&&(document.getElementById('check-oferta').checked)){
//         console.log("checked!");
//         let firstName = document.getElementsByClassName("payment-form__input_first-name")[0].value;
//         let secondName = document.getElementsByClassName("payment-form__input_second-name")[0].value;
//         let tel = document.getElementsByClassName("tel")[0].value;
//         let email = document.getElementsByClassName("email")[0].value;
        
//         console.log(firstName);
//     }
//     else 
//     console.log("not checked!");
//     // console.log(firstName + secondName+ tel + email);   
// };
   
