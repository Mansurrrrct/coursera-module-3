var items = [
  "Chicken",
  "Beef",
  "Sushi",
  "Pizza",
  "Salad",
  "Soup",
  "Burger",
  "Pasta"
];

var list = document.getElementById("menu-list");
var input = document.getElementById("search");

// render function
function render(listItems) {
  list.innerHTML = "";

  for (var i = 0; i < listItems.length; i++) {
    var li = document.createElement("li");
    li.textContent = listItems[i];
    list.appendChild(li);
  }
}

// initial render
render(items);

// filter logic
input.addEventListener("input", function () {
  var value = input.value.toLowerCase();

  var filtered = items.filter(function (item) {
    return item.toLowerCase().indexOf(value) !== -1;
  });

  render(filtered);
});
