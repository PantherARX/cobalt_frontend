const burguerMenu = document.querySelector('.burguer_menu');
const menu = document.querySelector(".mobile_menu"); 

const profileP = document.querySelector("#profile");
const profileInfo = document.querySelector(".mobile_profile");

burguerMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if (!profileInfo.classList.contains('hidden')) {
        profileInfo.classList.remove('hidden');
    }
})

profileP.addEventListener('click', (e) => {
    profileInfo.classList.toggle('hidden');
    
})