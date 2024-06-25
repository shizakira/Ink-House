$(function () {
    $('.cards__inner').slick({
        arrows: false,
        dots: true,
        draggable: false,
        //вот эта хуйня меняет названия кнопочек ебучих
        customPaging: function (slider, i) {
            var buttonNames = ['Франция', 'Германия', 'Англия'];
            return '<button>' + buttonNames[i] + '</button>';
        }
    })
});