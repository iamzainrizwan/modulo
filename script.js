var input = document.getElementById("command-input");
var output = document.getElementById("output");

input.addEventListener('keydown', function(event){
  if (event.key == 'Enter') {
    var tokens = input.value.split(' ');
    var command = tokens[0];
    var response = "";
    switch (command) {
      case "whoami":
        response = "zain rizwan. cool guy that doesn't know html for shit";
        break;
    
      default:
        response = "whatever you typed was stupid lol";
        break;
    }
    output.innerHTML += "<p>zain@modul0:~$ " + input.value + "<br>" + response + "</p>";
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

input.focus()
