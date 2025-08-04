const botaoMenu = document.querySelector('.butaomenu');
const barra = document.querySelector('.barra');

botaoMenu.addEventListener('click', () => {
  barra.classList.toggle('ativo');
  botaoMenu.classList.toggle('ativo');
});

