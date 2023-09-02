import adminTab from "../../pageObjects/adminTab";
import loginPage from "../../pageObjects/loginPage";
import userPayload from "../../pageObjects/userPayload";
const adminObj:adminTab = new adminTab (); 
const loginObj:loginPage = new loginPage();
describe("Test the admin tab",()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.checkLogin("Admin","admin123");
        adminObj.chooseAdmin()
    })
    it.only("test add user in admin tab",()=>
    {
        let data:userPayload = {
            username: "mohsenEmad",
            password: "1234567mM", 
            status: true, 
            userRoleId: 1, 
            empNumber: 2
        }
        adminObj.addUserByAPI(data)
    }
)
})