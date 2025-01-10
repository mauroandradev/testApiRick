const urlApiEpisodio = 'https://rickandmortyapi.com/api/episode'
const resultados = document.querySelector("#results")
let urlApi = "https://rickandmortyapi.com/api/character"

const boton = document.getElementById('searchButton')

boton.addEventListener('click', (ev)=>{
    consultaDatos(urlApi)
})

async function consultaDatos(urlApi) {
    
    let datosJson= await fetch(urlApi)
    let datosConvertidos = await datosJson.json()
    let paginas = datosConvertidos.info
    const botonNext= document.createElement('button')
    botonNext.textContent = 'Siguiente pagina'
    let {next} = paginas

    datosConvertidos.results.forEach(dato => {
        let {name, image, id} = dato
        creaTarjetaPersonaje(name,image)
    });

    resultados.appendChild(botonNext)

    if (next && botonNext){
        botonNext.addEventListener('click', ()=>{
            resultados.textContent=''
            consultaDatos(next)
        })
    }else{
        resultados.removeChild(botonNext)
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

// const creaTarjetaCapitulo = (nombre, imagen)=>{

//     const divTarjeta =document.createElement('div')
//     const nombreCapitulo= document.createElement("h2")
//     const imgPersonaje= document.createElement("img")
    
//     divTarjeta.classList.add('movie')
    
//     nombrePersonaje.textContent = nombre
//     imgPersonaje.src= imagen

//     divTarjeta.appendChild(nombrePersonaje)
//     divTarjeta.appendChild(imgPersonaje)
//     resultados.appendChild(divTarjeta)

// }