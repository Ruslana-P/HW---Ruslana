let divFigure = document.querySelector('#figure');
let selectedFigure = document.querySelector('#figures');
let buttonColor = document.querySelector('#button_color');

selectedFigure.addEventListener('change', function() {
    divFigure.setAttribute('class', selectedFigure.value);
})

buttonColor.addEventListener('click', function() {
    let selectedColor = document.querySelector('#choose_color');
    divFigure.style.backgroundColor = selectedColor.value;
})


