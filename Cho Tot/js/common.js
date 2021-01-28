$(document).ready(function(){
    //set slider delay
    $("#demo").carousel({ interval: 3000 });
    //call carousel
    $(".owl-carousel").owlCarousel();
    //set carousel menu-carosel
    $('.menu-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Xem thêm"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Thu gọn"; 
      moreText.style.display = "inline";
    }
  }