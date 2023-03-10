import Common from '../pages/common';
import Holiday from '../pages/holiday';
import Start from '../pages/start';

const common = new Common();
const start = new Start();
const holiday = new Holiday();

Cypress.Commands.add('acceptCookies', () => {
  common.acceptCookies();
});

Cypress.Commands.add('clickStartButton', () => {
  start.clickStartButton();
});

Cypress.Commands.add('clickContinueButton', () => {
  common.clickContinueButton();
});

Cypress.Commands.add('assertResultsPage', () => {
  holiday.assertResultsPage();
});

Cypress.Commands.add('assertHolidayEntitlement', (value) => {
  holiday.assertHolidayEntitlement(value);
});

Cypress.Commands.add('assertStartPageURL', () => {
  start.assertStartPageURL();
});

Cypress.Commands.add('clickStartAgainLink', () => {
  holiday.clickStartAgainLink();
});

Cypress.Commands.add('daysErrorMessage', () => {
  holiday.daysErrorMessage();
});

Cypress.Commands.add('datesErrorMessage', () => {
  holiday.datesErrorMessage();
});
