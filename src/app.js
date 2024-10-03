const bankAccounts = []

 function handleOnSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.target) // convert the form inputs into an object
    bankAccounts.push(Object.fromEntries(formData.entries()))

    console.log(Object.fromEntries(event.target.entries()))

   
 }

document.getElementById("frm-new-account").addEventListener('submit', handleOnSubmit)

 


