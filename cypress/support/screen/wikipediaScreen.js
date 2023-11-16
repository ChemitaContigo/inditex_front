const ELEMENTS ={
    url:'https://wwww.wikipedia.com',
    paragraph:'.mw-content-ltr > :nth-child(40)',
    reference:'#toc-Control_por_ordenador',
}

export function changeOrigin () {
    cy.origin(ELEMENTS.url, () =>{});
}
export function searchText (input) {
    cy.get(ELEMENTS.paragraph).should('contain.text', input);
}
export function computerControlReferenceClick () {
    cy.get(ELEMENTS.reference).click();
}
export function screenshot (input) {
    cy.screenshot(input);
}
