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
}

const ParentInformation = [
    {
        "id": "Daily",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": false,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": "Daily-Resin",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": "Daily-Resin (Low Priority)",
        "availableDays": [DAY.SUN, DAY.MON, DAY.TUE, DAY.WED, DAY.THUR, DAY.FRI, DAY.SAT],
        "requiresResin": true,
        "priority": PRIORITY.LOW
    },
    {
        "id": "Once a week",
        "availableDays": [DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.HIGH
    },
    {
        "id": "Local Speciality Farming (Monday, Wed, Fri)",
        "availableDays": [DAY.MON, DAY.WED, DAY.FRI],
        "requiresResin": false,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": "Group A - Resin (Monday, Thursday, Sunday)",
        "availableDays": [DAY.MON, DAY.THUR, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": "Group B - Resin (Tuesday, Friday, Sunday)",
        "availableDays": [DAY.TUE, DAY.FRI, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    },
    {
        "id": "Group C - Resin (Wednesday, Saturday, Sunday)",
        "availableDays": [DAY.WED, DAY.SAT, DAY.SUN],
        "requiresResin": true,
        "priority": PRIORITY.NORMAL
    }
];



let itemFarmList = [];

function getParentInfoById(parentInfo, id){
    for (const info of parentInfo){
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
            return 1;
        }else{
            return -1;
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

function FillDataListWithParents(e){
    let parentInfoDataList = document.getElementById("itemFamilies");
    for(const info of ParentInformation){
        let optItem = document.createElement("option");
        optItem.value = info.id;
        parentInfoDataList.appendChild(optItem);
    }

}

function UpdateLocalInformation(){
    localStorage.setItem("itemFarmList", JSON.stringify(itemFarmList));
}

function InitializeData(e){
    itemFarmList = JSON.parse(localStorage.getItem("itemFarmList"));

    if (itemFarmList === null){
        itemFarmList = [];
    }
    FillDataListWithParents(e);
    document.getElementById("addToPlannerButton").addEventListener("click", AddItemToList);
    UpdateDisplay();
}


function getAllFarmableIds(parentInformationList){
    return parentInformationList.filter(isFarmableToday).map((parent) => {return parent.id});
}


function isFarmableToday(parentInfo){
    const today = new Date();
    const dayNumber = today.getDay();
    for (const day of parentInfo.availableDays){
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

    const parentInfo = getParentInfoById(ParentInformation, itemFamily.value);
    if (parentInfo === false){
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


function CreateFarmItemCard(itemIndex){
        if (itemIndex >= itemFarmList.length || itemIndex < 0){
            return null;
        }
        const farmItem = itemFarmList[itemIndex];        
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

function UpdateFarmItemsListContainer(farmItemsListContainer){
    farmItemsListContainer.replaceChildren();

    for (let i = 0; i < itemFarmList.length; i++){
        const farmItemCard = CreateFarmItemCard(i);        
        farmItemsListContainer.appendChild(farmItemCard);
    }
    console.log(farmItemsListContainer);
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
            let pInfo = getParentInfoById(ParentInformation, farmItem.itemFamily);


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
        console.log(dayColumn);
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
        const parentInfo = getParentInfoById(ParentInformation, itemFarmList[i].itemFamily);
        itemFarmList[i].priority = parentInfo.priority;
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


    let parentInfo = getParentInfoById(ParentInformation, itemFamily.value);
    let limitedAvailability = false;
    const TotalDayCount = 7;


    let dayCount = parentInfo.availableDays.length;
    if (dayCount < TotalDayCount){
        limitedAvailability = true;
    }

    let item = {
        "name": itemName.value,
        "itemFamily": parentInfo.id,
        "amountOwned": parseInt(amountOwned.value),
        "amountRequired": parseInt(amountRequired.value),
        "requiresResin": parentInfo.requiresResin,
        "limitedAvailability": limitedAvailability,
        "dayCount": dayCount,
        "priority": parentInfo.priority
    };


    itemFarmList.push(item);
    UpdateLocalInformation();

    ResetAddItemForm(itemName, itemFamily, amountOwned, amountRequired);
    UpdateDisplay();
}

