// include.js
// document.addEventListener("DOMContentLoaded", function() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementsByTagName("header")[0].firstChild = this.responseText;
//         }
//     };
//     xhttp.open("GET", "../src/header.html", true);
//     xhttp.send();
// });


// include.js
document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var bodyContent = document.createElement("div");
            bodyContent.innerHTML = this.responseText;
            var body = document.getElementsByTagName("body")[0];
            // Insere o conteúdo como o primeiro filho da tag <body>
            while (bodyContent.firstChild) {
                body.insertBefore(bodyContent.firstChild, body.firstChild);
            }
        }
    };
    xhttp.open("GET", "../src/header.html", true);
    xhttp.send();
});
