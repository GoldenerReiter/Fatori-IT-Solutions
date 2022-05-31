"use strict"

// getting the quote

let footerQuoteQS = document.querySelector(".footer-quote");
let authorQuoteQS = document.querySelector(".author-quote")

fetch("https://stoicquotesapi.com/v1/api/quotes/random")
    .then((res) => res.json())
    .then((res) => JSON.stringify(res))
	.then((res) => localStorage.setItem("quote", res))
	.catch (footerQuoteQS.innerHTML = "Quote not found.");

let quoteJSON = localStorage.getItem("quote");
let quote = JSON.parse(quoteJSON);

let quotequote = quote.body;

footerQuoteQS.innerHTML = quotequote;
authorQuoteQS.innerHTML = quote.author;
