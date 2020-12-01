let myModule = require('./script'); //принимаем то, что экспортировалось из того файла



let newModule = new myModule();

console.log(newModule.hello());
console.log(newModule.goodbye());