const slider = new Siema({
  selector: '.siema',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
});

document.querySelector('.btn-prev').addEventListener('click', () => slider.prev()
)
document.querySelector('.btn-next').addEventListener('click', () => slider.next()
)