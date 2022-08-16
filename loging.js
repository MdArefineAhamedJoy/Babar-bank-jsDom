// step number 1  add eventListener ; click button work
document.getElementById('btn-submit').addEventListener('click',function(){
  //step 2 get the email addres insite the email input filed
  // input filde theke value nite .value use korbo

  const eamailFiled =document.getElementById('user-email');
  const emailValue= eamailFiled.value;
  //step 3  get password  
  const passwordFiled =document.getElementById('user-passwor');
  const passwordValue =passwordFiled.value;
  // step:4 if else chake email and password
  if(emailValue === 'are5@gmail.com' && passwordValue === 'are'){
     window.location.href='bank.html'
  }else{
     alert('invalid user')
  }
})