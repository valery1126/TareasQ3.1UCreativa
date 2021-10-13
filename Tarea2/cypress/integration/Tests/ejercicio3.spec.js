/// <reference types="Cypress" />

describe('Retos de Cypress', () => {
    beforeEach(() => {
      cy.visit('/challenges/actions');
    });
  
    context('Ejercicio 3', () => {
      
      it('validar el campo del codigo y que el formulario se envie', () => {
        cy.get('#couponCode1').type('ASDF4567');
        cy.get('#couponCode1').type('{enter}');

        
        cy.url().should('include', '/'); 

        cy.get('#couponCode1').should('have.value','ASDF4567');
        cy.get('#actions > div > div:nth-child(10) > div > p:nth-child(2)').should('be.visible');
        cy.get('#actions > div > div:nth-child(10) > div > p:nth-child(2)').should('have.text','Your form has been submitted!');
        
      });

    });
    
  });