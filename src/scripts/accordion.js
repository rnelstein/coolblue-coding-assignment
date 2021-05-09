var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    hideAll();

    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

function hideAll() {
  for (i = 0; i < acc.length; i++) {
    acc[i].classList.toggle('active', false);
    acc[i].nextElementSibling.style.display = 'none';
  }
}
