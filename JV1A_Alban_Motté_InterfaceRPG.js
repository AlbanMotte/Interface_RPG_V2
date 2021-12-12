var boite_action = document.getElementsByClassName ("action");

//Arthur
var PV_Arthur_1 = document.getElementsByClassName("pv_1");
var MP_Arthur_1 = document.getElementsByClassName("mp_1");
var hero_1 = document.getElementsByClassName ("image_hero_1");
var pv_hero_1 = 130;

//Malerian
var PV_Malerian_1 = document.getElementsByClassName("pv_2");
var MP_Malerian_1 = document.getElementsByClassName("mp_2");
var hero_2 = document.getElementsByClassName ("image_hero_2");
var pv_hero_2 = 120;

//Gustave
var PV_Gustave_1 = document.getElementsByClassName("pv_3");
var MP_Gustave_1 = document.getElementsByClassName("mp_3");
var hero_3 = document.getElementsByClassName ("image_hero_3");
var pv_hero_3 = 110;

//Katlin
var PV_Katlin_1 = document.getElementsByClassName("pv_4");
var MP_Katlin_1 = document.getElementsByClassName("mp_4");
var hero_4 = document.getElementsByClassName ("image_hero_4");
var pv_hero_4 = 100;

//PV Monstres
var PV_Monstre1 = document.getElementsByClassName("pv_Monstre1");
var PV_Monstre2 = document.getElementsByClassName("pv_Monstre2");
var PV_Monstre3 = document.getElementsByClassName("pv_Monstre3");

var PV_Monstre_1 = 100;
var PV_Monstre_2 = 150;
var PV_Monstre_3 = 200;


// IMAGE Monstres
var imageMonstre1 = document.getElementsByClassName("image_ennemi_1")
var imageMonstre2 = document.getElementsByClassName("image_ennemi_2")
var imageMonstre3 = document.getElementsByClassName("image_ennemi_3")


//BOUTONS
var attaque = document.getElementById ("Attaque");
var defense = document.getElementById ("Defense");
var magie = document.getElementById ("Magie");


//Dialogue
var bulle_dialogue = document.getElementById("bulle");

//Tours
var tour_player = 0

//Riposte
function riposte(i) {
    setTimeout(function(){
        //Riposte aléatoire des monstres
        aleatoire = Math.floor(Math.random() * 4);
    if (aleatoire == 0) {
        pv_hero_1 -= 10;
        bulle_dialogue.innerHTML = "Arthur a perdu 10 PV !";
        if (pv_hero_1 <= 0) {
            hero_1.style.visibility = "hidden";
            bulle_dialogue.innerHTML = "Arthur est K.O !";
        }
    }
    if (aleatoire == 1) {
        pv_hero_2 -= 10;
        bulle_dialogue.innerHTML = "Malerian a perdu 10 PV !";
        if (pv_hero_2 <= 0) {
            hero_2.style.visibility = "hidden";
            bulle_dialogue.innerHTML = "Malerian est K.O !";


        }
    }
    if (aleatoire == 2) {
        pv_hero_3 -= 10;
        bulle_dialogue.innerHTML = "Gustave a perdu 10 PV !";
        if (pv_hero_3 <= 0) {
            hero_3.style.visibility = "hidden";
            bulle_dialogue.innerHTML = "Gustave est K.O !";


        }
    }
    if (aleatoire == 3) {
        pv_hero_4 -= 10;
        bulle_dialogue.innerHTML = "Katlin a perdu 10 PV !";
        if (pv_hero_4 <= 0) {
            hero_4.style.visibility = "hidden";
            bulle_dialogue.innerHTML = "Katlin est K.O !";


        }
    }
    PV_Arthur_1.innerHTML =pv_hero_1
    PV_Malerian_1.innerHTML = pv_hero_2
    PV_Gustave_1.innerHTML = pv_hero_3
    PV_Katlin_1.innerHTML = pv_hero_4
    }, 2000 * (i+1));
    
}


attaque.onclick = function () {

    //Attaque Héros
    aleatoire = Math.floor(Math.random() * 3);
    if (aleatoire == 0) {
        PV_Monstre_1 -= 20;
        bulle_dialogue.innerHTML = "Le Monstre 1 a perdu 20 PV !";
        if (PV_Monstre_1 <= 0) {
            imageMonstre1.style.visibility = "hidden";
            bulle_dialogue.innerHTML = "Vous avez terrassé un monstre !";

        }
    }
    if (aleatoire == 1) {
        PV_Monstre_2 -= 20;
        bulle_dialogue.innerHTML = "Le Monstre 2 a perdu 20 PV !";
        if (PV_Monstre_2 <= 0) {
            imageMonstre2.style.visibility = "hidden";
            bulle_dialogue.innerHTML = "Vous avez terrassé un monstre !";
        }
    }
    if (aleatoire == 2) {
        PV_Monstre_3 -= 20;
        bulle_dialogue.innerHTML = "Le Monstre 3 a perdu 20 PV !";
        if (PV_Monstre_3 <= 0) {
            imageMonstre3.style.visibility = "hidden";
            bulle_dialogue.innerHTML = "Vous avez terrassé un monstre !";
        }
    }
    PV_Monstre1.innerHTML = PV_Monstre_1;
    PV_Monstre2.innerHTML = PV_Monstre_2;
    PV_Monstre3.innerHTML = PV_Monstre_3;

    // Tour des joueurs et animation
    if ( tour_player == 0) {
        hero_1.animate([
            // Mouvement
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            // Durée
            duration: 200,

        });
    }
    if ( tour_player == 1) {
        hero_2.animate([
            // Mouvement
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            // Durée
            duration: 200,

        });
    }
    if ( tour_player == 2) {
        hero_3.animate([
            // Mouvement
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            // Durée
            duration: 200,

        });
    }
    if ( tour_player == 3) {
        hero_4.animate([
            // Mouvement
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            // Durée
            duration: 200,

        });
    }
    tour_player += 1
    if ( tour_player > 3) {
        tour_player = 0;
        for (i=0;i<3;i++){
            riposte(i)

        }
        


    }

}

//Notes et Problèmes :
//-Mon combat est écrit mais ne se lance pas, je ne comprends pas pourquoi
//-J'ai reçu l'aide de différentes personnes
//-J'ai réussi à avoir un visuel mais mon système de combat refuse de se lancer, si vous pouviez me laisser une note m'expliquant pourquoi, je vous en remercie