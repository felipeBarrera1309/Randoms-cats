const API_KEY = 'live_86eNcoc9sFOy4nSDHZlAczskKAiJO4dbWvkg2nkl2TyP6Q9xXquSlv3E1iIaI11n'

const API_URL = `https://api.thecatapi.com/v1/images/search?limit=2&api_key=${API_KEY}`;

const API_URL_POST = `https://api.thecatapi.com/v1/favourites?limit=2&api_key=${API_KEY}`

const button = document.querySelector('#button-reaload')

const spanError = document.querySelector('#error')

const title = document.querySelector('#title-h1')

button.addEventListener('click', reload)
const imageOne = document.querySelector('#image1');
const imageTwo = document.querySelector('#image2');
const imageThree = document.querySelector('#image3');

let urlOne = null
let urlTwo = null
let urlThree = null

let datasIdis = {
    0: { id: null },
    1: { id: null },
}

async function reload(){
    try{
        const getData = await fetch(API_URL);
        const seeData = await getData.json();
        urlOne = seeData[0].url
        urlTwo = seeData[1].url;
        seeData.forEach((el, i) => {
            datasIdis[i] = el.id
        })
        imageOne.setAttribute('src', urlOne);
        imageTwo.setAttribute('src', urlTwo);
        imageOne.src = seeData[0].url;
    }catch(error){
        if(error.message){
            title.style.display = 'none'
            spanError.innerHTML = `
                Hubo un error: ${error.messages}
            `
        }else{
            title.style.display = 'block'
        }
    }
}

reload()


const buttonOne = document.querySelector('#button-one')
const buttonTwo = document.querySelector('#button-two')

const parentDiv = document.querySelector('.parent-save')


async function saveFavouritesCats(value){
    try{
        const res = await fetch(API_URL_POST, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: {
                image_id: '31p'
            }
        })
    }
    catch(error){s
        console.log(error.message);
    }
}
