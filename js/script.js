var link = document.querySelector(".search-hotel"); 
var popup = document.querySelector(".search-form"); 
var form = popup.querySelector("form"); 
var formOpened = false;
var adultNumber = 2;
var childrenNumber = 0;
var countAdult = document.getElementById("adult");
var countChildren = document.getElementById("child");

link.addEventListener("click", function(event) {
    event.preventDefault();
    if (formOpened == false) {
        popup.classList.add("search-form-show");
        formOpened = true;
        return;
    }
    if (formOpened == true) {
        popup.classList.remove("search-form-show");
        formOpened = false;
        return;
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("search-form-show")) {
            popup.classList.remove("search-form-show");
        }
    }
});

//кнопки

function plus() {
    adultNumber++;
    countAdult.value = adultNumber;
}

function minus() {
    if (countAdult.value == 0) {
        return;
    } else {
        adultNumber--;
        countAdult.value = adultNumber;
    }
}

function plusChildren() {
    childrenNumber++;
    countChildren.value = childrenNumber;
}

function minusChildren() {
    if (countChildren.value == 0) {
        return;
    } else {
        childrenNumber--;
        countChildren.value = childrenNumber;
    }
}