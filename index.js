function hideAll () {
    $("#about").hide()
    $("#projects").hide()
    $("#news").hide()
    $("#contact").hide()
}

function showPage(page) {
    $(page).fadeIn(500)
}

$(document).ready(function() {
    showPage("#about")

    $("a").click(function(){
        hideAll()
        showPage($(this).attr("href"))
    });

});