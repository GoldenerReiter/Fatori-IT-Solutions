"use strict"

// getting the quote

let footerQuoteQS = document.querySelector(".footer-quote");
let authorQuoteQS = document.querySelector(".author-quote")

fetch("https://stoicquotesapi.com/v1/api/quotes/random")
    .then((res) => res.json())
    .then((res) => JSON.stringify(res))
    .then((res) => localStorage.setItem("quote", res));

let quoteJSON = localStorage.getItem("quote");
let quote = JSON.parse(quoteJSON);

let quotequote = quote.body;

// translation of the quote

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
		'X-RapidAPI-Key': '020d4230a9msh3631d4455749e93p193201jsndf1509523b22'
	},
	body: `{"q":"${quotequote}","source":"en","target":"es"}`
};

fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(res => res.json())
    .then((res) => JSON.stringify(res))
    .then((res) => localStorage.setItem("translQuote", res));

let translQuoteJSON = localStorage.getItem("translQuote");
let translQuote = JSON.parse(translQuoteJSON);

console.log(translQuote);

footerQuoteQS.innerHTML = translQuote.data.translations.translatedText;
authorQuoteQS.innerHTML = quote.author;
