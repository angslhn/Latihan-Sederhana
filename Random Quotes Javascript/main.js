window.addEventListener("resize", autoResize());

function autoResize() {
  const sectionContent = document.querySelector(".auto-resize-height");
  sectionContent.style.height = `${window.innerHeight}px`;
}

autoResize();

const url = "https://api.quotable.io/random";
function getQuote() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      showQuote(data);
    });
}

function showQuote(data) {
    document.getElementById("quote").textContent = data.content;
    document.getElementById("author").textContent = `-${data.author}`;
}

getQuote();
