'use strict';
$(function () {
    var animals = {
        kindsOf: [
                {
                    name: 'Слоны',
                    description: "Самые крупные наземные животные, обитающие на Земле."+
                    "Обитают они в Юго-Восточной Азии и Африке в тропических лесах и саваннах."+
                    "В центре стопы слона есть жировая подушка, которая каждый раз, когда слон"+
                    "опускает ногу, «расплющивается», увеличивая площадь опоры. У слонов либо 2 "+
                    "бивня в верхней челюсти, либо нет бивней вообще. Чтобы защититься от парази"+
                    "тов, слоны нередко обливаются грязью. Засохшая грязевая корочка служит хорош"+
                    "ей защитой от насекомых."+"Характерным органом слона является хобот, образованный из носа и верхней губы. Расположенные на конце хобота ноздри служат органом обоняния; хобот служит органом хватания, позволяя слону подбирать мелкие предметы с земли и срывать плоды с высоко расположенных веток; при питье слон набирает воду в хобот, а затем выливает в рот."
                },
                {
                    name: 'Львы',
                    description: "Лев[1] (лат. Panthera leo) — вид хищных млекопитающих, один из четырёх"+
                    "представителей рода пантер (Panthera), относящегося к подсемейству больших кошек (Pant"+
                    "herinae) в составе семейства кошачьих (Felidae). Является наряду с тигром самой крупной "+
                    "из ныне живущих кошек — масса некоторых самцов может достигать 250 кг[2]. Трудно сказать"+
                    "достоверно, являются ли крупнейшие подвиды льва более или менее массивными, чем крупнейшие"+
                    "подвиды тигров. Связанно это с тем, что исторические очень крупные веса амурских тигров в бо"+
                    "льшинстве своем признаны недостаточно достоверными[3]. Достаточными данными о размерах и "+
                    "массе представителей крупнейших подвидов льва (например, барбарийском) наука не располагает."+
                    "Что касается живущих в неволе животных, то они часто являют собой смешение разных подвидо"+
                    "в. Существует мнение, что львы в неволе несколько превышают тигров в размерах и массе[4], та"+
                    "кже, как и обратное."+"Исторический ареал льва был значительно шире современного: ещё в "+
                    "раннем средневековье лев встречался на всей территории Африки, кроме пустынь и тропических"+
                    "лесов, также его можно было увидеть на Ближнем Востоке, Иране и даже в ряде мест южной Европы"+
                    "(к примеру, он обитал на части территории современного юга России, поднимаясь примерно до"+
                    "45-й северной параллели). В Северной и Северо-Западной Индии лев был обычным хищником. "+
                    "Однако преследование со стороны человека и разрушение среды обитания привели к тому, что в "+
                    "Африке лев сохранился только к югу от Сахары, его ареал в настоящее время сильно сократился. "+
                    "В Азии небольшая популяция существует в Гирском лесу (в индийском штате Гуджарат)."
                },
                {
                    name: 'Жирафы',
                    description: "Самцы жирафа достигают высоты до 5,5—6,1 м"
                }
            ]
    };
//создаем элементы ДОМа
    var $divContainer = $('<div>').addClass('container');
    var $divRow1 = $('<div>').addClass('row');
    var $wrapMenu = $('<div>').addClass('wrapMenu');
    var $header = $('<header>').addClass('header');
    var $ul = $('<ul>').addClass('myMenu');
//создаем li
    for (var key in animals.kindsOf){
        var $li=$('<li>').addClass('myLi notice');
        $li.text(animals.kindsOf[key].name);
        $ul.append($li);
    }
    var $article = $('<article>').addClass('article');
    var $p = $('<p>').addClass('p');
    var myText= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid architecto aspernatur delectus dicta ex facilis iusto minus molestias natus, non obcaecati provident, quae quam quia quod reiciendis sequi temporibus!';
        $p.text(myText);
        $divContainer.append($divRow1);
        $divRow1.append($wrapMenu);
        $wrapMenu.append($header);
        $wrapMenu.append($article);
        $header.append($ul);
        $article.append($p);
        $('body').append($divContainer);

//оздаем обрабочик клика
    $('li').on('click',function () {
        var max=animals.kindsOf.length;
        for (var i=0;i<max;i++){
            $('li')[i].setAttribute('class','notice');
        }
        $(this).toggleClass('active notice');
        for (var key in animals.kindsOf) {
            if (animals.kindsOf[key].name === $(this).text()) {
             $('p').text(animals.kindsOf[key].description);
            }
        }

        return false;
    });
    //////////////////////////////////////////////////////////////////////////////////////////////
var myForm = {
    data:[
        {
            myInput:{
                myId:'firstName',
                myType:"text",
                myPlaceholder:'Введите Ваше имя'
            },
            myLabel:{
                myText:'Ваше имя  '
            }
        },
        {
            myInput:{
                myId:'lastName',
                myType:"text",
                myPlaceholder:'Введите Ваше фамилию'
            },
            myLabel:{
                myText:'Ваша фамилия  '
            }
        },
        {
            myInput:{
                myId:'myEmail',
                myType:"text",
                myPlaceholder:'Введите Вашу почту'
            },
            myLabel:{
                myText:'Ваша почта  '
            }
        }
    ]
};

    //создаем форму
    var $divRow2 = $('<div>').addClass('row wrapForm');

for (var key in myForm.data){
    var $input= $('<input>').attr({'for':myForm.data[key].myInput.myId, 'type':myForm.data[key].myInput.myType,'placeholder':myForm.data[key].myInput.myPlaceholder});
    var $label= $('<label>').attr({'id':myForm.data[key].myInput.myId});
    var $divTip =$('<div>').addClass('myTip');
        $divTip.text(myForm.data[key].myInput.myPlaceholder);
        $label.text(myForm.data[key].myLabel.myText);
    var $divInput = $('<div>').addClass('wrapInput');
        $divInput.append($label);
        $divInput.append($input);
        $divInput.append($divTip);
        $divRow2.append($divInput);
}
////////////////////////////////////////////////////////////////////////
    var $myTip
    var $wrapBtn = $('<div>').addClass('wrapBtn');
    var $button = $('<button>').addClass('btn btn-default');
        $button.text('Show Help');
        $wrapBtn.append($button);
        $divRow2.append($wrapBtn);
        $divContainer.append($divRow2);
    /// обрабатываем событе hover на input
    $('input').hover(function () {
        $(this).css('cursor','pointer');
        var $parent = $(this).parent();
            $myTip = $parent.find('.myTip');
            $myTip.animate({'opacity':'1'},2000);
        return false;
        }, function () {
            $myTip.animate({'opacity':'0'},2000);
        return false;
        }
    );
    var $allTips =$($divRow2).find('.myTip');
    $($button).on('click', function(){
        if($(this).text()==='Show Help'){
            $allTips.animate({'opacity':'1'},400);
            $(this).text('Hide help');
        }else {
            $allTips.animate({'opacity':'0'},400);
            $(this).text('Show Help');
        }
        return false;
    });
});
