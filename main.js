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
let arrayCats = []

async function reload(){
    const getData = await fetch(API_URL);
    const seeData = await getData.json();
    const filterImages = seeData.filter((el, i) => i <= 2)
    const [
        { url: url1, id: idOne },
        { url: url2, id: idTwo },
        { url: url3, id: idThree }
    ] = filterImages
    urlOne = url1;
    urlTwo = url2;
    urlThree = url3;
    arrayCats = filterImages
    console.log(filterImages);
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


function saveImage(value){
    let saveImages = []
    if(value === 0){
        saveImages.push(arrayCats.find((el, i) => i === value))
    }
    if(value === 1){
        saveImages.push(arrayCats.find((el, i) => i === value))
    }
    if(value === 2){
        saveImages.push(arrayCats.find((el, i) => i === value))
    }
    console.log(saveImages);
    if(saveImages.length){
        saveImages.forEach(el => {
            parentDiv.innerHTML += `
                <img src='${el.url}' class='imagesSaved' />
            `
        })
    }
}
