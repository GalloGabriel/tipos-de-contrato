$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo
    $('#startTeste').click(function(){
      $('.questoes-container').css('display', 'flex');
      $('.texto-inicial-container').css('display', 'none');
      $('.button-inicio-container').css('display', 'none');
      $('#iconeEstrela').css('position', 'relative');
      $('#iconeEstrela').css('top', '15px');
    })

})
