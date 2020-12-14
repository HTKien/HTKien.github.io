document.getElementById("btn-cach-go").onclick = function() {
    if (document.getElementById("btn-cach-go").textContent === "Xem cách gõ") {
        document.getElementById("btn-cach-go").textContent = "Quay lại";
        document.getElementById("219").classList.remove("hover__");
        document.getElementById("219").style.backgroundColor = "#FFB700";
        document.getElementById("219_").classList.remove("hover__");
        document.getElementById("219_").style.backgroundColor = "#FFB700";
    } else
    if (document.getElementById("btn-cach-go").textContent === "Quay lại") {
        document.getElementById("btn-cach-go").textContent = "Xem cách gõ";
        document.getElementById("219").classList.add("hover__");
        document.getElementById("219").style.backgroundColor = "#333333";
        document.getElementById("219_").classList.add("hover__");
        document.getElementById("219_").style.backgroundColor = "#333333";
    }

}