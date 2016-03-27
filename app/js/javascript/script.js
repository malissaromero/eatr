$(document).ready(function(){

  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  var menuIcon = document.querySelector('.menu-icons');
  var menu = menuIcon.parentElement;
  menuIcon.addEventListener('click', function(event){
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    } else {
      menu.classList.add('open');
    }
  });
});
