const {Builder, By, Key, until} = require('selenium-webdriver');


async function testRegistration() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:8080/register');

        // Введення даних для реєстрації
        await driver.findElement(By.name('username')).sendKeys('testuser');
        await driver.findElement(By.name('email')).sendKeys('test@example.com');
        await driver.findElement(By.name('123321Ko%')).sendKeys('123321Ko%');
        await driver.findElement(By.name('123321Ko%')).sendKeys('123321Ko%');

        // Натискання на кнопку реєстрації
        await driver.findElement(By.id('register')).click();

        // Очікування успішної реєстрації (можливо, перевірка наявності елемента після реєстрації)
        await driver.wait(until.elementLocated(By.id('success-message')), 5000);

        // Перевірка URL після успішної реєстрації
        let currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, 'http://localhost:8080/');
    } finally {
        await driver.quit();
    }
}

testRegistration();
