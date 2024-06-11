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
// @downloadURL  https://raw.githubusercontent.com/yourusername/yourrepository/main/DEEP_SPACE.user.js
// @updateURL    https://raw.githubusercontent.com/yourusername/yourrepository/main/DEEP_SPACE.meta.js
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
            const selectedslot = document.querySelectorAll(".
