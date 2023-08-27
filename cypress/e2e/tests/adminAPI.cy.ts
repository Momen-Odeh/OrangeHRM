import adminTab from "../../pageObjects/adminTab";
import loginPage from "../../pageObjects/loginPage";
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
        let data = {username: "MOMEN", password: "1234567mM", status: true, userRoleId: 1, empNumber: 49}
        
        cy.request("POST","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/auth/public/validation/password",{password: data.password})
        .then((res) => {
        const responseBody = res.body;
        console.log(responseBody);
        expect(res.status).to.equal(200)
        cy.request(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=${data.username}`)
        .then((res2)=>{
            expect(res2.status).to.equal(200)
            cy.request("POST","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users",data).then((res3)=>{
                expect(res3.status).to.equal(200)
            })
        })

      });
    })
}
)