(function(context) {
  var projets = document.querySelector('.projets');
  var liensProjets = document.querySelectorAll('.menuprojets li');
  Array.from(liensProjets).forEach(function (lien) {
    lien.addEventListener('click', function() {
      var id = lien.getAttribute('id').replace('-l', '-v');
      var vignette = document.getElementById(id);
      vignette.dispatchEvent(new Event('click'));
    });
  });
  var ensemble = document.querySelector('.ensemble');
  var lien_menu = document.querySelector('.menu-lien');
  lien_menu.addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('ouvert');
  });
  var deux = document.querySelector('.deux');
  var un = document.querySelector('.un');

  var quatre = document.querySelector('.quatre');
  var trois = document.querySelector('.trois');

  var left = document.querySelector('#left');
  var right = document.querySelector('#right');
  var vignettes = document.querySelectorAll('.vignettes .bloc');
  var details = document.querySelectorAll('.details .bloc');

  if(projets !== null) {
   projets.addEventListener('click', function() {
   ensemble.classList.toggle('open');
   un.classList.remove('open');
   trois.classList.remove('open');
   });
 }

 if(deux !== null) {
  deux.addEventListener('click', function() {
  un.classList.toggle('open');
  trois.classList.remove('open');
  ensemble.classList.remove('open');

  });
}

if(quatre !== null) {
 quatre.addEventListener('click', function() {
 trois.classList.toggle('open');
 ensemble.classList.remove('open');
 un.classList.remove('open');

 });
}
