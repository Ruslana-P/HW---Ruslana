let divFigure = document.querySelector('.figure');
let initialClass = divFigure.getAttribute('class');



document.querySelectorAll('input[name="select_figure"]').forEach( (elem) =>{
    elem.addEventListener('change', function (event){
        let newClass = event.target.value;
        //console.log(newClass);

        divFigure.setAttribute('class', initialClass + ' ' + newClass);
    } )
    }
)

let buttonColor = document.querySelector('#button_color');
buttonColor.addEventListener( 'click', function () {
document.querySelectorAll('input[name="choose_color"]').forEach( function (element) {
    let newColor
    if (element.checked) {
        newColor = element.value;
        }
    divFigure.style.backgroundColor = newColor;
    }
)})