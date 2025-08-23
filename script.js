const scenes = {
"scene1": {
  text: `An urgent shipment lead has come in. It’s a time-sensitive freight delivery from Parets del Vallès to Valencia. The cargo requires temperature control, and the client insists on delivery within 48 hours.`,
  image: "images/scene1_travis.png",
  scramble: [
    "The", "shipment", "requires", "a", "temperature-controlled", "vehicle", "and", "strict", "delivery", "schedule"
  ],
  correct: [
    "The", "shipment", "requires", "a", "temperature-controlled", "vehicle", "and", "strict", "delivery", "schedule"
  ],
  next: "scene2"
},
"scene2": {
  text: "With the clock ticking, you must decide the best way to manage this delivery. Do you prioritize securing the right vehicle first or contact the drivers to check their availability?",

  choices: [
    {
      text: "Book a temperature-controlled truck immediately.",
      next: "scene3_bookTruck"
    },
    {
      text: "Contact the drivers to confirm availability and routes.",
      next: "scene3_contactDrivers"
    },
    {
      text: "Review the delivery route and traffic forecasts before deciding.",
      next: "scene3_reviewRoute"
    }
  ]
},"scene3_bookTruck": {
  type: "fill-in-the-blank",
  text: "Complete the sentence with the correct words about truck preparation before dispatch.",
  image: "images/scene3B_driver_call.png",
  sentence: ["", "truck", "must", "be", "", "before", "dispatching", "", "delivery."],
  blanks: [0, 4, 7],
  options: ["The", "inspected", "approved", "for", "a", "loaded"],
  correct: ["The", "inspected", "for"],
  image: "images/scene3A_truck_maintenance.jpg",
  next: "scene4A"
},

"scene3_contactDrivers": {
  text: "You call the drivers to confirm their availability. One driver mentions possible delays due to traffic in Parets del Vallès, and another requests clarification on cargo handling.",
  image: "images/scene3B_driver_call.png",
  scramble: ["due", "delay", "traffic", "There", "is", "a", "in", "Parets"],
  correct: ["There", "is", "a", "traffic", "delay", "due", "in", "Parets"],
  next: "scene4B"
},"scene3_reviewRoute": {
  type: "interaction",
  text: "You analyze the delivery route on the map and check traffic forecasts. A severe storm is expected near Zaragoza, which could slow progress significantly. Listen carefully to the meteorologist’s forecast voicemail and choose your response.",

  interactions: [
    {
      audio: "audio/weather_forecast1.wav",
      options: [
        { text: "Thank you for the update. We'll reroute accordingly.", score: 1 },
        { text: "That won't affect us, continue as planned.", score: 0 },
        "Can you repeat the storm's expected arrival time?"
      ],
      correct: 0
    },
    {
      audio: "audio/weather_forecast2.wav",
      options: [
        { text: "We'll delay departure until conditions improve.", score: 1 },
        { text: "We'll risk the storm and proceed.", score: 0 },
        "Is there an alternative route you recommend?"
      ],
      correct: 0
    }
  ],
  scoring: { high: 2, medium: 1 },
  endings: { high: "scene4C_safe", medium: "scene4C_caution", low: "scene4B" }
},
"scene4A": {
  type: "scramble",
  text: "Construct a professional reply by dragging the sentences into the correct order.",
  
  emailFromClient: `
    <b>Subject:</b> Update on Freight Delivery Schedule<br>
    <b>From:</b> client@logisticspartner.com<br>
    <b>To:</b> travis.townsend@townsendlogistics.com<br><br>
    Dear Mr. Townsend,<br><br>
    We understand there may be maintenance issues with the temperature-controlled truck assigned to the Parets del Vallès shipment. Please provide an update on the status and estimated resolution time. Timely delivery is critical for our client.<br><br>
    Best regards,<br>
    Operations Manager
  `,
  scramble: [
    "We apologize for the inconvenience caused by the maintenance delay.",
    "Dear Sir/Madam,",
    "Our team is currently expediting the inspection and repair process.",
    "We expect the truck to be ready within the next two hours.",
    "Please be assured that we are prioritizing timely delivery and cargo safety.",
    "Thank you for your understanding and patience.",
    "If you have further questions, feel free to contact me directly."
  ],
  correct: [
    "Dear Sir/Madam,",
    "We apologize for the inconvenience caused by the maintenance delay.",
    "Our team is currently expediting the inspection and repair process.",
    "We expect the truck to be ready within the next two hours.",
    "Please be assured that we are prioritizing timely delivery and cargo safety.",
    "Thank you for your understanding and patience.",
    "If you have further questions, feel free to contact me directly."
  ],
  next: "scene5A"
},
"scene5A": {
  type: "fill-in-the-blank",
  text: "You receive a radio message from the driver about the route changes due to roadworks. Carefully fill in the missing prepositions to ensure clear communication and avoid delays.",

  sentence: [
    "Please", "proceed", "", "the", "highway", "and", "take", "a", "detour", "", "the", "next", "exit.",
    "Stay", "alert", "", "any", "roadwork", "signs", "and", "reduce", "speed", "", "the", "construction", "zone.",
    "Report", "back", "", "your", "arrival", "at", "the", "checkpoint."
  ],
  blanks: [2, 9, 15, 22, 28], // positions of blanks
  options: ["along", "at", "for", "through", "on"],
  correct: ["along", "at", "for", "through", "on"],
  next: "scene6A"




},"scene6A": {
  text: "You’ve received a Spanish instruction from operations. Build a clear English message for the driver who only speaks English, by rearranging the phrase chunks.",
  contextText: " Dígale al conductor que siga la autopista hasta la salida 23 y luego tome un descanso en la próxima área de servicio.",
  scramble: [
    "Follow",
    "the",
    "highway",
    "to",
    "exit",
    "23,",
    "then",
    "take",
    "a",
    "break",
    "at",
    "the",
    "next",
    "service",
    "area."
  ],
  correct: [
    "Follow",
    "the",
    "highway",
    "to",
    "exit",
    "23,",
    "then",
    "take",
    "a",
    "break",
    "at",
    "the",
    "next",
    "service",
    "area."
  ],
  next: "scene7A"
},"scene7A": {
  type: "scramble",
  text: "You receive an update about driver procedures. Build the correct English instructions paying attention to the use of infinitives and gerunds.",
  contextText: "Recuérdele al conductor que es importante empezar a conducir temprano y evitar tomar descansos largos.",
  scramble: [
    "It",
    "is",
    "important",
    "to",
    "start",
    "driving",
    "early",
    "and",
    "avoid",
    "taking",
    "long",
    "breaks."
  ],
  correct: [
    "It",
    "is",
    "important",
    "to",
    "start",
    "driving",
    "early",
    "and",
    "avoid",
    "taking",
    "long",
    "breaks."
  ],
  next: "scene8A"
},"scene8A": {
  type: "interaction",
  text: "The driver reports urgent issues. Listen carefully, then select the best instruction you should send back as dispatcher.",
  image: "images/scene8a_radio.png",
  scoring: { high: 3, medium: 2 },
  endings: {
    high: "scene9_success",
    medium: "scene9_partial",
    low: "scene9_fail"
  },
  interactions: [
    {
      audio: "audio/driver_thermostat_issue.mp3",
      options: [
        "Skip the rest area and proceed directly.",
        "Divert to the nearest repair shop immediately.",
        "Stop at a warehouse and unload the cargo."
      ],
      correct: 1
    },
    {
      audio: "audio/driver_traffic_alert.mp3",
      options: [
        "Take the alternative highway to avoid traffic.",
        "Wait until traffic clears before continuing.",
        "Speed up and try to make up time."
      ],
      correct: 0
    },
    {
      audio: "audio/driver_temperature_control.mp3",
      options: [
        "Check the cooling system immediately.",
        "Ignore the warning and continue the route.",
        "Return to the depot for inspection."
      ],
      correct: 0
    }
  ],
  timerSeconds: 30
},
"scene9_success": {
  type: "email",
  text: "Great job! Please write a professional email to your teacher explaining the delivery status and the actions taken.",
  teacherEmail: "xavier.benitz@gmail.com",
  emailSubject: "Delivery Status Update",
  emailBody: "", // empty so player writes freely
  next: "thank_you_scene",
  playAgain: true

},

"scene9_partial": {
  type: "email",
  text: "You handled most issues but faced some challenges. Write an email summarizing the delivery status and any delays.",
  teacherEmail: "xavier.benitz@gmail.com",
  emailSubject: "Update on Shipment Delivery",
  emailBody: "",
  next: "thank_you_scene",
  playAgain: true

},

"scene9_fail": {
  type: "email",
  text: "The delivery faced significant problems. Please write a formal email explaining what went wrong.",
  teacherEmail: "xavier.benitz@gmail.com",
  emailSubject: "Urgent: Shipment Delivery Issues",
  emailBody: "",
  next: "thank_you_scene",
  playAgain: true
 

},

"thank_you_scene": {
  type: "text",
  text: "Thank you for playing! Your responses have been recorded. We hope this exercise improved your professional English skills.",
  playAgain: true,
   next: null
  
},
scene4B: {
  type: "interaction",
  text: "Contacting the driver to discuss his condition and delivery status.",
  audioIntro: "driver_checkin_intro.mp3", // optional intro audio
  interactions: [
    {
      audio: "audio/driver_fatigued.mp3",
      options: [
        { text: "Advise the driver to stop immediately and rest.", score: 1 },
        { text: "Arrange for a driver change at the next rest area.", score: 0 },
        { text: "Encourage the driver to continue cautiously and monitor his condition.", score: 0 }
      ],
      correct: 0
    }
  ],
  scoring: { high: 1, medium: 0, low: 0 },
  endings: {
    high: "scene5B1",
    medium: "scene5B2",
    low: "scene5B3"
  }
},
"scene5B1": {
  type: "fill-in-the-blank",
  text: "You advise the driver to stop immediately for rest to comply with regulations and ensure safety. Complete the instructions carefully.",
  sentence: [
    "Drivers", "", "stop", "", "safe", "locations", "", "rest", "and", "", "avoid", "driving", "fatigue.", "It", "is", "important", "to", "follow", "company", "rules", "to", "prevent", "accidents."
  ],
  blanks: [1, 3, 6, 9],
  options: ["must", "at", "for", "to"],
  correct: ["must", "at", "for", "to"],
  next: "scene6B_email"
},
scene5B2: {
  type: "sentence-scramble",
  text: "What must you coordinate before the current driver stops driving and why? ",
  scramble: [
    "We", "must", "coordinate", "a", "replacement", "driver", "to", "arrive", "before", "the", "current", "driver", "stops", "driving", "due", "to", "hours", "limits"
  ],
  correct: [
    "We", "must", "coordinate", "a", "replacement", "driver", "to", "arrive", "before", "the", "current", "driver", "stops", "driving", "due", "to", "hours", "limits"
  ],
  next: "scene6B_email"
},

"scene5B3": {
  type: "fill-in-the-blank",
  text: "The driver chooses to continue despite fatigue. Fill in the missing words in the emergency response protocol.",
  sentence: [
    "In", "case", "of", "driver", "fatigue,", "dispatch", "", "immediately", "monitor", "the", "situation", "and", "", "arrange", "an", "emergency", "stop.", 
    "The", "driver", "", "", "report", "any", "symptoms", "", "affect", "safe", "driving."
  ],
  blanks: [6, 12, 19, 20, 24],
  options: ["must", "should", "has", "to", "that", "may", "could", "have"],
  correct: ["must", "should", "has", "to", "that"],
  next: "scene6B_email"
},

scene6B_email: {
  type: "email",
  text: "Compose a professional email to the client explaining the delay and the actions taken.",
  teacherEmail: "xavier.benitz@gmail.com",
  emailSubject: "Delivery Delay Explanation",
  emailBody: "",
  resultText: "Great work! Please send this email to your teacher to complete the assignment."
},
"scene4C_safe": {
  type: "scramble",
  text: "You are given instructions to translate to the driver. Be polite!",
  contextText: "Dígale al conductor que se detenga immeditamente para descansar.",
  scramble: [
    "Please",
    "stop",
    "and",
    "rest",
    "immediately",
    "before",
    "continuing."
  ],
  correct: [
    "Please",
    "stop",
    "and",
    "rest",
    "immediately",
    "before",
    "continuing."
  ],
  next: "scene5B1"
},
"scene4C_caution": {
  type: "scramble",
  text: "The driver reports feeling somewhat tired but insists on continuing. You remind them to stay vigilant and take breaks as needed to maintain safety.\n\nArrange the words to form a clear instruction advising the driver to be cautious and take breaks if feeling tired.",
  contextText: "Advise the driver to stay alert and take breaks if feeling tired.",
  scramble: [
    "Please",
    "stay",
    "alert",
    "and",
    "take",
    "breaks",
    "if",
    "you",
    "feel",
    "tired."
  ],
  correct: [
    "Please",
    "stay",
    "alert",
    "and",
    "take",
    "breaks",
    "if",
    "you",
    "feel",
    "tired."
  ],
  next: "scene5B1"
}
























}

  









// === Game start setup ===
let currentSceneId = "scene1";

function startGame() {
  const overlay = document.getElementById("overlay-content");
  const gameContainer = document.getElementById("game-container");
  if (overlay) overlay.style.display = "none";
  if (gameContainer) gameContainer.style.display = "block";
  loadScene(currentSceneId);
}

// === Utilities ===
function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}
// Helper to clean words of problematic Unicode characters
function cleanWord(word) {
  // Replace non-breaking spaces and remove non-ASCII chars
  return word.replace(/\u00A0/g, ' ').replace(/[^\x00-\x7F]/g, '');
}
// Helper to clean words of problematic Unicode characters
function cleanWord(word) {
  return word.replace(/\u00A0/g, ' ').replace(/[^\x00-\x7F]/g, '');
}

// Clean all relevant arrays in all scenes
function cleanScenesData(scenesObj) {
  for (const key in scenesObj) {
    if (!scenesObj.hasOwnProperty(key)) continue;
    const scene = scenesObj[key];
    if (scene.sentence && Array.isArray(scene.sentence)) {
      scene.sentence = scene.sentence.map(word => cleanWord(word));
    }
    if (scene.options && Array.isArray(scene.options)) {
      scene.options = scene.options.map(word => cleanWord(word));
    }
    if (scene.correct && Array.isArray(scene.correct)) {
      scene.correct = scene.correct.map(word => cleanWord(word));
    }
    if (scene.scramble && Array.isArray(scene.scramble)) {
      scene.scramble = scene.scramble.map(word => cleanWord(word));
    }
  }
}
cleanScenesData(scenes);
console.log("Cleaned sentence5B1:", scenes["scene5B1"].sentence);



// === Main scene loader ===
function loadScene(id) {
  console.log(`\n>>> loadScene called with ID: "${id}"`);
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene data not found for ID: ${id}`);
    return;
  }

  // Grab all containers safely
  const sceneImage = document.getElementById("scene-image");
  const sceneText = document.getElementById("scene-text");
  const scrambleDiv = document.getElementById("sentence-scramble");
  const feedbackDiv = document.getElementById("scramble-feedback");
  const fillBlankContainer = document.getElementById("sceneFillInTheBlank");

  const infoDiv = document.getElementById("challenge-info");
  const choicesDiv = document.getElementById("choices-container");
  const scene6UI = document.getElementById("scene6-ui");
  const gameContainer = document.getElementById("game-container");
  const container = document.getElementById('scene-container');
  const emailContainer = document.getElementById("email-challenge-container");

  console.log('Container element:', container);

  // Clear and hide main containers to prevent residual content leaking
  if (container) {
    container.innerHTML = "";
  }
  if (emailContainer) {
    emailContainer.innerHTML = "";
  }

  // Clear and hide all other UI containers that hold text or interactive content
  [
    sceneText,
    infoDiv,
    choicesDiv,
    scrambleDiv,
    feedbackDiv,
    fillBlankContainer,
    scene6UI
  ].forEach(el => {
    if (el) {
      el.style.display = "none";
      el.innerHTML = "";
    }
  });

  if (gameContainer) gameContainer.style.display = "block";

  // *** NEW: Restore challenge-info content from scene data ***
  if (infoDiv) {
    if (scene.emailFromClient) {
      infoDiv.style.display = "block";
      infoDiv.innerHTML = scene.emailFromClient;
    } else if (scene.contextText) {
      infoDiv.style.display = "block";
      infoDiv.textContent = scene.contextText;
    } else {
      infoDiv.style.display = "none";
      infoDiv.innerHTML = "";
    }
  }

  // Now proceed with existing scene rendering logic...

  // Dispatch by scene type
  switch (scene.type) {
    case "interaction":
      loadInteractionScene(id);
      return;

    case "fill-in-the-blank":
      if (fillBlankContainer) {
        fillBlankContainer.style.display = "block";
        loadFillInTheBlankScene(id, fillBlankContainer);
      }
      return;

    case "video":
      loadVideoScene(id);
      return;

    case "email":
      loadEmailChallengeScene(id);
      return;

    default:
      break;
  }

  // Show text or hide
  if (sceneText) {
    if (scene.text) {
      sceneText.style.display = "block";
      sceneText.textContent = scene.text;
    } else if (scene.render) {
      sceneText.style.display = "none";
    } else {
      sceneText.innerHTML = "";
    }
  }

  // Show image or hide
  if (sceneImage) {
    if (scene.image) {
      sceneImage.style.display = "block";
      sceneImage.innerHTML = `<img src="${scene.image}" alt="Scene Image">`;
    } else {
      sceneImage.style.display = "none";
      sceneImage.innerHTML = "";
    }
  }

  // Scramble challenge
  if (
    scene.scramble &&
    scene.correct &&
    scene.next &&
    scene.type !== "fill-in-the-blank"
  ) {
    if (scrambleDiv && feedbackDiv) {
      scrambleDiv.style.display = "block";
      feedbackDiv.style.display = "block";
      scrambleDiv.innerHTML = "";
      feedbackDiv.innerText = "";

      const instruction = document.createElement("p");
      instruction.className = "scramble-instructions";
      instruction.textContent = "🧩 Drag the lines into the correct order:";
      scrambleDiv.appendChild(instruction);

      const scrambleContainer = document.createElement("div");
      scrambleContainer.id = "scramble-words";
      const shuffled = shuffleArray(scene.scramble);
      shuffled.forEach((line) => {
        const span = document.createElement("span");
        span.className = "scramble-word";
        span.textContent = line;
        scrambleContainer.appendChild(span);
      });
      scrambleDiv.appendChild(scrambleContainer);
      Sortable.create(scrambleContainer, { animation: 150 });

      const checkBtn = document.createElement("button");
      checkBtn.textContent = "Check Answer";
      checkBtn.onclick = () => checkScrambleAnswer(scene.correct, scene.next);
      scrambleDiv.appendChild(checkBtn);
    }
    return;
  }

  // Choices buttons
  if (scene.choices && scene.choices.length > 0 && choicesDiv) {
    choicesDiv.style.display = "block";
    choicesDiv.innerHTML = "";
    scene.choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;
      btn.onclick = () => loadScene(choice.next);
      choicesDiv.appendChild(btn);
    });
    return;
  }

  // Render function fallback
  if (scene.render && sceneText) {
    sceneText.innerHTML = "";
    scene.render(sceneText);
    return;
  }

  // Text only fallback
  if (scene.text && sceneText) {
    sceneText.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = scene.text;
    sceneText.appendChild(p);
  }

  // Add Play Again button only on final thank you scene (outside switch, after all rendering)
  if (id === "thank_you_scene" && container) {
    if (!document.getElementById("play-again")) {
      console.log(">>> Adding Play Again button now!");
      const message = document.createElement('p');
      message.textContent = "Thank you for playing! Please click below to play again.";
      container.appendChild(message);

      const playAgainBtn = document.createElement('button');
      playAgainBtn.id = "play-again";
      playAgainBtn.textContent = "Play Again";
      playAgainBtn.style.cssText = `
        margin-top: 20px;
        font-size: 1.2rem;
        padding: 10px 20px;
        background-color: #0ff;
        color: #000;
        border: none;
        cursor: pointer;
      `;
      playAgainBtn.onclick = () => {
        currentSceneId = "scene1"; // Reset to first scene
        loadScene(currentSceneId);
      };
      container.appendChild(playAgainBtn);
    } else {
      console.log(">>> Play Again button already exists.");
    }
  } else {
    console.log(`>>> No Play Again button added on scene "${id}".`);
  }
}















// === Scramble answer check ===
function checkScrambleAnswer(correctOrder, nextSceneId) {
  const words = Array.from(document.querySelectorAll("#scramble-words .scramble-word"));
  const userOrder = words.map((w) => w.textContent.trim());
  const feedback = document.getElementById("scramble-feedback");
  const container = document.getElementById('scene-container');
  const scene = scenes[currentSceneId];  // get current scene

  if (!feedback) return;

  if (arraysEqual(userOrder, correctOrder)) {
    feedback.textContent = "✅ Correct! Moving on...";
    feedback.style.color = "lightgreen";

    setTimeout(() => {
      const nextScene = scenes[nextSceneId];
      if (nextScene && nextScene.type === "interaction") {
        loadInteractionScene(nextSceneId);
      } else {
        loadScene(nextSceneId);
      }
    }, 1000);
  } else {
    feedback.textContent = "❌ Not quite. Try again.";
    feedback.style.color = "salmon";
  }

  if (scene.playAgain && container && !document.getElementById("play-again")) {
    const playAgainBtn = document.createElement('button');
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.id = "play-again";
    playAgainBtn.style.cssText = `
      margin-top: 20px;
      font-size: 1.2rem;
      padding: 10px 20px;
      background-color: #0ff;
      color: #000;
      border: none;
      cursor: pointer;
    `;
    playAgainBtn.addEventListener('click', () => {
      // Reset game variables/state here if needed
      loadScene('scene1');
    });
    container.appendChild(playAgainBtn);
  }
}


// === Drag-and-drop Fill-in-the-Blank ===
function loadFillInTheBlankScene(sceneId, container) {
  const infoDiv = document.getElementById("challenge-info");
  if (infoDiv) {
    infoDiv.style.display = "none";
    infoDiv.innerHTML = "";
  }

  const scene = scenes[sceneId];
  if (!scene) {
    console.error(`Scene ${sceneId} not found.`);
    return;
  }

  // Inject HTML structure into container
  container.innerHTML = `
    <h2>Fill in the Blanks Challenge</h2>
    <p>${scene.text || "Fill in the blanks by dragging the correct options below."}</p>
    <p id="fill-blank-sentence" style="font-size: 1.2rem; line-height: 1.5; margin-bottom: 20px;"></p>
    <div id="fill-blank-options" style="margin-bottom: 20px; display: flex; flex-wrap: wrap; gap: 8px;"></div>
    <button id="check-fill-blank-answer">Check Answer</button>
    <div id="fill-blank-feedback" style="margin-top: 10px; font-weight: bold;"></div>
  `;

  const sentenceEl = container.querySelector("#fill-blank-sentence");
  const optionsEl = container.querySelector("#fill-blank-options");
  const feedbackEl = container.querySelector("#fill-blank-feedback");

  // Destroy any existing Sortable instances before creating new ones
  if (container._sortableBlanks) {
    container._sortableBlanks.forEach(s => s.destroy());
    container._sortableBlanks = null;
  }
  if (container._sortableOptions) {
    container._sortableOptions.destroy();
    container._sortableOptions = null;
  }

  // Render the sentence with blanks as droppable zones
  let html = "";
  for (let i = 0; i < scene.sentence.length; i++) {
    if (scene.blanks.includes(i)) {
      html += `<span class="fill-blank-dropzone" data-index="${i}" style="
        display: inline-block;
        min-width: 80px;
        border-bottom: 2px solid #00ffff;
        margin: 0 4px;
        vertical-align: bottom;
        padding: 4px 6px;
        cursor: pointer;
        background-color: #111;
      "></span> `;
    } else {
      html += `<span style="margin: 0 4px;">${scene.sentence[i]}</span> `;
    }
  }
  sentenceEl.innerHTML = html;

  // Render draggable options
  optionsEl.innerHTML = "";
  scene.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "fill-blank-option";
    btn.style.cssText = `
      padding: 6px 12px;
      border-radius: 6px;
      border: 2px solid #00ffff;
      background: #000;
      color: #0ff;
      font-weight: bold;
      cursor: grab;
      user-select: none;
    `;
    optionsEl.appendChild(btn);
  });

  // Setup SortableJS for blanks (droppable zones)
  const dropzones = sentenceEl.querySelectorAll(".fill-blank-dropzone");
  container._sortableBlanks = Array.from(dropzones).map(zone => {
    return Sortable.create(zone, {
      group: "fillInTheBlank",
      animation: 150,
      sort: false,
      onAdd: evt => {
        const dragged = evt.item;
        // Remove dragged from options pool when dropped into blank
        if (dragged.parentNode === optionsEl) {
          dragged.parentNode.removeChild(dragged);
        }
        // Ensure only one child in each dropzone
        if (evt.to.children.length > 1) {
          Array.from(evt.to.children).forEach(child => {
            if (child !== dragged) {
              evt.to.removeChild(child);
              optionsEl.appendChild(child);
            }
          });
        }
      },
      onRemove: evt => {
        // Append dragged item back to options pool when removed from blank
        optionsEl.appendChild(evt.item);
      }
    });
  });

  // Setup SortableJS for options container
  container._sortableOptions = Sortable.create(optionsEl, {
    group: "fillInTheBlank",
    animation: 150,
  });

  // Check answer button logic
  container.querySelector("#check-fill-blank-answer").onclick = () => {
    const userAnswers = [];
    let allFilled = true;
    dropzones.forEach(zone => {
      if (zone.children.length === 1) {
        userAnswers.push(zone.children[0].textContent.trim());
      } else {
        allFilled = false;
      }
    });

    if (!allFilled) {
      feedbackEl.textContent = "⚠️ Please fill all blanks.";
      feedbackEl.style.color = "orange";
      return;
    }

    // Compare user answers to correct answers case-insensitively
    const allCorrect = userAnswers.every(
      (ans, i) => ans.toLowerCase() === scene.correct[i].toLowerCase()
    );

    if (allCorrect) {
      feedbackEl.textContent = "✅ Correct! Well done.";
      feedbackEl.style.color = "lightgreen";
      if (scene.next) {
        setTimeout(() => loadScene(scene.next), 1500);
      }
    } else {
      feedbackEl.textContent = "❌ Not quite. Try again.";
      feedbackEl.style.color = "red";
    }
  };
}








// === Video challenge loader ===
function loadVideoScene(sceneId) {
  

  
  const infoDiv = document.getElementById("challenge-info");
if (infoDiv) {
  infoDiv.style.display = "none";
  infoDiv.innerHTML = "";
}

  const scene = scenes[sceneId];
  if (!scene) {
    console.error(`Scene ${sceneId} not found.`);
    return;
  }

  const gameContainer = document.getElementById("game-container");
  if (gameContainer) gameContainer.style.display = "block";

  if (gameContainer) {
    gameContainer.innerHTML = `
      <video id="scene-video" controls style="max-width: 100%; height: auto;">
        <source src="${scene.videoSrc}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="video-question" style="margin-top: 20px; display: none;">
        <p>${scene.question || "Watch the video and answer the question below."}</p>
        <div id="video-options"></div>
        <div id="video-feedback" style="margin-top: 10px; font-weight: bold;"></div>
        <button id="check-video-answer" disabled>Check Answer</button>
      </div>
    `;
  }

  const video = document.getElementById("scene-video");
  const questionDiv = document.getElementById("video-question");
  const optionsDiv = document.getElementById("video-options");
  const feedbackDiv = document.getElementById("video-feedback");
  const checkBtn = document.getElementById("check-video-answer");

  video.onended = () => {
    questionDiv.style.display = "block";
    optionsDiv.innerHTML = "";

    scene.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.style.display = "block";
      label.style.marginBottom = "8px";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "video-answer";
      radio.value = i;
      radio.addEventListener("change", () => {
        checkBtn.disabled = false;
        feedbackDiv.textContent = "";
      });

      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + opt));
      optionsDiv.appendChild(label);
    });
  };

  checkBtn.onclick = () => {
    const selected = document.querySelector('input[name="video-answer"]:checked');
    if (!selected) {
      feedbackDiv.textContent = "⚠️ Please select an answer.";
      feedbackDiv.style.color = "orange";
      return;
    }

    const answerIndex = parseInt(selected.value, 10);
    const isCorrect = (answerIndex === scene.correct);

    if (isCorrect) {
      feedbackDiv.textContent = "✅ Correct! Moving on...";
      feedbackDiv.style.color = "lightgreen";

      setTimeout(() => {
        if (scene.next) {
          loadScene(scene.next);
        }
      }, 1500);
    } else {
      feedbackDiv.textContent = "❌ Not quite. Try again.";
      feedbackDiv.style.color = "red";
    }
  };
}

// === Audio negotiation interaction loader ===
function loadInteractionScene(id) {
  const infoDiv = document.getElementById("challenge-info");
if (infoDiv) {
  infoDiv.style.display = "none";
  infoDiv.innerHTML = "";
}

  console.log(`Loading interaction scene: ${id}`);
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene data not found for ID: ${id}`);
    return;
  }

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const scramble = document.getElementById("sentence-scramble");
  const feedback = document.getElementById("scramble-feedback");
  const interactionUI = document.getElementById("scene6-ui");

  if (gameContainer) gameContainer.style.display = "block";
  if (interactionUI) interactionUI.style.display = "block";

  // Show text if present
  if (sceneText) {
    if (scene.text) {
      sceneText.style.display = "block";
      sceneText.textContent = scene.text;
    } else {
      sceneText.style.display = "none";
    }
  }

  // Show image if present
  if (sceneImage) {
    if (scene.image) {
      sceneImage.style.display = "block";
      sceneImage.innerHTML = `<img src="${scene.image}" alt="Scene Image">`;
    } else {
      sceneImage.style.display = "none";
      sceneImage.innerHTML = "";
    }
  }

  // Hide scramble and feedback
  if (scramble) scramble.style.display = "none";
  if (feedback) feedback.style.display = "none";

  if (interactionUI) {
    interactionUI.innerHTML = `
      <h2>Negotiation</h2>
      <p>🎙️ Listen carefully. Press play when ready. Once the audio ends, you’ll have <strong>30 seconds</strong> to choose your reply.</p>
      <div id="interaction"></div>
    `;
  }

  let score = 0;
  let index = 0;

  function showInteraction() {
    
    console.log(`showInteraction called, index = ${index}`);

    if (index >= scene.interactions.length) {
      const ending =
        score >= scene.scoring.high ? scene.endings.high :
        score >= scene.scoring.medium ? scene.endings.medium :
        scene.endings.low;

      console.log("All interactions done, loading ending:", ending);

      // Show back regular UI containers
      if (sceneText) sceneText.style.display = "block";
      if (sceneImage) sceneImage.style.display = "block";
      if (scramble) scramble.style.display = "block";
      if (feedback) feedback.style.display = "block";

      if (interactionUI) {
        interactionUI.style.display = "none";
        interactionUI.innerHTML = "";
      }

      loadScene(ending);
      return;
    }

    const interaction = scene.interactions[index];
    const interactionDiv = document.getElementById("interaction");
    if (!interactionDiv) return;

    interactionDiv.innerHTML = `
      <audio id="interaction-audio" controls>
        <source src="${interaction.audio}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <div id="timer">⏳ Waiting for audio to finish...</div>
      <div id="options" style="margin-top: 10px;"></div>
      <div id="feedback" style="margin-top: 10px;"></div>
    `;

    const audio = document.getElementById("interaction-audio");

    audio.onplay = () => {
      console.log("Audio started playing");
    };

    audio.onerror = (e) => {
      console.error("Audio error:", e);
    };

    audio.onended = () => {
      console.log("Audio ended");

      let timeLeft = 30;
      const timerEl = document.getElementById("timer");
      if (timerEl) timerEl.textContent = `⏳ ${timeLeft} seconds remaining...`;

      const countdown = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.textContent = `⏳ ${timeLeft} seconds remaining...`;
        if (timeLeft <= 0) {
          clearInterval(countdown);
          const feedbackDiv = document.getElementById("feedback");
          if (feedbackDiv) feedbackDiv.textContent = "⌛ Time expired. No reply sent.";
          index++;
          setTimeout(showInteraction, 2000);
        }
      }, 1000);

      const optionsDiv = document.getElementById("options");
      if (!optionsDiv) return;
      optionsDiv.innerHTML = "";

      interaction.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = typeof opt === "string" ? opt : opt.text;
        btn.onclick = () => {
          clearInterval(countdown);
          console.log(`Option clicked: ${btn.textContent}`);
          const isCorrect = (typeof opt === "string") ? (i === interaction.correct) : (opt.score === 1);
          const feedbackDiv = document.getElementById("feedback");
          if (feedbackDiv) {
            if (isCorrect) {
              score++;
              feedbackDiv.textContent = "✅ Response recorded.";
              feedbackDiv.style.color = "lightgreen";
            } else {
              feedbackDiv.textContent = "⚠️ Response recorded.";
              feedbackDiv.style.color = "orange";
            }
          }
          index++;
          setTimeout(showInteraction, 1500);
        };
        optionsDiv.appendChild(btn);
      });
    };
  }

  showInteraction();
}

// === Email writing challenge loader ===
function loadEmailChallengeScene(sceneId) {
  const scene = scenes[sceneId];
  if (!scene) {
    console.error(`Scene ${sceneId} not found.`);
    return;
  }

  // Clear and hide the scene image container to prevent lingering images from previous scenes
  const sceneImage = document.getElementById("scene-image");
  if (sceneImage) {
    sceneImage.style.display = "none";
    sceneImage.innerHTML = "";
  }

  const emailContainer = document.getElementById("email-challenge-container");
  if (!emailContainer) {
    console.error("Email challenge container not found");
    return;
  }

  // Use scene.text explicitly, with a console warning if missing
  if (!scene.text || scene.text.trim() === "") {
    console.warn(`Scene ${sceneId} missing 'text' property or it is empty.`);
  }

  emailContainer.innerHTML = `
    <h2>Final Assignment</h2>
    <p style="white-space: pre-wrap; font-weight: 600;">${scene.text || "Please write an email to your teacher below."}</p>
    <form id="email-form" style="margin-top: 20px;">
      <label for="email-to">To:</label><br/>
      <input type="email" id="email-to" name="email-to" value="${scene.teacherEmail || ''}" style="width: 100%;" readonly /><br/><br/>
      
      <label for="email-subject">Subject:</label><br/>
      <input type="text" id="email-subject" name="email-subject" value="${scene.emailSubject || 'Assignment Submission'}" style="width: 100%;" /><br/><br/>
      
      <label for="email-body">Message:</label><br/>
      <textarea id="email-body" name="email-body" rows="8" style="width: 100%;">${scene.emailBody || ''}</textarea><br/><br/>
      
      <button type="button" id="send-email-btn">Send Email</button>
    </form>
    <div id="email-feedback" style="margin-top: 15px; font-weight: bold;"></div>
  `;

  const form = emailContainer.querySelector("#email-form");
  const toInput = emailContainer.querySelector("#email-to");
  const subjectInput = emailContainer.querySelector("#email-subject");
  const bodyInput = emailContainer.querySelector("#email-body");
  const feedback = emailContainer.querySelector("#email-feedback");
  const sendBtn = emailContainer.querySelector("#send-email-btn");

  sendBtn.onclick = () => {
    if (!subjectInput.value.trim() || !bodyInput.value.trim()) {
      feedback.textContent = "⚠️ Subject and message body cannot be empty.";
      feedback.style.color = "orange";
      return;
    }
    feedback.textContent = "";

    const mailto = `mailto:${encodeURIComponent(toInput.value)}?subject=${encodeURIComponent(subjectInput.value)}&body=${encodeURIComponent(bodyInput.value)}`;

    window.location.href = mailto;

    // Load the thank you scene properly instead of just replacing HTML content
    setTimeout(() => {
      loadScene("thank_you_scene");
    }, 1500);
  };
}












