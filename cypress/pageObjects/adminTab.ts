import Table from "./Tabel";
import keyVal from "../interfaces/keyVal";
const tableObj:Table = new Table()

class admainTab{
    element={
        admainBtn:()=>cy.get(':nth-child(1) > .oxd-main-menu-item'),
        tableRecourde:() => cy.get('.oxd-table-body'),
        useNameInput:()=> cy.get(':nth-child(2) > .oxd-input'),
        searchBtn :()=> cy.get('.oxd-form-actions > .oxd-button--secondary'),
        resetBtn :()=> cy.get('.oxd-button--ghost'),
        addBtn :()=>cy.get('.orangehrm-header-container > .oxd-button'),
        roleCombo1:()=>cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        roleCombo2:()=>cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        EmployeeName:()=>cy.get('.oxd-autocomplete-text-input > input'),
        dropdownOption:()=>cy.get('.oxd-select-dropdown'),
        autoComplete: ()=>cy.get('.oxd-autocomplete-dropdown'),
    }
    
    TableHeader ={ //enum
        Username:"Username",
        UserRole:"UserRole",
        EmployeeName:"EmployeeName",
        Status:"Status",
    }
    getTableRecourd()
    {
        return this.element.tableRecourde();
    }
    chooseAdmin(){
        this.element.admainBtn().click()
    }
    storeRecourde()
    {
        tableObj.storeRecourde(this.TableHeader);
    }
    checkSearch(...arr:keyVal[])
    {
        for(let i=0 ; i< arr.length;i++){
            if(arr[i].key == "Username")
            {
                this.element.useNameInput().type(arr[i].value);
            }
            else if(arr[i].key == "UserRole")
            {
                this.element.roleCombo1().click();
                this.element.dropdownOption().contains(arr[i].value).click();
            }
            else if(arr[i].key == "EmployeeName")
            {
                this.element.EmployeeName().type(arr[i].value);
                this.element.autoComplete().contains(arr[i].value).click()
            }
            else if(arr[i].key == "Status")
            {
                this.element.roleCombo2().click();
                this.element.dropdownOption().contains(arr[i].value).click();
            }
            
        }
        this.element.searchBtn().click({ force: true })
        tableObj.checkSearch(this.TableHeader,...arr)
    }

    checkTabel()
    {
        tableObj.checkTabel(this.TableHeader)
    }

    addUserByAPI()
    {
        let data = {username: "mohsen", password: "1234567mM", status: true, userRoleId: 1, empNumber: 2}
        
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
        this.checkSearch({key:"Username",value:data.username});
        tableObj.element.tableRecourde().children().eq(0).children().first().contains(data.username)
      });
    }
}

export default admainTab