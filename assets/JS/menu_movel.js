function MudaImg(){
    checkbox = document.getElementsByClassName('menu__botao');
    if(checkbox.checked) {
    document.getElementsByClassName('menu__dropdown').src = './assets/img//menu-superior/fechar_white.ico';
} else {
    document.getElementsByClassName('menu__dropdown').src = './assets/img/menu-superior/menu_white.ico';
    }
}