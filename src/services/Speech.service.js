import { useEffect } from "react";

const SpeechService = () => {
  useEffect(() => {
    renderSpeech();
  }, []);
  let isNew = false;
  let inRes = false;
  function renderSpeech() {
    isNew = false;

    inRes = false;
    let SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;
    let SpeechGrammarList =
      window.SpeechGrammarList || window.webkitSpeechGrammarList;
    let moods = ["happy", "sad", "sleepy", "angry"];
    let grammar =
      "#JSGF V1.0; grammar moods; public <moods> = " + moods.join(" | ") + ";";
    let recognition = new SpeechRecognition();
    let recognitionList = new SpeechGrammarList();
    recognitionList.addFromString(grammar, 1);
    recognition.grammars = recognitionList;
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.start();
    console.log("Escutando!", new Date());
    recognition.onresult = (event) => {
      let word =
        event.results[event.results.length - 1][0].transcript.toString();
      console.log("Antes: ", word);
      if ((word.includes("liz") || word.includes("Liz")) && !inRes) {
        isNew = true;
        inRes = true;
        recognition.stop();
        newRenderSpeech();
      }
    };
    recognition.onend = function () {
      if (!isNew) {
        console.log("opa ", new Date());
        renderSpeech();
      }
    };
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function newRenderSpeech() {
    let SpeechRecognition1 =
      window.webkitSpeechRecognition || window.SpeechRecognition;
    let SpeechGrammarList1 =
      window.SpeechGrammarList || window.webkitSpeechGrammarList;
    let moods1 = ["happy", "sad", "sleepy", "angry"];
    let grammar1 =
      "#JSGF V1.0; grammar moods; public <moods> = " + moods1.join(" | ") + ";";
    let recognition1 = new SpeechRecognition1();
    let recognitionList1 = new SpeechGrammarList1();
    recognitionList1.addFromString(grammar1, 1);
    recognition1.grammars = recognitionList1;
    recognition1.lang = "pt-BR";
    recognition1.continuous = true;
    recognition1.interimResults = false;
    recognition1.maxAlternatives = 1;

    speak();
    await sleep(1500);
    recognition1.start();
    console.log("Comando!");
    recognition1.onresult = (event) => {
      let word1 =
        event.results[event.results.length - 1][0].transcript.toString();
      console.log("Depois ", word1);
      speechSynthesis.speak(new SpeechSynthesisUtterance(word1));
      if (word1.includes("alice") || word1.includes("Alice")) {
        speechSynthesis.speak(new SpeechSynthesisUtterance("Eu te amo"));
      }
      recognition1.stop();
      renderSpeech();
    };
  }
  function speak() {
    speechSynthesis.speak(new SpeechSynthesisUtterance("Estou Escutando!"));
  }

  return <></>;
};

export default SpeechService;
