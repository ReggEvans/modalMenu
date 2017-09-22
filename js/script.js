var menuNode = document.getElementById('menu')

function toggleShow() {
    if (menuNode.style.display === 'block') {
        menuNode.style.display = 'none';
    } else {
        menuNode.style.display = 'block';
    }
}

function closeMenu() {
    if (menuNode.style.display === 'none') {
        menuNode.style.display = 'block';
    } else {
        menuNode.style.display = 'none';
    }
}
