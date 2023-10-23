//botones
const btninicio = document.getElementById('btninicio');
const btnservicios = document.getElementById('btnservicios');
const btncontacto = document.getElementById('btncontacto');
const btnclientes = document.getElementById('btnclientes');
const navline = document.getElementById('navline');
let linepos = 40;
let linesize = 0;

btninicio.addEventListener('click', function() {
    resizeline(1);
})
btnservicios.addEventListener('click', function() {
    resizeline(2);
})
btncontacto.addEventListener('click', function() {
    resizeline(3);
})
//btninicio.addEventListener('click',resizeline(4));




function resizeline (pagesection){
    if (pagesection == 4){
        linesize = btnclientes.offsetWidth;
        linepos = 20;
    } else if (pagesection == 3){
        linesize = btncontacto.offsetWidth;
        linepos = 20 + btnclientes.offsetWidth + 20;
    } else if (pagesection == 2){
        linesize = btnservicios.offsetWidth;
        linepos = 20 + btnclientes.offsetWidth + 20 + btncontacto.offsetWidth + 20;
    } else if (pagesection == 1){
        linesize = btninicio.offsetWidth;
        linepos = 20 + btnclientes.offsetWidth + 20 + btncontacto.offsetWidth + 20 + btnservicios.offsetWidth + 20;
    }
    navline.style.width = linesize + "px";
    navline.style.right = linepos + "px";
}

resizeline(1);