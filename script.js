$(document).ready(function(){
   $(window).scroll(function(){
       if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
       }

       if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
       }else{ 
            $('.scroll-up-btn').removeClass("show");
       }

   });

// slide-up script
    $('.scroll-up-btn').click(function(){
    $('html').scrollTop(0);
});

$('.send-mail').click(function(){
    var subject = $('#email-subject').val();
    var body = $('#email-body').val();
    window.open('mailto:viggo119@outlook.dk?subject=' + subject + '&body=' + body);
    

});

//    // owl carousel script
    $('.carousel').carousel({
         margin: 20,
         loop: true,
         autoplayTimeout: 2000,
         autoplayHoverPause: true,
         responsive: {
                0:{
               items: 1,
               nav: false
            },
                600:{
                items: 2,
                nav: false
            },
             1000:{
                items: 3,
                nav: false
            }
         }
    });

$('.carousel').carousel({
    interval: 2000
  });

// Can also be included with a regular script tag

var options ={
  strings: ['<i>Web developer</i>', 'Graphics designer', 'Streamer'],
  typeSpeed: 110,
  backspeed: 60,
  loop: true
};

var typed = new Typed('.typing-script', options);


});