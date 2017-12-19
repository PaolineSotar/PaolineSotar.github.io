(function(context) {
  var left = document.querySelector('#left');
  var right = document.querySelector('#right');
  var vignettes = document.querySelectorAll('.vignettes .bloc');
  var details = document.querySelectorAll('.details .bloc');

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
      } else {
        v.classList.remove('hidden');
      }
    });
  };

  var hideOtherDetails = function hideOtherDetails(detail) {
    Array.from(details).forEach(function(d) {
      if (d.getAttribute('id') !== detail.getAttribute('id')) {
        d.classList.add('hidden');
      } else {
        d.classList.remove('hidden');
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
