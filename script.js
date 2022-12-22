let read_toggle = document.getElementById('read-toggle');
let active_notf = document.querySelectorAll('.active-notf');
let badge_no = document.getElementById('badge-no');
let notf_badge = document.querySelectorAll('.notf-badge');
let allActive = document.querySelectorAll('.notf')
let allActive_indicator = document.querySelectorAll('.unread-indicator')


function removeclass_loop(){
    for(const active of active_notf){
        active.classList.remove('active-notf');
    };
    // 
    for(const badge of notf_badge){
        badge.classList.remove('notf-badge');
    };
    // 
    for(const a of allActive){
        a.classList.remove('active-notf');
    };
    // 
    for(const a of allActive_indicator){
        a.classList.remove('notf-badge');
    };
};
function addclass_loop(){
    for(const active of active_notf){
        active.classList.add('active-notf');
    };
    // 
    for(const badge of notf_badge){
        badge.classList.add('notf-badge');
    };
    // 
    for(const a of allActive){
        a.classList.add('active-notf');
    };
    // 
    for(const a of allActive_indicator){
        a.classList.add('notf-badge');
    };

};

let notification = ()=>{
    if(read_toggle.innerHTML === 'Mark all as read'){
        removeclass_loop();
        badge_no.innerHTML = '0';
        read_toggle.innerHTML = 'Mark all as unread';
      
    
    }else if(read_toggle.innerHTML === 'Mark all as unread'){
        addclass_loop();
        badge_no.innerHTML = allActive.length;
        read_toggle.innerHTML = 'Mark all as read';
      }
}
read_toggle.addEventListener('click', notification)

// Hide/show message section start

let msg = document.querySelector('.msg');
let message = document.querySelector('.message');

msg.addEventListener('click', ()=>{
    if(message.style.display === 'none'){
        message.style.display = 'block';

    }else{
        message.style.display = 'none';
    };
});