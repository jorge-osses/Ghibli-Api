const aplicacion = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
const url = "https://ghibliapi.herokuapp.com/films"

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const title = document.createElement('h1')
    title.innerHTML = data.original_title
    aplicacion.appendChild(title)
    const titulo = document.createElement('h2')
    titulo.innerHTML = data.title
    aplicacion.appendChild(titulo)
    const image = document.createElement('div')
    image.innerHTML = `<img src="${data.image}">`
    aplicacion.appendChild(image)
})
console.log(id)