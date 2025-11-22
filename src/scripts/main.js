const box = document.getElementById('giftBox');
const lid = document.getElementById('giftLid');
const instrucao = document.getElementById('instrucao');
const instrucao2 = document.getElementById('instrucao2');
const balloon = document.querySelectorAll('.balloon');
const card = document.querySelector('.card');
const imgBox = document.querySelector('.imgBox');
const details = document.querySelector('.details');
const alertBox = document.getElementById('alert');
const closed = document.getElementById('closed');
const closeAlertBtn = document.getElementById('closeAlertBtn');
const toggleMessageBtn = document.getElementById('toggleMessageBtn');
const mensagemOriginal = document.getElementById('mensagemOriginal');
const mensagemEditada = document.getElementById('mensagemEditada');

if (toggleMessageBtn.classList.contains('hide') || mensagemOriginal.classList.contains('hide')) {
  toggleMessageBtn.style.display = 'none';
  mensagemOriginal.style.display = 'none';
  alertBox.style.display = 'none';
}

// Inicia a animação de subida
box.style.setProperty('--pos-inicial', '100px');
box.classList.add('rodando');

// Depois de 9 segundos, começa a chacoalhar
setTimeout(() => {
  box.classList.add('balancando');
}, 5000);
// mostra a intrução para clicar no presente
setTimeout(() => {
  instrucao.innerHTML = "Clique no Presente!!!";
  instrucao.classList.add('mostrarInstrucao');
}, 5000);

// animação dos balões, abrir o presente, e o texto
setTimeout(() => {
  box.addEventListener('click', () => {
    box.classList.remove('rodando');
    box.classList.remove('balancando');
    lid.classList.toggle('openPresent');

    // Aplica animação em cada balão, para eles subirem
    balloon.forEach((b) => {
      b.classList.add('balloonRising');
    });

    instrucao.classList.remove('mostrarInstrucao');
    instrucao.classList.add('textoSumindo');
    instrucao.style.display = 'none';

    // Aplica animação em cada balão, para eles balançarem
    setTimeout(() => {
      balloon.forEach((b) => {
        b.classList.add('floatSide');
      });
    }, 9700);

    // Faz o cartão subir
    setTimeout(() => {
      card.classList.add('subirCard');
    }, 9000);
    
    setTimeout(() => {
      instrucao2.innerHTML = "Click no Cartão Presente!!!";
      instrucao2.classList.add('mostrarInstrucao');
    }, 10000)

  }, { once: true });
}, 5000);

// abrir o cartão
setTimeout(() => {
  imgBox.addEventListener('click', () => {
    instrucao2.classList.remove('mostrarInstrucao');
    instrucao2.style.display = 'none';
    imgBox.classList.add('openCard');

    setTimeout(() => {
      if (toggleMessageBtn.classList.contains('hide')) {
        toggleMessageBtn.style.display = 'block';
      }
    }, 2000);
  }, { once: true });
}, 20000);

toggleMessageBtn.addEventListener('click', () => {
  if (toggleMessageBtn.classList.contains('hide')) {
    toggleMessageBtn.style.display = 'block';
    alertBox.style.display = 'block';
    toggleMessageBtn.style.display = 'none';

    closeAlertBtn.addEventListener('click', () => {
      // Se a original está escondida, mostra ela e esconde a editada
      mensagemEditada.style.display = 'none';
      details.scrollTop = 0;
      alertBox.style.display = 'none';
      imgBox.classList.add('openCard2');
      mensagemOriginal.classList.remove('hide');
      mensagemOriginal.style.display = 'block';
      toggleMessageBtn.style.display = 'none';
    });

    closed.addEventListener('click', () => {
      // Se a original está escondida, mostra ela e esconde a editada
      alertBox.style.display = 'none';
    });
 }
});