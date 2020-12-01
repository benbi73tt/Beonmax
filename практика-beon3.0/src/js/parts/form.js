function form() {
    let message = {
        loading: "Загрузка",
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status'); //css style

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //отменить стандартное поведение браузера
        //(чтобы страница не перезагружалась)
        form.appendChild(statusMessage);


        let request = new XMLHttpRequest();
        request.open('POST', 'server.php'); //для отправки на сервер
        request.setRequestHeader('Content-type',
            'application/json; charset=utf-8'); //???????????????????СЕРВЕР


        let formData = new FormData(form);


        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json); //send - открывает запрос(отправляет на сервер)

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
}
module.exports = form;