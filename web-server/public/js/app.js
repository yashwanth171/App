

console.log('Client side js file is loaded!')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
weatherform.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = search.value
    const messageOne = 'Loading'
    const messageTwo = ''
    console.log(messageOne,messageTwo)
    //console.log(search.value)
    fetch('http://localhost:3001/weather?address='+location).then(response => response.json()).then(data => {
            if (data.error){
                messageOne.textContent = data.error
                console.log(data.error)
                console.log(messageOne,messageTwo)
            }
            else{
                console.log(data.forecast,data.location)
                messageOne.textContent = data.forecast
                messageTwo.textContent = data.location

            }
    })
})

