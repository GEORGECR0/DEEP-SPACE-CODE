// ==UserScript==
// @name         DEEP SPACE
// @namespace    http://tampermonkey.net/
// @version      5.6
// @description  DEEP SPACE Client for bloxd.io
// @author       GEORGECR
// @match        https://bloxd.io/
// @icon         https://i.postimg.cc/NMG91FWH/space-BG-loco.jpg
// @license      MIT
// @supportURL   https://github.com/damirarh/GreasyForkScripts
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/GEORGECR0/DEEP-SPACE-CODE/main/DEEP-SPACE.user.js
// @updateURL    https://raw.githubusercontent.com/GEORGECR0/DEEP-SPACE-CODE/main/DEEP-SPACE.user.js
// ==/UserScript==

setInterval(function() {
    'use strict';
    document.title = "DEEP SPACE";
    const maintext = document.querySelector('.Title.FullyFancyText');
    maintext.style.textShadow = "10px 5px 5px #000000";
    maintext.style.webkitTextStroke = "none";
    document.querySelector('.Title.FullyFancyText').textContent = "DEEP SPACE";
    let background = document.getElementsByClassName("Background");
    background[0].src = "https://i.postimg.cc/0yTx0G0L/client-BG.jpg";
    let names = document.getElementsByClassName("AvailableGameText");
    let imgs = document.getElementsByClassName("AvailableGameImg");
    let imgedits = document.getElementsByClassName("AvailableGame");

    setInterval(function() {
        const crosshair = document.querySelector(".CrossHair");
        if (crosshair) {
            crosshair.textContent = "";
            crosshair.style.backgroundImage = "url(https://piskel-imgstore-b.appspot.com/img/354b6bd7-1cd8-11ef-8822-bbb60d940ece.gif)";
            crosshair.style.backgroundRepeat = "no-repeat";
            crosshair.style.backgroundSize = "contain";
            crosshair.style.width = "12px";
            crosshair.style.height = "12px";
        }
    }, 1000);

    (function() {
        'use strict';
        setInterval(function() {
            const hotbarslots = document.querySelectorAll(".item");
            const selectedslot = document.querySelectorAll(".SelectedItem");
            if (hotbarslots) {
                hotbarslots.forEach(function(hotbar) {
                    hotbar.style.borderRadius = "8px";
                    hotbar.style.borderColor = "#000000";
                    hotbar.style.backgroundColor = "transparent";
                    hotbar.style.boxShadow = "none";
                    hotbar.style.outline = "transparent";
                });
            }
            if (selectedslot) {
                selectedslot.forEach(function(slot) {
                    slot.style.backgroundColor = "transparent";
                    slot.style.boxShadow = "none";
                    slot.style.borderRadius = "15px";
                    slot.style.borderColor = "#FFFFFF";
                    slot.style.outline = "transparent";
                });
            }
        }, 1);
    })();

    document.querySelectorAll('.AvailableGame').forEach(item => {
        item.style.border = "none";
    });

    for (let i = 0; i < names.length; i++) {
        names[i].style.textShadow = "none";
        imgedits[i].style.border = "none";
        imgedits[i].style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.4)";
    }
}, 1000);
