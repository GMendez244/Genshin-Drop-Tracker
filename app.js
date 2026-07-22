const DAY = {
    "SUN" : 0,
    "MON" : 1,
    "TUE" : 2,
    "WED" : 3,
    "THUR": 4,
    "FRI" : 5,
    "SAT" : 6,
};

const PRIORITY = {
    "LOW": 3,
    "NORMAL": 2,
    "HIGH": 1
};

const FARM_ID = {
    "daily" : 0,
    "dailyResin" : 1,
    "dailyResinLowPriority" : 2,
    "onceAWeek" : 3,
    "localSpecialtyFarming" : 4,
    "groupA": 5,
    "groupB": 6,
    "groupC": 7
};

const FARM_ITEM_TYPE = {
    "weaponMaterial": 0
}

const ItemInformation = [
    {
        "id": FARM_ID.daily,
        "text": "Daily",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": false,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.dailyResin,
        "text": "Daily-Resin",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.dailyResinLowPriority,
        "text": "Daily-Resin (Low Priority)",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": true,
        "priority": PRIORITY.LOW
    },
    {
        "id": FARM_ID.onceAWeek,
        "text": "Once a week",
        "availableDays": [DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.HIGH
    },
    {
        "id": FARM_ID.localSpecialtyFarming,
        "text": "Local Speciality Farming (Monday, Wed, Fri)",
        "availableDays": [DAY.MON, DAY.WED, DAY.FRI],
        "requiresResin": false,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.groupA,
        "text": "Group A - Resin (Monday, Thursday, Sunday)",
        "availableDays": [DAY.MON, DAY.THUR, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.groupB,
        "text": "Group B - Resin (Tuesday, Friday, Sunday)",
        "availableDays": [DAY.TUE, DAY.FRI, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": FARM_ID.groupC,
        "text": "Group C - Resin (Wednesday, Saturday, Sunday)",
        "availableDays": [DAY.WED, DAY.SAT, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    }
];

const predefinedItems = [
    {
        "itemName": "Ember of Long Night Flint",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Afterglow of Long Night Flint",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Flare of Long Night Flint",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Blaze of Long Night Flint",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Dross of Pure Sacred Dewdrop",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Sublimation of Pure Sacred Dewdrop",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Spring of Pure Sacred Dewdrop",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Essence of Pure Sacred Dewdrop",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Oasis Garden's Reminiscence",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Oasis Garden's Kindness",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Oasis Garden's Mourning",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Oasis Garden's Truth",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Narukami's Wisdom",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Narukami's Joy",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Narukami's Affection",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Narukami's Valor",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Mist Veiled Lead Elixir",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Mist Veiled Mercury Elixir",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Mist Veiled Gold Elixir",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Mist Veiled Primo Elixir",
        "infoID": FARM_ID.groupB   
    },
    {
        "itemName": "Boreal Wolf's Milk Tooth",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Boreal Wolf's Cracked Tooth",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Boreal Wolf's Broken Fang",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Boreal Wolf's Nostalgia",
        "infoID": FARM_ID.groupB
    },
    {
        "itemName": "Artful Device Fragment",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Artful Device Replica",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Artful Device Inheritance",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Artful Device Wish",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Sundered Glory of the Far-North Scions",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Unyielding Delusion of the Far-North Scions",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Oblation of the Far-North Scions",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Aureate Radiance of the Far-North Scions",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Fragment of an Ancient Chord",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Chapter of an Ancient Chord",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Movement of an Ancient Chord",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Echo of an Ancient Chord",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Broken Goblet of the Pristine Sea",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Wine Goblet of the Pristine Sea",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Silver Goblet of the Pristine Sea",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Golden Goblet of the Pristine Sea",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Copper Talisman of the Forest Dew",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Iron Talisman of the Forest Dew",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Silver Talisman of the Forest Dew",
        "infoID": FARM_ID.groupA 
    },
    {
        "itemName": "Golden Talisman of the Forest Dew",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Echo of Scorching Might",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Remnant Glow of Scorching Might",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Dream of Scorching Might",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Olden Days of Scorching Might",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Coral Branch of Distant Sea",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Jeweled Branch of a Distant Sea",
        "infoID": FARM_ID.groupA,
    },
    {
        "itemName": "Jade Branch of a Distant Sea",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Golden Branch of a Distant Sea",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Mask of the Wicked Lieutenant",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Mask of the Tiger's Bite",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Mask of the One-Horned",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Mask of the Kijin",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Luminous Sands from Guyun",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Lustrous Stone from Guyun",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Relic from Guyun",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Divine Body from Guyun",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Grain of Aerosiderite",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Piece of Aerosiderite",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Bit of Aerosiderite",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Chunk of Aerosiderite",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Tile of Decarabian's Tower",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Debris of Decarabian's City",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Fragment of Decarabian's Epic",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Scattered Piece of Decarabian's Dream",
        "infoID": FARM_ID.groupA
    },
    {
        "itemName": "Fetters of the Dandelion Gladiator",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Chains of the Dandelion Gladiator",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Shackles of the Dandelion Gladiator",
        "infoID": FARM_ID.groupC
    },
    {
        "itemName": "Dream of the Dandelion Gladiator",
        "infoID": FARM_ID.groupC
    }
    /* WEAPON ASCENSION MATERIALS COMPLETE!*/

]; 

let itemFarmList = [];

function getParentInfoByText(itemInfo, text){
    for (const info of itemInfo){
        if (info.text === text){
            return window.structuredClone(info);
        }
    }
    return false;
}

function getParentInfoById(itemInfo, id){
    for (const info of itemInfo){
        if (info.id === id){
            return window.structuredClone(info);
        }
    }
    
    return false;
}



document.addEventListener("DOMContentLoaded", InitializeData);


//Item A matters less than Item B
function CompareItems(itemA, itemB){            
    // If both Items are completely farmed it doesn't matter
    if (isFarmingComplete(itemA) && isFarmingComplete(itemB)){
        return -1;
    }

    // A doesn't matter because it's already farmed and B isn't
    if (isFarmingComplete(itemA)){
        return -1;
    }

    // B is farmed and A isn't so prioritize A.
    if (isFarmingComplete(itemB)){
        return 1;
    }

    if (itemA.priority !== itemB.priority){
        if (itemA.priority < itemB.priority){
            return -1;
        }else{
            return 1;
        }
    }

    if (itemA.limitedAvailability !== itemB.limitedAvailability){
        if(itemA.limitedAvailability){
            return -1;
        }else{
            return 1;
        }
    }


    if (itemA.requiresResin !== itemB.requiresResin){
        if (itemA.requiresResin){
            return -1;
        }else{
            return 1;
        }
    }

    if (itemA.dayCount !== itemB.dayCount){
        if (itemA.dayCount < itemB.dayCount){
            return -1;
        }else{
            return 1;
        }
    }


    let aCompleted = itemA.amountOwned / itemA.amountRequired;
    let bCompleted = itemB.amountOwned / itemB.amountRequired;
 
    return aCompleted - bCompleted;


/*    if (itemA.limitedAvailability === itemB.limitedAvailability){
        console.log("ItemA", itemA, "ItemB", itemB);
        // If both have the same resinValue, compare the completion rate
        if (itemA.requiresResin === itemB.requiresResin){
            console.log("Same resin value")
        }


        // If A requires resin and B doesn't
        if (itemA.requiresResin){

            return 1;
        }else{
            return -1;
        }
    }

    if (itemA.limitedAvailability){
        return 1;
    }else{
        return -1;
    }
*/

}

function FillDataListWithItemInfo(e){
    let parentInfoDataList = document.getElementById("itemFamilies");
    for(const info of ItemInformation){
        let optItem = document.createElement("option");
        optItem.value = info.text;
        
        parentInfoDataList.appendChild(optItem);
    }

}

function FillDataListWithPredefinedItems(e){
    let predefinedItemsDataList = document.getElementById("predefinedItems");

    for (const info of predefinedItems){
        let predefinedItemOption = document.createElement("option");
        predefinedItemOption.value = info.itemName;
        predefinedItemOption.setAttribute("id", `predefined-item-${info.itemName}`);
        predefinedItemOption.setAttribute("item-info-id", info.infoID);
        predefinedItemsDataList.appendChild(predefinedItemOption);
    }

}
function UpdateLocalInformation(){
    localStorage.setItem("itemFarmList", JSON.stringify(itemFarmList));
}

function SelectPredefinedItem(e){
    const target = e.target;
    const selectOption = document.getElementById(`predefined-item-${target.value}`);
    if (selectOption){
        let selectOptionItemInfoID = parseInt(selectOption.getAttribute("item-info-id"));
        let itemInfo = getParentInfoById(ItemInformation, selectOptionItemInfoID);
        
        if(itemInfo !== false){
            document.getElementById("itemFamily").value = itemInfo.text;
        }
        
    }
}
function InitializeData(e){
    itemFarmList = JSON.parse(localStorage.getItem("itemFarmList"));
    let searchInputButton = document.getElementById("search-input");
    if (itemFarmList === null){
        itemFarmList = [];
    }
    FillDataListWithItemInfo(e);
    FillDataListWithPredefinedItems(e);

    document.getElementById("itemName").addEventListener("input", SelectPredefinedItem);
    searchInputButton.addEventListener("keyup", UpdateFarmItemsListContainer);
    document.getElementById("addToPlannerButton").addEventListener("click", AddItemToList);
    UpdateDisplay();
}


function getAllFarmableIds(parentInformationList){
    return parentInformationList.filter(isFarmableToday).map((parent) => {return parent.id});
}


function isFarmableToday(itemInfo){
    const today = new Date();
    const dayNumber = today.getDay();
    for (const day of itemInfo.availableDays){
        if (day === dayNumber){
            return true;
        }        
    }
    return false;
}

function ValidateAddItemInputs(itemName, itemFamily, amountOwned, amountRequired){
    if (!itemName.checkValidity()){
        itemName.reportValidity();
        return false;
    }

    for(const farmItem of itemFarmList){
        if (farmItem.name === itemName.value){
            itemName.setCustomValidity(`Item name ${itemName.value} is already in farmed items.`);
            itemName.reportValidity();
            return false;
        }
    }

    itemName.setCustomValidity("");


    if (!itemFamily.checkValidity()){
        itemFamily.reportValidity();
        return false;
    }

    const itemInfo = getParentInfoById(ItemInformation, itemFamily.value);
    if (itemInfo === false){
        itemFamily.setCustomValidity("Invalid Family")
        itemFamily.reportValidity();
        
        return false;
    }else{
        itemFamily.setCustomValidity("");
    }


    if (!amountOwned.checkValidity()){
        amountOwned.reportValidity();
        return false;
    }


    if (!amountRequired.checkValidity()){
        amountRequired.reportValidity();
        return false;
    }

    if (amountRequired.value <= 0){

        return false;
    }


    if (parseInt(amountOwned.value) > parseInt(amountRequired.value)){
        console.error(`${amountOwned.value}, ${amountRequired.value}`);
        amountOwned.setCustomValidity(`Already own enough ${itemName.value}`);
        amountOwned.reportValidity()
        return false;
    }else{
        amountOwned.setCustomValidity("");
    }
    return true;

}

function ResetAddItemForm(itemName, itemFamily, amountOwned, amountRequired){
    itemName.value = "";
    itemFamily.value = "";
    amountOwned.value = "";
    amountRequired.value = "";
}

function UpdateAmountOwned(e){
    let parentNode = e.target.parentNode.parentNode.parentNode;
    let index = parentNode.getAttribute("index");
    let id = parentNode.getAttribute("id");
    let weekGridContainer = document.getElementById("weekGrid");


    itemFarmList[index].amountOwned = e.target.value;
    UpdateLocalInformation();
    UpdateDisplay();

    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start"});
}

function UpdateAmountRequired(e){
    let parentNode = e.target.parentNode.parentNode.parentNode;
    let index = parentNode.getAttribute("index");
    let weekGridContainer = document.getElementById("weekGrid");
    
    itemFarmList[index].amountRequired = e.target.value;
    UpdateLocalInformation();
    UpdateDisplay();
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start"});

}


function RemoveItemFromItemList(e){
    let parentNode = e.target.parentNode.parentNode;
    let index = parentNode.getAttribute("index");
    itemFarmList.splice(index, 1);

    UpdateLocalInformation();
    UpdateDisplay();
}

function getCompletionValue(amountOwned, amountNeeded){
    const difference = Math.min(amountOwned / amountNeeded, 1);
    if (difference < 0.25){
        return "0";
    }
    else if (difference < 0.50){
        return "25";
    }
    else if (difference < 0.75){
        return "50";
    }
    else if (difference < 1){
        return "75";
    }
    else{
        return "100";
    }
}


function CreateFarmItemCard(itemIndex, farmItem){
        if (itemIndex >= itemFarmList.length || itemIndex < 0){
            return null;
        }

        
        let farmItemCard = document.createElement("div");
        farmItemCard.classList.add("farm-item-card");


        farmItemCard.setAttribute("index", itemIndex);
        farmItemCard.setAttribute("id", farmItem.name);
        let infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        let header = document.createElement("h3");
        header.innerText = farmItem.name;

        let progress = document.createElement("div");
        progress.classList.add("checkbox-container");

        let amountOwnedInput = document.createElement("input");
        amountOwnedInput.setAttribute("type", "number");
        amountOwnedInput.addEventListener("focusout", UpdateAmountOwned);
        amountOwnedInput.value = farmItem.amountOwned;


        let amountRequiredInput = document.createElement("input");
        amountRequiredInput.setAttribute("type", "number");
        amountRequiredInput.addEventListener("focusout", UpdateAmountRequired);
        amountRequiredInput.value = farmItem.amountRequired;


        
        let removeItemButton = document.createElement("button");
        if(isFarmingComplete(farmItem)){
            removeItemButton.setAttribute("complete", true);
        }
        removeItemButton.classList.add("removeButton");

        removeItemButton.textContent = "Remove";
        removeItemButton.addEventListener("click", RemoveItemFromItemList);

        

        progress.append("Progress: ")
        progress.appendChild(amountOwnedInput);
        progress.append("/")
        progress.appendChild(amountRequiredInput);
        

        infoDiv.appendChild(header);
        infoDiv.appendChild(progress);
        infoDiv.appendChild(removeItemButton);

        farmItemCard.appendChild(infoDiv);
        return farmItemCard;
}

function UpdateFarmItemsListContainer(){
    let farmItemsListContainer = document.getElementById("farmItemsList");
    farmItemsListContainer.replaceChildren();
    const searchInput = document.getElementById("search-input");
    for (let i = 0; i < itemFarmList.length; i++){
        const farmItem = itemFarmList[i];
        let searchVal = searchInput.value;

        if (searchVal === "" || farmItem.name.includes(searchVal)){
            const farmItemCard = CreateFarmItemCard(i, farmItem);        
            farmItemsListContainer.appendChild(farmItemCard);
        }

    }
}


function getDayString(dayIndex){
    const DAYSINWEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return DAYSINWEEK[dayIndex];
}

function getDayVal(dayString){
    const DAYVAL = {"Sunday": DAY.SUN, "Monday": DAY.MON, "Tuesday": DAY.TUE,
        "Wednesday": DAY.WED, "Thursday": DAY.THUR, "Friday": DAY.FRI, "Saturday": DAY.SAT
    };

    if (Object.keys(DAYVAL).includes(dayString)){
        return DAYVAL[dayString];
    }else{
        return null;
    }
}

function CreateDayColumn(dayIndex){
        let today = new Date().getDay();
        let dayColumn = document.createElement("day-column");
        const day = getDayString((today + dayIndex) % Object.keys(DAY).length);


        dayColumn.classList.add("day-column");

        if (today === getDayVal(day)){
            dayColumn.setAttribute("today", true);
        }

        let dayText = document.createElement("h3");
        dayText.innerText = day;

        
        let dayList = document.createElement("div");
        dayList.classList.add("day-list");
        
        
        let requiresResin = true;
        for (const farmItem of itemFarmList){
            let pInfo = getParentInfoById(ItemInformation, farmItem.itemFamily);
            if (!pInfo){
                console.log(farmItem.itemFamily);
            }

            if (pInfo.availableDays.includes(getDayVal(day))){
                let scheduleItem = document.createElement("button");
                scheduleItem.classList.add("schedule-item");
                scheduleItem.setAttribute("requiresResin", farmItem.requiresResin);
                scheduleItem.setAttribute("id", `${day}-${farmItem.name}`);
                if (farmItem.limitedAvailability){
                    scheduleItem.setAttribute("limitedAvailability", true);
                }
                
                let itemNameStrong = document.createElement("h4");
                itemNameStrong.innerText = farmItem.name;
                let qtyBadgeDiv = document.createElement("div");
                qtyBadgeDiv.classList.add("qty-badge");
                qtyBadgeDiv.innerText = `Needed: ${farmItem.amountOwned}/${farmItem.amountRequired}`;

                let slider = document.createElement("progress");
                slider.value = farmItem.amountOwned;
                slider.max = farmItem.amountRequired;
                slider.innerHTML = Math.floor((farmItem.amountOwned / farmItem.amountRequired) * 100) / 100;
                slider.setAttribute("completion", getCompletionValue(farmItem.amountOwned, farmItem.amountRequired));


                scheduleItem.addEventListener("click", function (e){
                    e.target.remove();
                })


                scheduleItem.appendChild(itemNameStrong);
                scheduleItem.appendChild(qtyBadgeDiv);
                scheduleItem.appendChild(slider);
                dayList.appendChild(scheduleItem);
                
                
            }
        }

        dayColumn.appendChild(dayText);
        dayColumn.appendChild(dayList);

        return dayColumn;
}
function UpdateWeekGrid(weekGridContainer){

    weekGridContainer.replaceChildren();

    for(let i = 0; i < Object.keys(DAY).length; i++){
        let dayColumn = CreateDayColumn(i);
        weekGridContainer.appendChild(dayColumn);
    }
}


function UpdateDisplay(){
    let farmItemsListContainer = document.getElementById("farmItemsList");
    let weekGridContainer = document.getElementById("weekGrid");



    itemFarmList.sort(CompareItems)
    UpdateFarmItemsListContainer(farmItemsListContainer);
    UpdateWeekGrid(weekGridContainer);
}


function isFarmingComplete(item){
    return item.amountOwned >= item.amountRequired;    
}


function UpdateItemPriorities(){
    for (let i = 0; i < itemFarmList.length; i++){
        const itemInfo = getParentInfoByText(ItemInformation, itemFarmList[i].itemFamily);
        console.log(itemInfo);
        itemFarmList[i].itemFamily = itemInfo.id;

    }
}

function AddItemToList(){
    let itemName = document.getElementById("itemName");
    let itemFamily = document.getElementById("itemFamily");
    let amountOwned = document.getElementById("amtOwned");
    let amountRequired = document.getElementById("amtNeeded");

    if (!ValidateAddItemInputs(itemName, itemFamily, amountOwned, amountRequired)){
        return;
    }


    let itemInfo = getParentInfoByText(ItemInformation, itemFamily.value);
    let limitedAvailability = false;
    const TotalDayCount = 7;


    let dayCount = itemInfo.availableDays.length;
    if (dayCount < TotalDayCount){
        limitedAvailability = true;
    }

    let item = {
        "name": itemName.value,
        "itemFamily": itemInfo.id,
        "amountOwned": parseInt(amountOwned.value),
        "amountRequired": parseInt(amountRequired.value),
        "requiresResin": itemInfo.requiresResin,
        "limitedAvailability": limitedAvailability,
        "dayCount": dayCount,
        "priority": itemInfo.priority
    };


    itemFarmList.push(item);
    UpdateLocalInformation();

    ResetAddItemForm(itemName, itemFamily, amountOwned, amountRequired);
    UpdateDisplay();
}

