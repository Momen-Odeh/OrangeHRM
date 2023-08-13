import Table from "./Tabel";
const tabelObj:Table = new Table()
class admainTab{
    element={
        admainBtn:()=>cy.get(':nth-child(1) > .oxd-main-menu-item'),
        tableRecourde:() => cy.get('.oxd-table-body'),
        useNameInput:()=> cy.get(':nth-child(2) > .oxd-input'),
        searchBtn :()=> cy.get('.oxd-form-actions > .oxd-button--secondary'),
        resetBtn :()=> cy.get('.oxd-button--ghost'),
        addBtn :()=>cy.get('.orangehrm-header-container > .oxd-button')
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
        tabelObj.storeRecourde(this.TableHeader);
    }
    checkSearch(key,value)
    {
        tabelObj.checkSearch(this.element.useNameInput(),this.element.searchBtn(),this.TableHeader,key,value)
    }

    checkTabel()
    {
        tabelObj.checkTabel(this.TableHeader)
    }


    
    
    
    
}

export default admainTab