const BLACKLISTED_KEY_CODES = [38];
const SECRET_COMMANDS = ["hidden.py", "basc", "flag", "echo"];
const COMMANDS = {
  help:
    '<div class="terminal-line command"> Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span> </div> ',
  about:
    '<div class="terminal-line command">  Hello World! </div>',
  skills:
    '<div class="terminal-line command"> Languages: Python, C and C++, Java, HTML, CSS, JavaScript<br> Technologies: Git, Matlab </div>',
  education:
    '<div class="terminal-line command"> University of Genoa <br> Electronics and Telecommunications Engineer Bachelor Degree <br> Electronic Engineering Master Degree Student </div>',
  contact:
    '<div class="terminal-line command"> You can contact me on any of following links: <br> <a href="https://github.com/CaptainMich" class="success link">Github</a> ,<a href="https://twitter.com/_CaptainMich" class="success link">Twitter</a>, <a href="mailto:captain.mich96@gmail.com" class="success link">Email</a> </div>'
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="id">captain</span>@<span class="pc-name">blackpearl</span> <span class="directory">~</span> ${input} </div>`;

  switch(input){
    case 'hidden.py':
      window.open("programming_language/python/python_hidden.html", "_self");
      break;
    case 'basc':
      window.open("programming_language/CTF/basc_hidden.html", "_self");
      break;
    case 'flag':
      output += `<div class="terminal-line command"> You're in the right place. Good luck finding one</div>`;
      break;
    case ('echo' + input.replace('echo','')):
      output += `<div class="terminal-line command"> ${input.replace('echo','')}</div>`;
  }

  if(COMMANDS.hasOwnProperty(input)){
    output += COMMANDS[input];
  }
  else if(input=="cat flag.txt"){
    output += `<div class="terminal-line command">b24gdGhlIHdheQo=</div>`
  }
  else if (!SECRET_COMMANDS.includes(input.split(" ")[0])){
    output += `<div class="terminal-line command">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
