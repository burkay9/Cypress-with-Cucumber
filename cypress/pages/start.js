class Start {
  clickStartButton() {
    cy.get('.govuk-button--start').should('be.visible').click();
  }
  assertStartPageURL() {
    cy.url().should('eq', 'https://www.gov.uk/calculate-your-holiday-entitlement');
  }
}

export default Start;
