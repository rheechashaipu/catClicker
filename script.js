var cat1 = document.getElementById('cat1');
counter1=0;
counter2=0;


cat1.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  counter1 +=1;
  document.getElementById("cat1Counter").innerHTML = "You clicked gray cat "+counter1+" times.";
}, false);

var cat2 = document.getElementById('cat2');

cat2.addEventListener('click', function(){
	counter2 +=1;
	document.getElementById('cat2Counter').innerHTML = "You clicked creme cat "+counter2+" times.";
}, false);