let swiper = document.querySelector(".swiper"),
l = document.querySelector("#left"),
r = document.querySelector("#right");

r.addEventListener("click", function(){
    swiper.scrollLeft += 400;
})
l.addEventListener("click", function(){
    swiper.scrollLeft -= 400;
})
document.addEventListener("keydown", function(e){
    if(e.key == "ArrowRight"){
        swiper.scrollLeft += 400;
    }
    if(e.key == "ArrowLeft"){
        swiper.scrollLeft -= 400;
    }
})