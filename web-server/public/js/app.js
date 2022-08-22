const weatherform = document.querySelector('form')
const search = document.querySelector('input')
weatherform.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = search.value
    document.getElementById('message-1').innerHTML = 'Loading...'
    document.getElementById('message-2').innerHTML = ''
    fetch('http://localhost:3000/weather?address='+location).then(response => {
        response.json().then((json)=>{
            if (json.forecast){
            document.getElementById('message-1').innerHTML = json.forecast
            document.getElementById('message-2').innerHTML = json.address
            }
            else{
                document.getElementById('message-1').innerHTML = error
            }
        })})
        .catch(error => {
            document.getElementById('message-1').innerHTML = error
        }
    )
})

