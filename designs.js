  
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code is here!

// function doSomething (arg1) {
//     // alert('do something butt');
//     let sizepick = document.getElementById('sizePicker');
//     sizePicker.remove();
// }

// let doSomething2 = (arg1) => {
//     let sizepick = document.getElementById('sizePicker');
//     sizePicker.remove();
// }

// let butt = document.getElementById("butt");
// butt.addEventListener("click", doSomething);

let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
makeGrid(height, width);

sizePicker.addEventListener("click", (e) => {

    e.preventDefault();

    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    table.firstElementChild.remove();

    makeGrid(height, width);

});

function makeGrid(height, width) {

    for(let x = 0; x < height; x++){
            let row = table.insertRow(x);
            for(let y = 0; y < width; y++){
                    let cell = row.insertCell(y);
                    cell.addEventListener("click", (e) => {
                        cell.style.backgroundColor = color.value;
                    })
            }
    }
    

}
