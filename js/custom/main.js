
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

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
