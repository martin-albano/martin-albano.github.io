const toggleBtn = document.querySelector('.nav-toggle');
const toggleBtnIcon = document.querySelector('.nav-toggle i');
const toggleMenuResponsive = document.querySelector('.nav-menu-responsive');

toggleBtn.onclick = function() {
    toggleMenuResponsive.classList.toggle('open');
}