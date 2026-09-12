const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const number = document.querySelector('.numbers');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let active = 0;
const total = items.length;


function update(direction) {
  // remove active antigo
  document.querySelector('.item.active').classList.remove('active');
  document.querySelector('.dot.active').classList.remove('active');

  if (direction === 1) {
    active = active + 1
    if (active >= total) active = 0;
  } else {
    active = active - 1
    if (active < 0) active = total - 1;
  }

  items[active].classList.add('active');
  dots[active].classList.add('active');
  number.textContent = String(active + 1).padStart(2, '0');

}

next.addEventListener('click', () => update(1));
prev.addEventListener('click', () => update(-1));

let timer = setInterval(() => update(1), 5000);

document.querySelector('.container').addEventListener('mouseenter', () => {
  clearInterval(timer);
});

document.querySelector('.container').addEventListener('mouseleave', () => {
  timer = setInterval(() => update(1), 5000);
});

setInterval(() => update(1), 5000);
