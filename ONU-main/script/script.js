document.addEventListener('DOMContentLoaded', function () {
    var btnFim = document.getElementById('sobre');

    // Adiciona um ouvinte de evento de clique ao botão
    btnFim.addEventListener('click', function () {
        // Rola suavemente para o fim da página
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var btnFim = document.getElementById('btn-topo');

    // Adiciona um ouvinte de evento de clique ao botão
    btnFim.addEventListener('click', function () {
        // Rola suavemente para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        var btnTopo = document.getElementById('btn-topo');

        // Mostra ou oculta o botão com base na posição de rolagem
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });
});

