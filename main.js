const API_KEY = 'live_86eNcoc9sFOy4nSDHZlAczskKAiJO4dbWvkg2nkl2TyP6Q9xXquSlv3E1iIaI11n'

const API_URL = `https://api.thecatapi.com/v1/images/search?limit=10`

const API_URL_GET = `https://api.thecatapi.com/v1/images/`

const API_URL_POST = `https://api.thecatapi.com/v1/favourites?sub_id=user-123&api_key=${API_KEY}`

const API_URL_DELETE = `https://api.thecatapi.com/v1/favourites/4tg`


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

// Funcion que hace la peticion de la url para guardar las imagenes
async function reload(){
    try{
        const getData = await fetch(API_URL);
        const seeData = await getData.json();
        urlOne = seeData[0].url
        urlTwo = seeData[1].url;
        seeData.forEach((el, i) => {
            datasIdis[i] = el.id
        })
        console.log(seeData);
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
// Aqui se ejecuta la funcion que trae la informacion
reload()

// Funcion que guarda los gatos en favortos en la parte inferior
async function saveMichisFavourites(position){
    try{
        const request = await fetch(API_URL_GET + datasIdis[position].id, { method: 'GET', headers: { 'x-api-key': API_KEY } })
        const data = await request.json()
        console.log('Esta es la data traida: ', data);


        // Este es el div que contiene la imagen del gatico y el boton de eliminar y el corazon que aparece en el hover,contiene todo
        const parentDiv = document.querySelector('.parent-save')
        // la etiqueta article es el contenedor individual de la imagen del gatico y el boton de eliminar, es el que se repite cuando
        // hay un nuevo gatico
        const article = document.createElement('article')
        // Este es el id que identifica el article de todas las imagenes
        article.id = datasIdis[position].id

        // Imagen principal del gatico al guardarlo
        const image = document.createElement('img')
        // Aqui defino la imagen del gatico cuando lo guardo
        image.setAttribute('src', data.url)

        // Esta es la imagen del corazon al hacer hover en el gatico
        const imageHeard = document.createElement('img')
        // Este es el div que contiene las dos imagenes del gatico guadado y del corazon
        const divParentImage = document.createElement('div')
        divParentImage.setAttribute('class', 'parentImage')



        // Este es el div principal padre de las tres lienas
        const div = document.createElement('div')
        div.setAttribute('class', 'parentThings')


        // Este es el div padre de las tres lineas
        const divTwo = document.createElement('div')
        divTwo.setAttribute('class', 'parentLines')

        // Este es el div padre que modifica las lineas al hacer hover
        const divParentLines = document.createElement('div')


        // Es el primer elemento de la linea
        const spanOne = document.createElement('span')
        // Es el segundo elemento de la linea
        const spanTwo = document.createElement('span')
        // Es el tercer elemento de la linea
        const spanThree = document.createElement('span')

        // Esta es la imagen del corazon que aparece al hacer hover
        imageHeard.setAttribute('class', 'corazonLGTBI')
        // Aqui defino el atributo con el gif de la etiqueta
        imageHeard.src = 'https://3.bp.blogspot.com/-aLRVa2l51f4/WPAxwRMCR2I/AAAAAAAAJxU/0mRKWkmOSbY10GsUhKjDR3WRCt2x_FskgCLcB/s640/corazon-10.gif'

        // Este es el contenedor de todo y aqui se adjunta como hijo el article que contiene las dos imagenes y el boton de eliminar
        parentDiv.appendChild(article)
        // El article guarda el padre de las dos imagenes
        article.appendChild(divParentImage)
        // Aqui el article guarda el padre de las lineas de las imagenes
        article.appendChild(div)
        // Este es el padre que guarda el otro padre las tres lineas
        div.appendChild(divTwo)
        // Este ya es el padre de las tres lineas y que modifica con las clase
        divTwo.appendChild(divParentLines)
        // divParentLines es el padre de los span y guarda los tres span uno por uno
        divParentLines.appendChild(spanOne)
        divParentLines.appendChild(spanTwo)
        divParentLines.appendChild(spanThree)
        // Este es el padre de las dos imagenes y esta guardando la primera imagen del gatito
        divParentImage.appendChild(image)
        // Este es el padre de las dos imagenes y aqui esta guardando la imgen del corazon
        divParentImage.appendChild(imageHeard)

        // Este es el evento que al entrar el mouse mete una clase y hacer que las lineas tengan animaxiones
        divTwo.addEventListener('mouseenter', () => {
            divParentLines.setAttribute('class', 'moveAllLines')
        })

        // Este div hace que se elimine la clase y se quite la animacion
        divTwo.addEventListener('mouseleave', () => {
            divParentLines.classList.remove('moveAllLines')
        })


    }catch(error){
        console.log('Este es el error traido en pantalla: ', error.message);
    }


}

// Funcion que elimina los gatitos

async function deleteMichisFavourites(id, position){
    try{
        const res = await fetch(`${API_URL_DELETE+id}?api_key=${API_KEY}`, {
            method: 'DELETE',
        })
    }catch(error){
        console.log('Este es el error recibido: ', error.message);
    }
}

const form = document.querySelector('#form-cats')

form.addEventListener('submit', addCatsFavourites)

async function addCatsFavourites(event){
    event.preventDefault()
    const formData = new FormData(form)

    if(formData.get('inputFile').name){
        console.log('Estes es el valor del formData del input al seleccionar el file: ',formData.get('inputFile'));
    }

}

const inputFile = document.querySelector('#file')

inputFile.addEventListener('change', () => {
    console.log('Esto se ejecuta al abrir los archivos de mi pc');
})