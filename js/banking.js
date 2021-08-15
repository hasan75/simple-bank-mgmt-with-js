document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('working')
    const depositeInput = document.getElementById('deposit-input')
    const newDepositText = depositeInput.value //(field er moddhe jeta ase seta add korar jonno,eita new deosit amount)
    //console.log(depositAmount)
    const newDepositAmount = parseFloat(newDepositText)

//update deposit total
    const depositTotal = document.getElementById('deposite-total')
    //console.log(depositTotal.innerText)
    const previousDepositText = depositTotal.innerText  //(eita hocche amar deposite e joto amount show korbe oita, mane previous  amount of deposit)
    const previousDepositAmount = parseFloat(previousDepositText)

    const newDepositeTotal = previousDepositAmount + newDepositAmount

    depositTotal.innerText = newDepositeTotal

//update the account balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)

    const newBalanceTotal = previousBalanceTotal + newDepositAmount
    balanceTotal.innerText = newBalanceTotal

//clear the deposite inout field
    depositeInput.value = ''
})

//withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value
    const NewWithdrawAmount = parseFloat(withdrawAmountText)
//set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText)
        
    const newWithdrawTotal = previousWithdrawTotal + NewWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal

//update balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceText)

    const newBalanceTotal = previousBalanceTotal - NewWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal

//clearwithdraw input

    withdrawInput.value = ''
    
})