const quotes = [
    {
        quote:"the way",
        author:"ww",
    },
    {
        quote:"life is",
        author:"john",
    },
    {
        quote:"love",
        author:"her",
    }




]

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");


//const randomnumber = Math.floor(Math.random()*10);

//console.log(quotes[randomnumber]);
randomView();


function randomView(){
    const randomnumber = Math.floor(Math.random()* quotes.length);
    console.log(randomnumber);

    quote.innerText = quotes[randomnumber].quote;
    autor.innerText = quotes[randomnumber].author;
    
}