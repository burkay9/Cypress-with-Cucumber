class Holiday {
  assertResultsPage = () => {
    cy.get('#result-info').should('be.visible');
  };
  assertHolidayEntitlement = (value) => {
    cy.contains('The statutory holiday entitlement is ' + value + ' days holiday.');
  };
  daysErrorMessage = () => {
    cy.contains('There are only 7 days in a week. Please check and enter a correct value.');
  };
  datesErrorMessage = () => {
    cy.contains('Please answer this question');
  };
  clickStartAgainLink = () => {
    cy.get('[data-track-action="Start again"]').click();
  };
}

export default Holiday;
