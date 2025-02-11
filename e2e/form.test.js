import puppeteer from 'puppeteer';

describe('Card Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.cardnumb-form-widget');
  });


  test('Ввод номерка карты, проверка по алгоритму и подсветка карты Мир', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.cardnumb-form-widget');

    const form = await page.$('.cardnumb-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('2201382000000104');
    await submit.click();

    await page.waitForTimeout('.cardnumb-form-widget .input.valid');
  });

  test('Ввод неправльного номера карты, проверка по алгоритму ', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.cardnumb-form-widget');

    const form = await page.$('.cardnumb-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('2201382023000104');
    await submit.click();

    await page.waitForTimeout('.cardnumb-form-widget .input.invalid');
  });


test('Ввод номерка карты, проверка по алгоритму и подсветка карты Visa', async () => {
  jest.setTimeout(20000);
  await page.goto('http://localhost:9000');

  await page.waitForTimeout('.cardnumb-form-widget');

  const form = await page.$('.cardnumb-form-widget');
  const input = await form.$('.input');
  const submit = await form.$('.submit');

  await input.type('4539987489357699');
  await submit.click();

  await page.waitForTimeout('.cardnumb-form-widget .input.valid');
});


test('Ввод номерка карты, проверка по алгоритму и подсветка карты masterCard', async () => {
  jest.setTimeout(20000);
  await page.goto('http://localhost:9000');

  await page.waitForTimeout('.cardnumb-form-widget');

  const form = await page.$('.cardnumb-form-widget');
  const input = await form.$('.input');
  const submit = await form.$('.submit');

  await input.type('5296834035045867');
  await submit.click();

  await page.waitForTimeout('.cardnumb-form-widget .input.valid');
});

test('Ввод номерка карты, проверка по алгоритму и подсветка карты Amex', async () => {
  jest.setTimeout(20000);
  await page.goto('http://localhost:9000');

  await page.waitForTimeout('.cardnumb-form-widget');

  const form = await page.$('.cardnumb-form-widget');
  const input = await form.$('.input');
  const submit = await form.$('.submit');

  await input.type('349268159363376');
  await submit.click();

  await page.waitForTimeout('.cardnumb-form-widget .input.valid');
});

test('Ввод номерка карты, проверка по алгоритму и подсветка карты Discover', async () => {
  jest.setTimeout(20000);
  await page.goto('http://localhost:9000');

  await page.waitForTimeout('.cardnumb-form-widget');

  const form = await page.$('.cardnumb-form-widget');
  const input = await form.$('.input');
  const submit = await form.$('.submit');

  await input.type('6011241005068295');
  await submit.click();

  await page.waitForTimeout('.cardnumb-form-widget .input.valid');
});

test('Ввод номерка карты, проверка по алгоритму и подсветка карты JCB', async () => {
  jest.setTimeout(20000);
  await page.goto('http://localhost:9000');

  await page.waitForTimeout('.cardnumb-form-widget');

  const form = await page.$('.cardnumb-form-widget');
  const input = await form.$('.input');
  const submit = await form.$('.submit');

  await input.type('3545545655251478');
  await submit.click();

  await page.waitForTimeout('.cardnumb-form-widget .input.valid');
});

test('Ввод номерка карты, проверка по алгоритму и подсветка карты Diners club', async () => {
  jest.setTimeout(20000);
  await page.goto('http://localhost:9000');

  await page.waitForTimeout('.cardnumb-form-widget');

  const form = await page.$('.cardnumb-form-widget');
  const input = await form.$('.input');
  const submit = await form.$('.submit');

  await input.type('36739994885292');
  await submit.click();

  await page.waitForTimeout('.cardnumb-form-widget .input.valid');
});


afterEach(async () => {
  await browser.close();
});
});

