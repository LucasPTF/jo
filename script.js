const variants = {
  angulo1: {
    title: 'Algumas dores não ficaram no passado.<br><span>Elas só aprenderam a ficar em silêncio.</span>',
    description: '<p>Você pode ter seguido a vida, cuidando de todo mundo e tentando parecer bem. Mas se certas lembranças ainda mudam seu coração, existe um peso pedindo atenção.</p><p>Em 2 horas, você vai entender por que perdoar não é esquecer e como isso pode abrir um caminho de alívio e liberdade emocional.</p>',
    button: 'Quero começar minha libertação emocional',
    meta: 'Algumas dores não ficaram no passado — Workshop As Chaves do Perdão',
  },
  angulo2: {
    title: 'Você vai entender por que ainda dói<br><span>sem expor sua história, sem reviver tudo sozinha e sem aceitar o que fizeram com você.</span>',
    description: '<p>Em 2 horas, você vai identificar o peso que ainda ficou no seu barco, entender o verdadeiro significado do perdão e sair com clareza para começar sua libertação emocional.</p>',
    button: 'Quero entrar no workshop',
    meta: 'Entenda por que ainda dói — Workshop As Chaves do Perdão',
  },
  angulo3: {
    title: 'Perdoar não é aceitar o que aconteceu.<br><span>É parar de deixar aquilo morar dentro de você.</span>',
    description: '<p>No Workshop As Chaves do Perdão, você vai descobrir por que tanta gente trava nessa crença e como o peso morto no barco continua afetando sua vida mesmo quando você acha que já superou.</p>',
    button: 'Quero soltar esse peso',
    meta: 'Perdoar não é aceitar — Workshop As Chaves do Perdão',
  },
};

const route = location.pathname.split('/').filter(Boolean)[0] || 'angulo1';
const variant = variants[route] || variants.angulo1;
document.body.classList.add(`route-${variants[route] ? route : 'angulo1'}`);
document.querySelector('#hero-title').innerHTML = variant.title;
document.querySelector('#hero-description').innerHTML = variant.description;
document.querySelector('#hero-button').innerHTML = `${variant.button} <span aria-hidden="true">→</span>`;
document.title = variant.meta;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.accordion details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.accordion details[open]').forEach((openItem) => {
      if (openItem !== item) openItem.open = false;
    });
  });
});
