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
                process(data)
            });
    } catch (err) {
        console.log(err)
        document.getElementById("jokesDisplay").innerText = "Chuck Norris killed the internet again"
    }
}
process = (data) =>{
    document.getElementById("jokesDisplay").innerText = data.value
    document.getElementById("avatar").src = "../res/cn.jpg"
    if(sessionStorage.getItem("count").length > 0){
        document.getElementById("generateBtn").innerHTML = "AGAIN!"
    }
    document.getElementById("avatar").style.display = "flex"
}