function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shidded() {
  const audio = new Audio('./music.mp3'); // create a new Audio object and specify the path to the audio file
  if (audio.paused) {
    audio.play(); // start playing the audio if it's currently paused
  } else {
    audio.pause(); // pause the audio if it's currently playing
    audio.currentTime = 0; // reset the audio to the beginning
  }
}
let tries = 0
const moveImage = () => {
  tries += 1
  if (tries > 10){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
  var img = document.getElementById("poofed");
  var imgWidth = img.offsetWidth;
  var imgHeight = img.offsetHeight;
  var containerWidth = window.innerWidth - imgWidth - 400;
  var containerHeight = window.innerHeight - imgHeight - 400;
  var randomX = Math.floor(Math.random() * containerWidth);
  var randomY = Math.floor(Math.random() * containerHeight);

  if (randomX < 0) {
    randomX = 0;
  } else if (randomX > containerWidth) {
    randomX = containerWidth;
  }

  if (randomY < 0) {
    randomY = 0;
  } else if (randomY > containerHeight) {
    randomY = containerHeight;
  }

  img.style.left = randomX + "px";
  img.style.top = randomY + "px";
}

let keysPressed = [];

function spawnRandomImage(imgSrc, maxWidth, maxHeight) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const xCoord = Math.floor(Math.random() * width);
  const yCoord = Math.floor(Math.random() * height);


  const imgWidth = Math.min(maxWidth, width);
  const imgHeight = Math.min(maxHeight, height);

 
  const imgElement = document.createElement('img');
  imgElement.src = imgSrc;
  imgElement.style.width = imgWidth + 'px';
  imgElement.style.height = imgHeight + 'px';
  imgElement.style.position = 'absolute';
  imgElement.style.left = xCoord + 'px';
  imgElement.style.top = yCoord + 'px';

  document.body.appendChild(imgElement);
}

document.addEventListener("keydown", (event) => {
    if (
      (event.key === 'F12') ||
      ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === 'I'))
    ) {
      event.preventDefault(); 
      spawnRandomImage('https://cdn.discordapp.com/emojis/1064165280827318322.webp', 40, 40);
      return
    }
    
  const keyPressed = event.key;
  keysPressed.push(keyPressed);

  const typedWord = keysPressed.join("");
  if (typedWord.includes("funny")) {
    console.log("Match found: " + typedWord);
    alert("hahahahaha funny laugh hahahahh");
    keysPressed = [];
  } else if (typedWord.includes("osu")) {
    window.location.href = "https://www.youtube.com/watch?v=AaAF51Gwbxo&t=65s";
  }
});

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("no rightclick for you bitchass")
});

function getKeyAnswer() {
  const key = prompt("Please enter a key:");

  const answers = {
    "test": `console.log("lmao")`,
    "osu": `window.location.href = "https://www.youtube.com/watch?v=AaAF51Gwbxo&t=65s";`,
    "neowofetch": `window.location.href = "https://github.com/exhq/neowofetch"`,
    "vencord": `window.location.href = "https://vencord.exhq.dev"`,
    "poof": `document.body.innerHTML = ""`,
    "lmao": `
    fetch("https://api.bigdatacloud.net/data/client-ip").then(response => response.json())
    .then(data => {
      lmao = document.getElementById("name")
      lmao.innerText = data.ipString
      lol = document.getElementById("doxxed")
      lol.innerText = "lmao get doxxed"
    })
  
    `,
  };

  

  if (key in answers) {
    return answers[key];
  } else {
    alert("incorrect key");
  }
}

function sweech() {
  eval(getKeyAnswer())
}

function nomoreecho() {
  const bleh = ['E','C','H','O']
  let echo = document.getElementById("name")

  echo.innerText = shuffleArray(bleh).join("") 
  
}


function happynote(){
  alert(`all shitposting aside, i owe a huge thanks to the vencord community. 
they're the reason this website exists (they bullied my old domain)`)
}



let devToolsOpen = false;

// Add a listener for the console.log() method
const devToolsListener = () => {
  devToolsOpen = true;
};

console.log('%c', devToolsListener);
  
  // Check if the DevTools are open
  if (devToolsOpen) {
    // Take some action, such as logging an error message or redirecting the user
    console.log('DevTools are open!');
    // window.location.href = 'https://example.com';
  }

