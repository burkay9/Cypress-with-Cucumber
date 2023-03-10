class Common {
  clickContinueButton() {
    cy.get('button.govuk-button').contains('Continue').click();
  }
  acceptCookies() {
    cy.get('.govuk-cookie-banner button').contains('Accept additional cookies').click();
  }
}

export default Common;
