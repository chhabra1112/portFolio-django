// ------- PRELOADER -------//
$(window).load(function(){
    $('.preloader').fadeOut("slow"); // set duration in brackets    
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

   // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // --------- PORTFOLIO IMAGE ----- //
  $('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

});
// const button = document.getElementById('submit');
// button.addEventListener('click',handleform)

// function handleform(e){
//   e.preventDefault();
//   try {
//     let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let message = document.getElementById('message').value;
  
//   let newMessage = {
//     "name":name,
//     "email":email,
//     "message":message,
//   }
//   console.log(newMessage);
//   body = `Name - ${name}\n${message}`
//   window.open(`mailto:piyushchhabra.1198@gmail.com?subject=subject&body=${body}`);
//   } catch (error) {
//     console.log(error);
//   }
  
  
// }

