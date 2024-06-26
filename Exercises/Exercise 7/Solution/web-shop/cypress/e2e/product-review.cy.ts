/// <reference types="cypress" />

// TODO 1: Write E2E tests for the product details page (http://localhost:4200/products/product/590164/general)
// 
describe('Product Review', ()=>{
    before(()=>{
    });
    it('should show product reviews detail', ()=>{
        cy.visit('/products/product/590164/reviews');
        cy.get('.nav > :nth-child(4) > .nav-link').click();
        cy.url().should('include', '/login');
        cy.login('ccc', 'ccc');
        cy.get('h3').contains('Your Review');
    });
    it('should submit a review', ()=>{
        cy.visit('/products/product/590164/reviews');
        cy.get('.nav > :nth-child(4) > .nav-link').click();
        cy.url().should('include', '/login');
        cy.login('ccc', 'ccc');
        cy.url().should('include', '/review');
        cy.get('h3').contains('Your Review');
        cy.get('input[name="score"]').type('5');
        cy.get('input[name="author"]').type('Peter');
        cy.get('textarea[name="text"]').type('A very good product');
        cy.get('button[type="submit"]').should('be.enabled').click();
        cy.url().should('include', '/reviews');
        cy.get('article').should('have.length.gt', 0);
    });
});