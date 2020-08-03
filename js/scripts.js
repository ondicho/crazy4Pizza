//business logic
function order(pizzaType,pizzaSize,pizzCrust,pizzaToppings,pizzaNumber,deliveryCheck){
    this.pizzaType=pizzaType;
    this.pizzaSize=pizzaSize;
    this.pizzaCrust=pizzaCrust;
    this.pizzaToppings=pizzaToppings;
    this.pizzaNumber=pizzaNumber;
    this.deliveryCheck=deliveryCheck;
}

order.prototype.fullOrder = function() {
  return this.pizzaType + " " + this.pizzaSize + " " + this.pizzaCrust + " " + this.pizzaToppings + " " + this.pizzaNumber + " " + this.deliveryCheck;
}
var pizzaType=["Hawaiian","BBQ Chicken","Chicken Periperi","BBQ Beef"];
var pizzaSize=["small","medium","large"];
var pizzCrust=["crispy","stuffed","Gluten Free"];
var pizzaToppings=["cheese","mushroom","beef","chicken"]

const pizzaSizeLarge=1200;
const pizzaSizeMedium=900;
const pizzaSizeSmall=650;
const pizzaToppings=150;
const deliveryFee=250;

//user interface logic

$(document).ready(function() {
  $("form#orderButton").submit(function(event) {
      console.log(pizzaType);
      event.preventDefault();

      console.log(fullOrder);



      var inputtedType=$("orders#pizzaType").val();
      var inputtedSize=$("orders#pizzaSize").val();
      var inputtedCrust=$("orders#pizzaCrust").val();
      var inputtedToppings=$("orders#pizzaToppings").val();
      var inputtedNumber=$("orders#pizzaNumber").val();
      var inputtedDelivery=$("orders#deliveryCheck").val();
      var newOrder=new order(inputType, inputType,  inputCrust, inputToppings,  inputNumber,  inputDelivery);


  $("#myOrder").append(order.fullOrder());

  $("input#pizzaType").val("");
  $("input#pizzaSize").val("");
  $("input#pizzaCrust").val("");
  $("input#pizzaToppings").val("");
  $("input#pizzaNumber").val("");
  $("input#deliveryCheck").val("");


  });
});
