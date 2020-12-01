function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    //style css
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        //запрещает прокручить страницу при открытом модальном окне
        document.body.style.overflow = 'hidden';
    });

    //Закрыть модальное окно
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    //!Функция вызова модального окна в табах
    let BtnDescription = document.querySelectorAll('.description-btn');
    for (let i = 0; i < BtnDescription.length; i++) {
        BtnDescription[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

}
module.exports = modal;