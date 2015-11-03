function onload(){
	table="<tr class='contenttitle'><th>Óra</th><th>ISKOLAI</th><th>TANSZUNET</th><th>SZABADNAP</th><th>MUNKASZUNET</th></tr>";
	var title = ""
	var clientWidth = document.getElementById('main').clientWidth;
    var x = document.getElementsByClassName("myButton");
    var i;
	var curr;
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("style","width:"+clientWidth/6+"px;height:"+clientWidth/6+"px");
    }
}
function loadXMLDoc(nev) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			XMLFunction(xmlhttp.responseXML);
		}
	}
	xmlhttp.open("GET", "Content/"+nev+".xml", true);
	xmlhttp.send();
}
function XMLFunction(xmlDoc) {
  var i;
  var x = xmlDoc.getElementsByTagName("ROW");
  for (i = 0; i <x.length; i++) { 
	table += "<tr class='sor'><td>" +
	x[i].getElementsByTagName("FIELD1")[0].childNodes[0].nodeValue +
	"</td><td>" +
	x[i].getElementsByTagName("FIELD2")[0].childNodes[0].nodeValue +
	"</td><td>" +
	x[i].getElementsByTagName("FIELD3")[0].childNodes[0].nodeValue +
	"</td><td>" +
	x[i].getElementsByTagName("FIELD4")[0].childNodes[0].nodeValue +
	"</td><td>" +
	x[i].getElementsByTagName("FIELD5")[0].childNodes[0].nodeValue +
	"</td></tr>";
  }
  title = x[0].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
  document.getElementById("titlecontent").innerHTML = title;
  document.getElementById("content").innerHTML = table;
}

function myFunction(ele) {
  ele= ele.id;
  ele = ele.replace("gomb_","");
  curr=ele;
  link=curr;
  document.getElementById("main").innerHTML = "<br><center><table class='content' id='content'></table></center>";
  table="<tr class='contenttitle'><th>Óra</th><th>ISKOLAI</th><th>TANSZUNET</th><th>SZABADNAP</th><th>MUNKASZUNET</th></tr>";
  loadXMLDoc(ele);
  document.getElementById("menu1").innerHTML = "Végállomásról";
  document.getElementById("menu2").innerHTML = "Végállomásra";
  document.getElementById("menu3").innerHTML = "Meglállók";
  document.getElementById("hidden").style.display = "inline";
  window.scrollTo(0, 0);
 }
function megallo() {
	ele=link+"m";
	document.getElementById("main").innerHTML = "<br><center><table class='content' id='content'></table></center>";
	table="<tr class='contenttitle'><th>Meglálló</th><th>1</th><th>1</th><th>1</th><th>1</th></tr>";
	loadXMLDoc(ele);
	window.scrollTo(0, 0);
}
function jarat(ele) {
	ele= ele.id;
	if(ele == "menu1"){
		link=curr;
	}
	if(ele == "menu2"){
		link=curr+"v";
	}
	document.getElementById("main").innerHTML = "<br><center><table class='content' id='content'></table></center>";
	table="<tr class='contenttitle'><th>Óra</th><th>ISKOLAI</th><th>TANSZUNET</th><th>SZABADNAP</th><th>MUNKASZUNET</th></tr>";
	loadXMLDoc(link);
	window.scrollTo(0, 0);
}

	

