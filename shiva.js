function carousel() {
    return `  <div class="left-arrow">
    <i class="fas fa-chevron-left"></i>
</div>
    <img src="" alt="" id="carousel-img"> 
    <div class="right-arrow">
        <i class="fas fa-chevron-right"></i>
    </div>`
}

function carouselScript() {
    
let images = [
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Clash-V22.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/rafa21.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Ezone-2022.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/PAANY-R.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/wilson-squash.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Astrox100zz.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/RADICAL-AND-SPEED-BLACK-BANNER.jpg",
    ];

let index = 1;

setInterval(()=>{
    index = (index + 1)%images.length;
    carousel_img(images,index)
},6000);
carousel_img(images,0);

function carousel_img(images,index) {
let img = document.getElementById("carousel-img");
img.setAttribute("src",images[index]);
 }

 let left_arrow   = document.querySelector(".left-arrow");
 let right_arrow  = document.querySelector(".right-arrow");

 left_arrow.addEventListener("click",()=>{
     if(index==0) {
index=images.length-1;
     } else{
         index--;
     }
  
      carousel_img(images,index);
 }) 
 right_arrow.addEventListener("click",()=>{
     index = (index +1 )%images.length;
      carousel_img(images,index);
 }) 

}

export {carousel,carouselScript}