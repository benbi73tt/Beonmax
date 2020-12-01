'use strict';

let path = require('path');

module.exports = {
    mode: 'development', //режим
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js', //называние создаваемого файла
        path: __dirname + '/dist/js' //пусть конечного файла
    },
    watch: true,

    devtool: "source-map" //исходники и месторасположения кода
};