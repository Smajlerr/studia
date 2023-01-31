/* Julian Kobus */

function init() {  
    alert("Witamy!");  
 }  

function przy() {
    document.getElementById("div_5").style.display = "none";
}
function przy1() {
    document.getElementById("div_5").style.display = "block";
}

function first() {
    var poi = document.getElementById("klik")

    let cos = document.createElement("p")
    var cosTEXT = document.createTextNode("somelala")
    cos.append(cosTEXT)
    poi.append(cos)
}

function colorbut() {
    document.getElementById('kolor').style.color = 'red'
    document.getElementById('kolor').style.padding = '55px'
    document.getElementById('kolor').style.margin = '80px'
}