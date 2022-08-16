// step:1 add button event handelar
document.getElementById('btn-deposit').addEventListener('click',function(){
  // step:2 get input filed and input value
  const dipositFilde=document.getElementById('diposit-filde');
   const newDipositAmountString = dipositFilde.value ;
   const newDipositAmount=parseFloat(newDipositAmountString)
  //  step :3 get deposit-total and add diposit amount
   const depositTotalTk=  document.getElementById('deposit-total');
   const prviousDepositTotalString =depositTotalTk.innerText;
   const prviousDepositTotal=parseFloat(prviousDepositTotalString)
  //  step:4 add string converd numper and sum
   const currentDepositTotal =prviousDepositTotal + newDipositAmount;
   depositTotalTk.innerText= currentDepositTotal;
  //  step :5 add input valu total text
   const totalDepositorBlance=document.getElementById('total-blance');
   const totalPrevisBlanceSTring =totalDepositorBlance.innerText;
   const totalPrevisBlance=parseFloat(totalPrevisBlanceSTring);
   const totalBlance = totalPrevisBlance + newDipositAmount;
   totalDepositorBlance.innerText=totalBlance;

 


  //  step:4 clear the input filed 
  dipositFilde.value='';
})