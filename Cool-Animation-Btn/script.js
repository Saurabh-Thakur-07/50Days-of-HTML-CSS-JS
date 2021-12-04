let myBtn = document.getElementById('myBtn');
function fillheart(){
    if(myBtn.checked == 1){
        document.getElementById("un-filled-heart").setAttribute("class","fas fa-heart");
    }
    else{
        document.getElementById("un-filled-heart").setAttribute("class","far fa-heart");
    }
}