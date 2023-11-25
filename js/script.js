// 23-11-2023
// Ciao ragazze e ciao ragazzi!
// Esercizio di oggi: :orologio1: Boom Countdown :collisione:
// nome repo: js-simon'


// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la fine di quest'anno!
// Che scadra' quindi a capodanno!


// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?



// Dom Elements
const actualDate = document.querySelector('#actualDate');
const inDateToArrive = document.querySelector('#dateToArrive');
const distanceDate = document.querySelector('#distanceDate');
const calculate =  document.querySelector('#calc');




    

// Update the count down every 1 second
var x = setInterval(function() {

    // Set the date we're counting down to
    let countDownDate = new Date(inDateToArrive.value).getTime();

    // Distance from the date we're counting down
    let distance;
    
    // Get today's date and time
    let now = new Date().getTime();
    actualDate.innerHTML= new Date(now)
    
    // Find the distance between now and the count down date
    distance = countDownDate - now;

    //   Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Concatenate the days and hours with and minutes the seconds
    distanceDate.innerHTML = `${days} - ${hours}:${minutes}:${seconds}`;

}, 1000);












