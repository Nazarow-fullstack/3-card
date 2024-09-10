const nam=document.querySelector('.nam');
const btn=document.querySelector('.btn');
const p=document.querySelector('.p');
let cnt = 10;
let cnt1 = 1;
btn.onclick=()=>{
    if(+nam.value<cnt && nam.value>cnt1){
        p.innerHTML="Welcome"
    }
    else{
        p.innerHTML="Goodbye"
    }
}