$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
});
$(window).on('scroll', (function () {

    // Seleciona a navegação
    // Identifica o tamanho total do menu
    // Verifica a distância entre o scroll e o topo
    var $nav = $('header'),
        navHeight = $nav.outerHeight(),
        windowTop = $(this).scrollTop();

    // Verifica quando a distância do scroll for maior que o tamanho total do menu
    if (windowTop > navHeight) {
        $nav.removeClass('transparencia');
        // Adiciona a classe transparencia ao menu
    } else {
        // Remove a classe transparencia do menu
        $nav.addClass('transparencia');
    }
}));