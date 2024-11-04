// Dynamic size container
window.addEventListener("resize", autoResize);

function autoResize() {
  const sectionContent = document.querySelector(".auto-resize-height");
  sectionContent.style.height = `${window.innerHeight}px`;
}

autoResize();

async function translateText(text) {
  const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|id`);
  const data = await response.json();
  return data.responseData.translatedText;
}

async function getQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data;
}

function showQuote(quote, author) {
  document.getElementById("quote").textContent = quote;
  document.getElementById("author").textContent = `-${author}`;
}

async function quote() {
    let data = await getQuote();
    let textQuote = await translateText(data.content);
    let author = data.author;

    showQuote(textQuote || data.content, author);
};

quote();