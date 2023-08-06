import loginPage from "../../pageObjects/loginPage"
const loginObj:loginPage = new loginPage();
describe('POM testing', () => {
  beforeEach(function() {
    // executes prior each test within it block
    cy.visit('https://demo.guru99.com/test/newtours/login.php');
 })
  it.only('Verify Login successful', () => {
    loginObj.enterUsername('selenium@qa')
    loginObj.enterPassword('qa@12345')
    loginObj.clickSubmit();
    loginObj.elements.successTxt().should('have.text','Login Successfully');
  })
  it.only('Verify Login unsuccessful for invalid username/password', () => {
    loginObj.enterUsername('selenium')
    loginObj.enterPassword('qa@123')
    loginObj.clickSubmit();
    loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
  })
  it.only('Verify Login successful', () => {
    const loginObj = new loginPage();
    loginObj.username.type('selenium@qa')
    loginObj.password.type('qa@12345')
    loginObj.submit.click();
    loginObj.successText.should('have.text','Login Successfully');
  })
})