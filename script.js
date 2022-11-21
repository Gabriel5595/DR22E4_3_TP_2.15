const accordDiv = document.querySelectorAll('.accordion-item');
const conteudos = document.querySelectorAll('p')
console.log(accordDiv.lenght);

accordDiv.forEach((accordions, i) => {
  accordions.addEventListener('click', () => {
    for(let i = 0; i < conteudos.length; i++){
      conteudos[i].classList.remove('ativo');
    }
    
    conteudos[i].classList.toggle('ativo');
  });
});