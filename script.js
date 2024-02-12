const api_url = "https://api.quotable.io/quotes/random";
const quotes = document.getElementById("Quote");
const author = document.getElementById("author");
async function getquote (url){
    const response = await fetch(url);
    var data = await response.json();
    quotes.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
  
}
getquote(api_url);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quotes.innerHTML ,"Tweet Window","width=600, height=300");
}


document.getElementById("newQuoteBtn").addEventListener("click",()=>{
    getquote(api_url);
});