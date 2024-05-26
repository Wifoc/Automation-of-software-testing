const { Builder, By, until } = require('selenium-webdriver');
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let driver;

Given('I am on the registration page', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://yourwebsite.com/register');
});

When('I fill in the registration form with valid details', async function () {
    await driver.findElement(By.name('username')).sendKeys('testuser');
    await driver.findElement(By.name('email')).sendKeys('test@example.com');
    await driver.findElement(By.name('password')).sendKeys('password');
    await driver.findElement(By.name('confirm')).sendKeys('password');
});

When('I submit the registration form', async function () {
    await driver.findElement(By.id('register')).click();
});

Then('I should see a success message', async function () {
    await driver.wait(until.elementLocated(By.id('success-message')), 5000);
    const successMessage = await driver.findElement(By.id('success-message')).getText();
    assert.strictEqual(successMessage, 'Registration successful!');
});

Then('I should be redirected to the dashboard', async function () {
    await driver.wait(until.urlIs('http://yourwebsite.com/dashboard'), 5000);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'http://yourwebsite.com/dashboard');
    await driver.quit();
});
