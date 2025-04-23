window.addEventListener( "load" , ()=> {
    document.getElementsByName("nav_input").checked=true;
    orderchecked()
});
function orderchecked() {
    var orderview=document.getElementById("order_view");
    var receptionview=document.getElementById("reception_view");
    var numview=document.getElementById("num_view");
    var chartsview=document.getElementById("charts_view");
    var settingsview=document.getElementById("settings_view");
    orderview.classList.add("displayflex");
    receptionview.classList.remove("displayflex");
    numview.classList.remove("displayflex");
    chartsview.classList.remove("displayflex");
    settingsview.classList.remove("displayflex");
}
function receptionchecked() {
    var orderview=document.getElementById("order_view");
    var receptionview=document.getElementById("reception_view");
    var numview=document.getElementById("num_view");
    var chartsview=document.getElementById("charts_view");
    var settingsview=document.getElementById("settings_view");
    orderview.classList.remove("displayflex");
    receptionview.classList.add("displayflex");
    numview.classList.remove("displayflex");
    chartsview.classList.remove("displayflex");
    settingsview.classList.remove("displayflex");
}
function numchecked() {
    var orderview=document.getElementById("order_view");
    var receptionview=document.getElementById("reception_view");
    var numview=document.getElementById("num_view");
    var chartsview=document.getElementById("charts_view");
    var settingsview=document.getElementById("settings_view");
    orderview.classList.remove("displayflex");
    receptionview.classList.remove("displayflex");
    numview.classList.add("displayflex");
    chartsview.classList.remove("displayflex");
    settingsview.classList.remove("displayflex");
}
function chartschecked() {
    var orderview=document.getElementById("order_view");
    var receptionview=document.getElementById("reception_view");
    var numview=document.getElementById("num_view");
    var chartsview=document.getElementById("charts_view");
    var settingsview=document.getElementById("settings_view");
    orderview.classList.remove("displayflex");
    receptionview.classList.remove("displayflex");
    numview.classList.remove("displayflex");
    chartsview.classList.add("displayflex");
    settingsview.classList.remove("displayflex");
}
function settingschecked() {
    var orderview=document.getElementById("order_view");
    var receptionview=document.getElementById("reception_view");
    var numview=document.getElementById("num_view");
    var chartsview=document.getElementById("charts_view");
    var settingsview=document.getElementById("settings_view");
    orderview.classList.remove("displayflex");
    receptionview.classList.remove("displayflex");
    numview.classList.remove("displayflex");
    chartsview.classList.remove("displayflex");
    settingsview.classList.add("displayflex");
}