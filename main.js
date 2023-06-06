const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: { 'x-api-key': 'live_86eNcoc9sFOy4nSDHZlAczskKAiJO4dbWvkg2nkl2TyP6Q9xXquSlv3E1iIaI11n' }
})

const API_KEY = 'live_86eNcoc9sFOy4nSDHZlAczskKAiJO4dbWvkg2nkl2TyP6Q9xXquSlv3E1iIaI11n'

const API_URL = `https://api.thecatapi.com/v1/images/search?limit=3`

const API_URL_GET = `https://api.thecatapi.com/v1/images/`

const API_URL_POST = `https://api.thecatapi.com/v1/favourites?sub_id=user-123&api_key=${API_KEY}`

const API_URL_DELETE = `https://api.thecatapi.com/v1/favourites/4tg`


const spanError = document.querySelector('#error')
const title = document.querySelector('#title-h1')
const imageThree = document.querySelector('#image3');

const button = document.querySelector('#button-reaload')

let urlOne = null
let urlTwo = null
let urlThree = null

let datasIdis = {
    0: { id: null, url: null },
    1: { id: null, url: null },
}

const saveDataMichisSix = [
    {id: "35e", url: "https://cdn2.thecatapi.com/images/35e.jpg", width: 1024, height: 791},
    {id: "4ia", url: "https://cdn2.thecatapi.com/images/4ia.gif", width: 500, height: 211},
]

const divParent = document.querySelector('.parent-save')


const claseOne = 'parentLines'

window.addEventListener('DOMContentLoaded', saveDatas)

const imageOne = document.querySelector('#image1')
const imageTwo = document.querySelector('#image2')

async function saveDatas(){
    const { data, status } = await api.get('/images/search?limit=2')
    imageOne.src = data[0].url
    imageTwo.src = data[1].url
    localStorage.setItem('data', JSON.stringify(data))
    const dataMichi = JSON.parse(localStorage.getItem('dataMichis')) ?? []
    saveMichisFavourites()
}

button.addEventListener('click', () => {

})
// Aqui se ejecuta la funcion que trae la informacion

// Funcion que guarda los gatos en favortos en la parte inferior
function saveMichisFavourites(identify){
    const dataMichi = JSON.parse(localStorage.getItem('dataMichis')) ?? []
    const getData = JSON.parse(localStorage.getItem('data'))
    if(dataMichi[identify]?.id == getData[identify].id)return
    if(identify == 0){
        dataMichi.push( {...[...getData][identify]} )
        localStorage.setItem('dataMichis', JSON.stringify(dataMichi))
    }else{
        dataMichi.push([...getData][identify])
        localStorage.setItem('dataMichis', JSON.stringify(dataMichi))
    }
    showCatsWindow()
}

function showCatsWindow(){
    const getMichis = JSON.parse(localStorage.getItem('dataMichis'))
    const getData = JSON.parse(localStorage.getItem('data'))
    getMichis.forEach(el => {
        divParent.innerHTML += `
            <article id="article-parent-images">
                <div class="parentImage">
                    <img alt="" src='${el.url}' id="image-main" />
                    <img class="corazonLGTBI" src="https://3.bp.blogspot.com/-aLRVa2l51f4/WPAxwRMCR2I/AAAAAAAAJxU/0mRKWkmOSbY10GsUhKjDR3WRCt2x_FskgCLcB/s640/corazon-10.gif" alt="" />
                </div>
                <div class="parentThings">
                    <div class="parentLines">
                        <div class="moveAllLines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </article>
        `
    })

}

// Funcion que elimina los gatitos

const form = document.querySelector('#form-cats')
const inputFile = document.querySelector('#file')

form.addEventListener('submit', addCatsFavourites)


async function addCatsFavourites(event){
    event.preventDefault()
    const formData = new FormData(form)

    if(formData.get('inputFile').name){
        
    }

}

const buttonOne = document.querySelector('#button-action-one')
const buttonTwo = document.querySelector('#button-action-two')
const image = document.querySelector('#image-file')

inputFile.addEventListener('change', (e) => {
    const imageBinary = e.target.files[0]
    const base64 = new FileReader()

    base64.onload = function(e){
        const lectorImage = e.target.result;
        image.src = lectorImage
    }
    if(e.target.files[0].name){
        image.setAttribute('class', 'upload-image')
    }
    console.log('Esto es lo que trae la imagen: ', e.target.files[0].name);

    base64.readAsDataURL(imageBinary)
})

buttonTwo.addEventListener('click', () => {
    
})