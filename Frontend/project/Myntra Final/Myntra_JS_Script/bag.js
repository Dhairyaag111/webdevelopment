let bagItemObjects;

window.addEventListener('load', event => {
    loadBagItemObjects()
    showDataInfo()
    showTotalPrice()
})

function loadBagItemObjects() {
    bagItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < allItems.length; i++) {
            if (itemId === allItems[i].id)
                return allItems[i]
        }
    })

}

function showDataInfo() {
    let itemContainer = document.querySelector('.itemBoxParent')
    let innerHTMLCode = ''
    bagItemObjects.forEach(bagItem => {
        innerHTMLCode = innerHTMLCode + generateItemCode(bagItem)
    })
    itemContainer.innerHTML = innerHTMLCode
}




function generateItemCode(item) {
    return `<div class="item_box">
            <div class="label">
                <div class="img_box">
                    <img src="${item.image}">
                </div>
                <div class="text_box">
                    <div class="brand_box">
                        <p>${item.company_name}</p>
                    </div>
                    <div class="name_box">
                        <p>${item.item_name}</p>
                    </div>
                    <div class="price_box">
                        <p>Rs ${item.price.current_price}</p>
                        <del>Rs ${(item.price).original_price}</del>
                        <p class="discount">(${(item.price).discount}% OFF)</p>
                    </div>
                    <div class="return_days">
                        <p><span style="font-weight: bolder;">14 days</span> return available</p>
                    </div>
                    <div class="delivery_date">
                        <p>Delivered by <span style="color: rgb(0, 192, 192);">10 OCT 2023</span></p>
                    </div>
                </div>
            </div>
            <div class="cross">
                <a href="#" onclick="removeFroBag(${item.id})">X</a>
            </div>
        </div>`
}


function removeFroBag(itemId){
    bagItems = bagItems.filter(bagId=>{ 
        return bagId!= itemId
    })
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    loadBagItemObjects()
    showDataInfo()
    displayBagCount()
}

function bag_summary(){
    return `<div class="heading">
                <p>PRICE DETAILS (1 items)</p>
            </div>
            <div class="mrp_list">
                <div class="total_mrp">
                    <p>Total MRP</p>
                    <p>Rs 0</p>
                </div>
                <div class="discounted_mrp">
                    <p>Discount on MRP</p>
                    <p style="color: rgb(0, 225, 225);">-Rs 0</p>
                </div>
                <div class="delivery_fee" style="border-bottom:2px solid black ; padding-bottom: 15px;">
                    <p>Delivery Fee</p>
                    <p>Rs 140</p>
                </div>
                <div class="final_amt" style="font-weight: bolder; padding-top: 5px;">
                    <p>Total Amount</p>
                    <p>Rs 0</p>
                </div>
            </div>
            <div class="final_button">
                <button>PLACE ORDER</button>
            </div>
        </div>` 
}

function showTotalPrice() {
    let priceBox = document.querySelector('.details')
    let delivery_fee = 140
    let totalItems = bagItemObjects.length
    let totalMRP = 0
    let totalDiscount = 0
    bagItemObjects.forEach(bagItem=>{
        totalMRP += bagItem.price.original_price
        totalDiscount += bagItem.price.original_price - bagItem.price.current_price
        delivery_fee = totalItems==0? 0:delivery_fee
    })

}