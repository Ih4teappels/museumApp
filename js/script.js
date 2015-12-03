window.addEventListener("load",function(){

    var artwork = [
        {
            id: 0,
            name: 'Nachtwacht',
            info: 'De Nachtwacht is het enige schuttersstuk...',
            image: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200'
            
        },
        {
            id: 1,
            name: 'Aardappeleters',
            info: 'Van Gogh benadrukte die rauwe werkelijkheid door haar te overdrijven. Het was donker en krap in de hut, dus moest het op zijn schilderij heel donker en benauwend zijn. Hij gebruikte alleen groenen en bruinen, de kleuren van de aarde die het gezin bewerkte. Voor het effect voegde hij enkele lichtpartijen toe. De modellen hadden grove gezichten en ruwe handen, dus gaf hij ze in het schilderij bonkige tronies en knokige kolenschoppen. ',
            image: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200'
            
        },
        {
            id: 2,
            name: 'Scream',
            info: 'Scream is het enige schuttersstuk...',
            image: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200'
            
        },
        {
            id: 3,
            name: 'Waterfall',
            info: 'Waterfall is het enige schuttersstuk...',
            image: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200'
            
        }
    ]

 $('#reader').html5_qrcode(function(data){
        document.getElementById("name").innerHTML = artwork[data].name;
        document.getElementById("info").innerHTML = artwork[data].info;
        document.getElementById('image').src = artwork[data].image;
        document.getElementById('reader').style.visibility  = 'hidden';
        document.getElementById('readerInfo').style.visibility  = 'hidden';
        document.getElementById('showReader').style.visibility  = 'visible';

    },
    function(error){
        // console.log("error : " + error);
    }, function(videoError){
        // console.log("videoError : " + videoError);
    }
);

});