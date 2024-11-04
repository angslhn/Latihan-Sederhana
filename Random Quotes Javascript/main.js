const dateNow = new Date();
document.getElementById("yearNow").textContent = dateNow.getFullYear();

window.addEventListener("resize", autoResize);

function autoResize() {
  const sectionContent = document.querySelector(".auto-resize-height");
  sectionContent.style.height = `${window.innerHeight}px`;
}

autoResize();

async function translateText(text) {
  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|id`);
    const data = await response.json();
    return data.responseData.translatedText;
  } 
  catch (error) {
    console.error("Failed to translate!", error);
  }
}

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error("Quote not available!", error);
  }
  
}

function showQuote(quote, author) {
  document.getElementById("quote").textContent = quote;
  document.getElementById("author").textContent = author;
}

const quoteWrapper = document.querySelector(".quote-content");

async function quote() {
    let data = await getQuote();

    if (data) {
      let textQuote = await translateText(data.content);

      quoteWrapper.style.display = "flex";

      showQuote(textQuote || data.content, data.author);
    }

};

quote();