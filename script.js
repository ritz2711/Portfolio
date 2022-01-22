
// console.log("hello")
const clicks = document.querySelector('#menu');

clicks.addEventListener('click',()=>{
    document.querySelector('header').style.left = 0%
    document.querySelector('header').classList.toggle('hidden');
});

