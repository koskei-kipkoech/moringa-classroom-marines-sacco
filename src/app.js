const bankAccounts = []

 function handleOnSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    bankAccounts.push({
            firstName : formData.get("firstName"),
            lastName: formData.get("lastName"),
            loanAmount: formData.get("loanAmount"),
            birthDay: formData.get("birthday"),
            gender: formData.get("gender")
        })
    console.log(bankAccounts)

   
 }

document.getElementById("frm-new-account").addEventListener('submit', handleOnSubmit)

 


