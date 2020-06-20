var images=document.getElementsByClassName("champion_icon")

for (var image of images){
    var w=image.offsetWidth;
    console.log(image)
    image.style.height=w
}