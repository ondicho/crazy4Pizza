//business logic
function order(pizzaType,pizzaSize,pizzCrust,pizzaToppings,pizzaNumber,deliveryCheck){
    this.pizzaType=pizzaType;
    this.pizzaSize=pizzaSize;
    this.pizzaCrust=pizzCrust;
    this.pizzaToppings=pizzaToppings;
    this.pizzaNumber=pizzaNumber;
    this.deliveryCheck=deliveryCheck;
}

}

var pizzaType=["Hawaiian","BBQ Chicken","Chicken Periperi","BBQ Beef"];
var pizzaSize=["small","medium","large"];
var pizzCrust=["crispy","stuffed","Gluten Free"];
var pizzaToppings=["cheese","mushroom","beef","chicken"]

//user interface logic

$(document).ready(function() {
  $("#orderButton").submit(function(event) {
      event.preventDefault();

      var pizzaType=["Hawaiian","BBQ Chicken","Chicken Periperi","BBQ Beef"];
      var pizzaSize=["small","medium","large"];
      var pizzCrust=["crispy","stuffed","Gluten Free"];
      var pizzaToppings=["cheese","mushroom","beef","chicken"]


      var inputtedType=$("orders#pizzaType").val();
      var inputtedSize=$("orders#pizzaSize").val();
      var inputtedCrust=$("orders#pizzaCrust").val();
      var inputtedToppings=$("orders#pizzaToppings").val();
      var inputtedNumber=$("orders#pizzaNumber").val();
      var inputtedDelivery=$("orders#deliveryCheck").val();
      var newOrder=new order(inputType, inputType,  inputCrust, inputToppings,  inputNumber,  inputDelivery);

  $("form.orders").each(function()  {
      var inputtedType=$(this).find("input.pizzaType").val();
      var inputtedSize=$(this).find("input.pizzaSize").val();
      var inputtedCrust=$(this).find("input.pizzaCrust").val();
      var inputtedToppings=$(this).find("input.pizzaToppings").val();
      var inputtedNumber=$(this).find("input.pizzaNumber").val();
      var inputtedDelivery=$(this).find("input.deliveryCheck").val();


        alert(inputtedType);


  $("#myOrder").append(order.customerOrder());

  $("input#pizzaType").val("");
  $("input#pizzaSize").val("");
  $("input#pizzaCrust").val("");
  $("input#pizzaToppings").val("");
  $("input#pizzaNumber").val("");
  $("input#deliveryCheck").val("");


  });
});
