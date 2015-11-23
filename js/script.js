window.addEventListener("load",function(){
 $('#reader').html5_qrcode(function(data){
        console.log("GREAGESES SUCCESES");
        console.log("GREAHT KAZAGSTAN GOTTET : " + data);
    },
    function(error){
        console.log("error : " + error);
    }, function(videoError){
        console.log("videoError : " + videoError);
    }
);

});