window.addEventListener("load",function(){

	var codes = ["1","2","3","4"];


    var artwork = [
        {
            id: 3,
            name: 'Nachtwatch',
            img_src: 'http://lh3.ggpht.com/kyli_fpElvyJPO-SmYL6NE4h_5meEj_-3Q3gqzc-DJSkNnPLwl6BCuyllV5yWA=s1200',
            info: 'De Nachtwacht is het enige schuttersstuk...'
        }
    ]

 $('#reader').html5_qrcode(function(data){
<<<<<<< HEAD
        console.log("Scan Succes! : " + data);
         document.getElementById("info").innerHTML = artwork[data].name;
=======

        console.log("HUEHUEHUEHUEHUEHUEHUE" + data)
        console.log("Scan Succes! : " + data);

>>>>>>> 9e52ed560f4cb573bec376e2068aa64c41148f36
    },
    function(error){
        console.log("error : " + error);
    }, function(videoError){
        console.log("videoError : " + videoError);
    }
);

});