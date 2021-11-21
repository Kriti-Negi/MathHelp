function toggle(){
    var checkDisplay = (document.getElementById("toggleAbleNav").style.display == "none");
    if(checkDisplay){
        document.getElementById("toggleAbleNav").style.display = "block"
    }else{
        document.getElementById("toggleAbleNav").style.display = "none"
    }
}