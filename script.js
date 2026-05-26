var input = document.getElementById("command-input");
var output = document.getElementById("output");

input.focus();

input.addEventListener('keydown', function(event){
  if (event.key == 'Enter') {
    var tokens = input.value.split(' ');
    var command = tokens[0];
    var response = "";
    if (command == "tail -f status.log") {
      command = "cat";
      tokens[1] = "status.txt";
    } else if (command == pgrep -a zain) {
      command = "cat";
      tokens[1] = "achievements.txt":
    }
    switch (command) {
    case "help":
      response = `<pre>
help                list of available commands
whoami              who i am
ls                  list files
ls projects/        list projects
cat [file]          output file contents
uptime              time since i was born
tail -f status.log  what i'm working on right now
pgrep -a zain       recent achievements
clear               clear screen
      </pre>`;
      break;
    case "whoami":
      response = `zain - cs @ kcl (msci) · kcl cybersoc · coding tutor <br> 
                  heading toward: sre / security engineering / distributed systems`;
      break;
    case "cat":
      var parameter = tokens[1];
      switch(parameter){
        case "about.txt":
          response = "home lab named after the library of alexandria - because if you're going to hoard knowledge, commit to the bit. currently running a node webapp and re::curse, occasionally catches fire (metaphorically). valhalla (razer blade 14 \'23, dual-boot) handles the rest. speakers don\'t work. it\'s fine (it\'s not)";
          break;
        case "achievements.txt":
          response = `<pre>
> 1st - kcl informatics puzzled
> 2nd - uber global hackathon
> kcl ctfs - 2x top 5
          </pre>`;
          break;
        case "stack.txt":
          response = `<pre>
languages  > java, python, c#, bash
infra      > linux, docker, azure, ssh tunnels into alexandria at 2am.
security   > ctf tooling, wireshark, educated guessing.
          </pre>`;
          break;
        case "status.txt":
          response = "probably ricing valhalla or thinking about buying a thinkpad";
          break;
        default:
          response = "file does not exist!";
          break;
      }
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

document.addEventListener('click', function(){
  input.focus();
});

input.focus()
