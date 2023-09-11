class Profile

{
prdMenu="#menu-item-products";
products=".px-\\[5px\\] > :nth-child(1) > span";


clickOnProdctMenu()
{
cy.get(this.prdMenu).should('have.text','Products').click();
}

clickOnProduct()
{
cy.get(this.products).should('have.text','Product').click();
}
}
export default Profile