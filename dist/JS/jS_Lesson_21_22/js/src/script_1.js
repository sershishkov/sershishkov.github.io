'use strict';

$(function () {
    //объект для единственного  выбора ответа
    var testOne = {
        data: {
            title: 'Тест по программированию',
            questions: [{
                title: 'Семь умножить на восемь',
                answers: [{ name: 'Вариант ответа 33 ', flag: false }, { name: 'Вариант ответа 44 ', flag: false }, { name: 'Вариант ответа 56 ', flag: true }, { name: 'Вариант ответа 99 ', flag: false }, { name: 'Вариант ответа 54 ', flag: false }]
            }, {
                title: 'Шесть умножить на восемь',
                answers: [{ name: 'Вариант ответа 33 ', flag: false }, { name: 'Вариант ответа 37 ', flag: false }, { name: 'Вариант ответа 40 ', flag: false }, { name: 'Вариант ответа 44 ', flag: false }, { name: 'Вариант ответа 48 ', flag: true }]
            }, {
                title: 'Сто поделить на 20',
                answers: [{ name: 'Вариант ответа 2 ', flag: false }, { name: 'Вариант ответа 3 ', flag: false }, { name: 'Вариант ответа 5 ', flag: true }, { name: 'Вариант ответа 7 ', flag: false }, { name: 'Вариант ответа 9 ', flag: false }]

            }, {
                title: 'Двенадцать в квадрате',
                answers: [{ name: 'Вариант ответа 101 ', flag: false }, { name: 'Вариант ответа 115 ', flag: false }, { name: 'Вариант ответа 144 ', flag: true }, { name: 'Вариант ответа 151 ', flag: false }, { name: 'Вариант ответа 308 ', flag: false }]

            }]
        }
    };
    //объект для множественного выбора ответа
    var testMulti = {
        data: {
            title: 'Тест по географии',
            questions: [{
                title: 'Флаг Украины состоит из ...цветов',
                answers: [{ name: ' 5 ', flag: false }, { name: ' 4 ', flag: false }, { name: ' 2 ', flag: true }, { name: ' 8 ', flag: false }, { name: ' 9 ', flag: false }]
            }, {
                title: 'Какого цвета флаг Украины',
                answers: [{ name: ' Зеленый ', flag: false }, { name: ' Голубой ', flag: true }, { name: ' Красный', flag: false }, { name: ' Белый ', flag: false }, { name: ' Желтый ', flag: true }]
            }, {
                title: 'Где находится Украина',
                answers: [{ name: ' в Европе', flag: true }, { name: ' в Америке ', flag: false }, { name: ' в Евразии ', flag: true }, { name: ' в Африке ', flag: false }, { name: 'Рядом с Польшей ', flag: true }]

            }, {
                title: 'Столица Украины',
                answers: [{ name: ' Жмеренка ', flag: false }, { name: ' Киев', flag: true }, { name: ' Харьков ', flag: false }, { name: ' Чернигов', flag: false }, { name: ' Бердичев ', flag: false }]

            }]
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////
    //сериализуем обьекты
    var serialOne = JSON.stringify(testOne);
    var serialMul = JSON.stringify(testMulti);
    //запишем его в хранилище по ключам "myKeyOne" и "myKeyMul"
    localStorage.setItem("myKeyOne", serialOne);
    localStorage.setItem("myKeyMul", serialMul);
    //спарсим их обратно в объекты
    var returnOne = JSON.parse(localStorage.getItem("myKeyOne"));
    var returnMul = JSON.parse(localStorage.getItem("myKeyMul"));
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //Шаблонизация радио
    var compilOne = _.template($('#testO').html());
    var contentOne = compilOne({ 'ldata': returnOne });
    $('.wrapOne').append(contentOne);

    /////////////////////////////////////////////////////////////////////////////////////
    //Обработка кнопки радио
    var buttExamOne = $('.container').find('#myButtOne');
    var wrapModal = document.getElementById('wrapModal');
    var h1Modal = document.getElementById('rightAns');

    buttExamOne.on('click', function () {
        var inputExamed = $('.container').find('.inputRadio');
        var totalTrue = 0;
        var checkedTrue = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = inputExamed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                var answerTrue = item.getAttribute('value');

                if (answerTrue === 'true') {
                    totalTrue++;
                }
                if ($(item).is(':checked') && answerTrue === 'true') {
                    checkedTrue++;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        h1Modal.innerText = 'Вы выбрали: ' + checkedTrue + ' из ' + totalTrue + ' правилных ответов';
        wrapModal.setAttribute('class', 'wrapModalShow');
    });
    ////////////////////////////////////////////////////////////////////////////////
    //Шаблонизация чекбоксов
    var compilMul = _.template($('#testMulti').html());
    var contentMul = compilMul({ 'Mdata': returnMul });
    $('.wrapMulti').append(contentMul);
    /////////////////////////////////////////////////////////////////////////////
    //обработка кнопки чекбокса
    var buttExamMul = $('.container').find('#myButtMulti');
    buttExamMul.on('click', function () {
        var inputExamedM = $('.container').find('.inputCheck');
        var totalTrueM = 0;
        var checkedFalseM = 0;
        var checkedTrueM = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = inputExamedM[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var itemM = _step2.value;

                var answerTrueM = itemM.getAttribute('value');
                if (answerTrueM === 'true') {
                    totalTrueM++;
                }
                if ($(itemM).is(':checked') && answerTrueM === 'true') {
                    checkedTrueM++;
                }
                if ($(itemM).is(':checked') && answerTrueM === 'false') {
                    checkedFalseM++;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        h1Modal.innerText = 'Вы выбрали: ' + checkedTrueM + ' из ' + totalTrueM + ' правилных ответов ' + ' ,неправилных ответов: ' + checkedFalseM;
        wrapModal.setAttribute('class', 'wrapModalShow');
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Обработка кнопки модального окна
    var butModal = document.getElementById('butModal');
    butModal.addEventListener('click', function () {
        wrapModal.setAttribute('class', 'wrapModalHide');
        //находим все чекбоксы
        var tempRadio = document.getElementsByClassName('inputRadio');
        var tempChek = document.getElementsByClassName('inputCheck');
        //обнуляем все чекбоксы
        _.forEach(tempRadio, function (item) {
            item.checked = false;
        });
        _.forEach(tempChek, function (item2) {
            item2.checked = false;
        });
    });
});
//# sourceMappingURL=script_1.js.map