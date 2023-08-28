import PIMtab from "../../pageObjects/PIMTab";
import loginPage from "../../pageObjects/loginPage";
const pimObj:PIMtab = new PIMtab (); 
const loginObj:loginPage = new loginPage();
describe("Test the admin tab",()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.checkLogin("Admin","admin123");
        pimObj.choosePIM()
    })
    it.only("test add user in admin tab",()=>
    {
        let data = {firstName: "Momen", middleName: "Hasan", lastName: "Odeh", empPicture: null, employeeId: "02023"}
        cy.request("POST","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",data)
        .then((res) => {
        const responseBody = res.body;
        console.log(responseBody);
        expect(res.status).to.equal(200)
        pimObj.checkSearch({key:"Id",value:data.employeeId});
      });
    })
}
)