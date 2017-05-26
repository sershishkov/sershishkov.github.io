'use strict';
$(function () {
//////////////////////////////////////////////////////////////////////////////////////////
    // Создаем многоуровневое меню

    function createListUl (guantityLi,namberSub,startInnerText,levelMenu){
        var gT=+guantityLi;
        var nS=+namberSub;
        var sIt=startInnerText;
        var levelM=+levelMenu;
        var $tempUl = $('<ul>');
        var $tempLi;
        var tempInner;
        var tempClassNameLi;
        var tempClassNameUl;
        var tempA;
        for (var i=0;i<gT;i++){
            tempA=$('<a>');
            tempInner = sIt+'.'+i;
            tempA.append(document.createTextNode(tempInner)).attr('href','#');
            $tempLi= $('<li>');

            if ( i===(nS-1)){
                tempClassNameLi ='with_sub_menu'+levelM;
                $tempLi.addClass(tempClassNameLi);
                $tempLi.addClass('myClassAfter');
            }
            $tempLi.append(tempA);
            $tempUl.append($tempLi);
        }
        tempClassNameUl='menu'+levelM;
        $tempUl.addClass(tempClassNameUl);
        return $tempUl;
    }


var ul0=createListUl(5,3,'Item №0',0);
var ul1=createListUl(5,3,'Item №1',1);
var ul2=createListUl(5,3,'Item №2',2);
var ul3=createListUl(5,8,'Item №3',3);

var liWithMenu0 = ul0.find('.with_sub_menu0') ;
    liWithMenu0.append(ul1);
var liWithMenu1 = ul1.find('.with_sub_menu1') ;
    liWithMenu1.append(ul2);
var liWithMenu2 = ul2.find('.with_sub_menu2') ;
    liWithMenu2.append(ul3);

    var $divWrapMenu = $(".wrapMenu ");
    var $myH1=$('<h1>');
        $myH1.append(document.createTextNode('Многоуровневое меню'));
var $myNav = $('<nav>').addClass('myNav');

$myNav.append(ul0);
$divWrapMenu.append($myH1);
$divWrapMenu.append($myNav);


$(liWithMenu0).hover(
    function () {
        ul1.slideDown(400);
    },
    function () {
         ul1.slideUp(400);
    }
)
    $(liWithMenu1).hover(
        function () {
            ul2.slideDown(400);
        },
        function () {
            ul2.slideUp(400);
        }
    )
    $(liWithMenu2).hover(
        function () {
            ul3.slideDown(400);
        },
        function () {
            ul3.slideUp(400);
        }
    )
////////////////////////////////////////////////////////////////////////////
        //Пробы с цветом- не работают
    // var $myH2= $('<h2>').append(document.createTextNode('Проба работы с цветом'));
    //
    // $divWrapMenu.append($myH2);
    //
    // $($myH2).mouseenter(function () {
    //     $(this).animate({'background-color':'#03C'}, 500 );
    // });
    //
    //
    //
    // $($myH2).mouseleave(function() {
    //     $(this).animate({'background-color':'#0CF'}, 500 );
    // });







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
