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