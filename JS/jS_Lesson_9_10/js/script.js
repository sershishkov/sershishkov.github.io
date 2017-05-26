'use strict';
$(function () {
    // Создаем карусель при помоши плагина
    $("a.grouped_elements").fancybox();
    ////////////////////////////////////////////////////

    // Создаем селект
    $(function () {
    var listTowns = ['Винницкая', 'Волынская', 'Днепропетровская', 'Донецкая', 'Житомирская', 'Закарпатская', 'Запорожская', 'Ивано-Франковская', 'Киевская', 'Кировоградская', 'Луганская', 'Львовская', 'Николаевская', 'Одесская', 'Полтавская', 'Ровненская', 'Сумская', 'Тернопольская', 'Харьковская', 'Херсонская', 'Хмельницкая', 'Черкасская', 'Черниговская', 'Черновицкая'];
    var $mySelect = $('<select>').addClass('my_select_box chosen-select chosen-rtl').attr({'name':"towns", 'id':"selectTowns",'multiple':"multiple",'data-placeholder':"Выбери область"});
    var max = listTowns.length;
    var $myOption;
    for (var i = 0 ; i < max ;i++){
        $myOption = $('<option>').attr('value',listTowns[i]);
        $myOption.append(document.createTextNode(listTowns[i]));
        $mySelect.append($myOption);
    }

    var divRow2 = $('.row2');
        divRow2.append($mySelect);
    $(".chosen-select").chosen();
    });
/////////////////////////////////////////////////////////////////////////
//     Создаем чекбокс плагином
    $(function () {
        $('.labelChJQ input').iCheck();
    });



});
