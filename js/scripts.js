//business logic
function order(pizzaType,pizzaSize,pizzCrust,pizzaToppings,pizzaNumber,deliveryCheck){
    this.pizzaType=pizzaType;
    this.pizzaSize=pizzaSize;
    this.pizzaCrust=pizzaCrust;
    this.pizzaToppings=pizzaToppings;
    this.pizzaNumber=pizzaNumber;
    this.deliveryCheck=deliveryCheck;
}
var pizzaType=["Hawaiian","BBQ Chicken","Chicken Periperi","BBQ Beef"];
var pizzaSize=["small","medium","large"];
var pizzCrust=["crispy","stuffed","Gluten Free"];
var pizzaToppings=["cheese","mushroom","beef","chicken"]

//user interface logic
$(".orders").each(function()  {
  var inputType=$(this).find("input.pizzaType").val();
  var inputSize=$(this).find("input.pizzaSize").val();
  var inputCrust=$(this).find("input.pizzaCrust").val();
  var inputToppings=$(this).find("input.pizzaToppings").val();
  var inputNumber=$(this).find("input.pizzaNumber").val();
  var inputDelivery=$(this).find("input.deliveryCheck").val();
});
$(".myOrder").text
