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
    $("#more").slideToggle("slow");
    if($("#myBtn").text()=="Xem thêm"){
        $("#myBtn").text("Thu gọn");
    }else{
        $("#myBtn").text("Xem thêm");

    }
}