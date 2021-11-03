let button = document.querySelector(".btn");
button.style.backgroundColor = "rgb(45,100,173)";
button.style.color = "white";
button.style.padding = "5px";
button.style.margin = "30px";
button.style.cursor ="pointer";


let listImages = document.querySelector(".listOfImages");
listImages.style.display = "flex";
listImages.style.justifyContent = "space-between"
listImages.style.flexWrap = "wrap";


button.addEventListener("click", ()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (response) {
            if (response.status == 200){
              return response.json();  
            }
            throw `${response.status}${response.statusText}`;
        })
        .then((data) =>{
            let newListItem = document.createElement("li");
            newListItem.style.listStyle = "none";
            listImages.appendChild(newListItem);

            let newImage = document.createElement("img");
            newImage.setAttribute("src", data.message);
            newImage.style.height ="200px";
            newImage.style.margin = "10px";
            newListItem.appendChild(newImage);
            
        })
        .catch(error => console.log(error));
})