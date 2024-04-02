document.addEventListener("DOMContentLoaded", function() {
    const containerCabecalhoItens = document.querySelector('.container__cabecalho__itens');

    containerCabecalhoItens.addEventListener('mouseover', function() {
        containerCabecalhoItens.classList.add('hovered');
    });

    containerCabecalhoItens.addEventListener('mouseleave', function() {
        containerCabecalhoItens.classList.remove('hovered');
    });
});

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    let navLinks = header.querySelectorAll('nav a');
    let icon = header.querySelector('.cabecalho__flex__icone');

    let scrolled = window.scrollY;

    if(scrolled > 20){
        header.style.backgroundColor = "#0e0d0e"; // Altera a cor de fundo do cabeçalho
        header.style.padding = "20px 0"; // Altera o preenchimento do cabeçalho
        header.style.transition = "background-color 0.5s, padding 0.5s"; // Adiciona uma transição suave

        // Altera a cor do texto do menu e do ícone
        navLinks.forEach(link => {
            link.style.color = "#efb810";
        });
        icon.style.color = "#efb810";

    } else {
        header.style.backgroundColor = "transparent"; // Volta para a cor de fundo original do cabeçalho
        header.style.padding = "50px 0"; // Volta para o preenchimento original do cabeçalho
        header.style.transition = "background-color 0.5s, padding 0.5s"; // Adiciona uma transição suave

        // Volta para a cor original do texto do menu e do ícone
        navLinks.forEach(link => {
            link.style.color = "#FFFFFF";
        });
        icon.style.color = "#61C0BF";
    }
});
