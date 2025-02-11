import CardFormWidget from '../widget';

test('Виджет должен отобразиться', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(CardFormWidget.markup);
});

test('Виджет должен получить valid class', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  widget.input.value = '4539043957905518';
  widget.submit.click();

  expect(widget.input.classList.contains('valid')).toEqual(true);
});

test('Подсветка карты карты Мир', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  widget.input.value = '2201382000000104';
  widget.onInput();

  expect(widget.mirCard.classList.contains('active')).toEqual(true);
});

test('Подсветка карты карты Visa', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  widget.input.value = '4051069300000465';
  widget.onInput();

  expect(widget.visaCard.classList.contains('active')).toEqual(true);
});

test('Подсветка карты карты MasterCard', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  widget.input.value = '5453010000074468';
  widget.onInput();

  expect(widget.masterCard.classList.contains('active')).toEqual(true);
});

test('Подсветка карты карты Amex', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  widget.input.value = '346064099063835';
  widget.onInput();

  expect(document.querySelector('.card.amex').classList.contains('active')).toEqual(true);
});

test('Подсветка карты карты discover', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  widget.input.value = '6011478640428902';
  widget.onInput();

  expect(document.querySelector('.card.discover').classList.contains('active')).toEqual(true);
});

test('Подсветка карты карты diners club', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  widget.input.value = '360605551168311';
  widget.onInput();

  expect(document.querySelector('.card.diners_club').classList.contains('active')).toEqual(true);
});
