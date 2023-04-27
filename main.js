$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();

        adicionar();
    });

    cadastros = '';
    $('#tel').mask('(00) 00000-0000');

    function adicionar(){
        const nome = $('#name').val();
        const tel = $('#tel').val();

        const cadastro = `<tr><td>${nome}</td><td>${tel}</td></tr>`;
        cadastros += cadastro;
        $('tbody').html(cadastros);
    }

});