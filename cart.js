const txtNotEnough=document.querySelector(".txtNotEnough");


function txtNotEnough_(){
    txtNotEnough.innerHTML='Sorry - that is not enough money!';
    setTimeout(function(){
        txtNotEnough.innerHTML="";
    },2000);
}

function reload(){
        window.location.reload();
}

function locate(str){
    document.querySelector(str).scrollIntoView();
}

function toFix(total){
    if(!total.toFixed(2)){
        return;
    }
    else{
      return parseFloat(total.toFixed(2));  
    }
   
}