let products = {
   data: [
      {
         productName: "Resident Evil 4 Remake",
         category: "Survival-Horror",
         price: "70",
         image: "img/re4.jpg"
      },
      {
         productName: "Alan Wake 2",
         category: "Survival-Horror",
         price: "70",
         image: "img/aw2.jpg"
      },
      {
         productName: "The Last of Us Part II",
         category: "Survival-Horror",
         price: "70",
         image: "img/tlou2.jpg"
      },
      {
         productName: "Bloodborne",
         category: "Soulslike",
         price: "70",
         image: "img/blood.jpg"
      },
      {
         productName: "Sekiro",
         category: "Soulslike",
         price: "70",
         image: "img/sekiro.jpg"
      },
      {
         productName: "Elden Ring",
         category: "Soulslike",
         price: "70",
         image: "img/elden.jpg"
      },
      {
         productName: "Final Fantasy VII Rebirth",
         category: "RPG",
         price: "70",
         image: "img/ffvii.jpg"
      },
      {
         productName: "The Elder Scrolls V: Skyrim",
         category: "RPG",
         price: "70",
         image: "img/skyrim.jpg"
      },
      {
         productName: "Diablo IV",
         category: "RPG",
         price: "70",
         image: "img/diablo4.jpg"
      },
      {
         productName: "Cyberpunk 2077",
         category: "FPS",
         price: "70",
         image: "img/c77.jpg"
      },
      {
         productName: "Call of Duty Warzone",
         category: "FPS",
         price: "70",
         image: "img/cod.jpg"
      },
      {
         productName: "Tom Clancy's Rainbow Six Siege",
         category: "FPS",
         price: "70",
         image: "img/r6.jpg"
      },
   ],
};

for (let i of products.data) {
   // create card
   let card = document.createElement("div");
   // card category
   card.classList.add("card", i.category, "hide");
   let imgContainer =  document.createElement("div");
   // image container
   imgContainer.classList.add("img_container");
   // image tag
   let image = document.createElement("img");
   // img src
   image.setAttribute("src", i.image);
   // adding the image to image container
   imgContainer.appendChild(image)
   // dding the image container to card
   card.appendChild(imgContainer)
   // container
   let container = document.createElement("div")
   container.classList.add("container")
   // product name
   let name = document.createElement("h5")
   name.classList.add("product_name")
   name.innerHTML = i.productName.toUpperCase()
   container.appendChild(name)
   // price
   let price = document.createElement("h6")
   price.innerHTML = "$"+ i.price
   container.appendChild(price)

   card.appendChild(container)
   document.getElementById("products").appendChild(card)
}

// categories to load
function filterProduct(value) {
   let buttons = document.querySelectorAll(".btn_value");
   buttons.forEach(button => {
      if (value.toUpperCase() == button.innerHTML.toUpperCase()) {
         button.classList.add("active")
      } else {
         button.classList.remove("active")
      }
   });

   // select cards
   let elements = document.querySelectorAll(".card")
   // loop through cards
   elements.forEach(element => {
      // display all cards on "all" button
      if (value == "all") {
         element.classList.remove("hide");
      } else {
         // check if element contain category class
         if (element.classList.contains(value)) {
            // display element based on category
            element.classList.remove("hide");
         } else {
            // hide the other elements
            element.classList.add("hide")
         }
      }
   })
}

//search button
document.getElementById("btn_search").addEventListener("click", () => {
   let searchInput = document.getElementById("search_input").value
   let elements = document.querySelectorAll(".product_name")
   let cards = document.querySelectorAll(".card")
   elements.forEach((element, index) => {
      if (element.innerHTML.includes(searchInput.toUpperCase())) {
         cards[index].classList.remove("hide")
      } else {
         cards[index].classList.add("hide")
      }
   })
})


// loading all products on load
window.onload = () => {
   filterProduct("all");
}