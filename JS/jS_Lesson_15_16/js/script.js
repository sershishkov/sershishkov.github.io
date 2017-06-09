$(function () {
    //функция запроса
    function SendGet(str) {
        var strThis=str;
        var API_KEY = '5574618-9f2251e0f5fdbede0f9cb5e69';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(strThis);
        $.getJSON(URL, function(data){
            if (parseInt(data.totalHits) > 0){
                 for (var key in data.hits){
                    var  img=document.createElement('img');
                    img.setAttribute('src',data.hits[key].previewURL);
                    var link = document.createElement('a');
                    link.setAttribute('href',data.hits[key].webformatURL);
                    link.appendChild(img);
                    $('#result').append(link);
                }
            }
            else
                alert('Что то не так...');
        });
    }
    //Запрос по клику на кнопку
    var myInput = document.getElementById('text1');
    var myBut = document.getElementById('but1');
    myBut.addEventListener('click',function () {
        if(myBut.getAttribute('value')=='Поиск'){
            //alert('Что то ...');
            myBut.setAttribute('value','Очистить');
            var myStr = myInput.value;
            //alert(myStr);
            SendGet(myStr);
            myInput.value=" ";
        }else{
            myBut.setAttribute('value','Поиск');
            $('#result').html('');
        }
    });

    myInput.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            myBut.click();
        }
    });
    ////////////////////////////////////////////////////

    function test() {
            this.titleTest ='Тест по программированию';
            this.question = 'Вопрос № 1';
            this.answers = [
            {name: 'Вариант ответа № 1 ', flag: false},
            {name: 'Вариант ответа № 2 ', flag: false},
            {name: 'Вариант ответа № 3 ', flag: false},
            {name: 'Вариант ответа № 4 ', flag: false},
            {name: 'Вариант ответа № 5 ', flag: false}
        ]
    }
    function testRadio() {
        this.typeR = 'radio'
    }
    function testCheckbox () {
        this.typeCh = 'checkbox'
    }
//////////////////////////////////////////////
    //насдедуем классы
    testRadio.prototype = new test();
    testCheckbox.prototype = new testRadio();
    var newTest = new testCheckbox();
    //Создаем массив для обьектов
var totalTests=[];

//////////////////////////////////////////////////////////////////////////////
    var butCreatTest=document.getElementById('butCreatTest');
    var wrapFormCreate = document.getElementById('wrapFormCreate');
    var butSaveTest=document.getElementById('butSaveTest');
///////////////////////////////////////////////////////////////////

//кнопка для открытия модального окна
    butCreatTest.addEventListener('click',function () {
        wrapFormCreate.setAttribute('class','wrapModalShow');
    });
//кнопка для сохранения результатов заполнения тестов
butSaveTest.addEventListener('click',function () {
    wrapFormCreate.setAttribute('class','wrapModalHide');

    //находим необходимые элементы и коллекции
    var inpTitle = document.getElementById('inpTitle');
    var inpQuestion = document.getElementById('inpQuestion');
    var inputAnswers = document.getElementsByClassName('inputAnswers');
    var checkBoxRight = document.getElementsByClassName('chRight?');
    var checkedRight;
///извлекаем значение инпутов и записываем результаты в обьект
    newTest.titleTest = inpTitle.value;
    newTest.question = inpQuestion.value;
        var max = inputAnswers.length;
        for (var i=0;i<max;i++){
            newTest.answers[i].name=inputAnswers[i].value;
            checkedRight=checkBoxRight[i].checked;
            if(checkedRight===true){
                newTest.answers[i].flag=true;
            }else {
                newTest.answers[i].flag=false;
            }
        }

    var tempTest =  Object.assign({}, newTest);
    totalTests.push(tempTest);
///////////////////////////////////////////////////////////
    inpTitle.value='';
    inpQuestion.value='';
    for(var n=0;n<max;n++){
        inputAnswers[n].value ='';
        checkBoxRight[n].checked = false;
    }
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var butResultTest=document.getElementById('butResultTest');
//Кнопка для извлечения результатов
    butResultTest.addEventListener('click',function () {
        var serialTest = JSON.stringify(totalTests);
        localStorage.setItem("myKeyTest", serialTest);
        var returnTests = JSON.parse(localStorage.getItem("myKeyTest"));
        var maxReturnTests = returnTests.length;
        for (var f=0;f < maxReturnTests; f++){
        console.log(returnTests[f].titleTest);
        }
    })

});