/**
 * Created by Shishkov on 24.05.2017.
 */


$(function(){
    $(".niceCheck").mousedown(
    /* при клике на чекбоксе меняем его вид и значение */
    function() {
        changeCheck($(this));
    });
   $(".niceCheck").each(
    /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
    function() {
        changeCheckStart($(this));
    });
   // /* функция смены вида и значения чекбокса
   //  el - span контейнер дял обычного чекбокса
   //  input - чекбокс
   //  */
   //  function changeCheck(el){
   //      var el = el.
   //          input = el.find("input").el(0);
   //      if(!input.attr("checked")) {
   //          el.css("background-position","-5px -5px");
   //          input.attr("checked", true)
   //      } else {
   //          el.css("background-position","-5px -35px");
   //          input.attr("checked", false)
   //      }
   //
   //      return true;
   //
   //  }
   //
   //  /* если установлен атрибут checked, меняем вид чекбокса */
   //
   //  function changeCheckStart(el){
   //      var el = el;
   //      input = el.find("input").eq(0);
   //      if(input.attr("checked")) {
   //          el.css("background-position","0 -17px");
   //
   //      }
   //      return true;
   //  }
});










