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
        document.getElementById('results-status').innerHTML = res.status.msg;
        document.getElementById('results-model').innerHTML = res.model;
        document.getElementById('results-agreement').innerHTML = res.agreement;
        
    })
    
}

export { handleSubmit }
//When running test - uncheck the bottom line and check the above line
//module.exports = handleSubmit;
