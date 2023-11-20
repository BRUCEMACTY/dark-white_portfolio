// script.js
function typeText(element, text, index, speed) {
    if (index < text.length) {
      
        element.textContent += text.charAt(index) ;
        setTimeout(function () {
            typeText(element, text, index + 1, speed);
        }, speed);
    }
}

var textElement = document.getElementById("typing-text");
var textToType = "Hi there ! My name is Yanga Nxangashe . I’m a Final Year Computer Science and Engineering student whose ready to embark on a professional career in Software Development. My passion for technology has driven me to become a software enthusiast";

typeText(textElement, textToType, 0, 20);
typeText()