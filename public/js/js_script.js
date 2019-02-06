function updateOrder() {
  //var fullname = document.getElementByTagName("fullname");
  var order = document.getElementById("order");
  order.innerHTML = "";
  var theOrder = "";
  for (i = 0; i < burgerMenu.length; i++) {
    var item = burgerMenu[i];
    if (item.incart) {
      theOrder = theOrder + item.name + " ";
    }
  }
  order.innerHTML = theOrder;
}

var rootElement = document.getElementById("burgers");
var wrapper = document.createElement("div");
wrapper.className = "wrapper menu";
rootElement.appendChild(wrapper);

for (i = 0; i < burgerMenu.length; i++) {
  if (i%2 == 0) { // Break for every 3 lines
    row = document.createElement("div");
    row.className = "row";
    wrapper.appendChild(row);
  }
  var column = document.createElement("div");
  column.className = "column";
  var title = document.createElement("div");
  title.className = "box";
  title.append(burgerMenu[i].name);
  column.appendChild(title);
  var image = document.createElement("div");
  var imageElement = document.createElement("img");
  imageElement.src =  burgerMenu[i].img;

  imageElement.alt = "Span"
  imageElement.title = "Another in-line element"
  imageElement.width = "100"
  image.appendChild(imageElement);

  column.appendChild(image);
  var contents = document.createElement("div");

  var list = document.createElement("ul");
  var listElement = document.createElement("li");
  listElement.append(burgerMenu[i].kCal + " kCal");
  list.appendChild(listElement);

  listElement = document.createElement("li");
  if (burgerMenu[i].gluten) {
    listElement.append("Contains Gluten");
  } else {
    listElement.append("Gluten Free");
  }
  list.appendChild(listElement);


  listElement = document.createElement("li");
  if (burgerMenu[i].lactose) {
    listElement.append("Contains Lactose");
  } else {
    listElement.append("Lactose Free");
  }

  list.appendChild(listElement);
  contents.appendChild(list);

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "orderbox";
  checkbox.id = i;

  checkbox.addEventListener('change', function()  {
    burgerMenu[this.id].incart  = this.checked
    updateOrder();
  })

  contents.appendChild(checkbox);

  column.appendChild(contents);

  row.appendChild(column);
}
