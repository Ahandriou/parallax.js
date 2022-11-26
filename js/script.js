// Pretty simple huh?
var ciel = document.getElementById('ciel');

var sol = document.getElementById('sol');

var cv_rouge = document.getElementById('cv_rouge');
var corde_rouge = document.getElementById('corde_rouge');

var cv_vert = document.getElementById('cv_vert');
var corde_vert = document.getElementById('corde_vert');

var cv_mauve = document.getElementById('cv_mauve');
var corde_mauve = document.getElementById('corde_mauve');

var chateau = document.getElementById('chateau');

var arbre = document.getElementById('arbre');

var pinata = document.getElementById('pinata');
var corde_pinata = document.getElementById('corde_pinata');

var soleil = document.getElementById('soleil');

var oiseau_0 = document.getElementById('oiseau_0');

var oiseau_1 = document.getElementById('oiseau_1');

var oiseau_2 = document.getElementById('oiseau_2');

var oiseau_3 = document.getElementById('oiseau_3');

var bouton = document.getElementById('bouton');
var ecriture = document.getElementById('ecriture');
// var parallax = new Parallax(scene);


// var parallax = new Parallax(ciel,{
//     scalarX: 10,
//     scalarY:10,
//     // hoverOnly: true,
//     frictionX: 0.8,
//     invertX: true,
//     limitX : 400,
//     limitY : 400,
//     // originX: 0,
//     // originY: 0,
// });

// parallax = new Parallax(sol,{
//     scalarX: 50,
//     scalarY:50,
//     // hoverOnly: true,
//     frictionX: 1,
//     invertX: true,
//     limitX : 400,
//     limitY : 400,
//     // originX: 0,
//     // originY: 0,
// });

new Parallax(cv_rouge,{
    scalarX: 50,
    scalarY:50,
    // hoverOnly: true,
    frictionX: 0.7,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(corde_rouge,{
    scalarX: 20,
    scalarY: 20,
    // hoverOnly: true,
    frictionX: 1,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});


new Parallax(cv_vert,{
    scalarX: 50,
    scalarY:50,
    // hoverOnly: true,
    frictionX: 0.8,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(corde_vert,{
    scalarX: 15,
    scalarY: 15,
    // hoverOnly: true,
    frictionX: 1,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(cv_mauve,{
    scalarX: 70,
    scalarY: 70,
    // hoverOnly: true,
    frictionX: 0.9,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(corde_mauve,{
    scalarX: 20,
    scalarY: 20,
    // hoverOnly: true,
    frictionX: 1,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(chateau,{
    scalarX: 0,
    scalarY:0,
    // hoverOnly: true,
    frictionX: 1,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(arbre,{
    scalarX: 0,
    scalarY: 0,
    // hoverOnly: true,
    frictionX: 1,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(pinata,{
    scalarX: 50,
    scalarY:50,
    // hoverOnly: true,
    frictionX: 0.8,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(corde_pinata,{
    scalarX: 30,
    scalarY:30,
    // hoverOnly: true,
    frictionX: 1,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(soleil,{
    scalarX: 40,
    scalarY: 40,
    // hoverOnly: true,
    frictionX: 0.7,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 1,
    // originY: 1,
});

new Parallax(oiseau_0,{
    scalarX: 20,
    scalarY: 20,
    // hoverOnly: true,
    frictionX: 1,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(oiseau_1,{
    scalarX: 30,
    scalarY: 30,
    // hoverOnly: true,
    frictionX: 0.6,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(oiseau_2,{
    scalarX: 100,
    scalarY: 100,
    // hoverOnly: true,
    frictionX: 0.8,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

new Parallax(oiseau_3,{
    scalarX: 90,
    scalarY: 90,
    // hoverOnly: true,
    frictionX: 0.6,
    invertX: true,
    limitX : 400,
    limitY : 400,
    // originX: 0,
    // originY: 0,
});

// new Parallax(bouton,{
//     scalarX: 2,
//     scalarY: 2,
//     // hoverOnly: true,
//     frictionX: 1,
//     invertX: true,
//     limitX : 400,
//     limitY : 400,
//     // originX: 0,
//     // originY: 0,
// });

// new Parallax(ecriture,{
//     scalarX: 2,
//     scalarY: 2,
//     // hoverOnly: true,
//     frictionX: 1,
//     invertX: true,
//     limitX : 400,
//     limitY : 400,
//     // originX: 0,
//     // originY: 0,
// });

