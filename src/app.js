/**
 Event:
  1. onClick
  2. onSubmit
  3. onContentLoad
 */

 /**
  *  {
        id: 1,
        name: "Alice Johnson",
        accountNumber: "BA123456789",
        loanAmount: 25000,
        interestRate: 5.5,
        loanTerm: 5, // in years
        loanStatus: "Active",
        birthday: "1990-05-12", // YYYY-MM-DD format
        gender: "Female",
        amountPaid: 5000, // amount paid so far
    },

    name, 
    accounNumber,
    loanAmount,
    birthday, 
    gender
  */

 function handleOnSubmit(event){
    event.preventDefault()
    console.log("Submitting")
 }

document.getElementById("frm-new-account").addEventListener('submit', handleOnSubmit)