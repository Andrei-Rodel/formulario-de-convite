function selecionarTipo(element) {
  document.querySelectorAll('.tipo button').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}
