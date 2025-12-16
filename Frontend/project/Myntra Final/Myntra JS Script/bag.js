let bagItemObjects;

window.addEventListener('load', event => {
    loadBagItemObjects()
    showDataInfo()
})

function loadBagItemObjects(){
    bagItemObjects = bagItems.map(itemId=>{
        for(let i=0; i<allItems.length; i++){
            if(itemId === allItems[i].id)
                return allItems[i]
        }
    })
    
}

function showDataInfo(){
    let itemContainer = document.querySelector('.itemBoxParent')
    let innerHTMLCode = ''
    bagItemObjects.forEach(bagItem => {
        innerHTMLCode += generateItemCode(bagItem)
    })
    itemContainer.innerHTML = innerHTMLCode
}


function generateItemCode(item){
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
                        <p>Rs ${item.price.original_price}</p>
                        <del>Rs ${(item.price).current_price}</del>
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
                <p style="color: rgb(103, 103, 103);">X</p>
            </div>
        </div>`
}