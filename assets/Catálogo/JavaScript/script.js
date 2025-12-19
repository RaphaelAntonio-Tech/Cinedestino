
// Seleciona os elementos principais
const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')

// Abre / fecha o menu ao clicar no botão 

function toggleMenu() {
    botao.classList.toggle('ativo');
    menuLateral.classList.toggle('ativo');
    background.classList.toggle('ativo');
}

// Fecha o menu ao clicar no fundo escurecido 
function closeMenu() {
    botao.classList.remove('ativo');
    menuLateral.classList.remove('ativo');
    background.classList.remove('ativo');
}

// Eventos
botao.addEventListener('click', toggleMenu);
background.addEventListener('click', closeMenu);



// Troca de Gênero de filmes
let movieTitle = document.querySelector('.movie-title')
let descMovie = document.querySelector('.desc-movie')

// Título dos filmes
let titleDesc = document.querySelector('.title-desc')
let titleDesc2 = document.querySelector('.title-desc2')
let titleDesc3 = document.querySelector('.title-desc3')
let titleDesc4 = document.querySelector('.title-desc4')

// Imagens
let image = document.querySelector('.image')
let image2 = document.querySelector('.image2')
let image3 = document.querySelector('.image3')
let image4 = document.querySelector('.image4')

//Inspuração

function inspiracao() {
    movieTitle.innerHTML = 'Inspiração'
    descMovie.innerHTML = `Filmes que tocam o coração e mostram como a fé, o amor e a esperança podem transformar vidas.<br> Histórias que inspiram o público a acreditar no bem e recomeçar com coragem.`

    // image 1
    image.src = 'image/Além da Montanha.png'
    titleDesc.innerHTML = 'Além da Montanha'
   
    //image 2
    image2.src = 'image/Vento da Graça.png'
    titleDesc2.innerHTML = 'Vento da Graça'

    //image 3
    image3.src = 'image/Corações que Curam.png'
    titleDesc3.innerHTML = 'Corações que Curam'

    //image 4 
    image4.src = 'image/A Luz do Perdão.png'
    titleDesc4.innerHTML = 'A Luz do Perdão'

}

function Historico() {
    movieTitle.innerHTML = 'Histórico'
    descMovie.innerHTML = 'Obras que retratam momentos marcantes da história da Igreja e da humanidade, mostrando personagens e eventos que revelam o poder da fé ao longo dos séculos.'

    //image 1 
    image.src = 'image/A Cruz do Império.png'
    titleDesc.innerHTML = 'A Cruz do Império'

    // Image 2
    image2.src ='image/O Manuscrito de Antioquia.png'
    titleDesc2.innerHTML = 'O Manuscrito de Antioquia'

    //Image 3 
    image3.src = 'image/Os Guardiões do Santuário.png'
    titleDesc3.innerHTML = 'Os Guardiões do Santuário'

    //image 4 
    image4.src = 'image/A Jornada de Helena.png'
    titleDesc4.innerHTML = 'A Jornada de Helena'
}

function Drama() {
    movieTitle.innerHTML = 'Drama'
    descMovie.innerHTML = 'Narrativas emocionantes sobre desafios, perdas e reencontros, onde os personagens encontram sentido e consolo através da fé e do perdão.'

    // image 1
    image.src = 'image/O Peso do Silêncio.png'
    titleDesc.innerHTML = 'O Peso do Silêncio'

    // image 2
    image2.src = 'image/Caminho de Lágrimas.png'
    titleDesc2.innerHTML = 'Caminho de Lágrimas'

    // image 3
    image3.src = 'image/Promessa Quebrada.png'
    titleDesc3.innerHTML = 'Promessa Quebrada'

    // image 4
    image4.src = 'image/Entre a Dor e a Graça.png'
    titleDesc4.innerHTML = 'Entre a Dor e a Graça'

}

function Superacao() {
    movieTitle.innerHTML = 'Superação'
    descMovie.innerHTML = 'Histórias de força interior, coragem e fé diante das dificuldades. <br> Filmes que mostram que, com Deus, nenhuma dor é em vão e todo obstáculo pode ser vencido.'

    //image 1
    image.src = 'image/Chamas de Determinação.png'
    titleDesc.innerHTML = 'Chamas da Determinação'

    // image 2
    image2.src = 'image/Além do Medo.png'
    titleDesc2.innerHTML = 'Além do Medo'

    // image 3
    image3.src = 'image/Um Novo Amanhã.png'
    titleDesc3.innerHTML = 'Um Novo Amanhã'

    // image 4
    image4.src = 'image/O Valor de Recomeçar.png'
    titleDesc4.innerHTML = 'O Valor de Recomeçar'
}

function Religioso(){
    movieTitle.innerHTML = 'Religioso'
    descMovie.innerHTML = 'Filmes voltados à espiritualidade, devoção e aos ensinamentos cristãos. <br> Retratam a presença divina no cotidiano e o poder da oração em transformar corações.'

    // image 1 
    image.src = 'image/No Coração da Oração.png'
    titleDesc.innerHTML = 'No Coração da Oração'

    // image 2
    image2.src = 'image/Milagre no Deserto.png'
    titleDesc2.innerHTML = 'Milagre no Deserto'

    // image 3
    image3.src = 'image/Oração de Fátima.png'
    titleDesc3.innerHTML = 'Oração de Fátima'

    // image 4
    image4.src = 'image/O Canto dos Anjos.png'
    titleDesc4.innerHTML = 'O Canto dos Anjos'
}

function Aventura() {
    movieTitle.innerHTML = 'Aventura '
    descMovie.innerHTML = 'Tramas cheias de movimento e descobertas, onde os protagonistas enfrentam desafios físicos e espirituais em jornadas que testam sua fé e determinação.'

    //image 1
    image.src = 'image/Nas Trilhas da Fé.png'
    titleDesc.innerHTML = 'Nas Trilhas da Fé'

    // image 2
    image2.src = 'image/A Ilha da Cruz Perdida.png'
    titleDesc2.innerHTML = 'A Ilha da Cruz Perdida'

    // image 3
    image3.src = 'image/Rum ao Santuário.png'
    titleDesc3.innerHTML = 'Rumo ao Santuário'

    // image 4 
    image4.src = 'image/Guardião do Caminho.png'
    titleDesc4.innerHTML = 'Guardião do Caminho'
}