class Listing

{
 AddProductBtn="#prd_list-btn-add_prd > div";

clickOnAddProducts()
{
cy.get(this.AddProductBtn).click();
}

}
export default Listing