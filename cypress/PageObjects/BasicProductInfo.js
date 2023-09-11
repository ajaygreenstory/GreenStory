class BasicProductInfo

{
Type="#prd_info-bsc_prd-abt-type";
SelType="input[placeholder='Select']";
Code="#prd_info-bsc_prd-abt-code";
Name="#prd_info-bsc_prd-abt-name";
Sku="#prd_info-bsc_prd-abt-sku";
Category="#prd_info-bsc_prd-abt-ctg";
Subcategory="#prd_info-bsc_prd-abt-sub_ctg";
Style="#prd_info-bsc_prd-abt-styl";
Department="#prd_info-basic_prd-abt-dprt";
Weight="#prd_info-bsc_prd-abt-wgt";
Weightunit="#prd_info-bsc_prd-abt-unit_of_measurements";
AssignExisting=".btn";
AssignDefault="#prd_info-bsc_prd-abt-btn-assin_dflt > div";
AssignConfirm="#alertDialog-primary";

setType (type)
{
cy.get(this.Type).click();
cy.contains(type).click();
}

setCode (codes)
{
cy.get(this.Code).type (codes);
}

setName (name)
{
cy.get(this.Name).type (name);
}
setsku (sku)
{
cy.get(this.Sku).type (sku);
}
setCategory (category)
{
cy.get(this.Category).click();
cy.contains(category).click();
}

setSubcategory (subcategory)
{
   cy.get(this.Subcategory).click();
   cy.contains(subcategory).trigger('mousedown').dblclick(15, 40,{force:true})
   
}

setStyle (style)
{
    cy.get(this.Style).click();
    cy.contains(style).click();
}

setDeparment (department)
{
    cy.get(this.Department).click();
    cy.contains(department).click();
}

setWeight (weight)
{
cy.get(this.Weight).type (weight);
}

setWeightUnit (weightunit)
{
    cy.get(this.Weightunit).click();
    cy.contains(weightunit).click();
}

clickOnAssignExisting()
{
cy.get(this.AssignExisting).should('have.text','Assign existing').click();
}

clickOnAssignDefault()
{
cy.get(this.AssignDefault).should('have.text','Assign Default').click();
}

clickOnAssignDefaultComfirm()
{
cy.get(this.AssignConfirm).should('have.text','Confirm').click();
}

}

export default BasicProductInfo