$(function() {
    $(document).scroll(function() {
        var $nav = $(".nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

var menu = document.getElementById("bar");
var item = document.getElementById("navbarOne");

item.style.right = '-360px';
menu.onclick = function() {
    /* body... */
    if (item.style.right == '-360px') {
        item.style.right = '0';
        item.style.transition = 'all 0.5s ease';
    } else {
        item.style.right = '-360px';
    }
}


$(document).ready(function(){


  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
    }
  });


  



});

/*var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });*/

// Cache out buttons container, and all of the panels
/*const buttons = document.querySelector('.buttons');
const panels = document.querySelectorAll('.panel');

// Add an event listener to the buttons container
buttons.addEventListener('click', handleClick);

// When a child element of `buttons` is clicked
function handleClick(e) {
 
  // Check to see if its a button
  if (e.target.matches('button')) {

    // For every element in the `panels` node list use `classList`
    // to remove the show class
    panels.forEach(panel => panel.classList.remove('show'));

    // "Destructure" the `id` from the button's data set
    const { id } = e.target.dataset;

    // Create a selector that will match the corresponding
    // panel with that id. We're using a template string to
    // help form the selector. Basically it says find me an element
    // with a "panel" class which also has an id that matches the id of
    // the button's data attribute which we just retrieved.
    const selector = `.panel[id="${id}"]`;

    // Select the `div` and, using classList, again add the
    // show class
    document.querySelector(selector).classList.add('show');
  }
}*/





/*FAQs Section */
