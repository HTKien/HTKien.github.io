document.getElementById("amdau").onclick = function() {
    document.getElementById("amdau").style.backgroundColor = "#0282EE";
    document.getElementById("amdau").style.color = "#fff";


    document.getElementById("amchinh").style.backgroundColor = "#fff";
    document.getElementById("amchinh").style.color = "#4E73DF";
    document.getElementById("amcuoi").style.backgroundColor = "#fff";
    document.getElementById("amcuoi").style.color = "#4E73DF";

    document.getElementById("amdau-table").style.display = "block";
    document.getElementById("amchinh-table").style.display = "none";
    document.getElementById("amcuoi-table").style.display = "none";





}
document.getElementById("amchinh").onclick = function() {

    document.getElementById("amchinh").style.backgroundColor = "#0282EE";
    document.getElementById("amchinh").style.color = "#fff";
    document.getElementById("amdau").style.backgroundColor = "#fff";
    document.getElementById("amdau").style.color = "#4E73DF";

    document.getElementById("amcuoi").style.backgroundColor = "#fff";
    document.getElementById("amcuoi").style.color = "#4E73DF";

    document.getElementById("amdau-table").style.display = "none";
    document.getElementById("amchinh-table").style.display = "block";
    document.getElementById("amcuoi-table").style.display = "none";


}
document.getElementById("amcuoi").onclick = function() {

    document.getElementById("amcuoi").style.backgroundColor = "#0282EE";
    document.getElementById("amcuoi").style.color = "#fff";
    document.getElementById("amchinh").style.backgroundColor = "#fff";
    document.getElementById("amchinh").style.color = "#4E73DF";

    document.getElementById("amdau").style.backgroundColor = "#fff";
    document.getElementById("amdau").style.color = "#4E73DF";

    document.getElementById("amdau-table").style.display = "none";
    document.getElementById("amchinh-table").style.display = "none";
    document.getElementById("amcuoi-table").style.display = "block";


}