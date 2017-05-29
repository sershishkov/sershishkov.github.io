'use strict';
//карусель плагин в slider.js
$(function () {
$('.containerCorousel').mySliderPlugin();
//////////////////////////////////////////////////////////////
    //Шаблон Ризига
    var articles =[
        {
            name:'Михаил',
        lastName:'Лермонтов',
            age:'21',
            content:'Творчество Лермонтова, в котором сочетаются гражданские, философские и личные мотивы, отвечавшие насущным потребностям духовной жизни русского общества, ознаменовало собой новый расцвет русской литературы и оказало большое влияние на виднейших русских писателей и поэтов XIX и XX веков. Произведения Лермонтова получили большой отклик в живописи, театре, кинематографе. Его стихи стали подлинным кладезем для оперного, симфонического и романсового творчества, а многие из них стали народными песнями'
    },
        {
            name:'Александр',
            lastName:'Пушкин',
            age:'22',
            content:'Александр Сергеевич Пушкин родился 26 мая 1799 года в Москве в дворянской помещичьей семье (отец его был майор в отставке) в день праздника Вознесения. ... Отец Пушкина Сергей Львович и мать Надежда Осиповна, урожденная Ганнибал, были дальними родственниками.'
        },
        {
            name:'Тарас',
            lastName:'Шевченко',
            age:'23',
            content:'Шевче́нко (укр. Тара́с Григо́рович Шевче́нко; 25 февраля (9 марта) 1814, село Моринцы, Звенигородский уезд Киевской губернии, Российская империя (ныне Черкасская область, Украина) — 26 февраля (10 марта) 1861, Санкт-Петербург, Российская империя) — украинский поэт.'
        }
    ];
var html = $('#test').html();
 var content = tmpl(html , {data:articles});
 $('.wrapTemplate').append(content);
 /////////////////////////////////////////////////////////////
    //Шаблон Lodash
    var products =[
        {
            title:'Фрукты',
            items:['','Апельсин','Банан','Виноград','Груша','Яблоки']

        },
        {
            title:'Мясо',
            items:['','Говядина','Баранина','Свинина','Курица']
        },
        {
            title:'Напитки',
            items:['','Сок','Компот','Кисель']
        }
    ];

    var compil = _.template($('#testLd').html());
    var contentLd = compil({'ldata':products});
    $('.wrapTemplateLd').append(contentLd);

});

























































// $(function () {
    // Создаем многоуровневое меню
//     function createListUl (guantityLi,namberSub,startInnerText,levelMenu){
//         var gT=+guantityLi;
//         var nS=+namberSub;
//         var sIt=startInnerText;
//         var levelM=+levelMenu;
//         var $tempUl = $('<ul>');
//         var $tempLi;
//         var tempInner;
//         var tempClassNameLi;
//         var tempClassNameUl;
//         var tempA;
//         for (var i=0;i<gT;i++){
//             tempA=$('<a>');
//             tempInner = sIt+'.'+i;
//             tempA.append(document.createTextNode(tempInner)).attr('href','#');
//             $tempLi= $('<li>');
//
//             if ( i===(nS-1)){
//                 tempClassNameLi ='with_sub_menu'+levelM;
//                 $tempLi.addClass(tempClassNameLi);
//             }
//             $tempLi.append(tempA);
//             $tempUl.append($tempLi);
//
//         }
//         tempClassNameUl='menu'+levelM;
//         $tempUl.addClass(tempClassNameUl);
//         return $tempUl;
//     }
//
//
// var ul0=createListUl(5,8,'Item №0',0);
// var ul1=createListUl(5,3,'Item №1',1);
// var ul2=createListUl(5,3,'Item №2',2);
// var ul3=createListUl(5,8,'Item №3',3);

// var liWithMenu0=$('.with_sub_menu0');
// var liWithMenu1=$('.with_sub_menu1');
// var liWithMenu2=$('.with_sub_menu2');
//
// liWithMenu0.append(ul1);
// liWithMenu1.append(ul2);
// liWithMenu2.append(ul3);


//     var $divWrapMenu = $(".wrapMenu ");
//     var $myH1=$('<h1>');
//         $myH1.append(document.createTextNode('Многоуровневое меню'));
// var $myNav = $('<nav>').addClass('myNav');
//
// $myNav.append(ul0);
//
//
// $divWrapMenu.append($myNav);
//     var hhh=document.createElement('h1');
//     hhh.innerHTML=';lkj;lkj;lkj;lk';
//     $('.wrapMenu').appendChild(hhh);



//});
