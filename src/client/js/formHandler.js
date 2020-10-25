function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field

    let formText = document.getElementById('sentence').value;
    
    console.log("::: Form Submitted :::")

    fetch('/sentiment',{
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text:formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.status.msg
    })
    
}

//export { handleSubmit }
module.exports = handleSubmit;
