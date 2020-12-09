// document.getElementById('hocgo').onclick=function(a){
//     document.getElementById('trangchu').classList.remove("active");

//     this.classList.add("active");

// }
function xemCachGo() {
    if (document.getElementById("xemCachGoText").text === "Xem cách gõ") {
        document.getElementById("xemCachGoText").innerHTML = "Quay lại";
        document.getElementById("imgLuyenGo").setAttribute("src", "img/tocky-removebg-preview.png");

    } else
    if (document.getElementById("xemCachGoText").text === "Quay lại") {
        document.getElementById("xemCachGoText").innerHTML = "Xem cách gõ";
        document.getElementById("imgLuyenGo").setAttribute("src", "img/banphim-removebg-preview.png");

    }
}

function playGame() {
    document.getElementById("imgPlayGame").setAttribute("src", "img/game2.png");

}

function batHoTro() {
    if (document.getElementById('bat-ho-tro').textContent === "Bật hỗ trợ") {
        document.getElementById('bat-ho-tro').innerHTML = "Tắt hỗ trợ";
        document.getElementsByClassName("keyboard-tocky")[0].style.display = 'block';
        document.getElementsByClassName("keyboad-right")[0].style.display = 'block';
        document.getElementsByClassName('soan-thao')[0].style.height = "185px";
        document.getElementsByClassName('soan-thao')[1].style.height = "185px";
    } else {
        document.getElementById('bat-ho-tro').innerHTML = "Bật hỗ trợ";
        document.getElementsByClassName("keyboard-tocky")[0].style.display = 'none';
        document.getElementsByClassName("keyboad-right")[0].style.display = 'none';
        document.getElementsByClassName('soan-thao')[0].style.height = "410px";
        document.getElementsByClassName('soan-thao')[1].style.height = "410px";
    }
}

function cachGo() {
    document.getElementById("cachGo").style.width = "70%";
}