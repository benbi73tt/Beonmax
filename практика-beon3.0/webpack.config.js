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

    devtool: "source-map", //исходники и месторасположения кода
    module: {
        rules: [{ //правила для модулей
            test: /\.js$/, //берем файлы с окончаниями js
            exclude: /(node_modules|bower_components)/, //откуда берем какой то плагин
            use: { //как именно нужно использовать плагины
                loader: 'babel-loader?optional[]=runtime',
                options: { //настройки babel-loader
                    presets: [ //чтобы найти мы можем перейти в документацию babel (preset-env) и выбрать настройку браузера
                        ["@babel/env", {
                            targets: { //браузеры которые мы хотим поддерживать в нашем проекте!
                                edge: "17", //название: версия
                                firefox: "60",
                                chrome: "67",
                                safari: "11.1",
                                ie: "11"
                            }
                        }]
                    ],
                    plugins: ["es6-promise"]
                }
            }
        }]
    }
};