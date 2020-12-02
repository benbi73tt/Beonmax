require('es6-promise').polyfill(); //перевод ES6
require('nodelist-foreach-polyfill'); //или import 'nodelist-foreach-polyfill';//перевод forEach
require('formdata-polyfill') // формы


window.addEventListener('DOMContentLoaded', function() { //событие срабатывает, когда полностью прогрузился DOM дерево;
    'use strict';
    const calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js');


    calc();
    form();
    modal();
    slider();
    tabs();
    timer();

});