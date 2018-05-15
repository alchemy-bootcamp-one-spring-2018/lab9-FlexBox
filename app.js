/* exported check */
'use strict';

let form = document.getElementById('recipe');
for(let i = 0; i <= 11; i++) {
    let lbl = document.getElementById('lab' + (i + 1));
    let temp = form[i];
    temp.onclick = function() {
        if(!form[i].checked){
            lbl.style.textDecoration = 'none';
        } else {
            lbl.style.textDecoration = 'line-through';
        }
    };
}

// DOESN'T WORK DON'T KNOW WHY
// function chck(el, num) {
//     console.log('TEST');
//     let lbl = document.getElementById('lab' + num);
//     if(!el.checked){
//         lbl.style.textDecoration = 'none';
//     } else {
//         lbl.style.textDecoration = 'line-through';
//     }
// }