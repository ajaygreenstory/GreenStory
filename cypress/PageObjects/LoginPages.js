class Login

{

  /*  get txtUserName(){
        return cy.get('#email');
        }

        get txtPassword(){
            return cy.get('#loginPassword');
            }

            get btnLogin(){
                return cy.get('#btn');
                }

                login(username,password){
                    this.txtUsername.type(username);
                    this.txtPassword.type(password);
                    this.btnLogin.click();
                    cy.url().should('include', 'my-profile');
                    } */

                

                     
       
txtUserName="#email";
txtPassword="#loginPassword";
btnLogin=".btn";
//lblmsgUserName="//p[@class='text-xs']";


setUserName (username)
{
cy.get(this.txtUserName).type (username);
}
setPassword (password)
{
cy.get(this.txtPassword).type (password);
}

clickLogin()
{
cy.get(this.btnLogin).should('have.text','Sign In').click();
}
verifyUserName()
{
cy.get(this.lblmsgUserName).should('have. text', 'expected');
}

}

export default Login;

//const login = new Login();
                
//export default login;     