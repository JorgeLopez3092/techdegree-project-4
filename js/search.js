function myFunction() {
  var myInput, filter, x, a, i;
  myInput = document.getElementById("search")
  filter = myInput.value.toUpperCase();
  x = document.getElementsByTagName('a')
  for(i = 0; i < x.length; i++) {


    a = x[i].getAttribute('data-title');

  if(a) {
    if(a.toUpperCase().indexOf(filter) > -1) {
      x[i].style.display = "";
    } else {
      x[i].style.display = 'none';
    }
  }



  }

}
