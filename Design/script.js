let read_toggle = document.getElementById('read-toggle');
let grey_bg = document.querySelectorAll('.grey-bg');
let badge_no = document.getElementById('badge-no');
let notf_badge = document.querySelectorAll('.notf-badge')
// console.log(grey_bg);
let toggle = ()=>{
    grey_bg[2].classList.remove('grey-bg');
    grey_bg[1].classList.remove('grey-bg');
    grey_bg[0].classList.remove('grey-bg');
    badge_no.innerHTML = '0';
    notf_badge[2].classList.remove('notf-badge');
    notf_badge[1].classList.remove('notf-badge');
    notf_badge[0].classList.remove('notf-badge');

}
read_toggle.addEventListener('click', toggle)

let msg = document.querySelector('.msg');
let message = document.querySelector('.message');

msg.addEventListener('click', ()=>{
    if(message.style.display === 'none'){
        message.style.display = 'block';

    }else{
        message.style.display = 'none';
    }
});