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

const saveDataMichis = [
    {id: "2fo", url: "https://cdn2.thecatapi.com/images/2fo.jpg", width: 500, height: 309},
    {id: "3l8", url: "https://cdn2.thecatapi.com/images/3l8.jpg", width: 960, height: 720},
    {id: "a35", url: "https://cdn2.thecatapi.com/images/a35.jpg", width: 640, height: 480},
    {id: "c0u", url: "https://cdn2.thecatapi.com/images/c0u.jpg", width: 900, height: 675},
    {id: "cpf", url: "https://cdn2.thecatapi.com/images/cpf.png", width: 1024, height: 1024},
    {id: "dnc", url: "https://cdn2.thecatapi.com/images/dnc.jpg", width: 800, height: 531},
    {id: "dqt", url: "https://cdn2.thecatapi.com/images/dqt.jpg", width: 500, height: 591},
    {id: "e27", url: "https://cdn2.thecatapi.com/images/e27.jpg", width: 696, height: 507},
    {id: "MTgwMDkwNg", url: "https://cdn2.thecatapi.com/images/MTgwMDkwNg.jpg", width: 1080, height: 806},
    {id: "EEf-L2ubj", url: "https://cdn2.thecatapi.com/images/EEf-L2ubj.jpg", width: 1080, height: 1080},
    {id: "137", url: "https://cdn2.thecatapi.com/images/137.jpg", width: 500, height: 753},
    {id: "4bi", url: "https://cdn2.thecatapi.com/images/4bi.gif", width: 499, height: 281},
    {id: "51t", url: "https://cdn2.thecatapi.com/images/51t.jpg", width: 1500, height: 1500},
    {id: "66t", url: "https://cdn2.thecatapi.com/images/66t.jpg", width: 3648, height: 2736},
    {id: "a0a", url: "https://cdn2.thecatapi.com/images/a0a.jpg", width: 480, height: 640},
    {id: "a50", url: "https://cdn2.thecatapi.com/images/a50.jpg", width: 375, height: 500},
    {id: "a6e", url: "https://cdn2.thecatapi.com/images/a6e.jpg", width: 380, height: 570},
    {id: "ac5", url: "https://cdn2.thecatapi.com/images/ac5.jpg", width: 565, height: 551},
    {id: "MTc4NjYzNA", url: "https://cdn2.thecatapi.com/images/MTc4NjYzNA.jpg", width: 642, height: 960},
    {id: "qsGk4el-D", url: "https://cdn2.thecatapi.com/images/qsGk4el-D.jpg", width: 1909, height: 1161},
    {id: "18s", url: "https://cdn2.thecatapi.com/images/18s.gif", width: 500, height: 206},
    {id: "b83", url: "https://cdn2.thecatapi.com/images/b83.jpg", width: 500, height: 358},
    {id: "bfn", url: "https://cdn2.thecatapi.com/images/bfn.jpg", width: 500, height: 338},
    {id: "bgu", url: "https://cdn2.thecatapi.com/images/bgu.jpg", width: 500, height: 333},
    {id: "bqd", url: "https://cdn2.thecatapi.com/images/bqd.jpg", width: 680, height: 1024},
    {id: "cd8", url: "https://cdn2.thecatapi.com/images/cd8.jpg", width: 3090, height: 2048},
    {id: "chm", url: "https://cdn2.thecatapi.com/images/chm.jpg", width: 1600, height: 1200},
    {id: "di1", url: "https://cdn2.thecatapi.com/images/di1.jpg", width: 640, height: 552},
    {id: "ehr", url: "https://cdn2.thecatapi.com/images/ehr.jpg", width: 651, height: 465},
    {id: "MTc0MzI1OA", url: "https://cdn2.thecatapi.com/images/MTc0MzI1OA.png", width: 580, height: 423},
    {id: "5eg", url: "https://cdn2.thecatapi.com/images/5eg.jpg", width: 883, height: 500},
    {id: "5ii", url: "https://cdn2.thecatapi.com/images/5ii.jpg", width: 788, height: 600},
    {id: "bo7", url: "https://cdn2.thecatapi.com/images/bo7.jpg", width: 790, height: 590},
    {id: "ce3", url: "https://cdn2.thecatapi.com/images/ce3.jpg", width: 612, height: 612},
    {id: "dj6", url: "https://cdn2.thecatapi.com/images/dj6.jpg", width: 1024, height: 768},
    {id: "e3c", url: "https://cdn2.thecatapi.com/images/e3c.jpg", width: 600, height: 452},
    {id: "ebo", url: "https://cdn2.thecatapi.com/images/ebo.jpg", width: 376, height: 540},
    {id: "MTk1NDM2NA", url: "https://cdn2.thecatapi.com/images/MTk1NDM2NA.jpg", width: 640, height: 478},
    {id: "MjA0MTQyNg", url: "https://cdn2.thecatapi.com/images/MjA0MTQyNg.jpg", width: 585, height: 880},
    {id: "bAiN3T-rs", url: "https://cdn2.thecatapi.com/images/bAiN3T-rs.jpg", width: 1024, height: 788},
]

const saveDataMichisTwo = [
    {id: "4hl", url: "https://cdn2.thecatapi.com/images/4hl.gif", width: 499, height: 367},
    {id: "9kd", url: "https://cdn2.thecatapi.com/images/9kd.jpg", width: 500, height: 485},
]
const saveDataMichisThree = [
    {id: "ae9", url: "https://cdn2.thecatapi.com/images/ae9.jpg", width: 500, height: 375},
    {id: "b4t", url: "https://cdn2.thecatapi.com/images/b4t.jpg", width: 3753, height: 4915},
]

const saveDataMichisFour = [
    {id: "cm1", url: "https://cdn2.thecatapi.com/images/cm1.jpg", width: 960, height: 1280},
    {id: "e7i", url: "https://cdn2.thecatapi.com/images/e7i.jpg", width: 900, height: 600},
]

const saveDataMichisFive = [
    {id: "MjAzODI4OQ", url: "https://cdn2.thecatapi.com/images/MjAzODI4OQ.jpg", width: 500, height: 522},
    {id: "m3V8x5tde", url: "https://cdn2.thecatapi.com/images/m3V8x5tde.jpg", width: 2560, height: 1600},
]

const saveDataMichisSix = [
    {id: "35e", url: "https://cdn2.thecatapi.com/images/35e.jpg", width: 1024, height: 791},
    {id: "4ia", url: "https://cdn2.thecatapi.com/images/4ia.gif", width: 500, height: 211},
]

const divParent = document.querySelector('.parent-save')


const claseOne = 'parentLines'

window.addEventListener('DOMContentLoaded', saveDatas)

function saveDatas(value, valuePosition){
    localStorage.setItem('twoCats', JSON.stringify(saveDataMichisTwo))
    const arrayCats = JSON.parse(localStorage.getItem('twoCats'))

    // las dos imagenes principales
    const imageOne = document.querySelector('#image1');
    const imageTwo = document.querySelector('#image2');

    if(arrayCats.length){
        arrayCats.forEach((el, i) => {
            if(i == 0){
                imageOne.src = el.url
            }else{
                imageTwo.src = el.url
            }
        })
    }

    const newArray = JSON.parse(localStorage.getItem('catsSave')) ?? []
    if(newArray.length){
        newArray.forEach(el => {
            divParent.innerHTML += `
                <article id="article-parent-images">
                    <div class="parentImage">
                        <img src="${el.url}" id="image-main" />
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

        const divTwo = document.querySelector('.parentLines')
        divTwo.addEventListener('click', () => {
            console.log('askdhasjkd');
            divParentLines.setAttribute('class', 'moveAllLines')
        })

        // Este div hace que se elimine la clase y se quite la animacion
        divTwo.addEventListener('mouseleave', () => {
            divParentLines.classList.remove('moveAllLines')
            console.log('asjkdasjkdksjk');
        })
    }


}

button.addEventListener('click', () => {

})
// Aqui se ejecuta la funcion que trae la informacion

// Funcion que guarda los gatos en favortos en la parte inferior
function saveMichisFavourites(position){
        if(position == 0){
            const newArray = JSON.parse(localStorage.getItem('catsSave')) ?? []
            if(newArray[position]?.url !== saveDataMichisTwo[position].url){
                newArray.push(saveDataMichisTwo[position])
            }
            localStorage.setItem('catsSave', JSON.stringify(newArray))
            saveDatas(position)
        }
        else{
            const newArray = JSON.parse(localStorage.getItem('catsSave')) ?? []
            if(newArray[position]?.url !== saveDataMichisTwo[position].url){
                newArray.push(saveDataMichisTwo[position])
            }
            localStorage.setItem('catsSave', JSON.stringify(newArray))
            saveDatas(position)
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