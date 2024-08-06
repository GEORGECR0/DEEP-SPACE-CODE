// ==UserScript==
// @name         Deep Space Client
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  DEEP SPACE Client for bloxd.io
// @author       GEORGECR
// @match        https://bloxd.io/
// @icon         https://i.postimg.cc/NMG91FWH/space-BG-loco.jpg
// @license      MIT
// @supportURL   https://github.com/damirarh/GreasyForkScripts
// @grant        none
// ==/UserScript==

(function() {
    //copyright DEEP SPACE pls dont copy if you gonna copy some parts reach me on discord
    'use strict';
    let crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/d81e6523-1d08-11ef-8eba-878efb6f53d1.gif';
    let CrossSize = '19';
    let CrossOpacity = '1';


    function updateGameAppearance() {
        document.title = "Deep Space Client";
        const maintext = document.querySelector('.Title.FullyFancyText');
        if (maintext) {
            maintext.style.webkitTextStroke = "none";
            maintext.textContent = "DEEP SPACE";
            maintext.style.textShadow = "10px 5px 5px #000000";
            maintext.style.fontSize = '60px';
            maintext.style.fontWeight = 'bolder';
        }

        const background = document.querySelector(".HomeBackground");
        if (background) {
            background.style.backgroundImage = 'url(https://i.postimg.cc/v8rFjRWq/MAINBACKGROUND.jpg)';
        }

    const modifyElements = () => {
        ['LogoContainer', 'cube' , 'HomeScreenBottomRight'].forEach(className => {
            document.querySelectorAll('.' + className).forEach(HomeScreen => HomeScreen.remove());
        });

        ['GameAdsBanner', 'HomeBannerInner', 'InventoryAdOuter'].forEach(className => {
            document.querySelectorAll('.' + className).forEach(ADS => {
                ADS.style.opacity = '0';
                ADS.style.transform = 'translateX(100%)';
            });
        });
                ['Inventory', 'InviteLinkBox'].forEach(className => {
            document.querySelectorAll('.' + className).forEach(BoxOpacity => {
                BoxOpacity.style.backgroundColor ='transparent';
                BoxOpacity.style.boxShadow = "none";
                BoxOpacity.style.border = "3px solid rgb(0, 0, 0)";
            });
        });

                ['AccountPreviewBackground', 'HeaderRightBackground'].forEach(className => {
            document.querySelectorAll('.' + className).forEach(Homescreen1 => {
                Homescreen1.style.backgroundColor = "#883240";
            });
        });
                        ['PlayerNameInfoNameClickable'].forEach(className => {
            document.querySelectorAll('.' + className).forEach(el => {
                el.style.color = "white";
                el.style.textShadow = "none";
            });
        });
        ['GameCardContainer', 'GameCardContainer LongRatio'].forEach(className => {
            document.querySelectorAll('.' + className).forEach(GameCards => {
                GameCards.style.width = "220px";
                GameCards.style.height = "133px";
            });
        });
        document.querySelectorAll('.ChooseGameWrapper').forEach(GameCards1 => {
            GameCards1.style.position = 'absolute';
            GameCards1.style.top = '30%';
            GameCards1.style.transform = 'translateY(-30%)';
            GameCards1.style.width = '85%';
            GameCards1.style.height = '35%';
        });
    };

    document.addEventListener('DOMContentLoaded', modifyElements);
    setInterval(modifyElements, 1000);


        const crosshair = document.querySelector(".CrossHair");
        if (crosshair) {
            crosshair.textContent = "";
            crosshair.style.backgroundImage = `url(${crosshairvalue})`;
            crosshair.style.backgroundRepeat = "no-repeat";
            crosshair.style.backgroundSize = "contain";
            crosshair.style.width = CrossSize + "px";
            crosshair.style.height = CrossSize + "px";
            crosshair.style.opacity = CrossOpacity;
        }

        document.querySelectorAll(".item").forEach(hotbar => {
            hotbar.style.borderRadius = "12px";
            hotbar.style.borderColor = "#000000";
            hotbar.style.backgroundColor = "transparent";
            hotbar.style.boxShadow = "none";
            hotbar.style.outline = "transparent";
        });

        document.querySelectorAll(".SelectedItem").forEach(slot => {
            slot.style.backgroundColor = "transparent";
            slot.style.boxShadow = "none";
            slot.style.borderRadius = "15px";
            slot.style.borderColor = "#FFFFFF";
            slot.style.outline = "transparent";
        });

document.querySelectorAll('.InvenItem[data-inven-idx="46"], .InvenItem[data-inven-idx="47"], .InvenItem[data-inven-idx="48"], .InvenItem[data-inven-idx="49"], .InvenItem[data-inven-idx="50"]').forEach(ARMOR => {
    ARMOR.style.backgroundColor = "transparent";
    ARMOR.style.boxShadow = "none";
    ARMOR.style.borderColor = "transparent";
    ARMOR.style.outline = "transparent";
});
        document.querySelectorAll('.InvenItem[data-inven-idx="46"] .InvenItemUnfilled').forEach(armor => {
            armor.style.backgroundImage = 'url(https://piskel-imgstore-b.appspot.com/img/f7c20a66-3491-11ef-911f-9f3fc6109f85.gif)';
});
document.querySelectorAll('.InvenItem[data-inven-idx="47"] .InvenItemUnfilled').forEach(armor => {
            armor.style.backgroundImage = 'url(https://piskel-imgstore-b.appspot.com/img/bb5b78a8-3498-11ef-bcaf-9f3fc6109f85.gif)';
});
        document.querySelectorAll('.InvenItem[data-inven-idx="48"] .InvenItemUnfilled').forEach(armor => {
            armor.style.backgroundImage = 'url(https://piskel-imgstore-b.appspot.com/img/ab8a4be8-3491-11ef-8f57-9f3fc6109f85.gif)';
});
document.querySelectorAll('.InvenItem[data-inven-idx="49"] .InvenItemUnfilled').forEach(armor => {
            armor.style.backgroundImage = 'url(https://piskel-imgstore-b.appspot.com/img/f1d6cc85-3493-11ef-a098-9f3fc6109f85.gif)';
});
document.querySelectorAll('.InvenItem[data-inven-idx="50"] .InvenItemUnfilled').forEach(armor => {
            armor.style.backgroundImage = 'url(https://piskel-imgstore-b.appspot.com/img/840035a8-3491-11ef-879a-9f3fc6109f85.gif)';
});

    for (let i = 45; i >= 0; i--) {
        document.querySelectorAll(`.InvenItem[data-inven-idx="${i}"]`).forEach(Inventory => {
            Inventory.style.backgroundColor = "transparent";
            Inventory.style.boxShadow = "none";
            Inventory.style.border = "3px solid rgb(0, 0, 0)";
            Inventory.style.borderRadius = "0px";
            Inventory.style.outline = "transparent";
        });
    }
            for (let i = 86; i >= 51; i--) {
        document.querySelectorAll(`.InvenItem[data-inven-idx="${i}"]`).forEach(Chests => {
            Chests.style.backgroundColor = "transparent";
            Chests.style.boxShadow = "none";
            Chests.style.border = "3px solid rgb(0, 0, 0)";
            Chests.style.borderRadius = "0px";
            Chests.style.outline = "transparent";
        });
    }


        document.querySelectorAll('.AvailableGame').forEach(item => {
            item.style.border = "none";
            item.style.borderRadius = "0px";
            item.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.4)";
        });

        document.querySelectorAll('.AvailableGameTextInner').forEach(name => {
            name.style.textShadow = "none";
        });
        document.querySelectorAll('.AvailableGameTextWrapperBackground').forEach(removebox => {
            removebox.style.opacity= "0";
        });
    }

    setInterval(updateGameAppearance, 100);

    const createBox = (id, zIndex) => {
        const box = document.createElement('div');
        box.id = id;
        box.style.position = 'fixed';
        box.style.top = '50%';
        box.style.left = '50%';
        box.style.transform = 'translate(-50%, -50%)';
        box.style.width = '800px';
        box.style.height = '600px';
        box.style.backgroundColor = 'rgb(40, 40, 40)';
        box.style.color = 'white';
        box.style.borderRadius = '20px';
        box.style.display = 'none';
        box.style.padding = '20px';
        box.style.overflowY = 'auto';
        box.style.zIndex = zIndex;
        document.body.appendChild(box);
        return box;
    };
        const createmenu = (id, zIndex) => {
        const menu = document.createElement('div');
        menu.id = id;
        menu.style.position = 'fixed';
        menu.style.top = '50%';
        menu.style.left = '50%';
        menu.style.transform = 'translate(-50%, -50%)';
        menu.style.width = '350px';
        menu.style.height = '290px';
        menu.style.backgroundColor = 'rgb(40, 40, 40)';
        menu.style.border = '2px solid rgb(60, 60, 60)';
        menu.style.color = 'white';
        menu.style.borderRadius = '20px';
        menu.style.display = 'none';
        menu.style.padding = '20px';
        menu.style.zIndex = zIndex;
        document.body.appendChild(menu);
        return menu;
    };
    const mainMenu = createmenu('toggleMenu', '1000');
    const mainBox = createBox('toggleBox', '1000');
    const settingsModal = createBox('settingsModal', '1001');
    settingsModal.style.backgroundColor = 'rgb(40, 40, 40)';

    const crosshairSettingsModal = createBox('crosshairSettingsModal', '1002');
    crosshairSettingsModal.style.backgroundColor = 'rgb(40, 40, 40)';

        const cpsSettingsModal = createBox('cpsSettingsModal', '1002');
    crosshairSettingsModal.style.backgroundColor = 'rgb(40, 40, 40)';

            const pingSettingsModal = createBox('pingSettingsModal', '1002');
    crosshairSettingsModal.style.backgroundColor = 'rgb(40, 40, 40)';

                        const infoModal = createBox('infoModal', '1002');
    infoModal.style.backgroundColor = 'rgb(40, 40, 40)'

                    const toggleshiftSettingsModal = createBox('toggleshiftSettingsModal', '1002');
    toggleshiftSettingsModal.style.backgroundColor = 'rgb(40, 40, 40)'

                    const hotbarSettingsModal = createBox('hotbarSettingsModal', '1002');
    hotbarSettingsModal.style.backgroundColor = 'rgb(40, 40, 40)'

                         const Cosmetics = createBox('Cosmetics', '1002');
    Cosmetics.style.backgroundColor = 'rgb(40, 40, 40)'

    const closeIcon = document.createElement('button');
    closeIcon.textContent = '✖';
    closeIcon.style.position = 'absolute';
    closeIcon.style.width = '30px';
    closeIcon.style.height = '30px';
    closeIcon.style.backgroundColor = 'transparent';
    closeIcon.style.top = '20px';
    closeIcon.style.right = '20px';
    closeIcon.style.border = 'none';
    closeIcon.style.color = 'white';
    closeIcon.style.cursor = 'pointer';
    closeIcon.addEventListener('click', function() {
    mainBox.style.display = 'none';
    });
    mainBox.appendChild(closeIcon);

    const settingsContainer = document.createElement('div');
    settingsContainer.style.display = 'flex';
    mainBox.appendChild(settingsContainer);

    const MenuText = document.createElement('button');
    MenuText.textContent = 'DEEP SPACE';
    MenuText.style.width = '350px';
    MenuText.style.heght = '50px';
    MenuText.style.marginBottom = '10px';
    MenuText.style.fontSize = '30px';
    MenuText.style.fontWeight = 'bold';
    MenuText.style.color = 'white';
    MenuText.style.textShadow = "10px 5px 5px #000000";
    MenuText.style.backgroundColor = 'transparent';
    MenuText.style.border = 'none';
    mainMenu.appendChild(MenuText);

    const ModsButton = document.createElement('button');
    ModsButton.textContent = 'Mods';
    ModsButton.style.marginBottom = '10px';
    ModsButton.style.backgroundColor = 'rgba(240, 240, 240, 0.2)';
    ModsButton.style.borderRadius = '10px';
    ModsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    ModsButton.style.color = 'white';
    ModsButton.style.width = '350px';
    ModsButton.style.height = '50px';
    ModsButton.style.fontSize = '20px';
    ModsButton.style.fontWeight = 'bold';
    ModsButton.style.cursor = 'pointer';

    ModsButton.addEventListener('mouseover', function() {
        ModsButton.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        ModsButton.style.color = 'white';
        ModsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    });

    ModsButton.addEventListener('mouseout', function() {
        ModsButton.style.backgroundColor = 'rgba(240, 240, 240, 0.2)';
        ModsButton.style.color = 'white';
        ModsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    });

    ModsButton.addEventListener('click', function() {
        mainBox.style.display = 'block';
    });
    mainMenu.appendChild(ModsButton);

    const CosmeticsButton = document.createElement('button');
    CosmeticsButton.textContent = 'Cosmetics';
    CosmeticsButton.style.marginBottom = '10px';
    CosmeticsButton.style.backgroundColor = 'rgba(240, 240, 240, 0.2)';
    CosmeticsButton.style.borderRadius = '10px';
    CosmeticsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    CosmeticsButton.style.color = 'white';
    CosmeticsButton.style.width = '350px';
    CosmeticsButton.style.height = '50px';
    CosmeticsButton.style.fontSize = '20px';
    CosmeticsButton.style.fontWeight = 'bold';
    CosmeticsButton.style.cursor = 'pointer';

    CosmeticsButton.addEventListener('mouseover', function() {
        CosmeticsButton.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        CosmeticsButton.style.color = 'white';
        CosmeticsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    });

    CosmeticsButton.addEventListener('mouseout', function() {
        CosmeticsButton.style.backgroundColor = 'rgba(240, 240, 240, 0.2)';
        CosmeticsButton.style.color = 'white';
        CosmeticsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    });

    CosmeticsButton.addEventListener('click', function() {
        Cosmetics.style.display = 'block';
    });
    mainMenu.appendChild(CosmeticsButton);

    const settingsButton = document.createElement('button');
    settingsButton.textContent = 'Settings';
    settingsButton.style.fontSize = '20px';
    settingsButton.style.fontWeight = 'bold';
    settingsButton.style.marginBottom = '10px';
    settingsButton.style.width = '350px';
    settingsButton.style.height = '50px';
    settingsButton.style.backgroundColor = 'rgba(240, 240, 240, 0.2)';
    settingsButton.style.borderRadius = '10px';
    settingsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    settingsButton.style.color = 'white';
    settingsButton.style.cursor = 'pointer';

    settingsButton.addEventListener('mouseover', function() {
        settingsButton.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        settingsButton.style.color = 'white';
        settingsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    });

    settingsButton.addEventListener('mouseout', function() {
        settingsButton.style.backgroundColor = 'rgba(240, 240, 240, 0.2)';
        settingsButton.style.color = 'white';
        settingsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    });

    settingsButton.addEventListener('click', function() {
        settingsModal.style.display = 'block';
    });

    mainMenu.appendChild(settingsButton);

    const linkButton2 = document.createElement('button');
    linkButton2.textContent = 'Join Discord';
    linkButton2.style.backgroundColor = 'rgba(240, 240, 240, 0.2)';
    linkButton2.style.borderRadius = '10px';
    linkButton2.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    linkButton2.style.color = 'white';
    linkButton2.style.width = '350px';
    linkButton2.style.height = '50px';
    linkButton2.style.fontSize = '20px';
    linkButton2.style.fontWeight = 'bold';
    linkButton2.style.cursor = 'pointer';
linkButton2.addEventListener('mouseover', function() {
    linkButton2.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    linkButton2.style.color = 'white';
    linkButton2.style.border = '2px solid rgba(255, 255, 255, 0.5)';
});

linkButton2.addEventListener('mouseout', function() {
    linkButton2.style.backgroundColor = 'rgba(240, 240, 240, 0.2)';
    linkButton2.style.color = 'white';
    linkButton2.style.border = '2px solid rgba(255, 255, 255, 0.5)';
});

linkButton2.addEventListener('click', function() {
    window.open('https://discord.gg/NdpwX4FBaB', '_blank');
});
    mainMenu.appendChild(linkButton2);

        const ALLButton = document.createElement('button');
    ALLButton.textContent = 'All';
    ALLButton.style.marginRight = '5px';
    ALLButton.style.backgroundColor = '#A52D2D';
    ALLButton.style.borderRadius = '5px';
    ALLButton.style.border = 'none';
    ALLButton.style.color = 'white';
    ALLButton.style.width = '60px';
    ALLButton.style.height = '30px';
    ALLButton.style.fontsize = '18px';
    ALLButton.style.cursor = 'pointer';
    settingsContainer.appendChild(ALLButton);

            const INFOButton = document.createElement('button');
    INFOButton.textContent = 'Info';
    INFOButton.style.marginRight = '5px';
    INFOButton.style.backgroundColor = 'rgb(50, 50, 50)';
    INFOButton.style.borderRadius = '5px';
    INFOButton.style.border = 'none';
    INFOButton.style.color = 'white';
    INFOButton.style.width = '60px';
    INFOButton.style.height = '30px';
    INFOButton.style.fontsize = '18px';
    INFOButton.style.cursor = 'pointer';
    INFOButton.addEventListener('click', function() {
    infoModal.style.display = 'block';
    });
    settingsContainer.appendChild(INFOButton);

    const separator = document.createElement('hr');
    separator.style.border = '1px solid rgb(60, 60, 60)';
    separator.style.margin = '5px -5px';
    mainBox.appendChild(separator);

    const row1 = document.createElement('div');
    row1.style.display = 'flex';
    row1.style.gap = '15px';
    row1.style.marginTop = '15px';
    mainBox.appendChild(row1);

     const row2 = document.createElement('div');
    row2.style.display = 'flex';
    row2.style.gap = '15px';
    row2.style.marginTop = '15px';
    mainBox.appendChild(row2);

     const row3 = document.createElement('div');
    row3.style.display = 'flex';
    row3.style.gap = '15px';
    row3.style.marginTop = '15px';
    mainBox.appendChild(row3);

const armourViewBox = document.createElement('div');
armourViewBox.style.width = '170px';
armourViewBox.style.height = '170px';
armourViewBox.style.backgroundColor = 'rgb(50, 50, 50)';
armourViewBox.style.display = 'flex';
armourViewBox.style.border = '2px solid rgb(60, 60, 60)';
armourViewBox.style.flexDirection = 'column';
armourViewBox.style.justifyContent = 'space-between';
armourViewBox.style.alignItems = 'center';
armourViewBox.style.padding = '10px';
armourViewBox.style.borderRadius = '10px';

const armourViewText = document.createElement('span');
armourViewText.textContent = 'ARMOR VIEW';
armourViewBox.appendChild(armourViewText);

const amourViewImage = document.createElement('div');
amourViewImage.style.backgroundImage = 'url(https://i.postimg.cc/7LLGbjJJ/sdsdffddfsfdsf.png)';
amourViewImage.style.backgroundRepeat = "no-repeat";
amourViewImage.style.backgroundSize = "contain";
amourViewImage.style.width = '75px';
amourViewImage.style.height = '75px';
armourViewBox.appendChild(amourViewImage);

const armourViewToggleButton = document.createElement('button');
armourViewToggleButton.textContent = 'Enabled';
armourViewToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
armourViewToggleButton.style.borderRadius = '10px';
armourViewToggleButton.style.border = 'none';
armourViewToggleButton.style.color = 'white';
armourViewToggleButton.style.width = '160px';
armourViewToggleButton.style.height = '40px';
armourViewToggleButton.style.fontSize = '18px';
armourViewToggleButton.style.cursor = 'pointer';
armourViewBox.appendChild(armourViewToggleButton);
row1.appendChild(armourViewBox);

let selectedItemBoxInterval;

const cinematicToggleButton = document.createElement('button');

function createSelectedItemBox() {
    const selectedItemBox = document.createElement('div');
    selectedItemBox.id = 'selected-item-box';
    selectedItemBox.style.position = 'fixed';
    selectedItemBox.style.bottom = '100px';
    selectedItemBox.style.left = '28%';
    selectedItemBox.style.transformX = 'translateX(-28%)';
    selectedItemBox.style.width = '400px';
    selectedItemBox.style.height = '70px';
    selectedItemBox.style.zIndex = '9999';
    selectedItemBox.style.overflow = 'hidden';
    selectedItemBox.style.display = 'flex';
    selectedItemBox.style.alignItems = 'center';
    selectedItemBox.style.justifyContent = 'center';
    document.body.appendChild(selectedItemBox);

            document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (cinematicToggleButton.textContent === 'Enabled' && (key === 'h' || key === 'H')) {
                selectedItemBox.style.visibility = selectedItemBox.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
});

    function updateSelectedItems() {
        const indices = [46, 47, 48, 49, 50];
        const selectedItemBox = document.getElementById('selected-item-box');
        if (selectedItemBox) {
            selectedItemBox.innerHTML = '';

            indices.forEach(idx => {
                const selectedItem = document.querySelector(`.InvenItem[data-inven-idx="${idx}"]`);
                if (selectedItem) {
                    const clonedItem = selectedItem.cloneNode(true);
                    clonedItem.removeAttribute('id');
                    clonedItem.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));

                    const itemImage = clonedItem.querySelector('.BlockItemWrapper img');
                    if (itemImage) {
                        itemImage.style.maxWidth = '100%';
                        itemImage.style.maxHeight = '100%';
                        itemImage.style.display = 'block';
                        itemImage.style.margin = 'auto';
                    }

                    selectedItemBox.appendChild(clonedItem);
                }
            });
        }
    }

    selectedItemBoxInterval = setInterval(updateSelectedItems, 1000);
}

function removeSelectedItemBox() {
    clearInterval(selectedItemBoxInterval);
    const selectedItemBox = document.getElementById('selected-item-box');
    if (selectedItemBox) {
        selectedItemBox.remove();
    }
}

armourViewToggleButton.addEventListener('click', function() {
    if (armourViewToggleButton.textContent === 'Enabled') {
        armourViewToggleButton.textContent = 'Disabled';
        removeSelectedItemBox();
    } else {
        armourViewToggleButton.textContent = 'Enabled';
        createSelectedItemBox();
    }
});

if (armourViewToggleButton.textContent === 'Enabled') {
    createSelectedItemBox();
}

const toggleshiftBox = document.createElement('div');
toggleshiftBox.style.width = '170px';
toggleshiftBox.style.height = '170px';
toggleshiftBox.style.backgroundColor = 'rgb(50, 50, 50)';
toggleshiftBox.style.display = 'flex';
toggleshiftBox.style.border = '2px solid rgb(60, 60, 60)';
toggleshiftBox.style.flexDirection = 'column';
toggleshiftBox.style.justifyContent = 'space-between';
toggleshiftBox.style.alignItems = 'center';
toggleshiftBox.style.padding = '10px';
toggleshiftBox.style.borderRadius = '10px';

const toggleshiftText = document.createElement('span');
toggleshiftText.textContent = 'TOGGLE SPRINT';
toggleshiftBox.appendChild(toggleshiftText);

        const toggleshiftImage = document.createElement('div');
toggleshiftImage.style.backgroundImage = 'url(https://i.postimg.cc/B6pm2jqQ/running-man-icon-graphic-4wmjspdbhe5ruv0n-1-as.png)';
toggleshiftImage.style.backgroundRepeat = "no-repeat";
toggleshiftImage.style.backgroundSize = "contain";
toggleshiftImage.style.width = '75px';
toggleshiftImage.style.height = '75px';
toggleshiftBox.appendChild(toggleshiftImage);

const toggleshiftButtonContainer = document.createElement('div');
toggleshiftButtonContainer.style.display = 'flex';
toggleshiftButtonContainer.style.justifyContent = 'space-between';
toggleshiftButtonContainer.style.width = '100%';

const toggleshiftToggleButton = document.createElement('button');
toggleshiftToggleButton.textContent = 'Enabled';
toggleshiftToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
toggleshiftToggleButton.style.borderRadius = '10px';
toggleshiftToggleButton.style.border = 'none';
toggleshiftToggleButton.style.color = 'white';
toggleshiftToggleButton.style.width = '100px';
toggleshiftToggleButton.style.height = '40px';
toggleshiftToggleButton.style.fontSize = '18px';
toggleshiftToggleButton.style.cursor = 'pointer';
toggleshiftToggleButton.addEventListener('click', function() {
    if (toggleshiftToggleButton.textContent === 'Enabled') {
        toggleshiftToggleButton.textContent = 'Disabled';
        // Reset state when toggled to Disabled
        isRunning = '';
        isKeepingRunning = false;
        document.dispatchEvent(shiftUp); // Ensure shiftUp event is dispatched
    } else {
        toggleshiftToggleButton.textContent = 'Enabled';
    }
});
toggleshiftButtonContainer.appendChild(toggleshiftToggleButton);

const toggleshiftSettingsButton = document.createElement('button');
toggleshiftSettingsButton.innerHTML = '⚙';
toggleshiftSettingsButton.style.backgroundColor = 'rgb(40, 40, 40)';
toggleshiftSettingsButton.style.borderRadius = '10px';
toggleshiftSettingsButton.style.border = 'none';
toggleshiftSettingsButton.style.color = 'white';
toggleshiftSettingsButton.style.fontSize = '24px';
toggleshiftSettingsButton.style.width = '40px';
toggleshiftSettingsButton.style.height = '40px';
toggleshiftSettingsButton.style.cursor = 'pointer';
toggleshiftSettingsButton.addEventListener('click', function() {
    toggleshiftSettingsModal.style.display = 'block';
});
toggleshiftButtonContainer.appendChild(toggleshiftSettingsButton);

toggleshiftBox.appendChild(toggleshiftButtonContainer);
row1.appendChild(toggleshiftBox);
let togglesprintKey = 'KeyF';
let isRunning = '';
let isKeepingRunning = false;

const shiftKeyData = {
    key: 'Shift',
    code: 'ShiftLeft',
    keyCode: 16,
    which: 16,
    shiftKey: true,
    ControlKey: false,
    altKey: false,
    metaKey: false,
    repeat: false,
    bubbles: true,
    cancelable: true
};

const shiftDown = new KeyboardEvent('keydown', shiftKeyData);
const shiftUp = new KeyboardEvent('keyup', shiftKeyData);

document.addEventListener('keyup', e => {
    if (toggleshiftToggleButton.textContent === 'Enabled') {
        if (e.code === togglesprintKey) {
            if (isRunning === '') {
                isRunning = 'Shift';
                isKeepingRunning = true;
                document.dispatchEvent(shiftDown);
            } else if (isRunning === 'Shift') {
                isRunning = '';
                isKeepingRunning = false;
                document.dispatchEvent(shiftUp);
            }
        } else if (e.code === 'ShiftLeft' && isRunning === 'Shift') {
            if (isKeepingRunning) {
                e.stopImmediatePropagation();
                return;
            }
            isRunning = '';
        }
    }
});

document.addEventListener('keydown', e => {
    if (toggleshiftToggleButton.textContent === 'Enabled') {
        if (e.code === 'ShiftLeft' && isRunning === '') {
            isRunning = 'Shift';
        }
    }
});

setInterval(() => {
    if (isKeepingRunning && toggleshiftToggleButton.textContent === 'Enabled') {
        document.dispatchEvent(shiftDown);
    }
}, 100);

    const crosshairBox = document.createElement('div');
    crosshairBox.style.width = '170px';
    crosshairBox.style.height = '170px';
    crosshairBox.style.backgroundColor = 'rgb(50, 50, 50)';
    crosshairBox.style.display = 'flex';
    crosshairBox.style.border = '2px solid rgb(60, 60, 60)';
    crosshairBox.style.flexDirection = 'column';
    crosshairBox.style.justifyContent = 'space-between';
    crosshairBox.style.alignItems = 'center';
    crosshairBox.style.padding = '10px';
    crosshairBox.style.borderRadius = '10px';

    const crosshairText = document.createElement('span');
    crosshairText.textContent = 'CROSSHAIR';
    crosshairBox.appendChild(crosshairText);

    const crosshairImage = document.createElement('div');
crosshairImage.style.backgroundImage = 'url(https://i.postimg.cc/85dKyFw6/Crosshairs-Red-dgffdfgfd.png)';
crosshairImage.style.backgroundRepeat = "no-repeat";
crosshairImage.style.backgroundSize = "contain";
crosshairImage.style.width = '75px';
crosshairImage.style.height = '75px';
crosshairBox.appendChild(crosshairImage);

    const crosshairButtonContainer = document.createElement('div');
    crosshairButtonContainer.style.display = 'flex';
    crosshairButtonContainer.style.justifyContent = 'space-between';https://i.postimg.cc/B6pm2jqQ/running-man-icon-graphic-4wmjspdbhe5ruv0n-1-as.png
    crosshairButtonContainer.style.width = '100%';

    const crosshairToggleButton = document.createElement('button');
    crosshairToggleButton.textContent = 'Enabled';
    crosshairToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
    crosshairToggleButton.style.borderRadius = '10px';
    crosshairToggleButton.style.border = 'none';
    crosshairToggleButton.style.color = 'white';
    crosshairToggleButton.style.width = '100px';
    crosshairToggleButton.style.height = '40px';
    crosshairToggleButton.style.fontSize = '18px';
    crosshairToggleButton.style.cursor = 'pointer';
    crosshairToggleButton.addEventListener('click', function() {
        if (crosshairToggleButton.textContent === 'Enabled') {
            crosshairToggleButton.textContent = 'Disabled';
            CrossOpacity = '0';
        } else {
            crosshairToggleButton.textContent = 'Enabled';
            CrossOpacity = '1';
        }
    });
    crosshairButtonContainer.appendChild(crosshairToggleButton);

    const crosshairSettingsButton = document.createElement('button');
    crosshairSettingsButton.innerHTML = '⚙';
    crosshairSettingsButton.style.backgroundColor = 'rgb(40, 40, 40)';
    crosshairSettingsButton.style.borderRadius = '10px';
    crosshairSettingsButton.style.border = 'none';
    crosshairSettingsButton.style.color = 'white';
    crosshairSettingsButton.style.fontSize = '24px';
    crosshairSettingsButton.style.width = '40px';
    crosshairSettingsButton.style.height = '40px';
    crosshairSettingsButton.style.cursor = 'pointer';
    crosshairSettingsButton.addEventListener('click', function() {
        crosshairSettingsModal.style.display = 'block';
    });
    crosshairButtonContainer.appendChild(crosshairSettingsButton);

    crosshairBox.appendChild(crosshairButtonContainer);
    row1.appendChild(crosshairBox);

        const cpsBox = document.createElement('div');
    cpsBox.style.width = '170px';
    cpsBox.style.height = '170px';
    cpsBox.style.backgroundColor = 'rgb(50, 50, 50)';
    cpsBox.style.display = 'flex';
    cpsBox.style.border = '2px solid rgb(60, 60, 60)';
    cpsBox.style.flexDirection = 'column';
    cpsBox.style.justifyContent = 'space-between';
    cpsBox.style.alignItems = 'center';
    cpsBox.style.padding = '10px';
    cpsBox.style.borderRadius = '10px';

    const cpsText = document.createElement('span');
    cpsText.textContent = 'CPS COUNTER';
    cpsBox.appendChild(cpsText);

            const cpsImage = document.createElement('div');
cpsImage.style.backgroundImage = 'url(https://i.postimg.cc/597ZG2zF/pngtree-single-mouse-click-arrow-direction-png-image-5257136.png)';
cpsImage.style.backgroundRepeat = "no-repeat";
cpsImage.style.backgroundSize = "contain";
cpsImage.style.width = '85px';
cpsImage.style.height = '85px';
cpsBox.appendChild(cpsImage);

    const cpsButtonContainer = document.createElement('div');
    cpsButtonContainer.style.display = 'flex';
    cpsButtonContainer.style.justifyContent = 'space-between';
    cpsButtonContainer.style.width = '100%';

    const cpsToggleButton = document.createElement('button');
    cpsToggleButton.textContent = 'Disabled';
    cpsToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
    cpsToggleButton.style.borderRadius = '10px';
    cpsToggleButton.style.border = 'none';
    cpsToggleButton.style.color = 'white';
    cpsToggleButton.style.width = '100px';
    cpsToggleButton.style.height = '40px';
    cpsToggleButton.style.fontSize = '18px';
    cpsToggleButton.style.cursor = 'pointer';

let cpsCounter;
function createCPSCounter() {
    cpsCounter = document.createElement('div');
    cpsCounter.style.position = 'fixed';
    cpsCounter.style.top = '96%';
    cpsCounter.style.left = '96%';
    cpsCounter.style.padding = '5px 10px';
    cpsCounter.style.backgroundColor = '#00000066';
    cpsCounter.style.color = 'white';
    cpsCounter.style.fontSize = '16px';
    cpsCounter.style.zIndex = '1000';
    cpsCounter.innerText = 'CPS: 0';
    cpsCounter.style.cursor = 'pointer';
    document.body.appendChild(cpsCounter);

let isMoving = false;
let OffsetCX = 0;
let OffsetCY = 0;

cpsCounter.addEventListener('mousedown', (e) => {
    if (cpsToggleButton.textContent === 'Enabled'&& mainMenu.style.display === 'block' && e.target.nodeName !== 'INPUT') {
        isMoving = true;
        OffsetCX = e.clientX;
        OffsetCY = e.clientY;
    }
});

document.addEventListener('mousemove', (e) => {
    if (cpsToggleButton.textContent === 'Enabled' && isMoving) {
        cpsCounter.style.left = `${e.clientX}px`;
        cpsCounter.style.top = `${e.clientY}px`;
    }
});

document.addEventListener('mouseup', () => isMoving = false);
}

cpsToggleButton.addEventListener('click', function() {
    if (cpsToggleButton.textContent === 'Disabled') {
        cpsToggleButton.textContent = 'Enabled';
        createCPSCounter();
        let clickCount = 0;
        let cps = 0;

        function updateCPS() {
            cps = clickCount;
            cpsCounter.innerText = 'CPS: ' + cps ;
            clickCount = 0;
        }

        setInterval(updateCPS, 1000);

        document.addEventListener('click', function() {
            clickCount++;
        });
    } else {
        cpsToggleButton.textContent = 'Disabled';
        if (cpsCounter) {
            cpsCounter.remove();
            cpsCounter = null;
        }
    }
});

    cpsButtonContainer.appendChild(cpsToggleButton);

    const cpsSettingsButton = document.createElement('button');
    cpsSettingsButton.innerHTML = '⚙';
    cpsSettingsButton.style.backgroundColor = 'rgb(40, 40, 40)';
    cpsSettingsButton.style.borderRadius = '10px';
    cpsSettingsButton.style.border = 'none';
    cpsSettingsButton.style.color = 'white';
    cpsSettingsButton.style.fontSize = '24px';
    cpsSettingsButton.style.width = '40px';
    cpsSettingsButton.style.height = '40px';
    cpsSettingsButton.style.cursor = 'pointer';
    cpsSettingsButton.addEventListener('click', function() {
        cpsSettingsModal.style.display = 'block';
    });
    cpsButtonContainer.appendChild(cpsSettingsButton);

    cpsBox.appendChild(cpsButtonContainer);
    row2.appendChild(cpsBox);

        const pingBox = document.createElement('div');
    pingBox.style.width = '170px';
    pingBox.style.height = '170px';
    pingBox.style.backgroundColor = 'rgb(50, 50, 50)';
    pingBox.style.display = 'flex';
    pingBox.style.border = '2px solid rgb(60, 60, 60)';
    pingBox.style.flexDirection = 'column';
    pingBox.style.justifyContent = 'space-between';
    pingBox.style.alignItems = 'center';
    pingBox.style.padding = '10px';
    pingBox.style.borderRadius = '10px';

    const pingText = document.createElement('span');
    pingText.textContent = 'PING COUNTER';
    pingBox.appendChild(pingText);

            const pingImage = document.createElement('div');
pingImage.style.backgroundImage = 'url(https://i.postimg.cc/CLcRBD96/671117-connection-512x512dfg.png)';
pingImage.style.backgroundRepeat = "no-repeat";
pingImage.style.backgroundSize = "contain";
pingImage.style.width = '75px';
pingImage.style.height = '75px';
pingBox.appendChild(pingImage);

    const pingButtonContainer = document.createElement('div');
    pingButtonContainer.style.display = 'flex';
    pingButtonContainer.style.justifyContent = 'space-between';
    pingButtonContainer.style.width = '100%';

    const pingToggleButton = document.createElement('button');
    pingToggleButton.textContent = 'Disabled';
    pingToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
    pingToggleButton.style.borderRadius = '10px';
    pingToggleButton.style.border = 'none';
    pingToggleButton.style.color = 'white';
    pingToggleButton.style.width = '100px';
    pingToggleButton.style.height = '40px';
    pingToggleButton.style.fontSize = '18px';
    pingToggleButton.style.cursor = 'pointer';
let pingCounter;
function createPingCounter() {
    pingCounter = document.createElement('div');
    pingCounter.style.position = 'fixed';
    pingCounter.style.top = '96%';
    pingCounter.style.left = '89.5%';
    pingCounter.style.padding = '5px 10px';
    pingCounter.style.backgroundColor = '#00000066' ;
    pingCounter.style.color = 'white';
    pingCounter.style.fontSize = '16px';
    pingCounter.style.zIndex = '1000';
    pingCounter.innerText = 'Ping: 0 ms';
    pingCounter.style.cursor = 'pointer';
    document.body.appendChild(pingCounter);

let isMoving = false;
let OffsetPX = 0;
let OffsetPY = 0;

pingCounter.addEventListener('mousedown', (e) => {
    if (pingToggleButton.textContent === 'Enabled'&& mainMenu.style.display === 'block' && e.target.nodeName !== 'INPUT') {
        isMoving = true;
        OffsetPX = e.clientX;
        OffsetPY = e.clientY;
    }
});

document.addEventListener('mousemove', (e) => {
    if (pingToggleButton.textContent === 'Enabled' && isMoving) {
        pingCounter.style.left = `${e.clientX}px`;
        pingCounter.style.top = `${e.clientY}px`;
    }
});

document.addEventListener('mouseup', () => isMoving = false);

}

pingToggleButton.addEventListener('click', function() {
    if (pingToggleButton.textContent === 'Disabled') {
        pingToggleButton.textContent = 'Enabled';
        createPingCounter();

        function updatePing() {
            let ping = Math.floor(Math.random() * 100);
            pingCounter.innerText = 'Ping: ' + ping + ' ms';
        }

        setInterval(updatePing, 1000);
    } else {
        pingToggleButton.textContent = 'Disabled';
        if (pingCounter) {
            pingCounter.remove();
            pingCounter = null;
        }
    }
});
    pingButtonContainer.appendChild(pingToggleButton);

    const pingSettingsButton = document.createElement('button');
    pingSettingsButton.innerHTML = '⚙';
    pingSettingsButton.style.backgroundColor = 'rgb(40, 40, 40)';
    pingSettingsButton.style.borderRadius = '10px';
    pingSettingsButton.style.border = 'none';
    pingSettingsButton.style.color = 'white';
    pingSettingsButton.style.fontSize = '24px';
    pingSettingsButton.style.width = '40px';
    pingSettingsButton.style.height = '40px';
    pingSettingsButton.style.cursor = 'pointer';
    pingSettingsButton.addEventListener('click', function() {
        pingSettingsModal.style.display = 'block';
    });
    pingButtonContainer.appendChild(pingSettingsButton);

    pingBox.appendChild(pingButtonContainer);
    row2.appendChild(pingBox);


const HandItemBox = document.createElement('div');
HandItemBox.style.width = '170px';
HandItemBox.style.height = '170px';
HandItemBox.style.backgroundColor = 'rgb(50, 50, 50)';
HandItemBox.style.display = 'flex';
HandItemBox.style.border = '2px solid rgb(60, 60, 60)';
HandItemBox.style.flexDirection = 'column';
HandItemBox.style.justifyContent = 'space-between';
HandItemBox.style.alignItems = 'center';
HandItemBox.style.padding = '10px';
HandItemBox.style.borderRadius = '10px';

const HandItemText = document.createElement('span');
HandItemText.textContent = 'HANDITEM VIEW';
HandItemBox.appendChild(HandItemText);

                const HandItemImage = document.createElement('div');
HandItemImage.style.backgroundImage = 'url(https://i.postimg.cc/Kzcd8x86/2427534-fdg.png)';
HandItemImage.style.backgroundRepeat = "no-repeat";
HandItemImage.style.backgroundSize = "contain";
HandItemImage.style.width = '75px';
HandItemImage.style.height = '75px';
HandItemBox.appendChild(HandItemImage);


const HandItemToggleButton = document.createElement('button');
HandItemToggleButton.textContent = 'Disabled';
HandItemToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
HandItemToggleButton.style.borderRadius = '10px';
HandItemToggleButton.style.border = 'none';
HandItemToggleButton.style.color = 'white';
HandItemToggleButton.style.width = '160px';
HandItemToggleButton.style.height = '40px';
HandItemToggleButton.style.fontSize = '18px';
HandItemToggleButton.style.cursor = 'pointer';
HandItemBox.appendChild(HandItemToggleButton);
row1.appendChild(HandItemBox);

// Function to create the hand item box
function createHandItemBox() {
    const HandHItemBox = document.createElement('div');
    HandHItemBox.id = 'hand-item-box';
    HandHItemBox.style.position = 'fixed';
    HandHItemBox.style.bottom = '7px';
    HandHItemBox.style.left = '400px';
    HandHItemBox.style.width = '65px';
    HandHItemBox.style.height = '65px';
    HandHItemBox.style.zIndex = '9999';
    HandHItemBox.style.overflow = 'hidden';
    HandHItemBox.style.display = 'flex';
    HandHItemBox.style.alignItems = 'center';
    HandHItemBox.style.justifyContent = 'center';

    document.body.appendChild(HandHItemBox);

        document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (cinematicToggleButton.textContent === 'Enabled' && (key === 'h' || key === 'H')) {
                HandHItemBox.style.visibility = HandHItemBox.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
});

}

// Function to update the selected items in the box
function updateHandItems() {
    const HandHItemBox = document.getElementById('hand-item-box');
    if (HandHItemBox) {
        HandHItemBox.innerHTML = '';

        const HandItems = document.querySelectorAll('.SelectedItem');
        HandItems.forEach(HandItem => {
            const clonedHItem = HandItem.cloneNode(true);
            clonedHItem.removeAttribute('id');
            clonedHItem.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
            Object.assign(clonedHItem.style, {
                position: 'static',
                margin: '0',
                padding: '0',
                border: 'none',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box'
            });

            HandHItemBox.appendChild(clonedHItem);
        });
    }
}

// Variable to track the toggle state
let isHandItemBoxEnabled = false;

// Event listener to toggle the hand item box
HandItemToggleButton.addEventListener('click', function() {
    isHandItemBoxEnabled = !isHandItemBoxEnabled;
    if (isHandItemBoxEnabled) {
        HandItemToggleButton.textContent = 'Enabled';
        createHandItemBox();
        setInterval(updateHandItems, 500);
    } else {
        HandItemToggleButton.textContent = 'Disabled';
        const existingBox = document.getElementById('hand-item-box');
        if (existingBox) {
            existingBox.remove();
        }
    }
});

// Initial state: create the hand item box if enabled
if (isHandItemBoxEnabled) {
    createHandItemBox();
    setInterval(updateHandItems, 1000);
}
// Create the cinematic box
const cinematicBox = document.createElement('div');
cinematicBox.style.width = '170px';
cinematicBox.style.height = '170px';
cinematicBox.style.backgroundColor = 'rgb(50, 50, 50)';
cinematicBox.style.display = 'flex';
cinematicBox.style.border = '2px solid rgb(60, 60, 60)';
cinematicBox.style.flexDirection = 'column';
cinematicBox.style.justifyContent = 'space-between';
cinematicBox.style.alignItems = 'center';
cinematicBox.style.padding = '10px';
cinematicBox.style.borderRadius = '10px';

// Create and append the cinematic text
const cinematicText = document.createElement('span');
cinematicText.textContent = 'CINEMATIC MODE';
cinematicBox.appendChild(cinematicText);

            const cinematicImage = document.createElement('div');
cinematicImage.style.backgroundImage = 'url(https://i.postimg.cc/TPQKvbf6/camera-small-3.png)';
cinematicImage.style.backgroundRepeat = "no-repeat";
cinematicImage.style.backgroundSize = "contain";
cinematicImage.style.width = '65px';
cinematicImage.style.height = '65px';
cinematicBox.appendChild(cinematicImage);

cinematicToggleButton.textContent = 'Disabled';
cinematicToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
cinematicToggleButton.style.borderRadius = '10px';
cinematicToggleButton.style.border = 'none';
cinematicToggleButton.style.color = 'white';
cinematicToggleButton.style.width = '160px';
cinematicToggleButton.style.height = '40px';
cinematicToggleButton.style.fontSize = '18px';
cinematicToggleButton.style.cursor = 'pointer';
cinematicToggleButton.addEventListener('click', function() {
    if (cinematicToggleButton.textContent === 'Enabled') {
        cinematicToggleButton.textContent = 'Disabled';
    } else {
        cinematicToggleButton.textContent = 'Enabled';
    }
});
cinematicBox.appendChild(cinematicToggleButton);

row2.appendChild(cinematicBox);


document.addEventListener('keydown', function(event) {
    var key = event.key;
            var wholeAppWrapper = document.querySelector('.WholeAppWrapper');
    if (cinematicToggleButton.textContent === 'Enabled' && (key === 'h' || key === 'H')) {
        wholeAppWrapper.style.visibility = wholeAppWrapper.style.visibility === 'hidden' ? 'visible' : 'hidden';
        pingCounter.style.visibility = pingCounter.style.visibility === 'hidden' ? 'visible' : 'hidden';
        cpsCounter.style.visibility = cpsCounter.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
});
// Create keystrokeBox
const keystrokeBox = document.createElement('div');
keystrokeBox.style.width = '170px';
keystrokeBox.style.height = '170px';
keystrokeBox.style.backgroundColor = 'rgb(50, 50, 50)';
keystrokeBox.style.display = 'flex';
keystrokeBox.style.border = '2px solid rgb(60, 60, 60)';
keystrokeBox.style.flexDirection = 'column';
keystrokeBox.style.justifyContent = 'space-between';
keystrokeBox.style.alignItems = 'center';
keystrokeBox.style.padding = '10px';
keystrokeBox.style.borderRadius = '10px';

// Create keystrokeText
const keystrokeText = document.createElement('span');
keystrokeText.textContent = 'KEYSTROKES';
keystrokeBox.appendChild(keystrokeText);

                const keystrokeImage = document.createElement('div');
keystrokeImage.style.backgroundImage = 'url(https://i.postimg.cc/8z8dpcnY/dfgdfgdg.png)';
keystrokeImage.style.backgroundRepeat = "no-repeat";
keystrokeImage.style.backgroundSize = "contain";
keystrokeImage.style.width = '75px';
keystrokeImage.style.height = '75px';
keystrokeBox.appendChild(keystrokeImage);

// Create keystrokeToggleButton
const keystrokeToggleButton = document.createElement('button');
keystrokeToggleButton.textContent = 'Enabled';
keystrokeToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
keystrokeToggleButton.style.borderRadius = '10px';
keystrokeToggleButton.style.border = 'none';
keystrokeToggleButton.style.color = 'white';
keystrokeToggleButton.style.width = '160px';
keystrokeToggleButton.style.height = '40px';
keystrokeToggleButton.style.fontSize = '18px';
keystrokeToggleButton.style.cursor = 'pointer';
keystrokeToggleButton.addEventListener('click', function() {
    if (keystrokeToggleButton.textContent === 'Enabled') {
        keystrokeToggleButton.textContent = 'Disabled';
        resetKeyStyles(); // Reset key styles on disable
        setKeysVisibility(false); // Hide keys
    } else {
        keystrokeToggleButton.textContent = 'Enabled';
        setKeysVisibility(true); // Show keys
    }
});
keystrokeBox.appendChild(keystrokeToggleButton);
row2.appendChild(keystrokeBox);
// Keys configuration
const keys = [
    { key: 'W', top: '5px', left: '50%' },
    { key: 'A', top: '60px', left: '31.5%' },
    { key: 'S', top: '60px', left: '50%' },
    { key: 'D', top: '60px', left: '68%' },
    { key: 'LMB', top: '115px', left: '35.5%', width: '77px' },
    { key: 'RMB', top: '115px', left: '64%', width: '77px' },
    { key: '―――', top: '170px', left: '50%', height: '25px', width: '160px', fontSize: '18px' }
];

// Create container
const container = document.createElement("div");
Object.assign(container.style, {
    zIndex: "10000",
    width: "300px",
    height: "300px",
    transform: "translate(-50%, -50%)",
    top: "91%",
    left: "4.7%",
    position: "fixed",
    opacity: "70%",
    cursor : 'pointer'
});
document.body.appendChild(container);
                document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (cinematicToggleButton.textContent === 'Enabled' && (key === 'h' || key === 'H')) {
                container.style.visibility = container.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
});

// Dragging functionality
let isMoving = false;
let offsetX = 0;
let offsetY = 0;

container.addEventListener('mousedown', (event) => {
    if (keystrokeToggleButton.textContent === 'Enabled'&& mainMenu.style.display === 'block' && event.target.nodeName !== 'INPUT') {
        isMoving = true;
        offsetX = event.clientX;
        offsetY = event.clientY;
    }
});

document.addEventListener('mousemove', (event) => {
    if (keystrokeToggleButton.textContent === 'Enabled' && isMoving) {
        container.style.left = `${event.clientX}px`;
        container.style.top = `${event.clientY}px`;
    }
});

document.addEventListener('mouseup', () => isMoving = false);

// Create key elements
const createKeyElement = ({ key, top, left, width = '50px', height = '50px', fontSize = '24px' }) => {
    const element = document.createElement('div');
    Object.assign(element.style, {
        position: 'fixed',
        color: 'white',
        top,
        left,
        transform: 'translateX(-50%)',
        zIndex: '10000',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        fontSize,
        height,
        width,
        textAlign: 'center',
        lineHeight: height
    });
    element.textContent = key;
    container.appendChild(element);
    return element;
};

const keyElements = keys.reduce((acc, keyConfig) => {
    acc[keyConfig.key] = createKeyElement(keyConfig);
    return acc;
}, {});

// Update key style
const updateKeyStyle = (key, active) => {
    if (keystrokeToggleButton.textContent === 'Enabled') {
        keyElements[key].style.backgroundColor = active ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)";
        keyElements[key].style.color = active ? "black" : "white";
    }
};

// Reset all key styles
const resetKeyStyles = () => {
    Object.keys(keyElements).forEach(key => {
        keyElements[key].style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        keyElements[key].style.color = "white";
    });
};

// Set keys visibility
const setKeysVisibility = (visible) => {
    Object.values(keyElements).forEach(element => {
        element.style.display = visible ? 'block' : 'none';
    });
};

// Event listeners with toggle check
document.addEventListener('keydown', ({ key }) => {
    if (keystrokeToggleButton.textContent === 'Enabled') {
        const upperKey = key.toUpperCase();
        if (keyElements[upperKey]) updateKeyStyle(upperKey, true);
        if (key === ' ') updateKeyStyle('―――', true);
    }
});

document.addEventListener('keyup', ({ key }) => {
    if (keystrokeToggleButton.textContent === 'Enabled') {
        const upperKey = key.toUpperCase();
        if (keyElements[upperKey]) updateKeyStyle(upperKey, false);
        if (key === ' ') updateKeyStyle('―――', false);
    }
});

document.addEventListener('mousedown', ({ button }) => {
    if (keystrokeToggleButton.textContent === 'Enabled') {
        if (button === 0) updateKeyStyle('LMB', true);
        if (button === 2) updateKeyStyle('RMB', true);
    }
});

document.addEventListener('mouseup', ({ button }) => {
    if (keystrokeToggleButton.textContent === 'Enabled') {
        if (button === 0) updateKeyStyle('LMB', false);
        if (button === 2) updateKeyStyle('RMB', false);
    }
});
        const hotbarBox = document.createElement('div');
    hotbarBox.style.width = '170px';
    hotbarBox.style.height = '170px';
    hotbarBox.style.backgroundColor = 'rgb(50, 50, 50)';
    hotbarBox.style.display = 'flex';
    hotbarBox.style.border = '2px solid rgb(60, 60, 60)';
    hotbarBox.style.flexDirection = 'column';
    hotbarBox.style.justifyContent = 'space-between';
    hotbarBox.style.alignItems = 'center';
    hotbarBox.style.padding = '10px';
    hotbarBox.style.borderRadius = '10px';

    const hotbarText = document.createElement('span');
    hotbarText.textContent = 'HOTBAR';
    hotbarBox.appendChild(hotbarText);

                    const hotbarImage = document.createElement('div');
hotbarImage.style.backgroundImage = 'url(https://i.postimg.cc/gcgNW3Rk/dfgdfgdfgdfgdfg.png)';
hotbarImage.style.backgroundRepeat = "no-repeat";
hotbarImage.style.backgroundSize = "contain";
hotbarImage.style.width = '65px';
hotbarImage.style.height = '65px';
hotbarBox.appendChild(hotbarImage);

    const hotbarButtonContainer = document.createElement('div');
    hotbarButtonContainer.style.display = 'flex';
    hotbarButtonContainer.style.justifyContent = 'space-between';
    hotbarButtonContainer.style.width = '100%';

    const hotbarToggleButton = document.createElement('button');
    hotbarToggleButton.textContent = 'Enabled';
    hotbarToggleButton.style.backgroundColor = 'rgb(40, 40, 40)';
    hotbarToggleButton.style.borderRadius = '10px';
    hotbarToggleButton.style.border = 'none';
    hotbarToggleButton.style.color = 'white';
    hotbarToggleButton.style.width = '100px';
    hotbarToggleButton.style.height = '40px';
    hotbarToggleButton.style.fontSize = '18px';
    hotbarToggleButton.style.cursor = 'pointer';
    hotbarToggleButton.addEventListener('click', function() {
        if (hotbarToggleButton.textContent === 'Enabled') {
            hotbarToggleButton.textContent = 'Disabled';
        } else {
            hotbarToggleButton.textContent = 'Enabled';
        }
    });
    hotbarButtonContainer.appendChild(hotbarToggleButton);

    const hotbarSettingsButton = document.createElement('button');
    hotbarSettingsButton.innerHTML = '⚙';
    hotbarSettingsButton.style.backgroundColor = 'rgb(40, 40, 40)';
    hotbarSettingsButton.style.borderRadius = '10px';
    hotbarSettingsButton.style.border = 'none';
    hotbarSettingsButton.style.color = 'white';
    hotbarSettingsButton.style.fontSize = '24px';
    hotbarSettingsButton.style.width = '40px';
    hotbarSettingsButton.style.height = '40px';
    hotbarSettingsButton.style.cursor = 'pointer';
    hotbarSettingsButton.addEventListener('click', function() {
        hotbarSettingsModal.style.display = 'block';
    });
    hotbarButtonContainer.appendChild(hotbarSettingsButton);

    hotbarBox.appendChild(hotbarButtonContainer);
    row3.appendChild(hotbarBox);

hotbarSettingsModal.innerHTML = `
    <label>HOTBAR</label>
    <button id="closeHotbarSettings" style="float: right; background: transparent; border: none; color: white; cursor: pointer;">✖</button>
    </div>
`;



             toggleshiftSettingsModal.innerHTML = `
    <label>TOGGLE SPRINT</label>
    <button id="closetoggleshiftSettings" style="float: right; background: transparent; border: none; color: white; cursor: pointer;">✖</button>
    <div style="display: flex; flex-direction: column; align-items: center; width: 385px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
    <label style="margin-bottom: 5px;">Press a key to set  toggle key:</label>
        <input type="text" id="customSprintKey" style="width: 75px; text-align: center; margin-bottom: 10px;" readonly>
    </div>
      `;
            infoModal.innerHTML = `
        <label>INFO</label>
        <button id="closeInfo" style="float: right; background: transparent; border: none; color: white; cursor: pointer;">✖</button>
        `;

        pingSettingsModal.innerHTML = `
        <label>PING</label>
        <button id="closePingSettings" style="float: right; background: transparent; border: none; color: white; cursor: pointer;">✖</button>
           <div style="display: flex; flex-direction: column; align-items: center; width: 385px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
    </div>
    `;

        cpsSettingsModal.innerHTML = `
        <label>CPS COUNTER</label>
        <button id="closeCpsSettings" style="float: right; background: transparent; border: none; color: white; cursor: pointer;">✖</button>
            <div style="display: flex; flex-direction: column; align-items: center; width: 385px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
    </div>
   `;

    settingsModal.innerHTML = `
         <label">SETTINGS</label>
        <button id="closeSettings" style="float: right; background: transparent; border: none; color: white; cursor: pointer;">✖</button>
        <div style="display: flex; flex-direction: column; align-items: center; width: 385px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px; margin-top: 5px;">
<label style="margin-bottom: 10px;">TOGGLE KEY</label>
        <label for="customKey" style="margin-bottom: 5px;">Press a key to set  toggle key:</label>
        <input type="text" id="customKey" style="width: 75px; text-align: center; margin-bottom: 10px;" readonly>
        </div>
    `;
;
crosshairSettingsModal.innerHTML = `
    <label>CROSSHAIR</label>
    <button id="closeCrosshairSettings" style="float: right; background: transparent; border: none; color: white; cursor: pointer;">✖</button>
<div style="display: flex; flex-direction: row; gap: 15px; margin-top : 15px;">
    <div style="display: flex; flex-direction: column; align-items: center; width: 185px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
        <label>CROSSHAIR 1</label>
        <img src="https://piskel-imgstore-b.appspot.com/img/d81e6523-1d08-11ef-8eba-878efb6f53d1.gif" style="width: 115px; height: 115px;">
        <button id="option3Button" style="width: 150px; height: 40px; background: rgb(40, 40, 40); border: none; border-radius: 10px; color: white; font-size: 18px; cursor: pointer;">Enable</button>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: 185px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
        <label>CROSSHAIR 2</label>
        <img src="https://piskel-imgstore-b.appspot.com/img/3a948891-4a8f-11ef-8140-5b4c5fd8c3dd.gif" style="width: 115px; height: 115px;">
        <button id="option5Button" style="width: 150px; height: 40px; background: rgb(40, 40, 40); border: none; border-radius: 10px; color: white; font-size: 18px; cursor: pointer;">Enable</button>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: 185px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
        <label>CROSSHAIR 3</label>
        <img src="https://piskel-imgstore-b.appspot.com/img/354b6bd7-1cd8-11ef-8822-bbb60d940ece.gif" style="width: 115px; height: 115px;">
        <button id="option1Button" style="width: 150px; height: 40px; background: rgb(40, 40, 40); border: none; border-radius: 10px; color: white; font-size: 18px; cursor: pointer;">Enable</button>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: 185px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
        <label>CROSSHAIR 4</label>
        <img src="https://piskel-imgstore-b.appspot.com/img/18315826-1cd8-11ef-a2e5-bbb60d940ece.gif" style="width: 115px; height: 115px;">
        <button id="option2Button" style="width: 150px; height: 40px; background: rgb(40, 40, 40); border: none; border-radius: 10px; color: white; font-size: 18px; cursor: pointer;">Enable</button>
    </div>
</div>
<div style="display: flex; flex-direction: row; gap: 15px; margin-top : 15px;">
  <div style="display: flex; flex-direction: column; align-items: center; width: 185px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
        <label>CROSSHAIR 5</label>
        <img src="https://piskel-imgstore-b.appspot.com/img/4712921e-1d01-11ef-b4ea-878efb6f53d1.gif" style="width: 115px; height: 115px;">
        <button id="option4Button" style="width: 150px; height: 40px; background: rgb(40, 40, 40); border: none; border-radius: 10px; color: white; font-size: 18px; cursor: pointer;">Enable</button>
    </div>
      <div style="display: flex; flex-direction: column; align-items: center; width: 385px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
         <label>CROSSHAIR SETTINGS</label>
         <label style="font-size : 12px;">CROSSHAIR SIZE</label>
         <input type="range" id="crosshairSizeSlider" min="0" max="38" value="19">
               <div id="sliderValue">19</div>
    </div>
      <div style="display: flex; flex-direction: column; align-items: center; width: 185px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
        <label>CROSSHAIR 6</label>
        <img src="https://piskel-imgstore-b.appspot.com/img/3f1093ca-4a8d-11ef-92cc-5b4c5fd8c3dd.gif" style="width: 115px; height: 115px;">
        <button id="option6Button" style="width: 150px; height: 40px; background: rgb(40, 40, 40); border: none; border-radius: 10px; color: white; font-size: 18px; cursor: pointer;">Enable</button>
    </div>
 </div>
 <div style="display: flex; flex-direction: row; gap: 15px; margin-top : 15px;">
       <div style="display: flex; flex-direction: column; align-items: center; width: 185px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
        <label>CROSSHAIR 7</label>
        <img src="https://piskel-imgstore-b.appspot.com/img/d46740e1-4a92-11ef-9ed7-5b4c5fd8c3dd.gif" style="width: 115px; height: 115px;">
        <button id="option7Button" style="width: 150px; height: 40px; background: rgb(40, 40, 40); border: none; border-radius: 10px; color: white; font-size: 18px; cursor: pointer;">Enable</button>
    </div>
           <div style="display: flex; flex-direction: column; align-items: center; width: 185px; height: 185px; background: rgb(50, 50, 50); border: 2px solid rgb(60, 60, 60); border-radius: 10px;">
        <label>CROSSHAIR 8</label>
        <img src="https://piskel-imgstore-b.appspot.com/img/454e954a-4b50-11ef-b82b-ff664d9019c5.gif" style="width: 115px; height: 115px;">
        <button id="option8Button" style="width: 150px; height: 40px; background: rgb(40, 40, 40); border: none; border-radius: 10px; color: white; font-size: 18px; cursor: pointer;">Enable</button>
    </div>
 </div>
`;


document.getElementById('option1Button').addEventListener('click', function() {
    crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/354b6bd7-1cd8-11ef-8822-bbb60d940ece.gif';
});

document.getElementById('option2Button').addEventListener('click', function() {
    crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/18315826-1cd8-11ef-a2e5-bbb60d940ece.gif';
});
document.getElementById('option3Button').addEventListener('click', function() {
    crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/d81e6523-1d08-11ef-8eba-878efb6f53d1.gif';
});
    document.getElementById('option4Button').addEventListener('click', function() {
    crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/4712921e-1d01-11ef-b4ea-878efb6f53d1.gif';
});
        document.getElementById('option5Button').addEventListener('click', function() {
    crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/3a948891-4a8f-11ef-8140-5b4c5fd8c3dd.gif';
})
        document.getElementById('option6Button').addEventListener('click', function() {
    crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/3f1093ca-4a8d-11ef-92cc-5b4c5fd8c3dd.gif';
})
            document.getElementById('option7Button').addEventListener('click', function() {
    crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/3ed96675-4a93-11ef-9811-5b4c5fd8c3dd.gif';
})
                document.getElementById('option8Button').addEventListener('click', function() {
    crosshairvalue = 'https://piskel-imgstore-b.appspot.com/img/454e954a-4b50-11ef-b82b-ff664d9019c5.gif';
})

document.getElementById('crosshairSizeSlider').addEventListener('input', function() {
        CrossSize = parseInt(this.value);
            document.getElementById('sliderValue').textContent = this.value;
    })

let toggleKey = 'ShiftRight';
let boxVisible = false;
let isSettingKey = false;

document.addEventListener('keydown', function(event) {
    if (isSettingKey) {
        toggleKey = event.code;
        document.getElementById('customKey').value = toggleKey;
        isSettingKey = false;
    } else if (event.code === toggleKey) {
        if (settingsModal.style.display === 'none' &&
            crosshairSettingsModal.style.display === 'none' &&
            cpsSettingsModal.style.display === 'none' &&
            pingSettingsModal.style.display === 'none' &&
            toggleshiftSettingsModal.style.display === 'none' &&
            infoModal.style.display === 'none') {
            boxVisible = !boxVisible;
            mainBox.style.display = boxVisible ? 'none' : 'none';
            Cosmetics.style.display = boxVisible ? 'none' : 'none';
            mainMenu.style.display = boxVisible ? 'block' : 'none';
        }
    }
});

settingsButton.addEventListener('click', function() {
    settingsModal.style.display = 'block';
});

    closeIcon.addEventListener('click', function() {
    mainBox.style.display = 'none';
});

        document.getElementById('customKey').addEventListener('click', function() {
        isSettingKey = true;
        this.value = 'PRESS A KEY';
    });
const customSprintKeyInput = document.getElementById('customSprintKey');
customSprintKeyInput.addEventListener('keydown', (e) => {
    e.preventDefault();
    togglesprintKey = e.code;
    customSprintKeyInput.value = e.key.toUpperCase();
});
        document.getElementById('customSprintKey').addEventListener('click', function() {
        this.value = 'PRESS A KEY';
    });
        document.getElementById('closeHotbarSettings').addEventListener('click', function() {
        hotbarSettingsModal.style.display = 'none';
    });
    document.getElementById('closeSettings').addEventListener('click', function() {
        settingsModal.style.display = 'none';
    });
    document.getElementById('closeCrosshairSettings').addEventListener('click', function() {
        crosshairSettingsModal.style.display = 'none';
    });
        document.getElementById('closeCpsSettings').addEventListener('click', function() {
        cpsSettingsModal.style.display = 'none';
    });
            document.getElementById('closePingSettings').addEventListener('click', function() {
        pingSettingsModal.style.display = 'none';
    });
                        document.getElementById('closeInfo').addEventListener('click', function() {
       infoModal.style.display = 'none';
    });
                                document.getElementById('closetoggleshiftSettings').addEventListener('click', function() {
       toggleshiftSettingsModal.style.display = 'none';
    });
})();
