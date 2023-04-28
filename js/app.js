fetchJoke = () =>{
    sessionStorage.setItem("count" , "clicked")
    try {
        console.log("fetching json data...")
        document.getElementById("jokesDisplay").innerText = "Loading..."
        fetch(`https://api.chucknorris.io/jokes/random`)
        // fetch(`../res/demo.json`)
            .then((res) => res.json())
            .then((data) => {
                // do stuff with the data
                resultFromJson = data;
                jokes(data)
            });
    } catch (err) {
        console.log(err)
        document.getElementById("jokesDisplay").innerText = "Chuck Norris killed the internet again"
    }
}

jokes = (data) =>{
    document.getElementById("jokesDisplay").innerText = data.value
    document.getElementById("avatar").src = "../res/cn.jpg"
    if(sessionStorage.getItem("count").length > 0){
        document.getElementById("generateBtn").innerHTML = "AGAIN!"
        document.getElementById("memeBtn").innerHTML = "MEME"
    }
    document.getElementById("avatar").style.display = "flex"
}



fetchMeme = () =>{
    sessionStorage.setItem("count" , "clicked")
    try {
        console.log("fetching json data...")
        document.getElementById("jokesDisplay").innerText = "Loading..."
        fetch(`https://meme-api.com/gimme`)
        // fetch(`../res/demo.json`)
            .then((res) => res.json())
            .then((data) => {
                // do stuff with the data
                resultFromJson = data;
                meme(data)
            });
    } catch (err) {
        console.log(err)
        document.getElementById("jokesDisplay").innerText = "Chuck Norris killed the internet again"
    }
}

meme = (data) =>{
    document.getElementById("jokesDisplay").innerText = data.title;
    document.getElementById("avatar").src = data.url;
    if(window.innerWidth < 500){
        document.getElementById("avatar").style.width = "80%"
        document.getElementById("avatar").style.height = "50%"
    }    
    if(sessionStorage.getItem("count").length > 0){
        document.getElementById("memeBtn").innerHTML = "AGAIN!"
        document.getElementById("generateBtn").innerHTML = "CHUCK NORRIS"

    }
    document.getElementById("avatar").style.display = "flex"
}