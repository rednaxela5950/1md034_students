var vm = new Vue({
    //Here comes the optional elements of the Vue object
    el: '#burgers',
    data: { food: burgerMenu }
})

function updateOrder() {
  //var fullname = document.getElementByTagName("fullname");
  var order = document.getElementById("order");
  order.innerHTML = "";
  var theOrder = "";
  var boxes = document.getElementsByName("orderbox");
  var i;
  for (i = 0; i < boxes.length; i++) {
    if (boxes[i].checked) {
      theOrder = theOrder + burgerMenu[i].name + " ";
    }
  }
  order.innerHTML = theOrder;
}
