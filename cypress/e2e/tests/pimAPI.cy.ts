import loginPage from "../../pageObjects/loginPage";
import PIMtab from "../../pageObjects/PIMTab";
const loginObj:loginPage = new loginPage();
const PIMobj:PIMtab = new PIMtab (); 
describe("API call", () => {
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.checkLogin("Admin","admin123");
        PIMobj.choosePIM()
    })
    it("intercept and test an API call", () => { //get the job title = QA Engineer
        let jobId = 9 //get the job title = QA Engineer
        cy.request(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?jobTitleId=${jobId}`).then((res) => {
        const responseBody = res.body.data;
        console.log(responseBody);
        expect(responseBody).to.deep.equal(
            [
                {"empNumber":29,"lastName":"Carter","firstName":"Charlie","middleName":"","employeeId":"0212","terminationId":null},
                {"empNumber":30,"lastName":"Chuki","firstName":"Chenzira","middleName":"","employeeId":"0217","terminationId":null},
                {"empNumber":11,"lastName":"Harmony","firstName":"Rebecca","middleName":"","employeeId":"0042","terminationId":null}
            ]
            );

      });
    });
  });
  