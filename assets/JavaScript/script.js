const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const background = document.querySelector('.background')

botao.addEventListener('click', () => {
    botao.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    menuLateral.classList.toggle('ativo')
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#1C1C1C' : 'normal'

})

background.addEventListener('click', () => {
 botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    menuLateral.classList.remove('ativo')
    
})