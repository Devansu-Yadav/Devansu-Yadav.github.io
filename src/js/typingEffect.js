async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    var text = "";
    while(i < letters.length) {
      await waitForMs(delay);
      text += letters[i];
      eleRef.innerText = text;
      i++
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = eleRef.innerText;
    const letters = sentence.split("");
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      eleRef.innerText = letters.join("");
    }
}
  

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}