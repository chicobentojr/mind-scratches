$(document).ready(function () {
    $('.enviar.button').click(function () {

        var $consideracao = $(CONSIDERACAO_HTML);

        var hoje = new Date();
        var dia = hoje.getDay();
        var mes = hoje.getMonth() + 1;
        var ano = hoje.getFullYear();
        var hora = hoje.getHours() + 1;
        var minuto = hoje.getMinutes();

        var data = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minuto;

        var consideracao = $('#observacao textarea').val();

        if (consideracao) {

            $consideracao.find('.autor h3').text('Autor XXX');
            $consideracao.find('.data').text(data);
            $consideracao.find('textarea').text(consideracao);

            $('.consideracoes').append($consideracao);
        }
        else alert('O campo de Obsevação é Obrigatório!');

    });

    var CONSIDERACAO_HTML = '<div class="consideracao">' +
                                '<div class="autor">' +
                                    '<h3>...</h3>' +
                                    '<p class="data">...</p>' +
                                '</div>' +
                                '<textarea placeholder="Observação" rows="5" readonly >...</textarea>' +
                              '</div>';
});