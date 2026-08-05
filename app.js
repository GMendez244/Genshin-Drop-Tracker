let itemFarmList = [];
let itemFamilyCollection;


function getScheduleInfoByText(itemInfo, text){
    for (const info of itemInfo){
        if (info.text === text){
            return window.structuredClone(info);
        }
    }
    return false;
}

function getScheduleInfoById(itemInfo, id){
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

function FillDataListWithScheduleInfo(e){
    let parentInfoDataList = document.getElementById("farmSchedules");
    for(const info of FarmSchedule){
        let optItem = document.createElement("option");
        optItem.value = info.text;
        
        parentInfoDataList.appendChild(optItem);
    }

}

function FillDataListWithPredefinedItems(e){
    let predefinedItemsDataList = document.getElementById("predefinedItems");

    for (info of predefinedItems){
        let predefinedItemOption = document.createElement("option");
        predefinedItemOption.value = info.itemName;
        predefinedItemOption.setAttribute("id", `predefined-item-${info.itemName}`);
        predefinedItemOption.setAttribute("data-item-info-id", info.farmScheduleID);
        predefinedItemOption.setAttribute("data-item-family", info.itemFamily);
        predefinedItemsDataList.appendChild(predefinedItemOption);
    }

}
function UpdateLocalInformation(){
    localStorage.setItem("itemFarmList", JSON.stringify(itemFarmList));
    localStorage.setItem("itemFamilyCollection", JSON.stringify(itemFamilyCollection));
}

function choosePredefinedItemFromDatalist(e){
    const target = e.target;
    const selectOption = document.getElementById(`predefined-item-${target.value}`);
    if (selectOption){
        let selectOptionItemInfoID = parseInt(selectOption.getAttribute("data-item-info-id"));
        
        let itemInfo = getScheduleInfoById(FarmSchedule, selectOptionItemInfoID);
        
        if(itemInfo !== false){
            document.getElementById("farmSchedule").value = itemInfo.text;
        }
        
    }
}

function initializeItemFamilyCollection(e){
        itemFamilyCollection = window.structuredClone(reducePredefinedItemsToItemFamily());
        UpdateLocalInformation();
}
function InitializeData(e){
    itemFarmList = JSON.parse(localStorage.getItem("itemFarmList"));
    itemFamilyCollection = JSON.parse(localStorage.getItem("itemFamilyCollection"));
    let searchInputButton = document.getElementById("search-input");
    if (itemFarmList === null){
        itemFarmList = [];
    }

    document.getElementById("itemName").addEventListener("input", choosePredefinedItemFromDatalist);
    searchInputButton.addEventListener("keyup", UpdateFarmItemsListContainer);
    document.getElementById("addToPlannerButton").addEventListener("click", AddItemToList);

    if (itemFamilyCollection === null || itemFamilyCollection === undefined){
        initializeItemFamilyCollection(e);
    }


    FillDataListWithScheduleInfo(e);
    FillDataListWithPredefinedItems(e);
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

function ValidateAddItemInputs(itemName, farmSchedule, amountOwned, amountRequired){
    itemName.setCustomValidity('');
    farmSchedule.setCustomValidity('');
    amountOwned.setCustomValidity('');
    amountRequired.setCustomValidity('');
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


    if (!farmSchedule.checkValidity()){
        farmSchedule.reportValidity();
        return false;
    }

    const itemInfo = getScheduleInfoByText(FarmSchedule, farmSchedule.value);

    if (itemInfo === false){
        farmSchedule.setCustomValidity("Invalid Family")
        farmSchedule.reportValidity();
        
        return false;
    }else{
        farmSchedule.setCustomValidity("");
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

function ResetAddItemForm(itemName, farmSchedule, amountOwned, amountRequired){
    itemName.value = "";
    farmSchedule.value = "";
    amountOwned.value = "";
    amountRequired.value = "";
}

function UpdateConversionSliders(itemFamily, itemIndex, amountOwned, amountRequired){
    let queryText = `input[type="range"][id="item-conversion-slider-${itemIndex}"]`;
    let slider = document.querySelector(queryText);
    if (slider !== null){
        setupConversionSlider(slider, amountOwned, amountRequired);
        updateSliderLabel(slider);
    }
}
function UpdateAmountOwned(e){
    let itemName = e.target.getAttribute("data-item-name");
    let amountOwnedIndex = parseInt(e.target.getAttribute("data-item-index"));
    let dataItem = `[data-item-name="${itemName}"]`;
    let inputElements = document.querySelectorAll(`input${dataItem}[data-item-owned="true"][data-item-index="${amountOwnedIndex}"]`);
    let farmItem = itemFamilyCollection[itemName].items[amountOwnedIndex];
    
    if (farmItem === undefined){
        if (amountOwnedIndex !== undefined && itemName !== undefined){
            itemFamilyCollection[itemName].amountOwned[amountOwnedIndex] = parseInt(e.target.value);
            let itemAmountOwned = itemFamilyCollection[itemName].amountOwned[amountOwnedIndex];
            let itemAmountRequired = itemFamilyCollection[itemName].amountRequired[amountOwnedIndex];

            UpdateConversionSliders(itemName, amountOwnedIndex, itemAmountOwned, itemAmountRequired);
            UpdateLocalInformation();
        }
        return;
    }

    itemFamilyCollection[farmItem.itemFamily].amountOwned[amountOwnedIndex] = parseInt(e.target.value);
    let itemAmountOwned = itemFamilyCollection[farmItem.itemFamily].amountOwned[amountOwnedIndex];
    let itemAmountRequired = itemFamilyCollection[farmItem.itemFamily].amountRequired[amountOwnedIndex];
    for (input of inputElements){
        input.value = itemAmountOwned;
    }


    let sliders = document.querySelectorAll(`${dataItem}[data-item-index="${amountOwnedIndex}"] progress`);
    
    for (slider of sliders){
        slider.value = itemAmountOwned;
        slider.innerHTML = Math.floor((itemAmountOwned / itemAmountRequired) * 100) / 100;
        slider.setAttribute("completion", getCompletionValue(itemAmountOwned, itemAmountRequired));
    }

    
    let progressLabels = document.querySelectorAll(`${dataItem}[data-item-index="${amountOwnedIndex}"] div`);

    for (label of progressLabels){
        label.innerHTML = `Needed: ${itemAmountOwned}/${itemAmountRequired}`;
    }

    UpdateConversionSliders(itemName, amountOwnedIndex, itemAmountOwned, itemAmountRequired);
    UpdateLocalInformation();
//    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start"});
}

function UpdateAmountRequired(e){
    let itemName = e.target.getAttribute("data-item-name");
    let amountRequiredIndex = parseInt(e.target.getAttribute("data-item-index"));
    let dataItem = `[data-item-name="${itemName}"]`;
    let inputElements = document.querySelectorAll(`input${dataItem}[data-item-owned="false"][data-item-index="${amountRequiredIndex}"]`);
    let farmItem = itemFamilyCollection[itemName].items[amountRequiredIndex];

    

    
    if (farmItem === undefined){
        if (amountRequiredIndex !== undefined && itemName !== undefined){
            itemFamilyCollection[itemName].amountRequired[amountRequiredIndex] = parseInt(e.target.value);
            
            let itemAmountOwned = itemFamilyCollection[itemName].amountOwned[amountRequiredIndex];
            let itemAmountRequired = itemFamilyCollection[itemName].amountRequired[amountRequiredIndex];

            UpdateConversionSliders(itemName, amountRequiredIndex, itemAmountOwned, itemAmountRequired);

            UpdateLocalInformation();            
        }
        return;
    }

    itemFamilyCollection[farmItem.itemFamily].amountRequired[amountRequiredIndex] = parseInt(e.target.value);
    let itemAmountOwned = itemFamilyCollection[farmItem.itemFamily].amountOwned[amountRequiredIndex];
    let itemAmountRequired = itemFamilyCollection[farmItem.itemFamily].amountRequired[amountRequiredIndex];
    for(input of inputElements){
        
        
        input.value = itemAmountRequired;
    }


    let sliders = document.querySelectorAll(`${dataItem}[data-item-index="${amountRequiredIndex}"] progress`);
    
    for (slider of sliders){
        slider.max = parseInt(e.target.value);
        slider.innerHTML = Math.floor((itemAmountOwned / itemAmountRequired) * 100) / 100;
        slider.setAttribute("completion", getCompletionValue(itemAmountOwned, itemAmountRequired));
    }

    

    let progressLabels = document.querySelectorAll(`${dataItem}[data-item-index="${amountRequiredIndex}"] div`);
    
    for (label of progressLabels){
        label.innerHTML = `Needed: ${itemAmountOwned}/${itemAmountRequired}`;
    }
    UpdateConversionSliders(itemName, amountRequiredIndex, itemAmountOwned, itemAmountRequired);
    UpdateLocalInformation();
    /*
    let parentNode = document.getElementById(e.target.getAttribute("data-item-name"));
    let index = parentNode.getAttribute("index");
//  let id = parentNode.getAttribute("id");
    let weekGridContainer = document.getElementById("weekGrid");
    
    itemFarmList[index].amountRequired = e.target.value;
    UpdateLocalInformation();
    UpdateDisplay();
//  document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start"});
    */
}


function RemoveItemFromItemList(e){
    let parentNode = e.target.parentNode.parentNode;
    let index = parentNode.getAttribute("index");
    let removeElement = itemFarmList[index];
    let itemFamilyIndex = itemFarmList[index].index;
    console.log("itemFamilyIndex", itemFamilyIndex);
    itemFamilyCollection[removeElement.itemFamily].amountRequired[itemFamilyIndex] = 0;
    itemFamilyCollection[removeElement.itemFamily].amountOwned[itemFamilyIndex] = 0;
    let itemFamily = itemFarmList[index].itemFamily;

    let isInPredefined = predefinedItems.find((item) => {
        return  itemFamily === item.itemFamily;
    })

    console.log(isInPredefined);
    
    if (!isInPredefined){
        console.error("Deleting item from itemFamilyCollection");
        delete itemFamilyCollection[itemFamily]
    }

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
        amountOwnedInput.setAttribute("data-item-name", farmItem.itemFamily);
        amountOwnedInput.setAttribute("data-item-owned", true);
        amountOwnedInput.addEventListener("input", UpdateAmountOwned);
        amountOwnedInput.setAttribute("data-item-index", farmItem.index);
        let amountOwnedValue = itemFamilyCollection[farmItem.itemFamily].amountOwned[farmItem.index];
        


        amountOwnedInput.value = amountOwnedValue;
        amountOwnedInput.setAttribute("min", 0);

        let amountRequiredInput = document.createElement("input");
        amountRequiredInput.setAttribute("type", "number");
        amountRequiredInput.setAttribute("data-item-name", farmItem.itemFamily);
        amountRequiredInput.setAttribute("data-item-owned", false);
        amountRequiredInput.setAttribute("data-item-index", farmItem.index);
        amountRequiredInput.addEventListener("input", UpdateAmountRequired);
        amountRequiredInput.setAttribute("min", 1);
        amountRequiredInput.value = itemFamilyCollection[farmItem.itemFamily].amountRequired[farmItem.index];


        
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


function DayItemDragStart(e){
    
}

function DayItemDragEnd(e){
    let parent = e.target.parentNode.getBoundingClientRect();

    

    if (parent.top > e.clientY){
        e.target.parentNode.prepend(e.target);
        return;
    }

    for (node of e.target.parentNode.childNodes){
        if (node === e.target){
            continue;
        }

        if (node.offsetTop < e.clientY){
            node.after(e.target);
        }
    }
}
function CreateDayColumn(dayIndex){
        let today = new Date().getDay();
        let dayColumn = document.createElement("div");
        dayColumn.addEventListener("dragstart", DayItemDragStart);
        dayColumn.addEventListener("dragend", DayItemDragEnd);
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
        for (let index = 0; index < itemFarmList.length; index++){

            const farmItem = itemFarmList[index];
            let pInfo = getScheduleInfoById(FarmSchedule, farmItem.farmSchedule);
            if (!pInfo){
                
            }

            if (pInfo.availableDays.includes(getDayVal(day))){
                let scheduleItem = document.createElement("button");
                scheduleItem.draggable = true;

                scheduleItem.classList.add("schedule-item");
                scheduleItem.setAttribute("requiresResin", farmItem.requiresResin);
                scheduleItem.setAttribute("id", `${day}-${farmItem.name}`);
                scheduleItem.setAttribute("data-item-name", farmItem.itemFamily);
                scheduleItem.setAttribute("data-item-index", farmItem.index);
                if (farmItem.limitedAvailability){
                    scheduleItem.setAttribute("limitedAvailability", true);
                }
                
                let itemNameStrong = document.createElement("h4");
                itemNameStrong.innerText = farmItem.name;
                let qtyBadgeDiv = document.createElement("div");
                qtyBadgeDiv.classList.add("qty-badge");
                qtyBadgeDiv.setAttribute("data-item-name", farmItem.itemFamily);
                qtyBadgeDiv.setAttribute("data-item-progress-label",true);
                let itemAmountOwned = itemFamilyCollection[farmItem.itemFamily].amountOwned[farmItem.index];
                let itemAmountRequired = itemFamilyCollection[farmItem.itemFamily].amountRequired[farmItem.index];
                
                qtyBadgeDiv.innerText = `Needed: ${itemAmountOwned}/${itemAmountRequired}`;
                
                let slider = document.createElement("progress");
                slider.setAttribute("data-item-name", farmItem.itemFamily);
                slider.setAttribute("data-item-slider", true);

                
                slider.value = itemAmountOwned;
                slider.max = itemAmountRequired;
                slider.innerHTML = Math.floor((itemAmountOwned / itemAmountRequired) * 100) / 100;
                slider.setAttribute("completion", getCompletionValue(itemAmountOwned, itemAmountRequired));


                scheduleItem.addEventListener("click", ShowItemConverter);


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
        const itemInfo = getScheduleInfoByText(FarmSchedule, itemFarmList[i].farmSchedule);

        
        
        itemFarmList["farmSchedule"] = itemFarmList[i].itemFamily;


    }
}

function AddItemToList(){
    let itemName = document.getElementById("itemName");
    let farmSchedule = document.getElementById("farmSchedule");
    let amountOwned = document.getElementById("amtOwned");
    let amountRequired = document.getElementById("amtNeeded");
    let itemFamily = document.getElementById(`predefined-item-${itemName.value}`);


    if (!ValidateAddItemInputs(itemName, farmSchedule, amountOwned, amountRequired)){
        return;
    }


    let itemInfo = getScheduleInfoByText(FarmSchedule, farmSchedule.value);
    let limitedAvailability = false;
    

    let family = -1;

    if (itemFamily){
        family = parseInt(itemFamily.getAttribute("data-item-family"));
    }
    const TotalDayCount = 7;


    let dayCount = itemInfo.availableDays.length;
    if (dayCount < TotalDayCount){
        limitedAvailability = true;
    }

    let item = {
        "name": itemName.value,
        "farmSchedule": itemInfo.id,
        "requiresResin": itemInfo.requiresResin,
        "limitedAvailability": limitedAvailability,
        "dayCount": dayCount,
        "priority": itemInfo.priority,
        "itemFamily": family,
        "index": 0
    };

    let index = 0;

    if (family !== -1){
        for (i of itemFamilyCollection[item.itemFamily].items){
            if (i.itemName === item.name){
                item.index = index;
                itemFamilyCollection[item.itemFamily].amountOwned[index] = parseInt(amountOwned.value);
                itemFamilyCollection[item.itemFamily].amountRequired[index] = parseInt(amountRequired.value);
                break;
            }
            index++;
        }
    }else{
        item.itemFamily = item.name;
        if (!itemFamilyCollection[item.name]){
            itemFamilyCollection[item.name] = { "items": [], "amountOwned": [], "amountRequired": []};
        }

        itemFamilyCollection[item.name].items.push(item);
        itemFamilyCollection[item.name].amountOwned.push(parseInt(amountOwned.value));
        itemFamilyCollection[item.name].amountRequired.push(parseInt(amountRequired.value));

    }
    itemFarmList.push(item);
    UpdateLocalInformation();

    ResetAddItemForm(itemName, farmSchedule, amountOwned, amountRequired);
    UpdateDisplay();
}

function ShowItemConverter(e){
    let itemName = e.target.getAttribute("data-item-name");
    if (itemName === null){
        console.error("Invalid farm item", itemName);
        return;
    }
    let itemConverterSection = FillItemConverterInformation(itemName);

    let dialogBox = document.getElementById("item-conversion-dialog");

    if (dialogBox){
        dialogBox.replaceChildren();
        dialogBox.appendChild(itemConverterSection);
    }

    let rangeInputs = dialogBox.querySelectorAll('input[type="range"]');
    for (rangeInput of rangeInputs){
        rangeInput.dispatchEvent(new Event('input', {bubbles: true}));
    }
    dialogBox.showModal();
}

function SortItemsByTier(first, second){
    return first.tier - second.tier
}

function getItemFamilyWithId(requestedID){
    let low = 0;
    let high = ItemFamily.length;
    

    let result = null;

    while (low < high){
        let mid = Math.trunc((low + high) / 2);
        let currentID = ItemFamily[mid].id;
        if (currentID === requestedID){
            return ItemFamily[mid];
        }

        if (ItemFamily[mid].id > requestedID){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    
    return null;
}





function reducePredefinedItemsToItemFamily(){
    return predefinedItems.reduce((dictionary, currentItem) => {
        const itemFamilyId = currentItem.itemFamily;

        if (!dictionary[itemFamilyId]){
            dictionary[itemFamilyId] = { "amountRequired": [], "amountOwned": [], "items": []};
        }

        dictionary[itemFamilyId]["items"].push(currentItem);
        dictionary[itemFamilyId]["amountRequired"].push(0);
        dictionary[itemFamilyId]["amountOwned"].push(0);
        return dictionary;
    }, {});
}

function setupConversionSlider(slider, itemOwned, itemRequired){
    console.log(slider);
    let maxConversion = Math.trunc(itemOwned / 3);
    let minConversion = 0;
    let overageConversion = Math.max(Math.trunc((itemOwned - itemRequired) / 3),0);
    console.log("Overage", overageConversion);
    slider.setAttribute("type", "range");

    slider.setAttribute("max", maxConversion);
    slider.setAttribute("min", minConversion);
    slider.setAttribute("step", 1);
    slider.value = overageConversion;

    slider.classList.add("form-control");

}
function updateSliderLabel(rangeInput){
    let itemName = rangeInput.getAttribute("data-item-name");
    let itemIndex = rangeInput.getAttribute("data-item-index");
    let nextIndex = parseInt(itemIndex) + 1;
    let queryText = `label[for="item-conversion-slider-${itemIndex}"]`;
    let label = document.querySelector(queryText);

    label.innerText = `Recommended conversion: ${parseInt(rangeInput.value) * 3} -> ${rangeInput.value}`;

}

function updateSliderLabelEvent(e){
    updateSliderLabel(e.target);
}
function FillItemConverterInformation(itemFamily){


    let items = itemFamilyCollection[itemFamily].items;    

    let divPanel = document.createElement("div");
    divPanel.classList.add("panel");
    let i = 0;


    for(item of items){
        
        let header = document.createElement("h2");
        if (item.itemName !== undefined || item.itemName === null){
            header.innerText = item.itemName;
        }else{
            header.innerText = item.name;
        }

        let qtyRow = document.createElement("div");
        qtyRow.classList.add("qty-row");


        let itemOwnedDiv = document.createElement("div");
        itemOwnedDiv.classList.add("form-group");


        let itemOwnedId = `item-conversion-owned-${item.itemName}`;
        let itemOwnedLabel = document.createElement("label");
        itemOwnedLabel.setAttribute("for", itemOwnedId);
        itemOwnedLabel.innerText = "Owned: ";
        itemOwnedDiv.appendChild(itemOwnedLabel);


        let itemOwnedInput = document.createElement("input");
        itemOwnedInput.setAttribute("type", "number");
        itemOwnedInput.setAttribute("id", itemOwnedId);
        itemOwnedInput.setAttribute("min", 0);
        itemOwnedInput.setAttribute("data-item-owned", true);
        itemOwnedInput.classList.add("form-control");
        itemOwnedInput.setAttribute("data-item-index", i);
        itemOwnedInput.setAttribute("data-item-name", item.itemFamily);
        

        itemOwnedDiv.appendChild(itemOwnedLabel);
        itemOwnedDiv.appendChild(itemOwnedInput);




        let itemRequestedDiv = document.createElement("div");
        itemRequestedDiv.classList.add("form-group");

        
        let itemRequestedId = `item-conversion-requested-${item.itemName}`;
        let itemRequestedLabel = document.createElement("label");
        itemRequestedLabel.setAttribute("for", itemRequestedId);
        itemRequestedLabel.innerText = "Required: ";
        itemRequestedDiv.appendChild(itemRequestedLabel);


        let itemRequestedInput = document.createElement("input");
        itemRequestedInput.setAttribute("type", "number");
        itemRequestedInput.setAttribute("id", itemRequestedId);
        itemRequestedInput.setAttribute("min", 0);
        itemRequestedInput.setAttribute("data-item-owned", false);
        itemRequestedInput.classList.add("form-control");

        itemRequestedInput.setAttribute("data-item-index", i);
        itemRequestedInput.setAttribute("data-item-name", item.itemFamily);
        

        let amountRequired = itemFamilyCollection[itemFamily].amountRequired[i];
        let amountOwned =  itemFamilyCollection[itemFamily].amountOwned[i];
        itemRequestedInput.value = amountRequired;
        itemOwnedInput.value = amountOwned;



        itemOwnedInput.addEventListener("input", UpdateAmountOwned);
        itemRequestedInput.addEventListener("input", UpdateAmountRequired);



        
        itemRequestedDiv.appendChild(itemRequestedInput);
        qtyRow.appendChild(itemOwnedDiv);
        qtyRow.appendChild(itemRequestedDiv);
        divPanel.appendChild(header);
        divPanel.appendChild(qtyRow);

        if (i !== items.length - 1){
            let sliderGroup = document.createElement("div");
            sliderGroup.classList.add("form-group");
            let sliderLabelText = `item-conversion-slider-${i}`;
            let slider = document.createElement("input");        
            setupConversionSlider(slider, amountOwned, amountRequired);
            slider.setAttribute("data-item-name", item.itemFamily);
            slider.setAttribute("data-item-index", i);
            slider.addEventListener("input", updateSliderLabelEvent);
            slider.setAttribute("id", sliderLabelText);


            let sliderLabel = document.createElement("label");
            sliderLabel.innerText = "Convert: 0/0";
            sliderLabel.setAttribute("for", sliderLabelText);


        
            
            sliderGroup.appendChild(sliderLabel);
            sliderGroup.appendChild(slider);

            qtyRow.appendChild(sliderGroup);
            

        }

        i++;


    }
    let closeDialogButton = document.createElement("button");
    closeDialogButton.setAttribute("type", "button");
    closeDialogButton.addEventListener("click", CloseItemConverter);
    closeDialogButton.innerText = "Close";
    closeDialogButton.classList.add("form-control");
    divPanel.appendChild(closeDialogButton);
    return divPanel;
}

function CloseItemConverter(e){
    let dialogBox = document.getElementById("item-conversion-dialog");
    dialogBox.close();
}
