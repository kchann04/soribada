$(document).ready(function(){

  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 2.5,
    spaceBetween: 20,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3.5,
    spaceBetween: 10,
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3.5,
    spaceBetween: 10,
  });

  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1.8,
    spaceBetween: 10,
  });

 $(".tab_tit li").click(function(){
   var idx = $(this).index();

  $(".tab_tit li").removeClass("on");
  $(".tab_tit li").eq(idx).addClass("on");
  $(".tab_con > .con").hide();
  $(".tab_con > .con").eq(idx).show();
 });

});