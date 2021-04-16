"use strict";
import ConsoleLog from './ConsoleLog.js';
import alertMe from "./AlertMe";

(function(){
    alertMe('Keith');
    ConsoleLog(document);
    window.onload = function() {

        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const heading_text = document.createTextNode("Big Head! 3");
        const heading2 = document.createElement("h1");
        const heading_text2 = document.createTextNode("Big Head! 3");
        heading.appendChild(heading_text);
        heading.style.color = "green";
        document.body.appendChild(heading);
        heading2.appendChild(heading_text2);
        document.body.appendChild(heading2);
        heading2.style.color = "red";
        heading2.style.border = "solid 1px black";
        heading2.onclick = function () {
            heading2.innerText = "test";
        };
    }
})();
/*


 */

