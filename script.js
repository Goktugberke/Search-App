const form_wrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const buttonWrapper = document.querySelector(".button-wrapper");
const textInput = document.querySelector("#textArea");
const searchBtn = document.querySelector("#searchButton");
const clearBtn = document.querySelector("#clearButton");
const image_wrapper = document.querySelector(".image-wrapper");

runEventListeners();

function runEventListeners() {
    form.addEventListener("submit", search);
    clearBtn.addEventListener("click", clearAll);
}

function clearAll() {

    image_wrapper.innerHTML = "";
    textInput.value = "";
}

function search(e) {
    const input = textInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${input}`, {
            method: "GET",
            headers: {
                Authorization: "Client-ID FifpLUFHwGYMoqeHiXPZGb4qHYWFdT_RrJMoVz_LK3M"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            Array.from(data.results).forEach((image) => {
                addImageToUrl(image.urls.small)
            })

        })
        .catch((err) => console.log(err));
    e.preventDefault();
}

function addImageToUrl(url) {
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");
    let img = document.createElement("img");
    img.src = url;
    img.classList.add("image");
    imgDiv.appendChild(img);
    image_wrapper.appendChild(imgDiv);
}