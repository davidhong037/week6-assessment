import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/tictacjs.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
});

describe('Clicking squares to check for Xs', async () => {
test('Clicking upper left square to expect an X to the square', async () => {
    const box = await driver.findElement(By.id('cell-0'))
    await box.click()

    expect(await box.getText()).toContain('X')
    await driver.sleep(1000)
})

test('Clicking upper right square to expect an X to the square', async () => {
    const box = await driver.findElement(By.id('cell-8'))
    await box.click()

    expect(await box.getText()).toContain('X')
    await driver.sleep(1000)
})

test('Clicking lower right square to expect an X to the square', async () => {
    const box = await driver.findElement(By.id('cell-2'))
    await box.click()

    expect(await box.getText()).toContain('X')
    await driver.sleep(1000)
})
})

test('Computer adds an O when you add an X', async() => {
    await driver.navigate().refresh()
    await (await driver).findElement(By.id('start-game')).click()

    await driver.findElement(By.id('cell-1')).click()
    const box = await driver.findElement(By.id('cell-0')).getText()

    expect(box).toContain('O')
    await driver.sleep(2000)
})