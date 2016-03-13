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
    showPage("#projects")

    $("a").click(function(){
        hideAll()
        showPage($(this).attr("href"))
    });

    $(".proj-img").mouseover(function() {
        // $( this ).grayscale();
    })

});

window.location.replace("http://www.lunayuezuo.com/maintenance.html");