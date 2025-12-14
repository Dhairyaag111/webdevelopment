let bagItems = []


window.addEventListener('load', event => {
    showData()
    let localStorageData = localStorage.getItem('bagItems')
    bagItems = localStorageData ? JSON.parse(localStorageData) : []
    displayBagCount()
})










function showData() {
    let mainContainer = document.querySelector('.photo_container')
    let innerHTMLCode = ""
    allItems.forEach(item => {
        innerHTMLCode +=
            `<div class="photo1">
            <div class="img1">
                <img src="${item.image}" alt="">
            </div>
            <div class="text1">
                <div class="rating1">
                <p>${item.rating.stars} ⭐| ${item.rating.totalReviews}</p>
            </div>
            <div class="brand1">
                <p>${item.company_name}</p>
            </div>
            <div class="name1">
                <p>${item.item_name}</p>
            </div>
            <div class="cost1">
                <p class="rate">Rs.${item.price.current_price}</p>
                <del>Rs.${item.price.original_price}</del>
                <p class="discount">(${item.price.discount}% OFF)</p>
            </div>
               <button onclick = "addToBag(${item.id})">Add to cart</button>
            </div>
        </div>`

    }
    )
    mainContainer.innerHTML = innerHTMLCode
}


function addToBag(itemId) {
    bagItems.push(itemId)
    displayBagCount()
    localStorage.setItem("bagItems", JSON.stringify(bagItems))
}

function displayBagCount() {
    let bagItemCount = document.querySelector('.itemCount')
    if (bagItems.length > 0) {
        bagItemCount.style.visibility = 'visible'
        bagItemCount.innerText = bagItems.length
    }
    else {
        bagItemCount.style.visibility = 'hidden'
    }
}