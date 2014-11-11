window.onload = function() {
  var $button, $nav;
  $button = document.querySelector('.nav-button');
  $nav = document.querySelector('nav');
  $button.onclick = function() {
    return $nav.style.display = $nav.style.display === 'table' ? 'none' : 'table';
  };
  return $nav.onclick = function() {
    return $nav.style.display = 'none';
  };
};
