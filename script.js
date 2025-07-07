function selecionarTipo(element) {
  document.querySelectorAll('.tipo button').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}

document.querySelectorAll('.cores button').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.cores button').forEach(b => b.classList.remove('cor-selecionada'));
    this.classList.add('cor-selecionada');
  });
});

document.querySelectorAll('.tema-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.tema-card').forEach(c => c.classList.remove('tema-selecionado'));
    this.classList.add('tema-selecionado');
  });
});
