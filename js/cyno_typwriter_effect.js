const twcarouselText = [
  {text: "IMAGINE", color: "white"},
  {text: "CREATE", color: "white"},
  {text: "INSPIRE", color: "white"}
]

$( document ).ready(function() {  
  (async function(){
    twcarousel(twcarouselText, "#feature-text")
  })();
});

async function typeSentence(sentence, eleRef, delay = 125) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function twcarousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      $(eleRef).css('font-size', "55px");
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(2000);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
