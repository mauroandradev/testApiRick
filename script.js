const urlApiEpisodio = 'https://rickandmortyapi.com/api/episode'
const resultados = document.querySelector("#results")
let urlApi = "https://rickandmortyapi.com/api/character"

const boton = document.getElementById('searchButton')
const botonEpi = document.getElementById('searchButtonEpi')

boton.addEventListener('click', (ev)=>{
    resultados.textContent=''
    consultaDatos(urlApi)
})

botonEpi.addEventListener('click', (ev)=>{
    resultados.textContent=''
    consultaDatos(urlApiEpisodio)
})

async function consultaDatos(urlApi) {
    
    let datosJson= await fetch(urlApi)
    let datosConvertidos = await datosJson.json()

    let paginas = datosConvertidos.info
    const botonNext= document.createElement('button')
    botonNext.textContent = 'Siguiente pagina'
    
    const botonPrev= document.createElement('button')
    botonPrev.textContent = 'Volver pagina'
    let {next, prev} = paginas

    if (datosConvertidos?.results[0].species !== undefined) {
        datosConvertidos.results.forEach(dato => {
            let {name, image} = dato
            creaTarjetaPersonaje(name,image)
    });
    } else {
        datosConvertidos.results.forEach(dato => {
            let {name, episode} = dato
            creaTarjetaCapitulo(name, episode)})
    }

    
    resultados.appendChild(botonNext)
    resultados.appendChild(botonPrev)
    
    if (next && botonNext){
        botonNext.addEventListener('click', ()=>{
            resultados.textContent=''
            consultaDatos(next)
        })
    }    else{
        resultados.removeChild(botonNext)
    }
    if (prev && botonPrev){
        botonPrev.addEventListener('click', ()=>{
            resultados.textContent=''
            consultaDatos(prev)
        })
    }
    else{
        resultados.removeChild(botonPrev)
    }

    
}

const creaTarjetaPersonaje = (nombre, imagen)=>{

    const divTarjeta =document.createElement('div')
    const nombrePersonaje= document.createElement("h2")
    const imgPersonaje= document.createElement("img")
    
    divTarjeta.classList.add('movie')
    
    nombrePersonaje.textContent = nombre
    imgPersonaje.src= imagen

    divTarjeta.appendChild(nombrePersonaje)
    divTarjeta.appendChild(imgPersonaje)
    resultados.appendChild(divTarjeta)

}

const creaTarjetaCapitulo = (nombre, numero)=>{

    const divTarjeta =document.createElement('div')
    const nombreCapitulo= document.createElement("h2") 
    const numeroCapitulo= document.createElement("h4") 
    divTarjeta.classList.add('movie') 
    nombreCapitulo.textContent = nombre
    numeroCapitulo.textContent = numero

    divTarjeta.appendChild(nombreCapitulo)
    divTarjeta.appendChild(numeroCapitulo)
    resultados.appendChild(divTarjeta)

}