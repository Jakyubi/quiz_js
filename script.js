let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let json = JSON.parse(this.responseText);
    let output = "";
    for (let i = 0; i < json.length; i++) {
      output += "<p>" + json[i].name + "</p>";
    }
    document.getElementById("json-container").innerHTML = output;
  }
};
xmlhttp.open("GET", "dane.json", true);
xmlhttp.send();

//ten plik nic nie robi