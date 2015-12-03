window.addEventListener("load",function(){

	var codes = ["1","2","3","4"];


    var artwork = [
        {
            id: 0,
            name: 'Nachtwatch',
            img_src: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200',
            info: 'De Nachtwacht is het enige schuttersstuk...'
        },
        {
        id: 1,
        name: 'Aardappeleters',
        img_src: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200',
        info: 'De Aardappeleters is het enige schuttersstuk...'
        },
        {
            id: 2,
            name: 'Scream',
            img_src: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200',
            info: 'Scream is het enige schuttersstuk...'
        },
        {
            id: 3,
            name: 'Waterfall',
            img_src: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200',
            info: 'Waterfall is het enige schuttersstuk...'
        }
    ]

 $('#reader').html5_qrcode(function(data){
         document.getElementById("info").innerHTML = artwork[data].name;
         document.getElementById('<img src=').innerHTML = artwork[data].img_src;
         document.getElementById("info").innerHTML = artwork[data].info;
    },
    function(error){
        // console.log("error : " + error);
    }, function(videoError){
        // console.log("videoError : " + videoError);
    }
);

});