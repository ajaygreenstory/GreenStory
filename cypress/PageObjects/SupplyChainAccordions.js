class SupplyChainAccordions

{
//Add Component element
AddComponentBtn="#prd_info-supl_chain-btn-add_comp";
SearchBtn="#add_comp-pup-search-field";
OrganicCottonFabricRedBtn="//input[@id='0-39']";
Nylon6FabricRedioBtns="//input[@id='0-Fabric']";
LinenFabricRedioBtns="(//input[@id='0-Fabric'])[1]";
submit="//div[@class='flex gap-1 items-center float-right']//button[@id='btn']";
value="//input[@placeholder='Value']";


//Replace Component element
ReplaceComponentBtn="#prd_info-supl_chain-btn-rplc_comp-0";
SearchBtn="input[placeholder='Search']";
Nylon6FabricRedioBtn="//input[@id='0-199']";
SubmitBtn="#add_comp-pup-btn-use_-submit";
ExistingComponentCheckBoxBtn="#add_comp-pup-add_exst_comp-chebox"; 
ExistingComponentRedioBtn="//input[@id='4-Fabric']";
LinenFabricRedioBtn="input.accent-link-blue";
UseAsIsBtn="#add_comp-pup-btn-use_-submit";
DuplicateAddBtn="#add_comp-pup-btn-duple_and_add";
SupplyChainViewBtn="#add_comp-pup-btn-view-24";

CancelBtn="//div[@class='mb-a1']//button[@id='prd_info-bsc_prd-abt-btn-cls']";
CancelBtnConfirm="//div[normalize-space()='Confirm']";
ContextMenuBtn="(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[2]";
CalculateFootPrint="(//li[normalize-space()='Calculate footprint'])[1]";
CalculateFootPrintConfirm="//button[@id='alertDialog-primary']"


//Add component
AddComponentDirect()
{
cy.get(this.AddComponentBtn).should('have.text',' Add component').click();
//cy.wait(3000);
cy.get(this.SearchBtn).type("Organic Cotton Fabric");
cy.xpath(this.OrganicCottonFabricRedBtn).click();
cy.get(this.SubmitBtn).click();
cy.xpath(this.value).type("0.5");
cy.xpath(this.submit).click();

}

AddComponenteExitingUseAsIs()
{
cy.get(this.AddComponentBtn).should('have.text',' Add component').click();
cy.get(this.ExistingComponentCheckBoxBtn).click();
//cy.wait(3000);
cy.get(this.SearchBtn).type("Nylon 6 Fabric");
//cy.wait(7000);
cy.xpath(this.Nylon6FabricRedioBtns).click();
cy.get(this.UseAsIsBtn).click();
cy.xpath(this.value).type("0.7");
cy.xpath(this.submit).click();

}

AddComponenteExitingDuplicate()
{
cy.get(this.AddComponentBtn).should('have.text',' Add component').click();
cy.get(this.ExistingComponentCheckBoxBtn).click();
//cy.wait(3000);
cy.get(this.SearchBtn).type("Linen Fabric");
//cy.wait(7000);
cy.xpath(this.LinenFabricRedioBtns).click();
cy.get(this.DuplicateAddBtn).click();
cy.xpath(this.value).type("0.4");
cy.xpath(this.submit).click();

}



//Replace component
clickOnReplaceComponent()
{
cy.get(this.ReplaceComponentBtn).should('have.text','Replace component').click();
}

ReplaceComponentDirect()
{
cy.get(this.SearchBtn).type ("Organic Cotton - Bamboo viscose Fabric"); 
cy.xpath(this.Nylon6FabricRedioBtn).click();
cy.get(this.SubmitBtn).click();
cy.xpath(this.value).type("0.7");
cy.xpath(this.submit).click();
}

ReplaceExitingComponentUseAsIs()
{
cy.get(this.ReplaceComponentBtn).should('have.text','Replace component').click();
cy.get(this.ExistingComponentCheckBoxBtn).check();
cy.get(this.SearchBtn).type ("Linen Fabric"); 
cy.get(this.LinenFabricRedioBtn).eq(0).check();
cy.scrollTo('right', { duration: 500 })
cy.get(this.UseAsIsBtn).click();
cy.xpath(this.value).type("0.7");
cy.xpath(this.submit).click();
}

ReplaceExitingComponentDuplicate()
{
cy.get(this.ReplaceComponentBtn).should('have.text','Replace component').click();
cy.get(this.ExistingComponentCheckBoxBtn).check();
cy.get(this.SearchBtn).type ("Linen Fabric"); 
cy.get(this.LinenFabricRedioBtn).eq(0).check();
cy.get(this.DuplicateAddBtn).click();
cy.xpath(this.value).type("0.7");
cy.xpath(this.submit).click();
}

ClickOnCancelBtn()
{
    
cy.xpath(this.CancelBtn).click();
cy.wait(6000);
cy.xpath(this.CancelBtnConfirm).click();
cy.xpath(this.ContextMenuBtn).click();
cy.xpath(this.CalculateFootPrint).click();
cy.xpath(this.CalculateFootPrintConfirm).click();


}

}
export default SupplyChainAccordions

//cy.get(this.LinenFabricRedioBtn).eq(0).check();
//LinenFabricRedioBtn="input.accent-link-blue";