const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#000101";
    document.body.style.color = "#fefeff";
  } else {
    document.body.style.background = "#dfdfe6";
    document.body.style.color = "#000101";
}
  
  
});
scroll.on("scroll", () => {
  if (document.querySelector("#color2.is-inview")) {
    document.body.style.background = "#efdebe";
    document.body.style.color = "#000101";
  } 
  if (document.querySelector("#color3.is-inview")) {
    document.body.style.background = "#d6a9a9";
    
  } 
  if (document.querySelector("#color4.is-inview")) {
    document.body.style.background = "#f3a366";
    
  } 
  

});
/* scroll.on("scroll", () => {
  
  
}); */
