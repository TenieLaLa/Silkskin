var Logo;
var MenInicio;
var Home;
var GO;
var GOTexto;
var Fin;
var Final;
/*Personajes*/
var Sole;
var Sole2;
var Selana;
var AtaqueSole1;
var AtaqueSole2;
/*Escenarios*/
var bg1;
var bg2;
var bg3;
var bg4;
var bg5;
var bg6;
var GB;
/*Informacion1*/
var Covid1;
var Covid2;
/*Informacion2*/
var Dengue1;
var Dengue2;
/*Informacion3*/
var VIH1;
var VIH2;
/*Informacion4*/
var Chikunguña1;
var Chikunguña2;
/*Informacion5*/
var Viruela1;
var Viruela2;
/*Informacion6*/
var Malaria1;
var Malaria2;
/*Historia*/
var Story;
var Story2;
var Story3;
var Story4;
var Story5;
var Story6;
/*Variables para los enemigos*/
/*PRIMER*/
let bug = [];
let bug_2 = [];
let bug_3 = [];
let bug_4 = [];
let littlebug = [];
let littlebug_2 = [];
let littlebug_3 = [];
let littlebug_4 = [];
/*SEGUNDO*/
let bug2 = [];
let littlebug2 = [];
/*TERCER*/
let bug3 = [];
let littlebug3 = [];
/*CUARTO*/
let bug4 = [];
let littlebug4 = [];
/*QUINTO*/
let bug5 = [];
let littlebug5 = [];
/*SEXTO*/
let bug6 = [];
let littlebug6 = [];
/*Niveles*/
var Continuar;
/*Pasar de Nivel*/
var PasarNivel= "0";
var timerValue = 90;
var startButton;
var Puntaje = 0;
/*OST*/
let OST;
let OST2;
let OST3;
let OST4;
let OST5;
let OST6;




//CARGAR FONDO, VIRUS
function preload(){
    /*Imagenes*/
    /*Logo*/
    Logo = loadImage("Logo.png");
    Home = loadImage("Inicio.png");
    GO = loadImage("GameOver.png");
    GOTexto = loadImage("Textos/GameOver.png");
    Fin = loadImage("Textos/Fin2.png");
    Final = loadImage("Final.png");
    /*Fondo*/
    bg1 = loadImage("Nivel1.png");
    bg2 = loadImage("Nivel2.png");
    bg3 = loadImage("Nivel3.png");
    bg4 = loadImage("Nivel4.png");
    bg5 = loadImage("Nivel5.png");
    bg6 = loadImage("Nivel6.png");
    GB = loadImage("GameOver.png");
    /*Virus*/
    Virus1 = loadImage("Virus1.png");
    Virusito1 = loadImage("Virus1-2.png");
    Virus2 = loadImage("Virus2.png");
    Virusito2 = loadImage("Virus2-2.png");
    Virus3 = loadImage("Virus3.png");
    Virusito3 = loadImage("Virus3-2.png");
    /*Jefes*/
    Jefe1 = loadImage("Jefe Virus1.png");
    Jefe2 = loadImage("Jefe Virus2.png");
    Jefe3 = loadImage("Jefe Virus3.png");
    /*Info*/
    Covid1 = loadImage("Textos/Covid1.png");
    Covid2 = loadImage("Textos/Covid2.png");
    
    Dengue1 = loadImage("Textos/Dengue1.png");
    Dengue2 = loadImage("Textos/Dengue2.png");
    
    VIH1 = loadImage("Textos/VIH1.png");
    VIH2 = loadImage("Textos/VIH2.png");
    
    Chikunguña1 = loadImage("Textos/Chikunguña1.png");
    Chikunguña2 = loadImage("Textos/Chikunguña2.png");
    
    Viruela1 = loadImage("Textos/Viruela1.png");
    Viruela2 = loadImage("Textos/Viruela2.png");
    
    Malaria1 = loadImage("Textos/Malaria1.png");
    Malaria2 = loadImage("Textos/Malaria2.png");
    /*Lore*/
    Story = loadImage("Textos/Lore1.png");
    Story2 = loadImage("Textos/Lore2.png");
    Story3 = loadImage("Textos/Lore3.png");
    Story4 = loadImage("Textos/Lore4.png");
    Story5 = loadImage("Textos/Lore5.png");
    Story6 = loadImage("Textos/Lore6.png");
    
    /*Pasar de nivel*/
    Continuar = loadImage("PasarNivel.png");
    /*Otros*/
    
    
}

//CARGAR PERSONAJES Y MOVIMIENTOS
function setup() {
    createCanvas(1350,640);
    /*Musica*/
    OST = loadSound("Hollow Knight OST - Mantis Lords.mp3");
    OST2 = loadSound("Hollow Knight OST - Broken Vessel.mp3");
    OST3 = loadSound("Hollow Knight OST - Sealed Vessel.mp3");
    OST4 = loadSound("Hollow Knight OST - Nosk.mp3");
    OST5 = loadSound("Grimm (Hollow Knight The Grimm Troupe).mp3");
    OST6 = loadSound("10 Daughter of Hallownest (Hollow Knight Gods  Nightmares).mp3");
    
    /*Imagenes*/
    /*Selana*/
    MenInicio = loadImage("Textos/Inicio.png");
    Selana = loadImage("Selana.png");
    SelanaInfectada= loadImage("Selana Infectada.png");
    /*Sole frente y detras*/
    Sole = loadImage("Sole (Frente 1).png");
    Sole2 = loadImage("Sole (Atras 2).png");
    /*Sole ataque, frente y detras*/
    AtaqueSole1 = loadImage("Sole (Frente Espada 1).png");
    AtaqueSole2 = loadImage("Sole (Atras Espada 1).png");
    /*Para enemigos*/

    /*PRIMER NIVEL*/
    for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Virus(x, y, r);
    bug.push(b);
  }
    for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Virus(x, y, r);
    littlebug.push(b);
  }
    
    
    
    /*SEGUNDO NIVEL*/
    for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Virus(x, y, r);
    bug2.push(b);
  }
    for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Virus(x, y, r);
    littlebug2.push(b);
  }
    
    
    
    /*TERCER NIVEL*/
    for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Virus(x, y, r);
    bug3.push(b);
  }
    for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Virus(x, y, r);
    littlebug3.push(b);
  }
    
    
    
    /*CUARTO NIVEL*/
    for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(60, 100);
    let b = new Virus(x, y, r);
    bug4.push(b);
  }
    
    
    
    /*QUINTO NIVEL*/
    for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(60, 100);
    let b = new Virus(x, y, r);
    bug5.push(b);
  }
    
    
    
   /*SEXTO NIVEL*/
    for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(60, 100);
    let b = new Virus(x, y, r);
    bug6.push(b);
  }
    
    
    /*Para Timer*/
    textAlign(CENTER);
    textSize(20);
    setInterval(timeIt, 1000);

}


//UBICACION DE LOS NIVELES EN EL ESPACIO


function draw() {
    if (PasarNivel == "0"){
        Inicio();
        timerValue = 90;
    }
    else if(PasarNivel == "L1"){
        PrimerNivel();
    }
    else if (PasarNivel == "L2"){
        SegundoNivel();
    }
    else if (PasarNivel == "L3"){
        TercerNivel();
    }
    else if (PasarNivel == "L4"){
        CuartoNivel();
    }
    else if (PasarNivel == "L5"){
        QuintoNivel();
    }
    else if (PasarNivel == "L6"){
        SextoNivel();
    }
    else if (PasarNivel == "Fin"){
        Creditos();
    }
}


/*PANTALLA DE INICO*/
function Inicio(){
    background(Home);
    image(Logo,225,20,900,500);
    fill(255,255,255);
    text("Defiende a la princesa de seda!", width/2, 450);
    text("Ayuda a Sole a derrotar las enfermades con el click de tu mouse.", width/2, 470);
    text("Ubica tu mouse sobre los virus y haz click para eliminarlos. Compleata 1000 puntos para pasar de nivel.", width/2, 490);
    text("¡RAPIDO! Antes de que se acabe el tiempo.", width/2, 510);
    text("Presiona 'Enter' para jugar!", width/2, 550);
    if (keyIsPressed === true) {
        PasarNivel= "L1";
        
    }
}


/*PRIMER NIVEL*/


function PrimerNivel(){
    /*Fondo*/
    background(bg1);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug.length; i++) {   
    bug[i].move();
    bug[i].show(); 
  }
    for (let i = 0; i < littlebug.length; i++) { 
    littlebug[i].move();
    littlebug[i].show2();
  }
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Info*/
    for (let i = 0; i < bug.length; i++) {
        if (bug[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
            image(Covid1,165, 100, 1000, 450);
        }     
    }
    for (let i = 0; i < littlebug.length; i++) {
        if (littlebug[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
           image(Covid2,165, 100, 1000,450);
        } 
  }

    

    
/*ANIMACIONES CLICK MOUSE*/
    if (mouseIsPressed) {
   background(bg1);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug.length; i++) {   
    bug[i].move();
    bug[i].show(); 
  }
    for (let i = 0; i < littlebug.length; i++) { 
    littlebug[i].move();
    littlebug[i].show2();
  }
    /*Ataque Sole*/
    image(AtaqueSole1,mouseX - 90, mouseY - 90,180,210);
  }
    
    
    
    
    /*TEXTO PARA PUNTAJE Y TIEMPO*/
    text("Puntaje: "+Puntaje,150,570);
    /*TIMER*/
    if (timerValue <= 120) {
    text("Tiempo restante: " + timerValue + " segundos",150,600);
    }
 
    if (timerValue == 0) {
    GameOver();
  }
    
    /*Pasar de nivel*/
    if(Puntaje >= 1000){
        Lore1();
    }
    
    
}


/*SEGUNDO NIVEL */


function SegundoNivel(){
    /*Fondo y Selana dormida*/
    background(bg2);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug2.length; i++) {
    bug2[i].move();
    bug2[i].show3();
  }
    for (let i = 0; i < littlebug2.length; i++) {
    littlebug2[i].move();
    littlebug2[i].show4();
  }
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Info*/
    for (let i = 0; i < bug2.length; i++) {
        if (bug2[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
            image(Dengue1,165, 100, 1000,450);
        }     
    }
    for (let i = 0; i < littlebug2.length; i++) {
        if (littlebug2[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
           image(Dengue2,165, 100, 1000,450);
        } 
  }
    
    
    
    
/*ANIMACIONES CLICK MOUSE*/
    if (mouseIsPressed) {
    /*Fondo y Selana dormida*/
    background(bg2);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug2.length; i++) {
    bug2[i].move();
    bug2[i].show3();
  }
    for (let i = 0; i < littlebug2.length; i++) {
    littlebug2[i].move();
    littlebug2[i].show4();
  }
    image(AtaqueSole1,mouseX - 90, mouseY - 90,180,210);
  }
    
    
    
    
    /*TEXTO PARA PUNTAJE Y TIEMPO*/
    text("Puntaje: "+Puntaje,150,570);
    /*TIMER*/
    if (timerValue <= 120) {
    text("Tiempo restante: " + timerValue + " segundos",150,600);
    }
 
    if (timerValue == 0) {
    GameOver();
    GameOver();
  }
    
    /*Pasar de nivel*/
    if(Puntaje>= 1000){
        Lore2();
    }
}



/*TERCER NIVEL */


function TercerNivel(){
    /*Fondo y Selana dormida*/
    background(bg3);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug3.length; i++) {
    bug3[i].move();
    bug3[i].show5();
  }
    for (let i = 0; i < littlebug3.length; i++) {
    littlebug3[i].move();
    littlebug3[i].show6();
  }
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Info*/
    for (let i = 0; i < bug3.length; i++) {
        if (bug3[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
            image(VIH1,165, 100, 1000,450);
        }     
    }
    for (let i = 0; i < littlebug3.length; i++) {
        if (littlebug3[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
           image(VIH2,165, 100, 1000, 450);
        } 
  }
    
    
    
    
/*ANIMACIONES CLICK MOUSE*/
    if (mouseIsPressed) {
    background(bg3);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug3.length; i++) {
    bug3[i].move();
    bug3[i].show5();
  }
    for (let i = 0; i < littlebug3.length; i++) {
    littlebug3[i].move();
    littlebug3[i].show6();
  }
    /*Ataque Sole*/
    image(AtaqueSole1,mouseX - 90, mouseY - 90,180,210);
  }
    
    
    
    
    /*TEXTO PARA PUNTAJE Y TIEMPO*/
    text("Puntaje: "+ Puntaje,150,570);
    /*TIMER*/
    if (timerValue <= 120) {
    text("Tiempo restante: " + timerValue + " segundos",150,600);
    }
 
    if (timerValue == 0) {
    GameOver();
  }
    
    /*Pasar de nivel*/
    if(Puntaje>= 1000){
        Lore3();
    }
}

/*CUARTO NIVEL*/

function CuartoNivel(){
    /*Fondo y Selana dormida*/
    background(bg4);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug4.length; i++) {
    bug4[i].move();
    bug4[i].show7();
  }
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Info*/
    for (let i = 0; i < bug4.length; i++) {
        if (bug4[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
            image(Chikunguña1,165, 100, 1000,450);
        }     
    }
    
    
    
    
/*ANIMACIONES CLICK MOUSE*/
    if (mouseIsPressed) {
    background(bg4);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug4.length; i++) {
    bug4[i].move();
    bug4[i].show7();
    }
    /*Ataque Sole*/
    image(AtaqueSole1,mouseX - 90, mouseY - 90,180,210);
  }
    
    
    
    
    /*TEXTO PARA PUNTAJE Y TIEMPO*/
    text("Puntaje: "+Puntaje,150,570);
    /*TIMER*/
    if (timerValue <= 120) {
    text("Tiempo restante: " + timerValue + " segundos",150,600);
    }
 
    if (timerValue == 0) {
    GameOver();
  }
    
    /*Pasar de nivel*/
    if(Puntaje>= 1000){
        Lore4();
    }
}
/*QUINTO NIVEL*/

function QuintoNivel(){
    /*Fondo y Selana dormida*/
    background(bg5);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug5.length; i++) {
    bug5[i].move();
    bug5[i].show8();
  }
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Info*/
    for (let i = 0; i < bug5.length; i++) {
        if (bug5[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
            image(Viruela1,165, 100, 1000,450);
        }     
    }
    
    
    
    
/*ANIMACIONES CLICK MOUSE*/
    if (mouseIsPressed) {
    background(bg5);
    image(Selana,width/2 - 65,1,145,225);
    for (let i = 0; i < bug5.length; i++) {
    bug5[i].move();
    bug5[i].show8();
    }
    /*Ataque Sole*/
    image(AtaqueSole1,mouseX - 90, mouseY - 90,180,210);
  }
    
    
    
    
    /*TEXTO PARA PUNTAJE Y TIEMPO*/
    text("Puntaje: "+Puntaje,150,570);
    /*TIMER*/
    if (timerValue <= 120) {
    text("Tiempo restante: " + timerValue + " segundos",150,600);
    }
 
    if (timerValue == 0) {
    GameOver();
  }
    
    /*Pasar de nivel*/
    if(Puntaje>= 1000){
        Lore5();
    }
}

/*SEXTO NIVEL*/

function SextoNivel(){
    /*Fondo y Selana dormida*/
    background(bg6);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug6.length; i++) {
    bug6[i].move();
    bug6[i].show9();
  }
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Info*/
    for (let i = 0; i < bug6.length; i++) {
        if (bug6[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
            image(Malaria1,165, 100, 1000,450);
        }     
    }
    
    
    
    
/*ANIMACIONES CLICK MOUSE*/
    if (mouseIsPressed) {
    background(bg6);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Bichos y mensajes*/
    for (let i = 0; i < bug6.length; i++) {
    bug6[i].move();
    bug6[i].show9();
    }
    /*Ataque Sole*/
    image(AtaqueSole1,mouseX - 90, mouseY - 90,180,210);
  }
    
    
    
    
    /*TEXTO PARA PUNTAJE Y TIEMPO*/
    text("Puntaje: "+Puntaje,150,570);
    /*TIMER*/
    if (timerValue <= 120) {
    text("Tiempo restante: " + timerValue + " segundos",150,600);
    }
 
    if (timerValue == 0) {
    GameOver();
  }
    
    /*Juego Superado*/
    if(Puntaje>= 1000){
        Lore6();
    }
}

/*GAME OVER*/
function GameOver(){
    background(GO);
    image(SelanaInfectada,width/2 - 65,1,145,225);
    image(GOTexto,165, 100, 1000, 450);
}


/*CREDITOS*/

function Creditos() {
    background(Final);
    image(Fin,285, 2, 780,650);
}




/*FUNCIONES PARA "LORE"*/
function Lore1(){
    background(bg1);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Lore*/
    image(Story,285, 2, 780,650);
    if (keyIsPressed === true) {
        PasarNivel= "L2";
        Puntaje=0;
        timerValue = 90;
        OST.stop();
    }
  }

function Lore2(){
    background(bg2);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Lore*/
    image(Story2,285, 2, 780,650);
    if (keyIsPressed === true) {
        PasarNivel= "L3";
        Puntaje=0;
        timerValue = 90;
        OST2.stop();
    }
    
}

function Lore3(){
    background(bg3);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Lore*/
    image(Story3,285, 2, 780,650);
    if (keyIsPressed === true) {
        PasarNivel= "L4";
        Puntaje=0;
        timerValue = 90;
        OST3.stop();
    }
    
}

function Lore4(){
    background(bg4);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Lore*/
    image(Story4,285, 2, 780,650);
    if (keyIsPressed === true) {
        PasarNivel= "L5";
        Puntaje=0;
        timerValue = 90;
        OST4.stop();
    }
    
}

function Lore5(){
    background(bg5);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Lore*/
    image(Story5,285, 2, 780,650);
    if (keyIsPressed === true) {
        PasarNivel= "L6";
        Puntaje=0;
        timerValue = 90;
        OST5.stop();
    }
    
}

function Lore6(){
    background(bg6);
    /*Selana e historia*/
    image(Selana,width/2 - 65,1,145,225);
    /*Animaciones Sole*/
    image(Sole,mouseX - 90, mouseY - 90,150,210);
    /*Lore*/
    image(Story6,285, 2, 780,650);
    if (keyIsPressed === true) {
        PasarNivel= "Fin";
        OST6.stop();
    }
}


/*FUNCIONES MOUSEPRESSESD, CLASEVIRUS Y TIMER*/



function mousePressed() {
    
 /*NIVEL 1*/    
  for (let i = bug.length - 1; i >= 0; i--) {
    if (bug[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
        if (mouseIsPressed) {
            Puntaje= Puntaje + 100;
        }
      bug.splice(i, 1);
    }
  }
  for (let i = littlebug.length - 1; i >= 0; i--) {
    if (littlebug[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
    if (mouseIsPressed) {
            Puntaje= Puntaje + 100;
        }
      littlebug.splice(i, 1);
    } 
  }
    
    
   /*NIVEL 2*/    
  for (let i = bug2.length - 1; i >= 0; i--) {
    if (bug2[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
     if (mouseIsPressed) {
            Puntaje= Puntaje + 100;
        }
      bug2.splice(i, 1);
    }
  }
  for (let i = littlebug2.length - 1; i >= 0; i--) {
    if (littlebug2[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
    Puntaje= Puntaje + 100;
      littlebug2.splice(i, 1);
    } 
  } 
     
    
   /*NIVEL 3*/    
  for (let i = bug3.length - 1; i >= 0; i--) {
    if (bug3[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
      if (mouseIsPressed) {
            Puntaje= Puntaje + 100;
        }
      bug3.splice(i, 1);
    }
  }
  for (let i = littlebug3.length - 1; i >= 0; i--) {
    if (littlebug3[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
    if (mouseIsPressed) {
            Puntaje= Puntaje + 100;
        }
      littlebug3.splice(i, 1);
    } 
  }
     
    
   /*NIVEL 4*/    
  for (let i = bug4.length - 1; i >= 0; i--) {
    if (bug4[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
     if (mouseIsPressed) {
            Puntaje= Puntaje + 100;
        }
      bug4.splice(i, 1);
    }
  } 
     
    
   /*NIVEL 5*/    
  for (let i = bug5.length - 1; i >= 0; i--) {
    if (bug5[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
      if (mouseIsPressed) {
            Puntaje= Puntaje + 100;
        }
      bug5.splice(i, 1);
    }
  }
     
    
   /*NIVEL 6*/    
  for (let i = bug6.length - 1; i >= 0; i--) {
    if (bug6[i].contains(mouseX-20 && mouseX-40, mouseY-20 && mouseY-40)) {
      Puntaje= Puntaje + 100;
      bug6.splice(i, 1);
    }
  }     
}


/*CLASE VIRUS: Para animaciones ENEMIGOS*/

class Virus {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.diameter = random(80, 140);
    this.diameter2 = random(90, 140);
    this.speed = 1;
    this.brightness = 0;
  }

    
  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

 /*Virus Nivel 1*/
  show() {
    image(Virus1,this.x, this.y,this.diameter, this.diameter);
  }
    
  show2() {
    image(Virusito1,this.x, this.y,this.diameter, this.diameter);
  }
    
 /*Virus Nivel 2*/
  show3() {
    image(Virus2,this.x, this.y,this.diameter, this.diameter);
  }
    
  show4() {
    image(Virusito2,this.x, this.y,this.diameter, this.diameter);
  }
   
 /*Virus Nivel 3*/
  show5() {
    image(Virus3,this.x, this.y,this.diameter, this.diameter);
  }
    
  show6() {
    image(Virusito3,this.x, this.y,this.diameter, this.diameter);
  }
    
/*Virus Nivel 4*/
  show7() {
    image(Jefe1,this.x, this.y,this.diameter2, this.diameter2);
  }
  
/*Virus Nivel 5*/
  show8() {
    image(Jefe2,this.x, this.y,this.diameter2, this.diameter2);
  }

/*Virus Nivel 6*/
  show9() {
    image(Jefe3,this.x, this.y,this.diameter2, this.diameter2);
  }
}

/*Timer Niveles*/
function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

/*FIN PROGRAMA*/