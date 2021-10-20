const aplicacion = document.querySelector('.container')

// const url = "https://jsonplaceholder.typicode.com/users"
const url = "https://ghibliapi.herokuapp.com/films"

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach( peliculas => {
        const h3 = document.createElement('h3')
        h3.setAttribute('id', peliculas.id)
        h3.innerHTML = peliculas.title
        h3.addEventListener('click', () => {
            window.location.href = `./pelis.html?id=${peliculas.id}`
        })
        aplicacion.appendChild(h3)
    });
    console.log(data)
})
.catch(err => console.log(err))