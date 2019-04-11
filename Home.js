let isMenu = false;

function showMenu() {
    if (!isMenu) {
        document.getElementsByClassName('mobile-menu')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
    }
    isMenu = !isMenu;
}