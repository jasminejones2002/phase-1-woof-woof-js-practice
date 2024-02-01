let pups = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchPups()
}) 
 function fetchPups() {
   fetch("http://localhost:3000/pups")
   .then(res => res.json())
   .then(data => {
        pups = data;
        addDogBar(pups)
        addDogInfo(pups)
   })
}

function addDogBar(data) {
    //grab dog-bar from html
    const dogBar = document.getElementById("dog-bar")
    //iterate through data
    data.forEach(pup => {
        //create html for each pup
        const span = document.createElement("span");
        span.textContent = pup.name
        dogBar.appendChild(span)
    })
}

function addDogInfo(data) {
    //when user clicks on span, dog info will show up
    //first grab info div
    const info = document.getElementById("dog-info")
    //next create click event listener
        //grab dog-bar 
    let dogBarInfo = document.getElementById("dog-bar")

    dogBarInfo.addEventListener("click", (e) => {
        //clear existing info
        info.innerHTML = ""
        //find clicked dog
        const clickedDog = data.find((pup) => pup.name === e.target.textContent)
        //create html for rendering dog info for each pup
        const img = document.createElement("img")
        img.src= clickedDog.image
        info.appendChild(img)

        const name = document.createElement("h2")
        name.textContent = clickedDog.name
        info.appendChild(name)

        const goodDogBtn = document.createElement("button")
        info.appendChild(goodDogBtn)
        goodDogBtn.addEventListener("click", (e) => {
            clickedDog.isGoodDog = !clickedDog.isGoodDog
            if (clickedDog.isGoodDog === true) {
                goodDogBtn.textContent = "Good Dog!"
            } else {
                goodDogBtn.textContent = "Bad Dog!"
            }
        })
    })
}