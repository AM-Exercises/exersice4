function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field

    let formText = document.getElementById('sentence').value;
    
    console.log("::: Form Submitted :::")

    fetch('/sentiment',{ fText: formText })
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
    
}

export { handleSubmit }
