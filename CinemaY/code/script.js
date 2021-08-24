function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"; 
}

function openYear() {
  document.getElementById("mySelectyear").style.width = "100%";
}

function closeYear() {
  document.getElementById("mySelectyear").style.width = "0"; 
}

$( document ).ready(function() {
  $('.trigger').on('click', function() {
      $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur-it');
      return false;
  });
});