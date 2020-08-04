//business logic
function order(pizzaType,pizzaSize,pizzaCrust,pizzaToppings,pizzaNumber,deliveryCheck){
    this.pizzaType=pizzaType;
    this.pizzaSize=pizzaSize;
    this.pizzaCrust=pizzaCrust;
    this.pizzaToppings=pizzaToppings;
    this.pizzaNumber=pizzaNumber;
    this.deliveryCheck=deliveryCheck;
}

var pizzaSizeLarge=1200;
var pizzaSizeMedium=900;
var pizzaSizeSmall=650;
const pizza_Toppings=150;
const delivery=250;

//user interface logic

$(document).ready(function() {
  $("#orderButton").click(function() {

      pizzaType=$("#pizzaType").val();
      pizzaSize=$("#pizzaSize").val();
      pizzaCrust=$("#pizzaCrust").val();
      pizzaToppings=$("#pizzaToppings").val();
      pizzaNumber=$("#pizzaNumber").val();
       var deliveryCheck=$("#deliveryCheck").val();

      var myOrder=new order(pizzaType, pizzaSize, pizzaCrust, pizzaToppings, pizzaNumber, deliveryCheck);
  $("#one").append( myOrder.pizzaSize + " " + myOrder.pizzaType + " " + "with" +  " "  +myOrder.pizzaCrust + " " +  "crust" + "  "  + "and"+  " " +myOrder.pizzaToppings + " " + "*" + myOrder.pizzaNumber + " " + myOrder.deliveryCheck );


        if (pizzaSize=="Large" && deliveryCheck==true){
            var price=(pizzaSizeLarge*pizzaNumber)+delivery;
          }
        else if (pizzaSize=="Large" && deliveryCheck==false){
          var price=(pizzaSizeLarge*pizzaNumber);
        }
        if (pizzaSize=="Medium" && deliveryCheck==true){
            var price=(pizzaSizeMedium*pizzaNumber)+delivery;
          }
        else if (pizzaSize=="Medium" && deliveryCheck==false){
          var price=(pizzaSizeMedium*pizzaNumber);
        }
        if (pizzaSize="Small" && deliveryCheck==true){
            var price=(pizzaSizeSmall*pizzaNumber)+delivery;
          }
        else if (pizzaSize="Small" && deliveryCheck==false){
          var price=(pizzaSizeSmall*pizzaNumber);
        }

        $("#myOrder").append("Total  :" + "" + price);
});
});
