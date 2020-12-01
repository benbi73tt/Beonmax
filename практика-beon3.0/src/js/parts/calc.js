function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.querySelector('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum * personsSum) * 4000;

        if (persons.value == '' && persons.value == 0 && daysSum == 0) { //если второй инпут не заполнен,результат должен быть равен 0
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    restDays.addEventListener('change', function() {
        daysSum = +this.value; //нельзя использоваться ()=> из-за this
        total = (daysSum * personsSum) * 4000;

        if (persons.value == '' && persons.value == 0 && daysSum == 0) { //если первый инпут не заполнен,результат должен быть равен 0
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' && persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value; //Для обращения к определенному выбранному value
        }
    });

}
module.exports = calc;