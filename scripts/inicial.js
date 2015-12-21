$(document).ready(function () {
    $('.ajudar.button').click(function () {
        mostrarDimmer();

        $('.painel.dimmer').click(function () {
            esconderDimmer();
        });
    });


    function mostrarDimmer() {
        var $dimmer = $('.ajudar.dimmer');

        var screenWidth = $(window).width();
        var screenHeight = $(window).height();

        var dimmerWidth = $dimmer.width();
        var dimmerHeight = $dimmer.height();

        $dimmer.css('top', (screenHeight - dimmerHeight) / 2);
        $dimmer.css('left', (screenWidth - dimmerWidth) / 2);

        $('body').prepend($('<div class="painel dimmer">').css('position','absolute').css('position','absolute').css('width',screenWidth).css('height',screenHeight).css('background-color','rgba(0,0,0,0.7)'));


        $dimmer.fadeIn();
    }

    function esconderDimmer() {
        var $dimmer = $('.ajudar.dimmer');
        var $painel = $('.painel.dimmer');

        $painel.fadeOut().remove();
        $dimmer.fadeOut();
    }
});