// const bankAccounts = []

//  function handleOnSubmit(event){
//     event.preventDefault()
//     const formData = new FormData(event.target) // convert the form inputs into an object
//     bankAccounts.push(Object.fromEntries(formData.entries()))
//     console.log(Object.fromEntries(event.target.entries()))

//  }

// document.getElementById("frm-new-account").addEventListener('submit', handleOnSubmit)


//append child

const tbl = document.getElementById("tbl-accounts")
tbl.classList.add("table-bordered")
const accounts = ["Moringa", "School", "F", "7263638392", "$5000", "x"]

const tbody = document.querySelector("#loan-accounts-table")
const tr = document.createElement("tr") //row


 accounts.forEach((account, index)=> {
    const td = document.createElement("td")// creating table cells
    if(index === accounts.length - 1){
        const btn = document.createElement("button")
        btn.setAttribute("class", "btn btn-sm btn-danger")
        btn.textContent = account
        btn.addEventListener("click", function(){
            this.parentElement.parentElement.remove()
            // this.closest('tr')
        })
        td.appendChild(btn)
    }else{
        td.textContent = account
    }

    tr.appendChild(td)

 })

 
 
 tbody.appendChild(tr)
