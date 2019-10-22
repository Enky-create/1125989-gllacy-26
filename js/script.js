var btn3 = document.querySelector("#btn3");
var btn2 = document.querySelector("#btn2");
var btn1 = document.querySelector("#btn1");
var sliderWrapper = document.querySelector(".slider-wrapper");
btn1.addEventListener("click", function(event) { 
    sliderWrapper.style.transform = "translateX(0)";
    btn1.classList.add("active"); 
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    document.body.classList.remove("blue");
    document.body.classList.remove("brown");
    document.body.classList.add("green");
 });
 btn2.addEventListener("click", function(event) { 
     sliderWrapper.style.transform = "translateX(-1146px)";
     btn1.classList.remove("active"); 
    btn2.classList.add("active");
    btn3.classList.remove("active");
    document.body.classList.remove("green");
    document.body.classList.remove("brown");
    document.body.classList.add("blue");
  });
 btn3.addEventListener("click", function(event) { 
     sliderWrapper.style.transform = "translateX(-2292px)";
     btn1.classList.remove("active"); 
    btn2.classList.remove("active");
    btn3.classList.add("active");
    document.body.classList.remove("blue");
    document.body.classList.remove("green");
    document.body.classList.add("brown");
  });