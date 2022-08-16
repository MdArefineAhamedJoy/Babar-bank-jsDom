// step:1 add event litener
document.getElementById('btn-windrow').addEventListener('click',function(){
    // step:2
    const windrowFiled= document.getElementById('windrow-filed');
    const windrowAmoutString =windrowFiled.value ;
    const windrowAmount =parseFloat(windrowAmoutString)
    // step:3
    const windrowPrivisAmount =document.getElementById('windrow-total');
    const windowAmoutString=windrowPrivisAmount.innerText;
    const windowAmout=parseFloat(windowAmoutString);
    // step:4
    const totalWindrow =windowAmout + windrowAmount;
    windrowPrivisAmount.innerText=totalWindrow;
    // step:7 windrowFiled.value='';
    windrowFiled.value='';
    // step:5
    const totalBalancePreves =document.getElementById('total-blance');
    const totalBlanceString =totalBalancePreves.innerText;
    const totalBalance =parseFloat(totalBlanceString);
    // step:6
    const total = totalBalance - windrowAmount;
    totalBalancePreves.innerText =total;

   
})