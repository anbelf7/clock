import '../sass/main.scss';

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

const switchTheme = document.querySelector('.switch input[type="checkbox"]');
const dark = document.querySelector('.fa-moon');
const light = document.querySelector('.fa-sun');
const body = document.querySelector('body');

switchTheme.addEventListener('change', e => {
  if (e.target.checked) {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.removeAttribute('data-theme');
  }
  light.classList.toggle('no-active');

  dark.classList.toggle('no-active');
});
