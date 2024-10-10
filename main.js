
/* navbar */
function hideIconBar(){
    var iconBar = document.getElementById("iconBar")
    var navigation = document.getElementById("navigation")
    iconBar.setAttribute("style", "display:none;");

    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar")
    var navigation = document.getElementById("navigation")

    iconBar.setAttribute("style","display:block;")
    navigation.classList.add("hide")
}

function showcomment(){
    var showcomment = document.getElementById("showcomment")
    showcomment.setAttribute("style", "display:block;")
}

function showreply(){
    var showreply = document.getElementById("reply-area")
    showreply.setAttribute("style", "display:block;")
}
