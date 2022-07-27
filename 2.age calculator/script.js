function date() {
    let input = document.getElementById('dob').value;
    birthDate = new Date(input);
    nowdate = new Date();
    if(input==null || input =='')
    {
        alert('please choose date')
    }
    var years = (nowdate.getFullYear() - birthDate.getFullYear());

    if (nowdate.getMonth() < birthDate.getMonth() || 
    nowdate.getMonth() == birthDate.getMonth() && nowdate.getDate() < birthDate.getDate()) {
        years--;
    }
    let name=document.getElementById('name').value;
    console.log(name);
    let email=document.getElementById('email').value;
    let display="Name:"+name+"<br>Email id:"+email+"<br>age:"+years;
    console.log(display)
    document.getElementById('display').innerHTML=display;
}