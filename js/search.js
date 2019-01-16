function myFunction() {
  var myInput, filter, x, a, i;
  myInput = document.getElementById("search")
  filter = input.value.toUpperCase();

  x = document.getElementByTagName('a')
  for(i = 0; i < x.length; i++) {
    a = x[i].getElementsByAttribute('data-title')[0];

    if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      x[i].style.display = "";
    } else {
      x[i].style.display = 'none';
    }

  }

}
