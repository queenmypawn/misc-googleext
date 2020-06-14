  let imageName1 = document.getElementById("the-edge");

  imageName1.onclick = function(element) {

  	// Create the link to be copied
    hyperlink = imageName1.alt
    imgOpen = "[img]"
    imgClose = "[/img]"
    link = imgOpen.concat(hyperlink, imgClose)

    // Create a dummy TextArea to copy text 
    var dummy = document.createElement("textarea")
    document.body.appendChild(dummy)
    dummy.value = link
    dummy.select()

    document.execCommand("copy")
    document.body.removeChild(dummy)
  };
