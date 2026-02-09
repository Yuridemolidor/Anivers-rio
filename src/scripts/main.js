document.addEventListener('DOMContentLoaded', () => {

  const box = document.getElementById('giftBox');
  const lid = document.getElementById('giftLid');
  const instrucao = document.getElementById('instrucao');
  const instrucao2 = document.getElementById('instrucao2');
  const balloons = document.querySelectorAll('.balloon');
  const card = document.querySelector('.card');
  const imgBox = document.querySelector('.imgBox');

  // Segurança básica
  if (!box || !lid || !card || !imgBox) return;

  // Início da animação
  box.style.setProperty('--pos-inicial', '100px');
  box.classList.add('rodando');

  // Chacoalhar
  setTimeout(() => {
    box.classList.add('balancando');
  }, 5000);

  // Mostrar instrução
  setTimeout(() => {
    instrucao.innerHTML = 'Clique no Presente!!!';
    instrucao.classList.add('mostrarInstrucao');
  }, 5000);

  // Abrir presente
  setTimeout(() => {
    box.addEventListener('click', () => {

      box.classList.remove('rodando', 'balancando');
      lid.classList.toggle('openPresent');

      // Balões sobem
      balloons.forEach(b => b.classList.add('balloonRising'));

      instrucao.classList.remove('mostrarInstrucao');
      instrucao.classList.add('textoSumindo');
      instrucao.style.display = 'none';

      // Balões flutuam
      setTimeout(() => {
        balloons.forEach(b => b.classList.add('floatSide'));
      }, 9700);

      // Cartão sobe
      setTimeout(() => {
        card.classList.add('subirCard');
      }, 9000);

      // Nova instrução
      setTimeout(() => {
        instrucao2.innerHTML = 'Clique no Cartão Presente!!!';
        instrucao2.classList.add('mostrarInstrucao');
      }, 10000);

    }, { once: true });
  }, 5000);

  // Abrir cartão
  setTimeout(() => {
    imgBox.addEventListener('click', () => {
      instrucao2.classList.remove('mostrarInstrucao');
      instrucao2.style.display = 'none';
      imgBox.classList.add('openCard');
    }, { once: true });
  }, 14000);

});