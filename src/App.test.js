const puppeteer = require('puppeteer');

const url = 'localhost:3001';

beforeAll(async () => {

})

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
  });
  const page = await browser.newPage();
  await page.goto(url);


  //register

  const registerLink = await page.$('[href="/register"]');
  await registerLink.click();
  await page.click('input[name=name]');
  await page.type('input[name=name]', 'yahooo');
  await page.click('input[name=email]');
  await page.type('input[name=email]', 'yomi@mail.com')
  await page.click('input[name=password]')
  await page.type('input[name=password]', 'password8')
  await page.click('button[type=submit]')

  //login

  const loginLink = await page.$('[href="/login"]');
  await loginLink.click();
  await page.click('input[type=email]');
  await page.type('input[type=email]', 'danbrown@gmail.com')
  await page.click('input[type=password]')
  await page.type('input[type=password]', 'DanBrown')
  await page.click('button[type=submit]')

  //cookie

  const cookie = await page.cookies();
  expect(cookie).toBeTruthy();

  //addPost

  await page.waitForSelector('input[name=title]')
  await page.click('input[name=title]')
  const title = 'yahoo!'
  await page.type('input[name=title]', title)
  const body = 'yahoooooooooooooooooooooooo'
  await page.type('textarea[name=body]', body)
  await page.click('button[type=submit]')
  await page.waitFor(444)
  const div = await page.$eval('p[class=card-header-title]', el => el.textContent);
  expect(div).toBe(title);

  //logOut check 
  await page.click('button');
  await page.waitFor(4000)
  const newCookie = await page.cookies();
  expect(newCookie).toStrictEqual([]);

  //shows login form after logOut
  const h1 = await page.$eval('h1.userName.message-header', el => el.textContent);
  const login = "Login Form";
  expect(h1).toBe(login);

}, 1600000)


