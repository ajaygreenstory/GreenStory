/// <reference types="cypress" />

 

describe('Login flow', () => {

    it('Successful login', () => {
  
        // Visit the login page
  
        cy.visit('https://app-staging.greenstory.ca/my-profile');
  
   
  
              // Fill in the email and password fields and submit the form
  
        cy.wait(5000);
  
        console.log('Before asserting #email element');
  
        cy.get('#email').should('exist').and('be.visible').type('porchezhiyan@greenstory.io');
  
        cy.get('#loginPassword').type('Porch@123');
  
        cy.get('.btn').click();
  
   
  
        // After successful login, verify that the URL has changed to the expected URL
  
        cy.url().should('eq', 'https://app-staging.greenstory.ca/my-profile');
  
   
  
        //Add single product
  
        cy.get('#menu-item-products > .flex > .false').click();
  
        cy.get('.px-\\[5px\\] > :nth-child(1) > span').click();
  
        cy.wait(10000);
  
        cy.get('#prd_list-btn-add_prd > div').click();    // Click to open the dropdown
  
        cy.get('#prd_info-bsc_prd-abt-type').click();           // Click to open the options
  
        cy.contains('Single').click();                  // Click the option you want to select
  
        cy.get('#prd_info-bsc_prd-abt-code').and('be.visible').type('1001');     //Product code
  
        cy.get('#prd_info-bsc_prd-abt-name').and('be.visible').type('cotton_shirt_001')   //Product name
  
        cy.get('#prd_info-bsc_prd-abt-sku').and('be.visible').type('SKU_001');     // Product sku
  
        cy.get('#prd_info-bsc_prd-abt-ctg').click();     // Product catagory dropdown
  
        cy.contains('Apparels').click();
  
        cy.get('#prd_info-bsc_prd-abt-sub_ctg').click();  // Product catagory dropdown
  
        cy.get('.MuiAutocomplete-root').contains('Shirts', { timeout: 5000 }).should('be.visible').click({ force: true })
  
        //cy.contains('Denim Jean', { timeout: 10000 }).should('be.visible').click({ force: true });
  
        cy.get('#prd_info-bsc_prd-abt-styl').should('be.visible').click();   // Product style dropdown
  
        cy.wait(10000);  
  
        cy.contains('western shirt').click();
  
        cy.get('#prd_info-basic_prd-abt-dprt').click();
  
        cy.contains('kids').click();
  
        cy.get('#prd_info-bsc_prd-abt-wgt').type('0.4'); // Product weight update
  
        cy.get('#prd_info-bsc_prd-abt-unit_of_measurements').click(); // Product measurement update
  
        cy.contains('kg(s)').click();
  
        cy.get('#prd_info-bsc_prd-abt-btn-assin_dflt > div').click(); // Product SC default selection
  
   
  
   
  
      });
  
  });
  