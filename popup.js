let images = document.getElementsByTagName("img");
console.log(images)

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function (event) {
        // Create the link to be copied
        hyperlink = event.target.alt //EVENT.TARGET = ELEMENT

        imgOpen = "[img]"
        imgClose = "[/img]"
        link = imgOpen.concat(hyperlink, imgClose)
        console.log(link)


        // Create a dummy TextArea to copy text 
        var dummy = document.createElement("textarea")
        document.body.appendChild(dummy)
        dummy.value = link
        dummy.select()

        document.execCommand("copy")
        document.body.removeChild(dummy)

    }
}
