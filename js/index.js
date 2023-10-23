//Elementos

        //hero
const herotext1 = document.getElementById('herotext1');
const herotext2 = document.getElementById('herotext2');
const heroimg1 = document.getElementById('heroimg1');
const heroimg2 = document.getElementById('heroimg2');
let imgstat = 1;
let imgstat2 = 1;

const img1frasehero2 = document.getElementById('img1frasehero2');
const img2frasehero2 = document.getElementById('img2frasehero2');
const img3frasehero2 = document.getElementById('img3frasehero2');
const imgimghero2 = document.getElementById('imgimghero2');


        //secciones
const hero = document.getElementById('hero');
const hero2 = document.getElementById('hero2');
const hero3 = document.getElementById('hero3');
const hero4 = document.getElementById('hero4');
const hero5 = document.getElementById('hero5');
const hero6 = document.getElementById('hero6');
const hero7 = document.getElementById('hero7');
const hero8 = document.getElementById('hero8');


    //parametros secciones
let currentseccion = 1;
let seccionaction = 0;
let currentscroll = 0;
let changesectionaction = 0;
let scrollactiveevent = 1;
let actiondef = 0;

//nav responsive
const realshadow = document.getElementById('realshadow');
const navemr = document.getElementById('navemr');
const burgernav = document.getElementById('burgernav');
realshadow.addEventListener('click',navmrclose);
burgernav.addEventListener('click',navmropen);

const btnservicios2 = document.getElementById('btnservicios2');
const btncontacto2 = document.getElementById('btncontacto2');
const btnclientes2 = document.getElementById('btnclientes2');
btninicio2.addEventListener('click',selectinicio);
btnservicios2.addEventListener('click',selectservicios);
btncontacto2.addEventListener('click',selectcontacto);





//cambiador de seccioens nav
const mastercont = document.getElementById('mastercont');
const masterservicios = document.getElementById('masterservicios');
const mastercontacto = document.getElementById('mastercontacto');
const herobtncont = document.getElementById('herobtncont');
btninicio.addEventListener('click',selectinicio);
btnservicios.addEventListener('click',selectservicios);
btncontacto.addEventListener('click',selectcontacto);
herobtncont.addEventListener('click',selectcontacto);
const shadownav = document.getElementById('shadownav');
herobtncont.addEventListener('click', function() {
    resizeline(3);
})



function selectinicio(){
    navmrclose();
    shadownav.style.display = "flex";
    setTimeout(function(){
        shadownav.style.transform = "translateY(0vh)";
        setTimeout(function(){
            masterservicios.style.display = "none";
            mastercontacto.style.display = "none";
            mastercont.style.display = "flex";
            mastercont.scroll(0,0);
            setTimeout(function(){
                shadownav.style.transform = "translateY(103vh)";
                setTimeout(function(){
                    shadownav.style.display = "none";
                },500)
            },50)
        },550)
    },50)
}

function selectservicios(){
    navmrclose();
    shadownav.style.display = "flex";
    setTimeout(function(){
        shadownav.style.transform = "translateY(0vh)";
        setTimeout(function(){
            mastercont.style.display = "none";
            mastercontacto.style.display = "none";
            masterservicios.style.display = "flex";
            setTimeout(function(){
                shadownav.style.transform = "translateY(103vh)";
                setTimeout(function(){
                    shadownav.style.display = "none";
                },500)
            },50)
        },550)
    },50)
}


function selectcontacto(){
    navmrclose();
    shadownav.style.display = "flex";
    setTimeout(function(){
        shadownav.style.transform = "translateY(0vh)";
        setTimeout(function(){
            mastercont.style.display = "none";
            mastercontacto.style.display = "flex";
            masterservicios.style.display = "none";
            setTimeout(function(){
                shadownav.style.transform = "translateY(103vh)";
                setTimeout(function(){
                    shadownav.style.display = "none";
                },500)
            },50)
        },550)
    },50)
}


// nav responsive openclose
function navmropen(){
    realshadow.style.display = "flex";
    navemr.style.display = "flex";
    setTimeout(function(){
        realshadow.style.opacity = "1";
        navemr.style.transform = "translatex(0px)";
    },50)
}
function navmrclose(){
    realshadow.style.opacity = "0";
    navemr.style.transform = "translatex(50vw)";
    setTimeout(function(){
        realshadow.style.display = "none";
        navemr.style.display = "none";
    },500)
}







herotext2.style.display = "none";
heroimg2.style.display = "none";
herotext1.style.display = "flex";
heroimg1.style.display = "flex";
herotext2.style.opacity = "0";
heroimg2.style.opacity = "0";
herotext1.style.opacity = "1";
heroimg1.style.opacity = "1";

//ciclo imagenes hero
function imghero() {
    if(imgstat==1){
        imgstat = 2;
        herotext1.style.opacity = "0";
        heroimg1.style.opacity = "0";
        setTimeout(function(){
            herotext1.style.display = "none";
            heroimg1.style.display = "none";
            herotext2.style.display = "flex";
            heroimg2.style.display = "flex";
            setTimeout(function(){
                herotext2.style.opacity = "1";
                heroimg2.style.opacity = "1";
                setTimeout(imghero,3000);
            },50)
        },500)
    } else if(imgstat==2){
        imgstat = 1;
        herotext2.style.opacity = "0";
        heroimg2.style.opacity = "0";
        setTimeout(function(){
            herotext2.style.display = "none";
            heroimg2.style.display = "none";
            herotext1.style.display = "flex";
            heroimg1.style.display = "flex";
            setTimeout(function(){
                herotext1.style.opacity = "1";
                heroimg1.style.opacity = "1";
                setTimeout(imghero,3000);
            },50)
        },500)
    }
}

setTimeout(imghero,500);

img1frasehero2.style.display = "flex";
img1frasehero2.style.opacity = "1";
img2frasehero2.style.display = "none";
img2frasehero2.style.opacity = "0";
img3frasehero2.style.display = "none";
img3frasehero2.style.opacity = "0";

function imghero2() {
    if(imgstat2==1){
        imgstat2 = 2;
        img1frasehero2.style.opacity = "0";
        setTimeout(function(){
            img1frasehero2.style.display = "none";
            img2frasehero2.style.display = "flex";
            setTimeout(function(){
                img2frasehero2.style.opacity = "1";
                setTimeout(function(){
                    imghero2();
                },3000)
            },50)
        },500)
    } else if(imgstat2==2){
        imgstat2 = 3;
        img2frasehero2.style.opacity = "0";
        setTimeout(function(){
            img2frasehero2.style.display = "none";
            img3frasehero2.style.display = "flex";
            setTimeout(function(){
                img3frasehero2.style.opacity = "1";
                setTimeout(function(){
                    imghero2();
                },3000)
            },50)
        },500)
    } else if(imgstat2==3){
        imgstat2 = 1;
        img3frasehero2.style.opacity = "0";
        setTimeout(function(){
            img3frasehero2.style.display = "none";
            img1frasehero2.style.display = "flex";
            setTimeout(function(){
                img1frasehero2.style.opacity = "1";
                setTimeout(function(){
                    imghero2();
                },3000)
            },50)
        },500)
}
}

imghero2();

function imghero2loop(){
    if(currentseccion == 1){
    imgimghero2.style.transform = "translateY(-20px)";
    setTimeout(function(){
        imgimghero2.style.transform = "translateY(20px)";
        setTimeout(function(){
            imghero2loop();
        },2000)
    },2000)
}
}




 //scroll del hero4
let iconshero4 = document.getElementById('iconshero4');
let hicons = iconshero4.offsetWidth;
let scrollAmount = 0;
function intervalohero4(){
    if (currentseccion==1){
let scrollInterval = setInterval(function(){
    iconshero4.scrollLeft += 10;
    scrollAmount += 10;
    
    if(scrollAmount >= hicons){
        clearInterval(scrollInterval);
        let scrollAmount = hicons;
        intervalohero4reverse();
    }
}, 100);
}
}
function intervalohero4reverse(){
    if (currentseccion==1){
let scrollInterval = setInterval(function(){
    iconshero4.scrollLeft -= 10;
    scrollAmount -= 10;
    
    if(scrollAmount <= 0){
        clearInterval(scrollInterval);
        let scrollAmount = 0;
        intervalohero4();
    }
}, 100);
}
}




//servicios

const serviciosreel = document.getElementById('serviciosreel');
const serviciosreelcont = document.getElementById('serviciosreelcont');
const servicioscard1 = document.getElementById('servicioscard1');
    const servicios1int = document.getElementById('servicios1int');
    const servicios1cont = document.getElementById('servicios1cont');
const servicioscard2 = document.getElementById('servicioscard2');
    const servicios2int = document.getElementById('servicios2int');
    const servicios2cont = document.getElementById('servicios2cont');
const servicioscard3 = document.getElementById('servicioscard3');
    const servicios3int = document.getElementById('servicios3int');
    const servicios3cont = document.getElementById('servicios3cont');
const servicioscard4 = document.getElementById('servicioscard4');
    const servicios4int = document.getElementById('servicios4int');
    const servicios4cont = document.getElementById('servicios4cont');
const servicioscard5 = document.getElementById('servicioscard5');
    const servicios5int = document.getElementById('servicios5int');
    const servicios5cont = document.getElementById('servicios5cont');
const servicioscard6 = document.getElementById('servicioscard6');
    const servicios6int = document.getElementById('servicios6int');
    const servicios6cont = document.getElementById('servicios6cont');
const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const closeservicios = document.getElementById('closeservicios');
let scrollamo = 0;


arrow2.addEventListener('click',function(){
    serviciosreel.scrollTo(serviciosreelcont.offsetWidth,0);
})
arrow1.addEventListener('click',function(){
    serviciosreel.scrollTo(0,0);
})


servicioscard1.addEventListener('click',function(){
    servicioscard1.style.zIndex = "700";
    servicioscard1.style.position = "absolute";
    servicioscard1.style.width = "100%";
    servicioscard1.style.height = "100%";
    servicioscard1.style.bottom = "0px";
    servicioscard1.style.left = "0px";
    closeservicios.style.display = "flex";
    servicios1int.style.display = "none";
    servicios1cont.style.display = "flex";
    setTimeout(function(){servicios1cont.style.opacity = "1";},1000)
})
servicioscard2.addEventListener('click',function(){
    servicioscard2.style.zIndex = "700";
    servicioscard2.style.position = "absolute";
    servicioscard2.style.width = "100%";
    servicioscard2.style.height = "100%";
    servicioscard2.style.bottom = "0px";
    servicioscard2.style.left = "0px";
    closeservicios.style.display = "flex";
    servicios2int.style.display = "none";
    servicios2cont.style.display = "flex";
    setTimeout(function(){servicios2cont.style.opacity = "1";},1000)
})
servicioscard3.addEventListener('click',function(){
    servicioscard3.style.zIndex = "700";
    servicioscard3.style.position = "absolute";
    servicioscard3.style.width = "100%";
    servicioscard3.style.height = "100%";
    servicioscard3.style.bottom = "0px";
    servicioscard3.style.left = "0px";
    closeservicios.style.display = "flex";
    servicios3int.style.display = "none";
    servicios3cont.style.display = "flex";
    setTimeout(function(){servicios3cont.style.opacity = "1";},1000)
})
servicioscard4.addEventListener('click',function(){
    servicioscard4.style.zIndex = "700";
    servicioscard4.style.position = "absolute";
    servicioscard4.style.width = "100%";
    servicioscard4.style.height = "100%";
    servicioscard4.style.bottom = "0px";
    servicioscard4.style.left = "0px";
    servicios4int.style.display = "none";
    closeservicios.style.display = "flex";
    servicios4cont.style.display = "flex";
    setTimeout(function(){servicios4cont.style.opacity = "1";},1000)
})
servicioscard5.addEventListener('click',function(){
    servicioscard5.style.zIndex = "700";
    servicioscard5.style.position = "absolute";
    servicioscard5.style.width = "100%";
    servicioscard5.style.height = "100%";
    servicioscard5.style.bottom = "0px";
    servicioscard5.style.left = "0px";
    servicios5int.style.display = "none";
    closeservicios.style.display = "flex";
    servicios5cont.style.display = "flex";
    setTimeout(function(){servicios5cont.style.opacity = "1";},1000)
})
servicioscard6.addEventListener('click',function(){
    servicioscard6.style.zIndex = "700";
    servicioscard6.style.position = "absolute";
    servicioscard6.style.width = "100%";
    servicioscard6.style.height = "100%";
    servicioscard6.style.bottom = "0px";
    servicioscard6.style.left = "0px";
    servicios6int.style.display = "none";
    closeservicios.style.display = "flex";
    servicios6cont.style.display = "flex";
    setTimeout(function(){servicios6cont.style.opacity = "1";},1000)
})






closeservicios.addEventListener('click',resetservicios)


function resetservicios(){
    servicios1cont.style.opacity = "0";
    setTimeout(function(){
    servicios1cont.style.display = "none";
    servicioscard1.style.width = "200px";
    servicioscard1.style.height = "100%";
    servicioscard1.style.zIndex = "10";
    servicioscard1.style.position = "relative";
    servicioscard1.style.bottom = "auto";
    servicioscard1.style.bottom = "auto";
    servicios1int.style.display = "flex";
},500);

    servicios2cont.style.opacity = "0";
    setTimeout(function(){
    servicios2cont.style.display = "none";
    servicioscard2.style.width = "300px";
    servicioscard2.style.height = "100%";
    servicioscard2.style.zIndex = "10";
    servicioscard2.style.position = "relative";
    servicioscard2.style.bottom = "auto";
    servicioscard2.style.bottom = "auto";
    servicios2int.style.display = "flex";
},500);

    servicios3cont.style.opacity = "0";
    setTimeout(function(){
    servicios3cont.style.display = "none";
    servicioscard3.style.width = "300px";
    servicioscard3.style.height = "100%";
    servicioscard3.style.zIndex = "10";
    servicioscard3.style.position = "relative";
    servicioscard3.style.bottom = "auto";
    servicioscard3.style.bottom = "auto";
    servicios3int.style.display = "flex";
},500);

    servicios4cont.style.opacity = "0";
    setTimeout(function(){
    servicios4cont.style.display = "none";
    servicioscard4.style.width = "300px";
    servicioscard4.style.height = "100%";
    servicioscard4.style.zIndex = "10";
    servicioscard4.style.position = "relative";
    servicioscard4.style.bottom = "auto";
    servicioscard4.style.bottom = "auto";
    servicios4int.style.display = "flex";
},500);
    
    servicios5cont.style.opacity = "0";
    setTimeout(function(){
    servicios5cont.style.display = "none";
    servicioscard5.style.width = "300px";
    servicioscard5.style.height = "100%";
    servicioscard5.style.zIndex = "10";
    servicioscard5.style.position = "relative";
    servicioscard5.style.bottom = "auto";
    servicioscard5.style.bottom = "auto";
    servicios5int.style.display = "flex";
},500);

    servicios6cont.style.opacity = "0";
    setTimeout(function(){
    servicios6cont.style.display = "none";
    servicioscard6.style.width = "300px";
    servicioscard6.style.height = "100%";
    servicioscard6.style.zIndex = "10";
    servicioscard6.style.position = "relative";
    servicioscard6.style.bottom = "auto";
    servicioscard6.style.bottom = "auto";
    servicios6int.style.display = "flex";
},500);

closeservicios.style.display = "none";
}




//botones preguntas frecuentes

const preguntas1 = document.getElementById('preguntas1');
const preguntas1txt = document.getElementById('preguntas1txt');
let pregunta1sts = 0;

const preguntas2 = document.getElementById('preguntas2');
const preguntas2txt = document.getElementById('preguntas2txt');
let pregunta2sts = 0;

const preguntas3 = document.getElementById('preguntas3');
const preguntas3txt = document.getElementById('preguntas3txt');
let pregunta3sts = 0;

preguntas1.addEventListener('click', function(){
    if (pregunta1sts == 0){
        pregunta1sts = 1;
        preguntas1txt.style.display = "flex";
        setTimeout(function(){
            preguntas1txt.style.marginTop = "0px";
            preguntas1txt.style.opacity = "1";
        },100)
    } else if(pregunta1sts == 1) {
        pregunta1sts = 0;
        preguntas1txt.style.marginTop = "-50px";
        preguntas1txt.style.opacity = "0";
        setTimeout(function(){preguntas1txt.style.display = "none";},500)
    }
});
preguntas2.addEventListener('click', function(){
    if (pregunta2sts == 0){
        pregunta2sts = 1;
        preguntas2txt.style.display = "flex";
        setTimeout(function(){
            preguntas2txt.style.marginTop = "0px";
            preguntas2txt.style.opacity = "1";
        },100)
    } else if(pregunta2sts == 1) {
        pregunta2sts = 0;
        preguntas2txt.style.marginTop = "-80px";
        preguntas2txt.style.opacity = "0";
        setTimeout(function(){preguntas2txt.style.display = "none";},500)
    }
});
preguntas3.addEventListener('click', function(){
    if (pregunta3sts == 0){
        pregunta3sts = 1;
        preguntas3txt.style.display = "flex";
        setTimeout(function(){
            preguntas3txt.style.marginTop = "0px";
            preguntas3txt.style.opacity = "1";
        },100)
    } else if(pregunta3sts == 1) {
        pregunta3sts = 0;
        preguntas3txt.style.marginTop = "-80px";
        preguntas3txt.style.opacity = "0";
        setTimeout(function(){preguntas3txt.style.display = "none";},500)
    }
});

//primer slider testimonios

const tstleftarrow = document.getElementById('tstleftarrow');
const tstrightarrow = document.getElementById('tstrightarrow');
const tstreelcont = document.getElementById('tstreelcont');
const tstreelbox = document.getElementById('tstreelbox');

tstleftarrow.addEventListener('click',function(){
    tstreelcont.scrollTo(0,0);
})
tstrightarrow.addEventListener('click',function(){
    tstreelcont.scrollTo(tstreelbox.offsetWidth,0);
})

//segundo slider testimonios clientes
 //scroll del hero4
 let reelclienteststcont = document.getElementById('reelclienteststcont');
 let reelclienteststbox = document.getElementById('reelclienteststbox');
 let scrollAmount2 = 0;

function intervalohero7(){
     if (currentseccion==1){
        reelclienteststcont.scrollLeft += 10;
        scrollAmount2 += 10;
        if (scrollAmount2 >= reelclienteststbox.offsetWidth){
            reelclienteststcont.scrollLeft = 0;
            scrollAmount2 = 0;
            setTimeout(intervalohero7,1000);
        } else {
            setTimeout(intervalohero7,50);
        }
     }
 }


 imghero2loop();
 intervalohero7();
 intervalohero4();


 //fixes

 const fiximg1 = document.getElementById('fiximg1');
let fiximg1w = fiximg1.offsetWidth;
let fiximg1h = fiximg1.offsetHeight;

function fiximages(){
    fiximg1.style.height = fiximg1w + "px";
}

fiximages();


const proxi = document.getElementById('proxi');
let proxst = 0;


btnclientes.addEventListener('click',prox);
btnclientes2.addEventListener('click',prox);

function prox() {
    if(proxst == 0){
        proxst = 1;
        proxi.style.display = "flex";
        setTimeout(function(){
            proxi.style.display = "none";
            proxst = 0;
        },1000)
    }
}