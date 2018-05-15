'use strict';

var checkbox = document.querySelector('ul');
const asdf = document.querySelector('li');

checkbox.addEventListener('change', function() {
    console.log('event:', event);
    console.log('event target:', event.target);
    // if(this.checked) {
    //     console.log('checked');
    //     asdf.style['text-decoration'] = 'line-through';
    // } else {
    //     console.log('unchecked');
    //     asdf.style['text-decoration'] = 'none';
    // }
});