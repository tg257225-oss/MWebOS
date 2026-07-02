
  function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime
    
} 
setInterval(updateTime, 1000);
updateTime(); 

const windowIds = ["welcome", "note", "calc"];

windowIds.forEach(id => {
dragElement(document.getElementById(id));
})

function dragElement(element) {
  if (!element) return;
  
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = processMove; 
  }

  function processMove(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


const editable = document.querySelector('.notes-container p');
const maxLength = parseInt(editable.getAttribute('data-maxlength')) || 2244;
editable.addEventListener('keydown', (e) => {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', 'Tab'];
  if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
    return;
  }
  if (editable.textContent.length >= maxLength) {
    e.preventDefault();
  }
});
editable.addEventListener('input', () => {
  if (editable.textContent.length > maxLength) {
    editable.textContent = editable.textContent.substring(0, maxLength);
  }
});

const notepad = document.querySelector(".notes-container p")
let saveTimeout;

document.addEventListener('DOMContentLoaded', () => {
  const savedNote = localStorage.getItem('editableNotepadContent');
  if (savedNote) {
    notepad.innerHTML = savedNote;
  }
});

notepad.addEventListener('input', () => {
  if (notepad.textContent.trim() === '') {
    notepad.innerHTML = '';
  }
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    localStorage.setItem('editableNotepadContent', notepad.innerHTML);
  }, 400);

});





var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

var noteScreen = document.querySelector("#note");
var noteScreenClose = document.querySelector("#noteclose");
var noteScreenOpen = document.querySelector("#noteopen");

var calcScreen = document.querySelector("#calc");
var calcScreenClose = document.querySelector("#calcclose");
var calcScreenOpen = document.querySelector("#calcopen");

function setButtonActive(button, isActive) {
  if (button) {
    button.classList.toggle("active", isActive);
  }
}

function closeWelcomeWindow() {
  if (welcomeScreen) welcomeScreen.style.display = "none";
  setButtonActive(welcomeScreenOpen, false);
}

function openWelcomeWindow() {
  if (welcomeScreen) welcomeScreen.style.display = "flex";
  setButtonActive(welcomeScreenOpen, true);
}

function toggleWelcomeWindow() {
  if (welcomeScreen) {
    if (welcomeScreen.style.display === "flex") {
      closeWelcomeWindow();
    } else {
      openWelcomeWindow();
    }
  }
}




function closeNotesWindow() {
  if (noteScreen) noteScreen.style.display = "none";
  setButtonActive(noteScreenOpen, false);
}

function openNotesWindow() {
  if (noteScreen) noteScreen.style.display = "flex";
  setButtonActive(noteScreenOpen, true);
}

function toggleNotesWindow() {
  if (noteScreen) {
    if (noteScreen.style.display === "flex") {
      closeNotesWindow();
    } else {
      openNotesWindow();
    }
  }
}

function closeCalcWindow() {
  if (calcScreen) calcScreen.style.display = "none";
  setButtonActive(calcScreenOpen, false);
}

function openCalcWindow() {
  if (calcScreen) calcScreen.style.display = "flex";
  setButtonActive(calcScreenOpen, true);
}

function toggleCalcWindow() {
  if (calcScreen) {
    if (calcScreen.style.display === "flex") {
      closeCalcWindow();
    } else {
      openCalcWindow();
    }
  }
}




if (welcomeScreenClose) {
  welcomeScreenClose.addEventListener("click", function() {
    closeWelcomeWindow();
  });
}

if (welcomeScreenOpen) {
  welcomeScreenOpen.addEventListener("click", function() {
    toggleWelcomeWindow();
  });
}




if (noteScreenClose) {
  noteScreenClose.addEventListener("click", function() {
    closeNotesWindow();
  });
}

if (noteScreenOpen) {
  noteScreenOpen.addEventListener("click", function() {
    toggleNotesWindow();
  });
}



if (calcScreenClose) {
  calcScreenClose.addEventListener("click", function() {
    closeCalcWindow();
  });
}

if (calcScreenOpen) {
  calcScreenOpen.addEventListener("click", function() {
    toggleCalcWindow();
  });
}