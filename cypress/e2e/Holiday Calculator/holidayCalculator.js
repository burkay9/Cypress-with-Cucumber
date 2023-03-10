import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

describe('Holiday entitlement calculator: ', () => {
  Given('I go to the start page', () => {
    cy.visit('/');
  });

  Given('I accept cookies', () => {
    cy.acceptCookies();
  });

  When('I click the start button', () => {
    cy.clickStartButton();
  });

  Then('I click on {string} radio button and click continue', (option) => {
    const locator =
      option === 'days worked per week'
        ? 'input[value="days-worked-per-week"]'
        : option === 'for a full leave year'
        ? 'input[value="full-year"]'
        : 'input[value="starting"]';
    cy.get(locator).click();
    cy.clickContinueButton();
  });

  Then('I input {string} days worked per week and click continue', (value) => {
    cy.get('#response[type="text"]').clear().type(value);
    cy.clickContinueButton();
  });

  Then('I land on the Results page', () => {
    cy.assertResultsPage();
  });

  Then('I assert holiday entitlement value is {string}', (value) => {
    cy.assertHolidayEntitlement(value);
  });

  Then('I click start again link', () => {
    cy.clickStartAgainLink();
  });

  Then('I am taken to start page', () => {
    cy.assertStartPageURL();
  });

  Then('I receive an error message {string}', (string) => {
    const errorMessage =
      string === 'There are only 7 days in a week. Please check and enter a correct value.'
        ? cy.daysErrorMessage()
        : string === 'Please answer this question.'
        ? cy.datesErrorMessage()
        : 'Your leave year start date must be earlier than your employment start date of 05 November 2021.';
    console.log(errorMessage);
  });

  Then(
    'I input {string} days {string} months {string} years for the employee {string} and click continue',
    (day, month, year) => {
      cy.get('[name="response[day]"]').clear().type(day);
      cy.get('[name="response[month]"]').clear().type(month);
      cy.get('[name="response[year]"]').clear().type(year);
      cy.clickContinueButton();
    },
  );
});
