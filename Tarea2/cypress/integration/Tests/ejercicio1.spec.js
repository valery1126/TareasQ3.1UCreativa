/// <reference types="Cypress" />

describe('Retos de Cypress', () => {
    beforeEach(() => {
      cy.visit('/challenges/actions');
    });
  
    context('Ejercicio 1', () => {

      it('Validar el campo email', () => {
        cy.get('#email1').type('fake@email.com');

        cy.scrollTo('top');
        
        cy.url().should('include', '/'); 

        cy.get('#email1').should('have.value','fake@email.com');
        
      });

      it('Eliminar texto del campo Email', () => {

        cy.get('#email1').type('fake@email.com');

        cy.scrollTo('top');

        cy.get('#email1').type('{selectall}{backspace}');
        
        cy.url().should('include', '/'); 

        cy.get('#email1').should('have.value','');
        
      });

      it('Insertar texto en el textarea', () => {

        cy.scrollTo('top')
        
        cy.url().should('include', '/'); 

        cy.get('#actions > div > div:nth-child(2) > div > form > div:nth-child(2) > textarea')
        .type('Text typed inside disabled textarea',{force:true}).should('have.value','Text typed inside disabled textarea');
        
      });



    });
    
  });