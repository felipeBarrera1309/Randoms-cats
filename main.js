const API_KEY = 'live_86eNcoc9sFOy4nSDHZlAczskKAiJO4dbWvkg2nkl2TyP6Q9xXquSlv3E1iIaI11n'

const API_URL = `https://api.thecatapi.com/v1/images/search?limit=3&api_key=${API_KEY}`;

const button = document.querySelector('#button-reaload')

button.addEventListener('click', reload)
const imageOne = document.querySelector('#image1');
const imageTwo = document.querySelector('#image2');
const imageThree = document.querySelector('#image3');

let urlOne = null
let urlTwo = null
let urlThree = null

let data = {
    0: { url: null },
    1: { url: null },
}

let arrayCats = []

async function reload(){
    const getData = await fetch(API_URL);
    const seeData = await getData.json();
    const filterImages = seeData.filter((el, i) => i <= 1)
    const [
        { url: url1},
        { url: url2},
    ] = filterImages
    console.log(filterImages);
    filterImages.forEach((el, i) => {
        data[i].url = el.url
    })
    urlOne = url1;
    urlTwo = url2;
    arrayCats = filterImages
    imageOne.setAttribute('src', urlOne);
    imageTwo.setAttribute('src', urlTwo);
    imageOne.src = seeData[0].url;
}

reload()


const buttonOne = document.querySelector('#button-one')
const buttonTwo = document.querySelector('#button-two')

const parentDiv = document.querySelector('.parent-save')


function saveImage(value){
    const elementImg = document.createElement('img')
    elementImg.setAttribute('src', data[value].url)
    parentDiv.appendChild(elementImg)
}
