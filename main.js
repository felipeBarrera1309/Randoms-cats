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

async function reload(){
    const getData = await fetch(API_URL);
    const seeData = await getData.json();
    const filterImages = seeData.filter((el, i) => i <= 2)
    const [{ url: url1 }, { url: url2 }, { url: url3 }] = filterImages
    urlOne = url1;
    urlTwo = url2;
    urlThree = url3;
    imageOne.setAttribute('src', urlOne);
    imageTwo.setAttribute('src', urlTwo);
    imageThree.setAttribute('src', urlThree);
    imageOne.src = seeData[0].url;
}

reload()


const buttonOne = document.querySelector('#button-one')
const buttonTwo = document.querySelector('#button-two')
const buttonThree = document.querySelector('#button-three')

const parentDiv = document.querySelector('.parent-save')

let arrayCats = []

function saveImage(value){
    reload()
    let elements = {}
    if(value === 1) arrayCats.push({ url: urlOne, id: value})
    if(value === 2) arrayCats.push({ url: urlTwo, id: value})
    if(value === 3) arrayCats.push({ url: urlThree, id: value})

    console.log(arrayCats);
    if(arrayCats.length){
        elements = arrayCats.find(el => el.id === value)
        if(Object.keys(elements).length){
            parentDiv.innerHTML += `
                <img src='${elements.url}' class='imagesSaved' />
            `
        }
    }
}