// const url = 'https://api.adviceslip.com/advice';
let id = document.getElementById('label');
let advice = document.getElementById('advice');

async function getRand(url) {
    try {
        let rawData = await fetch(url);
        let textData = await rawData.text();
        let arrData = await JSON.parse(textData);
        id.innerHTML = "ADVICE #" + arrData.slip.id;
        advice.innerHTML = arrData.slip.advice;
    } catch (error) {
        return console.log(error);
    }
}