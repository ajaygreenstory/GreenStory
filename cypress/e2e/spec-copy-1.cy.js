
import Login from "../PageObjects/LoginPages.js";
import Profile from "../PageObjects/ProfilePage.js";
import Listing from "../PageObjects/PrdListingPage.js";
import BasicProductInfo from "../PageObjects/BasicProductInfo.js";
import SupplyChainAccordions from "../PageObjects/SupplyChainAccordions.js";


//login page
it.only('LoginTests', () => {
  //cy.visit("https://app-dev.greenstory.ca/logout")
   //cy.visit("https://app-qa.greenstory.ca/logout")
  cy.visit("https://app-staging.greenstory.ca/logout")
  //cy.visit("https://app.greenstory.io/logout")

  cy.fixture('loginPage').then((data) =>{
   const logins = new Login ();
   const Profiles = new Profile ();
   const Listings = new Listing ();
   const BasicInfo = new BasicProductInfo ();
   const SCATest = new SupplyChainAccordions ();

   logins.setUserName(data.username)
   logins.setPassword (data.password)
   logins.clickLogin();
   //login.login(data.username,data.password);
   
  //profile page
  Profiles.clickOnProdctMenu();
  Profiles.clickOnProduct();
  

  // listing Page
  Listings.clickOnAddProducts();

   // Basic Info
   //cy.fixture('loginPage').then((data) =>{
  cy.fixture('PrdDetails').then((data) =>{
  BasicInfo.setType(data.type);
  BasicInfo.setCode(data.code);
  BasicInfo.setName(data.name);
  BasicInfo.setsku(data.sku);
  BasicInfo.setCategory(data.category);
  BasicInfo.setSubcategory(data.subcategory);
  BasicInfo.setStyle(data.style);
  BasicInfo.setDeparment(data.deparment);
  BasicInfo.setWeight(data.weight);
  BasicInfo.setWeightUnit(data.weightUnit);
  BasicInfo.clickOnAssignDefault();
  BasicInfo.clickOnAssignDefaultComfirm();
  cy.wait(5000);
  
 
  //Add Component
   SCATest.AddComponentDirect();
   SCATest.AddComponenteExitingUseAsIs();
   SCATest.AddComponenteExitingDuplicate();
   cy.wait(5000);

   // Replce Component
   SCATest.clickOnReplaceComponent();
   SCATest.ReplaceComponentDirect();
   SCATest.ReplaceExitingComponentUseAsIs();
   SCATest.ReplaceExitingComponentDuplicate();
   cy.wait(10000);
 
   SCATest.ClickOnCancelBtn();
  
  })
})

})





