var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',

     
    },
    breakpoints: {
        
        1025: {
            slidesPerView: 3,
            spaceBetween: 30
        },
       
        640:{
            slidesPerView:2,
            spaceBetween:30
        },
        320:{
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
   
});