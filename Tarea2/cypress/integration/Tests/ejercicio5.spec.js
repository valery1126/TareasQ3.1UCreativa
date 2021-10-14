/// <reference types="Cypress" />

describe('Retos de Cypress', () => {

    beforeEach(() => {
      cy.visit('/challenges/actions');
    });
  
    context('Ejercicio 6', () => {
      it('Double click element', () => {

        cy.get('.action-div').dblclick();

        
        cy.url().should('include', '/'); 

        cy.get('#actions > div > div:nth-child(16) > div > form > div > input').should('be.visible');
  
        
      });

    });
    
  });