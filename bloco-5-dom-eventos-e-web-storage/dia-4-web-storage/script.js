window.onload = function () {
  let select = document.querySelector('#background-color');
  select.addEventListener('change', function () {
    document.body.style.backgroundColor = select.value;

    localStorage.setItem('background-color', select.value)
  })

  let background = localStorage.getItem('background-color')
  document.body.style.backgroundColor = background;
}