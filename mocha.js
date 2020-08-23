"use strict";
// describe("pow", function () {
//     describe("Возводит x в степень 3", function () {
//         function CheckPow(x) {
//             let pow3 = x * x * x;
//             it(`${x} возводит в степень 3 = ${pow3}`, function () {
//                 assert.equal(pow(x, 3), pow3);
//             });
//         }
//         for (let i = 1; i < 6; i++) {
//             CheckPow(i);
//         }
//     });
// });

// !можно добавить befor / after(перед всеми тестами!и после всех тестов) и!beforeEach / afteEach(после / перед каждым тестом)
// REVIEW
// describe("тест", function () {
//     before(() => alert('Тестирование началось'));
//     after(() => alert('Тестирование закончилось'));
// });

// describe("pow", function () {
//     it('Для отрицательных n возвращает NaN', function () {
//         assert.isNaN(pow(2, -1));
//     });
//     it('Для дробных n возвращает NaN', function () {
//         assert.isNaN(pow(2, 1.5));
//     });
// });
// !ДРУГИЕ ФУНКЦИИ блиблиотеки CHAI
// assert.eqaul(value1, value2) - равенство value( == );
// ...strictEqual(val1, val2) - строгое равенство( === );
// ...notEqual(val1, val2) - неравенство;
// ...notStrictEqual(val1, val2) - строгое неравенство;
// ...isTrue(value) - val == true;
// ...isFalse(value) - val == false;
// ...И МНОГОИЕ ДРУГИЕ В "ДОКУМЕНТАЦИИ"

// describe("multyNumeric", function () {
//     it('Умножаем всё на 2', function () {
//         let menu = {
//             width: 200,
//             height: 600,
//             title: 'my title',
//         };
//         let result = multyNumeric(menu);
//         assert.equal(menu.width, 400);
//         assert.equal(menu.height, 1200);
//         assert.equal(menu.title, 'my title');
//     });
// });