'use strict';

//ANCHOR 2.5 Работа с Git и с сервисом GitHub
//git init - инициирования репозитория
//git config --global user.name "Anton"
//git config --global user.email bur2000_2010@mail.ru
//! Установить глобально(global) для всех будущих проектов, локал(local) для каких то отдельных
//git status файлы за которыми следит git
//git add -A для добавления в git новых файлов
//git add КОНКРЕТНЫЙ файл(main.css)
//git commit -a -m"first commit"   m-это комментарий
//git log для просмотра коммитов(commits)
//git remote add название https://github.com/benbi73tt/НАЗВАНИЕ.git для создания внешнего репозитория(github)
//git push -u Название Ветка ----для пуша в репозиторий (-u нужна чтобы по умолчанию всё сохранялось в заданное место)


//ANCHOR 2.6 Работа на 2 компьютерах
//git pull для копирования с глобального репозиторий на наш пк
//! Если забыли прописать pull перед работой на другом компьютере
//Нужно даже после кода прописать pull, в консоли прописать описание
//Тогда наши проекты сливаются, получается MERGE между новой и старой версии
//после пишем описание и нажимаем ctrl+c(2 раза)
//После пишем ':wq!' и нажать enter

//?Не забываем про файл .gitignore с модулями, которые весят очень много

//Создать новую ветку git checkout название
//Лучшая программа для гита графа и работы с репозиториями это KRAKEN









// if (2 * 4 == 7) {
//     console.log("true");
// } else
//     console.log("false");

let num = 50;
// if (num > 60)
//     console.log("много");
// else if (num < 60)
//     console.log('мало');
// else
//     console.log('Идеально');


// (num == 50) ? console.log('yes'): console.log('no'); //тернарный оператор


// switch (num) {
//     case 60:
//         console.log('perfect');
//         break;
//     case 58:
//         console.log('мало');
//         break;
//     case 57:
//         console.log('много');
//         break;
//     default:
//         console.log('ошибка');
//         break;
// }


//ANCHOR 
// while (num < 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// for (let i = 1; i < num; i *= 2) {
//     if (i == 4) {
//         continue;
//     }
//     if (i == 32) {
//         break;
//     }
//     console.log(i);
// }