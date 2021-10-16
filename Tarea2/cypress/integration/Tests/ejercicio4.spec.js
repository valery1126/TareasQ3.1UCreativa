/// <reference types="Cypress" />

describe('Ejecicio 4 Tests', () => {
    // Hooks
    beforeEach(() => {
      cy.visit('/challenges/actions');
    });
  
    context('Ejercicio 4', () => {
      
     it('Popover', () => {

        cy.get('#actions > div > div:nth-child(13) > div > button').scrollIntoView();
        cy.get('.action-btn').click();
          
        cy.url().should('include', '/'); 

        cy.get('.popover-title').scrollIntoView();
        cy.get('.popover-title').should('be.visible');
        
      });


      it('Canvas', () => {
        
        cy.get('#action-canvas').click(80,75); 
        cy.get('#action-canvas').click(170,75); 
        cy.get('#action-canvas').click(80,165); 
        cy.get('#action-canvas').click(100,185); 
        cy.get('#action-canvas').click(125,190); 
        cy.get('#action-canvas').click(150,185); 
        cy.get('#action-canvas').click(170,165);   
          
        cy.url().should('include', '/'); 

        
      });


      it('Multiple clicks', () => {

       cy.get('.action-labels > span').click({multiple:true});
  
        cy.url().should('include', '/'); 

        cy.get('.popover-content').should('be.visible',{multiple:true});
        
      });



      it('Force', () => {

        cy.get('#actions > div > div:nth-child(13) > div > div.action-opacity > button').click({force:true});
          
        cy.url().should('include', '/'); 

        cy.get('.popover-content').scrollIntoView();
        cy.get('.popover-content').should('be.visible');
        
      });




    



    });
    
  });