
fetchJoke = () =>{
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
}