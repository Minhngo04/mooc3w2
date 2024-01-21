function upDate(previewPic) {
    var imageDiv = document.getElementById("image");
    console.log("Mouseover event triggered");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerText = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    console.log("Mouseout event triggered");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over an image below to display here.";
}

function addTabindex() {
    var previewImages = document.getElementsByClassName("preview");
    for (var i = 0; i < previewImages.length; i++) {
        previewImages[i].tabindex = i + 1;
    }
    console.log("Tabindex attributes added");
}

function onFocus() {
    console.log("Focus event triggered");
}

function onBlur() {
    console.log("Blur event triggered");
}
