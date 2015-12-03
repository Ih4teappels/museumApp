window.addEventListener("load",function(){

    var artwork = [
    // Hier worden al de schilderijen gedefined
        {
            id: 0,
            name: 'Nachtwacht',
            info: 'De Nachtwacht is het enige schuttersstuk van de Nederlandse kunstschilder Rembrandt van Rijn, geschilderd tussen 1639 en 1642. Officieel heet Rembrandts bekendste schilderij De compagnie van kapitein Frans Banning Cocq en luitenant Willem van Ruytenburgh maakt zich gereed om uit te marcheren.',
            image: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200'
            
        },
        {
            id: 1,
            name: 'Aardappeleters',
            info: 'Van Gogh benadrukte die rauwe werkelijkheid door haar te overdrijven. Het was donker en krap in de hut, dus moest het op zijn schilderij heel donker en benauwend zijn. Hij gebruikte alleen groenen en bruinen, de kleuren van de aarde die het gezin bewerkte. Voor het effect voegde hij enkele lichtpartijen toe. De modellen hadden grove gezichten en ruwe handen, dus gaf hij ze in het schilderij bonkige tronies en knokige kolenschoppen. ',
            image: 'http://www.blog.deplanteneter.nl/previews/2013/11/13/media_171_178275_w900.jpg'
            
        },
        {
            id: 2,
            name: 'Scream',
            info: 'The Scream (Norwegian: Skrik) is the popular name given to each of four versions of a composition, created as both paintings and pastels, by the Expressionist artist Edvard Munch between 1893 and 1910. Der Schrei der Natur (The Scream of Nature) is the title Munch gave to these works, all of which show a figure with an agonized expression against a landscape with a tumultuous orange sky.',
            image: 'http://www.thelocal.no/userdata/images/article/213ce8974ac6308016f4e94ab805024bd04fdf4c2517d0910fac71f94e954ca1.jpg'
            
        },
        {
            id: 3,
            name: 'Waterfall',
            info: 'Waterfall (Waterval) is a lithograph by the Dutch artist M. C. Escher, first printed in October 1961. It shows a physically impossible perpetual motion machine where water from the base of a waterfall appears to run downhill along the water path before reaching the top of the waterfall. While most two-dimensional artists use relative proportions to create an illusion of depth, Escher here and elsewhere uses conflicting proportions to create a visual paradox. The waterfalls leat has the structure of two Penrose triangles. A Penrose triangle is an impossible object designed by Oscar Reutersvärd in 1934, and found independently by Roger Penrose in 1958.',
            image: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Escher_Waterfall.jpg'
            
        }
    ]

    var notificationBar = new NotificationBar(".notification-bar");

    

 $('#reader').html5_qrcode(function(data){
    // haalt de scan info en de scanner weg en laat de informatie over het schilderij zien
        document.getElementById("name").innerHTML = artwork[data].name;
        document.getElementById("info").innerHTML = artwork[data].info;
        document.getElementById('image').src = artwork[data].image;
        document.getElementById('image').style.visibility  = 'visible';
        document.getElementById('reader').style.visibility  = 'hidden';
        document.getElementById('readerInfo').style.visibility  = 'hidden';
        document.getElementById('showReader').style.visibility  = 'visible';

        /** notificatiebalk met informatie */
        notificationBar.showMessage("Klik op scan om terug te gaan!");

    },
    function(error){
        // console.log("error : " + error);
    }, function(videoError){
        // console.log("videoError : " + videoError);
    }
);


// Function om terug te gaan naar de scanpage vanaf de infopage door bepaalde dingen te show/hiden
 function readerShow() {
    document.getElementById('reader').style.visibility  = 'visible';
    document.getElementById('readerInfo').style.visibility  = 'visible';
    document.getElementById('showReader').style.visibility  = 'hidden';
 }
// EventListener die de readerShow function als een onclick aan de showReader button koppelt
 showReader.addEventListener("click", readerShow);

});