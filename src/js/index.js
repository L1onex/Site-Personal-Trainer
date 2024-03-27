var cabecalho = document.getElementById('cabecalho');
var menu = document.getElementById('menu');
var home = document.getElementById('home');
var showSidebar = false;
function toggleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        menu.style.marginLeft = '-10vw';
        menu.style.animationName = 'showSidebar';
        home.style.filter = 'blur(2px)';
    }
    else {menu.style.marginLeft = '';
          menu.style.animationName = '';
          home.style.filter = '';}
    }
    function closeSidebar(){
        if(showSidebar){ toggleSidebar();}
    }
