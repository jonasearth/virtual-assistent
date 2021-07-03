let SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
let SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
let moods = ["happy", "sad", "sleepy", "angry"];
let grammar =
  "#JSGF V1.0; grammar moods; public <moods> = " + moods.join(" | ") + ";";

renderSpeech();
function App() {
  return <h1>asdasd</h1>;
}

function renderSpeech() {
  let recognition = new SpeechRecognition();
  let recognitionList = new SpeechGrammarList();
  recognitionList.addFromString(grammar, 1);
  recognition.grammars = recognitionList;
  recognition.lang = "pt-BR";
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();
  let a = false;

  recognition.onresult = (event) => {
    //handle result in here
    console.log(a);
    let word = event.results[event.results.length - 1][0].transcript;
    console.log(word);
  };
  setTimeout(() => {
    recognition.stop();
    renderSpeech();
  }, 10000);
}
export default App;
