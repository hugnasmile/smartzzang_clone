function openNav() {
  document.getElementById("mobileNav").style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mobileNav").style.width = "0%";
  document.body.style.overflow = "initial";
}
  
var acc = document.getElementsByClassName("accordion");
    
for (var i = 0; i < acc.length; i++) {   
      acc[i].onclick = function() {	 
         for (var j = 0 ; j<acc.length; j++){
             acc[j].classList.remove("active");
             if (this!==acc[j]) {
                 acc[j].nextElementSibling.style.maxHeight = null;
             }
         }

        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            this.classList.remove("active");
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
 
      }
}

  $('.slider').slick({
    dots: false, 
    autoplay: true, 
    autoplaySpeed:3000,
    arrows: false, 
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay : { 
    delay : 3000},   
    breakpoints : { 
    920 : {
    slidesPerView : 4,
    },
    },
    });

  var swiper2 = new Swiper(".banner-swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay : {  
    delay : 4000},   
    loop : true,
    });


