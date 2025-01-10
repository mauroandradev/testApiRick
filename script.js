const urlApi = "https://rickandmortyapi.com/api/character"
const resultados = document.querySelector("#results")

const boton = document.getElementById('searchButton')

boton.addEventListener('click', (ev)=>{
    ev.preventDefault()
    consultaDatos(urlApi)

})

async function consultaDatos(urlApi) {
    let datosJson= await fetch(urlApi)
    let datosConvertidos = await datosJson.json()
    console.log(datosConvertidos.results)

    datosConvertidos.results.forEach(dato => {
        let {name, image} = dato
        creaTarjeta(name,image)
    });

}

const creaTarjeta = (nombre, imagen)=>{

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