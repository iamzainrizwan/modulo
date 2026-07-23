var inputForm = document.getElementById("input-form");
var input = document.getElementById("command-input");
var output = document.getElementById("output");

var aliases = {
  "tail": "cat",
  "pgrep": "cat"
};

var argMap = {
  "tail": "status.txt",
  "pgrep": "achievements.txt"
};

var bootLines = [
  "modul0 v0.1",
  "initialising...",
  "loading user zain rizwan...", 
  "type <span id =\"accent\">help</span> for available commands"
];
i = 0
input.disabled = true;
bootLines.forEach(element => {
  i++; 
  setTimeout(() => {
   output.innerHTML += "<p>" + element + "</p>";
  }, i * 300);
});
setTimeout(() => {
  document.getElementById("input").style.visibility = "visible";
  input.disabled = false;
  input.focus();
}, (bootLines.length+1) * 300);

inputForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var tokens = input.value.split(' ');
  var command = tokens[0];
  var response = "";
  if (aliases[command]) {
    tokens[1] = argMap[command];
    command = aliases[command];
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
  clear               clear screen </pre>`;
      break;
    case "whoami":
      response = `zain - cs @ kcl (msci) · kcl cybersoc · coding tutor <br> 
                  heading toward: sre / security engineering / distributed systems`;
      break;
    case "uptime":
      var getUptime = function () {
        var birth = new Date('2006-11-15');
        var diff = new Date() - birth;
        var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((diff % (1000 * 60)) / 1000);
        return `${years}y ${days}d ${hours}h ${mins}m ${secs}s`
      }
      response = `<span id="uptime-display">${getUptime()}</span>`
      setTimeout(() => {
        setInterval(() => {
          var el = document.getElementById("uptime-display");
          if (el) el.innerHTML = getUptime() 
        }, 1000);
      }, 0);
      break;
    case "cat":
      var parameter = tokens[1];
      switch (parameter) {
        case "about.txt":
          response = "home lab named after the library of alexandria - because if you're going to hoard knowledge, commit to the bit. currently running a node webapp and re::curse, occasionally catches fire (metaphorically). valhalla (razer blade 14 \'23, dual-boot) handles the rest. speakers don\'t work. it\'s fine (it\'s not)";
          break;
        case "achievements.txt":
          response = `<pre>
  > 1st - kcl informatics puzzled
  > 2nd - uber global hackathon
  > kcl ctfs - 2x top 5 </pre>`;
          break;
        case "stack.txt":
          response = `<pre>
  languages  > java, python, c#, bash
  infra      > linux, docker, azure, ssh tunnels into alexandria at 2am.
  security   > ctf tooling, wireshark, educated guessing. </pre>`;
          break;
        case "status.txt":
          response = "probably ricing valhalla or thinking about buying a thinkpad";
          break;
        default:
          response = '<span id="error">file does not exist!</span>';
          break;
      }
      break;

    default:
      response = "<span id=\"error\">whatever you typed was stupid lol</span>";
      break;
  }
  output.innerHTML += "<p><span id=\"user\">zain</span>@<span id=\"host\">modul0</span>:~$ " + input.value + "<br>" + response + "</p>";
  input.value = "";
  output.scrollTop = output.scrollHeight;
});

document.addEventListener('click', function () {
  input.focus();
});

input.focus()
