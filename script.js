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

  var vignettesLeft = document.querySelectorAll('#left .vignettes .bloc');
  var detailsLeft = document.querySelectorAll('#left .details .bloc');

  var vignettesRight = document.querySelectorAll('#right .vignettes .bloc');
  var detailsRight = document.querySelectorAll('#right .details .bloc');

  var hideDetails = function hideDetails(d) {
    Array.from(d).forEach(function(detail) {
      detail.classList.add('hidden');
    });
  };

  var getDetailsForVignette = function getDetailsForVignette(vignette) {
    var name = vignette.getAttribute('id').split('-')[1];
    return document.querySelector('#p-' + name + '-d');
  };

  var getVignetteForDetails = function getVignetteForDetails(detail) {
    var name = detail.getAttribute('id').split('-')[1];
    return document.querySelector('#p-' + name + '-v');
  };

  var hideOtherVignettes = function hideOtherVignettes(vignette) {
    Array.from(vignettes).forEach(function(v) {
      if (v.getAttribute('id') !== vignette.getAttribute('id')) {
        v.classList.add('hidden');
        v.classList.remove('ouvert');

      } else {
        v.classList.remove('hidden');
        v.classList.add('ouvert');
      }
    });
  };

  var hideOtherDetails = function hideOtherDetails(detail) {
    Array.from(details).forEach(function(d) {
      if (d.getAttribute('id') !== detail.getAttribute('id')) {
        d.classList.add('hidden');
        d.classList.remove('ouvert');
      } else {
        d.classList.remove('hidden');
        d.classList.add('ouvert');
      }
    });
  };

  var showEverything = function showEverything() {
    var hidden = document.querySelectorAll('.hidden');
    Array.from(hidden).forEach(function(h) {
      h.classList.remove('hidden');
    });
  };

  Array.from(vignettes).forEach(function(vignette) {
    vignette.addEventListener('click', function(e) {
      if (vignette.classList.contains('ouvert')) {
        showEverything();
        hideDetails(details);
      } else {
        hideOtherVignettes(vignette);
        hideOtherDetails(getDetailsForVignette(vignette));
      }
      vignette.classList.toggle('ouvert');
    });
  });

  hideDetails(details);
})(this);
