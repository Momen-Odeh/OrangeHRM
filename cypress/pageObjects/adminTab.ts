class admainTab{
    element={
        admainBtn:()=>cy.get(':nth-child(1) > .oxd-main-menu-item'),
        tableRecourde:() => cy.get('.oxd-table-body'),
    }
    
    recourde= []
    TableHeader ={ //enum
        Username:"Username",
        UserRole:"UserRole",
        EmployeeName:"EmployeeName",
        Status:"Status",
        Actions:"Actions"
    }
    chooseAdmin(){
        this.element.admainBtn().click()
    }
    storeRecourde()
    {
        this.element.tableRecourde().children().each(($el,index)=>{
            this.recourde.push({
                index:index,
                UserName:$el.children().first().children()[1].innerText
            })
        })
        cy.log("all stored recourd : ==> ",this.recourde);
    }
    getRecourde(UserName:string)
    {
        cy.log("search on recourde",this.recourde.filter(x => x.UserName==UserName))
    }
    
    
    
}

export default admainTab