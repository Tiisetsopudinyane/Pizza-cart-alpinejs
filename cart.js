

document.addEventListener("alpine:init", () =>{
    Alpine.data('data', ()=>{
        return{
            open:false,
            opening:false,
            txtNotEnough:false,
            price:{smallCounter:29.90,mediumCounter:69.90,largeCounter:99.90},
            small:0,
            medium:0,
            large:0,
            smallPricePizza:0,
            mediumPricePizza:0,
            largePricePizza:0,
            priceToPay:'',
            notEnough:'',
            total:0.0,
            smallPizzaIncrement(){
                this.small++;
                this.smallPricePizza+=this.price.smallCounter;
            },
            smallPizzaDecrement(){
                if(this.small>0){
                    this.small--;
                    this.smallPricePizza-=this.price.smallCounter;
                }
            },
            mediumPizzaIncrement(){
                this.medium++;
                this.mediumPricePizza+=this.price.mediumCounter;
            },
            mediumPizzaDecrement(){
                if(this.medium>0){
                    this.medium--;
                    this.mediumPricePizza-=this.price.mediumCounter;
                }
            },
            largePizzaIncrement(){
                this.large++;
                this.largePricePizza+=this.price.largeCounter;
            },
            largePizzaDecrement(){
                if(this.large>0){
                    this.large--;
                    this.largePricePizza-=this.price.largeCounter;
                }
            },
            txtNotEnough_(){
                txtNotEnough.innerHTML='Sorry - that is not enough money!';
                setTimeout(function(){
                    txtNotEnough.innerHTML="";
                },2000);
            },
            reload(){
                window.location.reload();
        },
        locate(str){
            document.querySelector(str).scrollIntoView();
        },
            addition(){
               total= this.smallPricePizza+this.mediumPricePizza+this.largePricePizza;
                return toFix(total);
            },
           // priceToPay>=smallPricePizza+mediumPricePizza+largePricePizza? [notEnough='Enjoy your pizzas!',opening=!opening]
           pirceTopay(){
            if(this.priceToPay>total){
                this.notEnough='Enjoy your pizzas!';
                this.opening=!this.opening;
            }
            else{
                
                this.txtNotEnough_();
                this.opening=this.opening;
            }
           },
           checkOut(){
            //[small=0,medium=0,large=0,opening=!opening,priceToPay='',notEnough='',reload()]
            this.small=0;
            this.medium=0;
            this.large=0;
            this.opening=!this.opening;
            this.priceToPay='';
            this.notEnough='';
            this.reload();
        },
        OpenCardAndscrollUpOnMobileDevices(){
            //[open=!open,document.getElementById('card').scrollIntoView()]
            this.open=!this.open;
            document.getElementById('card').scrollIntoView();
        }
        }
    });
});
const txtNotEnough=document.querySelector(".txtNotEnough");
function toFix(total){
    if(!total.toFixed(2)){
        return;
    }
    else{
      return parseFloat(total.toFixed(2));  
    }
   
}