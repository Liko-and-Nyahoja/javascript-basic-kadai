const text = document.getElementById('text');

const button =document.getElementById('btn');
button.addEventListener('click',()=>{
    setTimeout(()=>{
    text.textContent = 'ボタンをクリックしました'
    },2000);
 });
 