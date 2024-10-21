const myNavigation = document.querySelector('nav')
const myViewer = document.querySelector('main')




// grab the data
fetch("../data/starships.json")
.then((response) => response.json())
.then((shipArray) => {
    console.log(shipArray)
    populateNav(shipArray)
})


//populate nav bar
function populateNav(allShips) {
console.log(allShips)
allShips.forEach(ship =>{
    let myButton = document.createElement('button')
    console.log(ship.name)
    myButton.textContent = ship.name
    myButton.addEventListener('click', () => showShip(ship))
    myNavigation.appendChild(myButton)
})
}
// ship viewer
function showShip(shipData) {
    console.log(shipData)

    //Create a figure
    let myFigure = document.createElement('figure')
    let myImage = document.createElement('img')
    let myCaption = document.createElement('figcaption')

    //assign data
    console.log(shipData.url)
    let urlArray = shipData.url.split('/')
    console.log(urlArray[5])
    myImage.src =`https://starwars-visualguide.com/assets/img/starships/${urlArray[5]}.jpg`
    myCaption.textContent = shipData.name

    // error checking
    myImage.addEventListener('error', ()  => {
        myImage.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
        myCaption.textContent = `The ${shipData.name} was destroyed in a recent battle`
    })

    //assemble figure
    myFigure.appendChild(myImage)
    myFigure.appendChild(myCaption)

    //add figure
    myViewer.textContent = ''
    myViewer.appendChild(myFigure)
}