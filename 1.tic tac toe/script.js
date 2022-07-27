    let b11=document.getElementById('bt1');
    let b22=document.getElementById('bt2');
    let b33=document.getElementById('bt3');
    let b44=document.getElementById('bt4');
    let b55=document.getElementById('bt5');
    let b66=document.getElementById('bt6');
    let b77=document.getElementById('bt7');
    let b88=document.getElementById('bt8');
    let b99=document.getElementById('bt9');
function myfn(){
    let b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById('bt1').value;
    b2=document.getElementById('bt2').value;
    b3=document.getElementById('bt3').value;
    b4=document.getElementById('bt4').value;
    b5=document.getElementById('bt5').value;
    b6=document.getElementById('bt6').value;
    b7=document.getElementById('bt7').value;
    b8=document.getElementById('bt8').value;
    b9=document.getElementById('bt9').value;

if((b1=='x' || b1 =='X')&&(b2=='x' || b2 =='X')&&(b3=='x' || b3 =='X'))
{
    document.getElementById('print').innerHTML="Player X won";
    b44.disabled=true;
    b55.disabled=true;
    b66.disabled=true;
    b77.disabled=true;
    b88.disabled=true;
    b99.disabled=true;
    
}
else if((b1=='x' || b1 =='X')&&(b4=='x' || b4 =='X')&&(b7=='x' || b7 =='X'))
{
    document.getElementById('print').innerHTML="Player X won";
    b22.disabled=true;
    b33.disabled=true;
    b66.disabled=true;
    b88.disabled=true;
    b55.disabled=true;
    b99.disabled=true;
}else if((b7=='x' || b7 =='X')&&(b8=='x' || b8 =='X')&&(b9=='x' || b9 =='X'))
{
    document.getElementById('print').innerHTML="Player X won";
    b11.disabled=true;
    b22.disabled=true;
    b33.disabled=true;
    b44.disabled=true;
    b55.disabled=true;
    b66.disabled=true;
}
else if((b3=='x' || b3 =='X')&&(b6=='x' || b6 =='X')&&(b9=='x' || b9 =='X'))
{
    document.getElementById('print').innerHTML="Player X won";
    b11.disabled=true;
    b22.disabled=true;
    b44.disabled=true;
    b55.disabled=true;
    b77.disabled=true;
    b88.disabled=true;
}
else if((b1=='x' || b1 =='X')&&(b5=='x' || b5 =='X')&&(b9=='x' || b9 =='X'))
{
    document.getElementById('print').innerHTML="Player X won";
    b33.disabled=true;
    b22.disabled=true;
    b44.disabled=true;
    b66.disabled=true;
    b77.disabled=true;
    b88.disabled=true;
}
else if((b3=='x' || b3 =='X')&&(b5=='x' || b5 =='X')&&(b7=='x' || b7 =='X'))
{
    document.getElementById('print').innerHTML="Player X won";
    b11.disabled=true;
    b22.disabled=true;
    b44.disabled=true;
    b66.disabled=true;
    b99.disabled=true;
    b88.disabled=true;
}
else if((b2=='x' || b2 =='X')&&(b5=='x' || b5 =='X')&&(b8=='x' || b8 =='X'))
{
    document.getElementById('print').innerHTML="Player X won";
    b11.disabled=true;
    b33.disabled=true;
    b44.disabled=true;
    b66.disabled=true;
    b77.disabled=true;
    b99.disabled=true;
}
else if((b4=='x' || b4 =='X')&&(b5=='x' || b5 =='X')&&(b6=='x' || b6 =='X'))
{
    document.getElementById('print').innerHTML="Player X won";
    b11.disabled=true;
    b22.disabled=true;
    b33.disabled=true;
    b99.disabled=true;
    b77.disabled=true;
    b88.disabled=true;
}
else if((b1=='0' || b1 =='0')&&(b2=='0' || b2 =='0')&&(b3=='0' || b3 =='0'))
{
    document.getElementById('print').innerHTML="Player 0 won";
    b44.disabled=true;
    b55.disabled=true;
    b66.disabled=true;
    b77.disabled=true;
    b88.disabled=true;
    b99.disabled=true;
}
else if((b1=='0' || b1 =='0')&&(b4=='0' || b4 =='0')&&(b7=='0' || b7 =='0'))
{
    document.getElementById('print').innerHTML="Player 0 won";
    b22.disabled=true;
    b33.disabled=true;
    b66.disabled=true;
    b88.disabled=true;
    b55.disabled=true;
    b99.disabled=true;
}else if((b7=='0' || b7 =='0')&&(b8=='0' || b8 =='0')&&(b9=='0' || b9 =='0'))
{
    document.getElementById('print').innerHTML="Player 0 won";
    b11.disabled=true;
    b22.disabled=true;
    b33.disabled=true;
    b44.disabled=true;
    b55.disabled=true;
    b66.disabled=true;
}
else if((b3=='0' || b3 =='0')&&(b6=='0' || b6 =='0')&&(b9=='0' || b9 =='0'))
{
    document.getElementById('print').innerHTML="Player 0 won";
    b11.disabled=true;
    b22.disabled=true;
    b44.disabled=true;
    b55.disabled=true;
    b77.disabled=true;
    b88.disabled=true;
}
else if((b1=='0' || b1 =='0')&&(b5=='0' || b5 =='0')&&(b9=='0' || b9 =='0'))
{
    document.getElementById('print').innerHTML="Player 0 won";
    b33.disabled=true;
    b22.disabled=true;
    b44.disabled=true;
    b66.disabled=true;
    b77.disabled=true;
    b88.disabled=true;
}
else if((b3=='0' || b3 =='0')&&(b5=='0' || b5 =='0')&&(b7=='0' || b7 =='0'))
{
    document.getElementById('print').innerHTML="Player 0 won";
    b11.disabled=true;
    b22.disabled=true;
    b44.disabled=true;
    b66.disabled=true;
    b99.disabled=true;
    b88.disabled=true;
}
else if((b2=='0' || b2 =='0')&&(b5=='0' || b5 =='0')&&(b8=='0' || b8 =='0'))
{
    document.getElementById('print').innerHTML="Player 0 won";
    b11.disabled=true;
    b33.disabled=true;
    b44.disabled=true;
    b66.disabled=true;
    b77.disabled=true;
    b99.disabled=true;
}
else if((b4=='0' || b4 =='0')&&(b5=='0' || b5 =='0')&&(b6=='0' || b6 =='0'))
{
    document.getElementById('print').innerHTML="Player 0 won";
    b11.disabled=true;
    b22.disabled=true;
    b33.disabled=true;
    b99.disabled=true;
    b77.disabled=true;
    b88.disabled=true;
}
else if((b1=='X' || b1=='0')&&(b2=='X' || b2=='0')&&
(b3=='X' || b3=='0')&&(b4=='X' || b4=='0')&&
(b5=='X' || b5=='0')&&(b6=='X' || b6=='0')&&
(b7=='X' || b7=='0')&&(b8=='X' || b8=='0')&&
(b9=='X' || b9=='0')){
    document.getElementById('print')
            .innerHTML = "Match Tie";
}
else{
    if(flag==1){
        document.getElementById('print')
                .innerHTML = "Player X Turn";
    }
    else {
        document.getElementById('print')
            .innerHTML = "Player 0 Turn";
    }
    }
}   
function clr()
{
    location.reload();
    document.getElementsByTagName('input').value=''; 
}
flag = 1;
function myfunc1() {
    if (flag == 1) {
        document.getElementById("bt1").value = "X";
        document.getElementById("bt1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt1").value = "0";
        document.getElementById("bt1").disabled = true;
        flag = 1;
    }
}
 
function myfunc2() {
    if (flag == 1) {
        document.getElementById("bt2").value = "X";
        document.getElementById("bt2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt2").value = "0";
        document.getElementById("bt2").disabled = true;
        flag = 1;
    }
}
 
function myfunc3() {
    if (flag == 1) {
        document.getElementById("bt3").value = "X";
        document.getElementById("bt3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt3").value = "0";
        document.getElementById("bt3").disabled = true;
        flag = 1;
    }
}
 
function myfunc4() {
    if (flag == 1) {
        document.getElementById("bt4").value = "X";
        document.getElementById("bt4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt4").value = "0";
        document.getElementById("bt4").disabled = true;
        flag = 1;
    }
}
 
function myfunc5() {
    if (flag == 1) {
        document.getElementById("bt5").value = "X";
        document.getElementById("bt5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt5").value = "0";
        document.getElementById("bt5").disabled = true;
        flag = 1;
    }
}
 
function myfunc6() {
    if (flag == 1) {
        document.getElementById("bt6").value = "X";
        document.getElementById("bt6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt6").value = "0";
        document.getElementById("bt6").disabled = true;
        flag = 1;
    }
}
 
function myfunc7() {
    if (flag == 1) {
        document.getElementById("bt7").value = "X";
        document.getElementById("bt7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt7").value = "0";
        document.getElementById("bt7").disabled = true;
        flag = 1;
    }
}
 
function myfunc8() {
    if (flag == 1) {
        document.getElementById("bt8").value = "X";
        document.getElementById("bt8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt8").value = "0";
        document.getElementById("bt8").disabled = true;
        flag = 1;
    }
}
 
function myfunc9() {
    if (flag == 1) {
        document.getElementById("bt9").value = "X";
        document.getElementById("bt9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt9").value = "0";
        document.getElementById("b9t").disabled = true;
        flag = 1;
    }
}