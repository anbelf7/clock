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

const slider = document.querySelector('.slider');
const dark = document.querySelector('.fa-moon');
const light = document.querySelector('.fa-sun');
const body = document.querySelector('body');
const clock = document.querySelector('.clock');
const clockChild = Array.from(clock.children);

slider.addEventListener('click', () => {
  theme();
});
dark.addEventListener('click', () => {
  theme();
});
light.addEventListener('click', () => {
  theme();
});

const theme = () => {
  light.classList.toggle('no-active');
  dark.classList.toggle('no-active');
  body.classList.toggle('light');
  clock.classList.toggle('oro-light');
  clockChild.forEach(element => {
    element.classList.toggle('lan-light');
  });
};
