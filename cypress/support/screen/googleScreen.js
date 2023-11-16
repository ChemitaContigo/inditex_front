const ELEMENTS ={
    url:'https://www.google.com',
    decline:'#W0wltc > .QS5gu',
    input:'#APjFqb',
    results:'.LC20lb',

}

export function visitGoogle () {
    cy.visit('/');
}
export function declineConsents () {
    cy.get(ELEMENTS.decline).click();
}
export function searchAutomation (input) {
    cy.get(ELEMENTS.input).type(`${input}{Enter}`);
}
export function findAndClick (input) {
    cy.get('.LC20lb').contains(input).click();
}
