window.addEventListener("load",function(){

	var codes = ["1","2","3","4"];



 $('#reader').html5_qrcode(function(data){
 	if (data == "3") {
        	console.log("HUEHUEHUEHUEHUEHUEHUE" + data)
        console.log("Scan Succes! : " + data);

        };
    },
    function(error){
        console.log("error : " + error);
    }, function(videoError){
        console.log("videoError : " + videoError);
    }
);

});