const API_KEY = 'live_86eNcoc9sFOy4nSDHZlAczskKAiJO4dbWvkg2nkl2TyP6Q9xXquSlv3E1iIaI11n'

const API_URL = `https://api.thecatapi.com/v1/images/search?limit=2&api_key=${API_KEY}`;

const API_URL_POST = `https://api.thecatapi.com/v1/favourites?sub_id=user-123&api_key=${API_KEY}`

const API_URL_DELETE = `https://api.thecatapi.com/v1/favourites/`

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
    0: { id: null, url: null },
    1: { id: null, url: null },
}

let saveDataMichis = []

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
        saveDataMichis = seeData
        seeData.forEach((el, i) => {
            datasIdis[i] = { id: el.id, url: el.url }
        })
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

async function saveMichisFavourites(position){
    const parentDiv = document.querySelector('.parent-save')
    const article = document.createElement('article')
    const image = document.createElement('img')
    const btn = document.createElement('button')
    btn.textContent = 'Favourtie cat <3'
    image.setAttribute('src', datasIdis[position].url)
    article.id = datasIdis[position].id


    try{
        const request = await fetch(API_URL_POST, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                image_id: 'db4'
            })
        })
        const data = await request.json()
        console.log('Esta es la data: ', data);

        parentDiv.appendChild(article)
        article.appendChild(image)
        article.appendChild(btn)


    }catch(error){
        console.log('Este es el error traido en pantalla: ', error.message);
    }

    btn.onclick = () => deleteMichisFavourites(datasIdis[position].id);

}

async function deleteMichisFavourites(id){

    let newArticle = document?.querySelector(`#${id}`)
    const getIdi = newArticle.getAttribute('id')
    console.log('id obtenido: ', getIdi);

    try{
        const res = await fetch(`${API_URL_DELETE+id}?api_key=${API_KEY}`, {
            method: 'DELETE',
        })
    }catch(error){
        console.log('Este es el error recibido: ', error.message);
    }
}
