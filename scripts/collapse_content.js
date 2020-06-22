var coll = document.getElementsByClassName("champion");
var body=document.getElementById("champs");
var blanket=document.getElementById("blanket");
var i;

const blanket_opacity="0.7"
const card_color_before_click="rgba(0,0,0,0.7)"
const card_color_after_click="red"
const text_color_before_click="white"
const text_color_after_click="black"
const medium="#FFD966"
const easy="#93C47D"
const hard="#E06666"

var curr=null
for (i = 0; i < coll.length; i++) {
    
    coll[i].addEventListener("mouseover", function(){
        heading=this.getElementsByTagName("h3")[0]
        this.style.backgroundColor=card_color_after_click
        heading.style.color=text_color_after_click
        if (this.getAttribute("data-difficulty")==="medium"){
            this.style.backgroundColor=medium
        }
        else if (this.getAttribute("data-difficulty")==="easy"){
            this.style.backgroundColor=easy
        }
        else if (this.getAttribute("data-difficulty")=="hard"){
            this.style.backgroundColor=hard
        }
    })
  
    
    coll[i].addEventListener("mouseout", function(){
        console.log("setting background color")
        if(!curr){
            this.style.backgroundColor=card_color_before_click
            heading=this.getElementsByTagName("h3")[0]
            heading.style.color=text_color_before_click


        }

    })
  
  
  
    coll[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var content = this.getElementsByClassName("content")[0];
    if (content.style.visibility === "visible") {

    } else {
      if (curr){
        curr.style.visibility="hidden";
        curr.style.opacity="0"
      }
      // What happens when u click on

      content.style.visibility="visible";   //content visibility
      content.style.opacity="1"


      blanket.style.opacity=blanket_opacity  //blanket visibility
      blanket.style.visibility="visible"

      curr=content

      curr.style.zIndex="200"
      curr.parentElement.style.zIndex="200"
      console.log(curr.parentElement)

      curr.parentElement.style.borderBottomLeftRadius="0%"   //bottom left and right borders
      curr.parentElement.style.borderBottomRightRadius="0%"


      curr.parentElement.style.backgroundColor=card_color_after_click   //color
      if (curr.parentElement.getAttribute("data-difficulty")=="medium"){
            curr.parentElement.style.backgroundColor=medium
      }
      else if (curr.parentElement.getAttribute("data-difficulty")=="easy"){
          curr.parentElement.style.backgroundColor=easy
      }
      else if (curr.parentElement.getAttribute("data-difficulty")=="hard"){
        curr.parentElement.style.backgroundColor=hard
    }

      this.getElementsByTagName("h3")[0].style.color=text_color_after_click
      
    }
  });
}
blanket.addEventListener("click", function(){
    console.log("here")
    this.classList.toggle("active");
    curr.style.visibility="hidden";
    curr.style.opacity="0"
    blanket.style.opacity="0"
    blanket.style.visibility="hidden"
    curr.parentElement.style.zIndex="50"
    curr.parentElement.style.borderBottomLeftRadius="10%"
    curr.parentElement.style.borderBottomRightRadius="10%"
    curr.parentElement.style.backgroundColor=card_color_before_click  

    curr.parentElement.getElementsByTagName("h3")[0].style.color=text_color_before_click

    curr=null
})

