let mainDiv = document.querySelector("#mainDiv");

function generateImage(){
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
        if (response.status == 200){
            return response.json();  
        }
        throw `${response.status}${response.statusText}`;
    })
    .then((data) => {
        console.log(data);
        let title = document.createElement("h1");
        title.innerHTML = data.title;
        title.className = "title";
        mainDiv.appendChild(title);

        let image = document.createElement("img");
        image.setAttribute("src", data.img);
        image.className = "image";
        mainDiv.appendChild(image);
    })
    .catch(error => console.log(error));
}

generateImage();

    