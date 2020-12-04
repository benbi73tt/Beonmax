describe("ТАЙМЕР", function() {
    it("Функция возвращает объект", function() {
        assert.typeOf(getTimeRemaining(), 'object')
    })
    it('Устанавливем таймер обратного отсчёта', function() {
        assert.typeOf(setClock('timer', deadline), 'string');
    })

    describe("Общая сумма", function() {
        it('Иначально равен 0', function() {
            assert.equal(total, 0);
        })
    })
})