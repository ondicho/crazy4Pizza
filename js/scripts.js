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
      deliveryCheck=$("#deliveryCheck").val();

      var myOrder=new order(pizzaType, pizzaSize, pizzaCrust, pizzaToppings, pizzaNumber, deliveryCheck);
  $("#myOrder").append(myOrder.pizzaType + " " + myOrder.pizzaSize + " " + myOrder.pizzaCrust + " " + myOrder.pizzaToppings + " " + myOrder.pizzaNumber + " " + myOrder.deliveryCheck);


});
});
