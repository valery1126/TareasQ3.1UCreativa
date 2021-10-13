/// <reference types="Cypress" />

describe('Retos Cypress', () => {

    beforeEach(() => {
      cy.visit('/challenges/actions');
    });
  
    context('Ejercicio 6', () => {

      it('Click derecho en elemento', () => {

        cy.get('.rightclick-action-div').rightclick();
        
        cy.url().should('include', '/'); 

        cy.get('#actions > div > div:nth-child(19) > div > form > div > input').should('be.visible');
  
        
      });

    });
    
  });