const init = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault()
        let inputIDText = e.target.searchByID.value
        console.log(inputIDText)

        fetch(`http://localhost:3000/movies/${inputIDText}`)
        .then(res => res.json())
        .then(movies => {
            const title = document.querySelector('#movieDetails h4')
            const summary = document.querySelector('#movieDetails p')
            title.innerText = movies.title
            summary.innerText = movies.summary
        })
    })
}

document.addEventListener('DOMContentLoaded', init);