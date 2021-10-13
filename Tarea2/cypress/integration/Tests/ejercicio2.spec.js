/// <reference types="Cypress" />

describe('Retos de Cypress', () => {
 
    beforeEach(() => {
      cy.visit('/challenges/actions');
    });
  
    context('Ejercicio 2', () => {

      it('Focus', () => {

        cy.get('#password1').focus();    
        
        cy.url().should('include', '/'); 

        cy.get('#actions > div > div:nth-child(5) > div > form > div > label').should('have.css','color');
        cy.get('#password1').should('have.class','form-control action-focus focus');

        
      });

      it('Blur', () => {

        cy.get('#fullName1').focus(); 
        cy.get('#fullName1').blur();
          
        
        cy.url().should('include', '/'); 

        cy.get('#actions > div > div:nth-child(7) > div > form > div > label').should('have.css','color'); 
        cy.get('#fullName1').should('have.class','form-control action-blur error');

        
      });

      


    });
    
  });