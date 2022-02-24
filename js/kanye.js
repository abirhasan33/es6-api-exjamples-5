const lodeQupotea = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(dta => sidplyQuote(dta))
}

const sidplyQuote = (quote) =>{
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote
}
