function init(){
	var id=getParameterByName("id");
	countdown(1,"visualizarProducto.php?terminado&id="+id);z
	$("#pujar").click(function(){
		 $( "#dialog-form" ).dialog( "open" );
	});
	$( "#dialog-form" ).dialog({
		 autoOpen: false,
		 height: 200,
		 width: 300,
		 modal: true,
		 buttons: {
		 "¡Pujar!": function() {
		 var bValid = true;
		 
		 bValid = bValid && !isNaN($("#puja").val());
		 if ( bValid ) {
			 pujar();
			 $( this ).dialog( "close" );
		 }
		 else{
			 alert("¡Sólo se aceptan números!");
			 location.href = "visualizarProducto.php?tipo=subasta&id="+id;
			 $( this ).dialog( "close" );
		 }
		 },
		 Cancelar: function() {
		 $( this ).dialog( "close" );
		 }
		 },
		 close: function() {
		 allFields.val( "" ).removeClass( "ui-state-error" );
		 }
	});
	
	$('#slider').nivoSlider({
	    effect: 'random',               // Specify sets like: 'fold,fade,sliceDown'
	    slices: 15,                     // For slice animations
	    boxCols: 8,                     // For box animations
	    boxRows: 4,                     // For box animations
	    animSpeed: 500,                 // Slide transition speed
	    pauseTime: 8000,                // How long each slide will show
	    startSlide: 0,                  // Set starting Slide (0 index)
	    directionNav: true,             // Next & Prev navigation
	    controlNav: true,               // 1,2,3... navigation
	    controlNavThumbs: false,        // Use thumbnails for Control Nav
	    pauseOnHover: true,             // Stop animation while hovering
	    manualAdvance: false,           // Force manual transitions
	    prevText: 'Prev',               // Prev directionNav text
	    nextText: 'Next',               // Next directionNav text
	    randomStart: false,             // Start on a random slide
	    beforeChange: function(){},     // Triggers before a slide transition
	    afterChange: function(){},      // Triggers after a slide transition
	    slideshowEnd: function(){},     // Triggers after all slides have been shown
	    lastSlide: function(){},        // Triggers when last slide is shown
	    afterLoad: function(){}         // Triggers when slider has loaded
	
	 });
	return false;

	
}

function pujar() {
	$.ajax({
		type: "POST",
		url: "visualizarProducto.php",
		data : $("#datosPuja").serialize(),
	})
	.done(function(info){
		try{
			var data = JSON.parse(info);
			if (data.status == 200){
				messageAndRedirect(data.msg,data.url);
			}
			else
				error(data.msg);
		}catch(e){
			alert("Error al enviar la puja.");
			console.log(e);
		}
	})

	.fail(function(){
		alert("Error al pujar. Revise su conexión a Internet.");
	});


}



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/* 
* @Necesita un input que sea <input type="hidden" value=tiempo_hasta_finalizacion(seg) name=la_id_donde_quieres _que_aparezca class="countdown">
*
* function countdown(showDays,red,redTime)
* showDays: (1 || 0) 1-> muestra dias que faltan, 0 -> solo horas
* red: (string) direccion a la que quieres que vaya cuando llegue a 0
* redTime: lapse de tiempo, una vez finalizado, para que redireccione
*/
function countdown(showDays,red,redTime){
	//para que no se superpongan las llamadas a las funciones
	if(typeof(ssid)!=='undefined')
		window.clearTimeout(ssid);
	
	//variables
	var mins = 0;
	var horas = 0;
	var dias = 0;
	var date = new Date();
	var seconds = date.getTime()/1000;
	conDias = showDays;
	if(typeof(conDias) === 'undefined'){
		conDias = false;
	}	
	
	redirect = red;
	if(typeof(redirect) === 'undefined'){
		redirect = false;
	}	
	
	timeRed = redTime;
	if(typeof(timeRed) === 'undefined'){
		timeRed = 450;
	}	

	//cuenta regresiva
	todos = $(".countdown");
	for(i=0;i<todos.length;i++){
		endTime = todos[i].value;
		id = todos[i].name;
		sobran = Math.ceil((endTime - seconds));
		if ( sobran <= 0 ) {
			$('#'+id)[0].innerHTML = "0:00:00";
			if(redirect){
				window.setTimeout('document.location.href="'+redirect+'";', timeRed);
			}
		} else {
			if ( sobran > 59) {
				mins = Math.floor( sobran / 60);
				sobran = sobran - mins * 60;
			}else
				mins = 0;
				
			if ( mins > 59) {
				horas = Math.floor( mins / 60);
				mins = mins - horas * 60;
			}else
				horas = 0;
				
			if(conDias){
				if(horas > 24) {
					dias = Math.floor( horas / 24);
					horas = horas - dias * 24;
				}
			}
			if ( sobran < 10 ) {
				sobran = "0" + sobran;
			}
			if ( mins < 10 ) {
				mins = "0" + mins;
			}
			if(conDias){
				if(dias > 0)
					$('#'+id)[0].innerHTML = dias + "d " + horas + ":" + mins + ":" + sobran;
				else
					$('#'+id)[0].innerHTML = horas + ":" + mins + ":" + sobran;					
			}else{
				$('#'+id)[0].innerHTML = horas + ":" + mins + ":" + sobran;
			}

		}
	}
	ssid = window.setTimeout("countdown(conDias,redirect,timeRed)", 1000);
}








