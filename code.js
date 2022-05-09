let divFigure = document.querySelector('.figure');
let initialClass = divFigure.getAttribute('class');
let selected = document.querySelector('#figures');
let buttonColor = document.querySelector('#button_color');

selected.addEventListener('change', function() {
    divFigure.setAttribute('class', initialClass + ' ' + selected.value);
    console.log(selected.value);
})

buttonColor.addEventListener( 'click', function () {
    document.querySelectorAll('input[name="choose_color"]').forEach( function (element) {
    let newColor
    if (element.checked) {
        newColor = element.value;
        }
    divFigure.style.backgroundColor = newColor;
    }
)})


