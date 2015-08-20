
function randOrd() {
    return (Math.round(Math.random())-0.5); 
}


    var klasses = [ "nexus6", "s6", "nexus5", "motoX" ];
    klasses.sort( randOrd );
    $("body").each(function(i, val) {
        $(this).addClass(klasses[i]);
    });




var noInteractions = function() {
	$(".circle-cont i").toggleClass("zmdi-mic zmdi-mail-send");
	$(this).val("Sorry ;)");
	$(".chat-window").addClass("alert");
	$(this).focus;
}


$(".message").focus(noInteractions);


$(".zmdi.zmdi-close").click(function() {

	var overlays = $(".alert-card,.alert-overlay");
	overlays.addClass("reverse");
	overlays.one("webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd Animationend",   
    
    function(e) {
    	
	overlays.removeClass("reverse");
    $(".chat-window").removeClass("alert");
    $(".circle-cont i").toggleClass("zmdi-mail-send zmdi-mic");
	$(".message").val("").attr("disabled","disabled").attr("placeholder","Sorry ;)");

  });
}); 