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
            info: 'De Aardappeleters is het enige schuttersstuk...',
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