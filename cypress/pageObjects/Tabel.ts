class Table{
    element = {
        tableRecourde:() => cy.get('.oxd-table-body'),
    }
    recourde= []
    storeRecourde(TableHeader)
    {
        this.element.tableRecourde().children().each(($el,index)=>{
            let obj ={
                index:index, 
            }
            let i =1; 
            for (const key in TableHeader) {
                obj={
                    ...obj,
                    [key]:$el.children().first().children()[i++].innerText
                }
                // console.log(`${key}: ${TableHeader[key]}`);
            }
            this.recourde.push(obj)
        })
        cy.log("all stored recourd : ==> ",this.recourde);
    }
    getRecourde(key,value)
    {
        let res =this.recourde.filter(x => x[key]==value)[0]
        console.log("search on recourde",res)
        return res
    }
    checkSearch(inputText,inputBtn,TableHeader,key:string,value:string)
    {
        inputText.type(value);    
        inputBtn//.click()
        console.log("index")
        let index:number = this.getRecourde(key,value).index;
        
        let i =1; 
            for (const key1 in TableHeader) {
                if(this.recourde[index][key1] != "")
                    this.element.tableRecourde().children().eq(index).contains(this.recourde[index][key1])
            }
    }

    checkTabel(TableHeader)
    {
        this.element.tableRecourde().children().each(($el,index)=>{
            let i =1; 
            for (const key in TableHeader) {
                // console.log(index)
                if(this.recourde[index][key] != "")
                    cy.wrap($el).contains(this.recourde[index][key]);
            }
        })
    }

}

export default Table