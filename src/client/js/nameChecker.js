function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        //alert("Welcome, Captain!")
    }
}

export { checkForName }

//When running test - uncheck the bottom line and check the above line
//module.exports = checkForName;