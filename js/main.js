document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.drinks[0].strAlcoholic === "Non alcoholic") {
            document.querySelector('img').src = data.drinks[0].strDrinkThumb;
            document.querySelector('h2').innerText = `Have a ${data.drinks[0].strDrink}`;
            document.querySelector('h3').innerText = data.drinks[0].strInstructions;
            } else {
                getDrink()
            }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });   
}