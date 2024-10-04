/** Our Business Logic **/


let accounts = [];
   

//generating loan account number
const generateAccountNumber = ()=> {

}




/** ---- UI Logic - Our DOM Interaction Logic ----**/
const handleOnSubmit  = ()=> {
    document.querySelector("#frm-loan-account").addEventListener("submit", function(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const newAccount = Object.fromEntries(formData.entries())
        // accounts.push(newAccount)
        populateAccountsTable(
            [...accounts, newAccount]
        )
    })
}

const populateAccountsTable = (accounts)=> {
    //The second attempt: Refactoring
    // const tbody = document.querySelector("#loan-accounts-table")
    // const rows = accounts.map((account)=> {
    //     return `<tr>
    //         <td>${account.firstName}</td>
    //         <td>${account.lastName}</td>
    //         <td>${account.gender}</td>
    //         <td>${account.birthday}</td>
    //         <td>${account.loanAmount}</td>
    //         <td>
    //             <button name="btn-remove" className="btn btn-danger btn-remove">
    //                 X
    //             </button>
    //         </td>
    //     </tr>`
    // })
    // tbody.innerHTML +=rows // adding rows to the tbody
    // //using event delegation to apply on click event on the remove buttons
    // tbody.addEventListener("click", (event)=> {
    //     if(event.target.name === "btn-remove"){
    //         event.target.closest('tr').remove()
    //     }
    // })
    
    //First attempt
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
