/** Our Business Logic **/


let accounts = [
   {
        firstName: "Sarah",
        lastName: "Davis",
        gender: "Female",
        accountNumber: "654123789",
        loanAmount: 10000
    },
    {
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        accountNumber: "123456789",
        loanAmount: 15000
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        gender: "Female",
        accountNumber: "987654321",
        loanAmount: 25000
    },
    {
        firstName: "Emily",
        lastName: "Johnson",
        gender: "Female",
        accountNumber: "456789123",
        loanAmount: 5000
    },
    {
        firstName: "Michael",
        lastName: "Brown",
        gender: "Male",
        accountNumber: "321654987",
        loanAmount: 20000
    }
];
   

//generating loan account number
const generateAccountNumber = ()=> {

}




/** ---- UI Logic - Our DOM Interaction Logic ----**/
const handleOnSubmit  = ()=> {
    document.querySelector("#frm-loan-account").addEventListener("submit", function(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const newAccount = Object.fromEntries(formData.entries())
        accounts.push(newAccount)
        populateAccountsTable(accounts)
    })
}

const populateAccountsTable = (accounts)=> {
    
    //This should be refactored later
    const tbody = document.querySelector("#loan-accounts-table")
    accounts.forEach((account)=> {
        const tr = document.createElement("tr")
        for(let key in account){
            const td = document.createElement("td")
            td.innerText = account[key]
            tr.appendChild(td)
        }
        const action = document.createElement("td")
        const button = document.createElement("button")
        button.setAttribute("class", "btn btn-danger")
        button.innerText = "X"
        
        button.addEventListener("click", function(){
            this.parentElement.parentElement.remove()
        })

        action.appendChild(button)
        tr.appendChild(action)

        tbody.appendChild(tr)
    })
}

document.addEventListener("DOMContentLoaded", function(){
    //will be executed only after the content of the page has loaded
   
    handleOnSubmit()
    populateAccountsTable(accounts)
})





console.log("My last log")