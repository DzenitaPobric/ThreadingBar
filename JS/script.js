 var mybutton = document.getElementById("myBtn");
        
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;

 }

 function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
 
  
}


var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

function w3_close() {
    mySidebar.style.display = "none";
}



$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});



function aos_init() {
  AOS.init({
    duration: 600,
    once: true
  });
}
$(window).on('load', function() {
  aos_init();
});



$(document).ready(function(){
  $("#dropdown").click(function(){
    $("#dropdown-content").toggle();
  });
});

$(document).ready(function(){
  $("#dropdown2").click(function(){
    $("#dropdown-content2").toggle();
  });
});