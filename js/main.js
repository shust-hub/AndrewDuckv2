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
                                     
// "use strict";
}); 

function validateForm(form) {
    console.log("hi!");
    if (checkAgreement()) {
        let firstName = document.getElementsByClassName("payment-form__input_first-name")[0].value;
        checkEmpty(firstName);
        let secondName = document.getElementsByClassName("payment-form__input_second-name")[0].value;
        checkEmpty(secondName);
        let tel = document.getElementsByClassName("payment-form__input_tel")[0].value;
        let email = document.getElementsByClassName("payment-form__input_email")[0].value;
        
     

        let city = document.querySelectorAll('input[name="city"]:checked')[0].value;
        let price = document.querySelectorAll('input[name="price"]:checked')[0].value;
        if (price == "on") { 
            price = document.getElementsByClassName("payment-form__input-price")[0].value; 
        }
        let indicatePrice = document.querySelectorAll('input[name="indicate-price"]:checked')[0].value;
        let delivery = document.querySelectorAll('input[name="delivery"]:checked')[0].value;
        let payment = document.querySelectorAll('input[name="payment"]:checked')[0].value;
        console.log("all good");
    }
};

function checkAgreement() {
    if ((document.getElementById('check-konf').checked) == false) {
        console.log("1not_checked!");
        document.querySelectorAll('label[for="check-konf"]')[0].style.color = "red";
        return false;
    } else if
        ((document.getElementById('check-oferta').checked) == false) {
        console.log("2not_checked!");   
        document.querySelectorAll('label[for="check-oferta"]')[0].style.color = "red";
        return false;
    } else 
        return true;
}

function checkEmpty (str) {
    if (str.length==0) {
        // document.getElementsByClassName("msg_error")[0].innerHTML = "Заполните все поля";
        console.log("msg_error"); 
        return false;
    }
    return true;
}



