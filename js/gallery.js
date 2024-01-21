/*Name this external file gallery.js*/

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