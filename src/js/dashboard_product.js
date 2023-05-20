
let productList = [];

//display product
function displayProduct(){
    let table='';
    for (let i=0 ; i < productList.length; i++) {
        table =table + `
        <div class="items">
            <div class="img img1">
                <img
                    src="${productList[i].imageCover}"
                    alt=""
                />
            </div>
            <div class="icons">
                <a href="https://www.google.com"  class="add-cart">
                <span class="iconify" data-icon="iconoir:shopping-bag-add"></span>
                </a>
                <a href="https://www.google.com" class="add-wish">
                <span class="iconify" data-icon="material-symbols:heart-plus-outline"></span>
                </a>
                <a href="https://www.google.com" class="display">
                <span class="iconify" data-icon="mdi:eye-arrow-right-outline"></span>
                </a>
            </div>
            <div class="name">${productList[i].title}</div>
            <div class="info">
            ${productList[i].description} lkdfsjlfddsafsdfadfasdfasdsdfsd
            </div>
            <div class="foot-items">
                <div class="prices">
                    <div class="price">${productList[i].priceAfterDiscount}.99 USD</div>
                    <div class="old-price">${productList[i].price} USD</div>
                </div>
                <div class="review">
                    <div class="review-is">${productList[i].ratingAverage}</div>
                    <img class="start-img" src="/star.png" alt="">
                    
                </div>
            </div>
            
        </div>
        `
    
    document.getElementById('product-container-dash').innerHTML = table;
   
    }
    
    
    
    
}
displayProduct();


//select display mode code

let btn_display_table = document.getElementById("display-table-btn");
let btn_display_list = document.getElementById("display-list-btn");
let list_display = document.getElementById("choice-2");
let table_display = document.getElementById("choice-1");
let displayer = document.getElementById("select-choice");

btn_display_table.addEventListener("click" , ()=>{
    btn_display_table.style.color="#FB5607"
    btn_display_table.style.borderBottom="1px solid #FB5607";
    btn_display_list.style.color="#000"
    btn_display_list.style.borderBottom="none";
    displayer.innerHTML=table_display.innerHTML;

    //table display code
let table_display_content = document.getElementById("table-content-js");
let rows_table = ""
for (let index = 0; index < 8; index++) {
    rows_table += `
    <tr>
        <td>Shoes</td>
        <td>12</td>
        <td>24</td>
        <td>4</td>
        <td>26.99 USD</td>
        <td>45%</td>
    </tr>
    `
}
table_display_content.innerHTML=rows_table;
});
btn_display_list.addEventListener("click",()=>{
    btn_display_list.style.color="#FB5607"
    btn_display_list.style.borderBottom="1px solid #FB5607";
    btn_display_table.style.color="#000"
    btn_display_table.style.borderBottom="none";
    displayer.innerHTML=list_display.innerHTML;
    displayProduct();
})
btn_display_table.click();

//filter code
let filter_price = document.getElementById("price-filter");
let filter_quantity = document.getElementById("quantity-filter");
let order = document.getElementById("order");

filter_price.addEventListener("click" , ()=>{
    filter_price.style.color = "white";
    filter_price.style.backgroundColor = "#FB5607"
    filter_quantity.style.color = "black";
    filter_quantity.style.backgroundColor="white";
})
filter_quantity.addEventListener("click" , ()=>{
    filter_quantity.style.color = "white";
    filter_quantity.style.backgroundColor = "#FB5607"
    filter_price.style.color = "black";
    filter_price.style.backgroundColor="white";
})









// Define the Product class
// class Product {
//     constructor(name, category, review, link, img, description, quantity, price, oldPrice) {
//       this.name = name;
//       this.category = category;
//       this.review = review;
//       this.link = link;
//       this.img = img;
//       this.description = description;
//       this.quantity = quantity;
//       this.price = price;
//       this.oldPrice = oldPrice;
//     }
//   }

//   axios.get('https://tiny-jade-reindeer-cape.cyclic.app/api/v1/products')
//   .then(response => {
//     productList = response.data.data;
    
//     console.log(productList)

//     displayProduct();
//   })
//   .catch(error => {
//     console.log(error)
//   });


// console.log(productList)

{/* <div class="items">
                                <div class="img img1">
                                    <img
                                        src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                    />
                                </div>
                                <div class="name">SHOES</div>
                                <div class="info">
                                    Lorem ipsum dolor sit amet consectetur.sdfsdfasd sadf adsf ads fa dsf asd dasfk;k; ;ok;lk;jljlhkjh kjhk hk hk jh kjh kjhk jh
                                </div>
                                <div class="price">48 USD</div>
                                <div class="old-price">55 USD</div>
                                <div class="review">
                                    <div class="review-is">4.8</div>
                                    <img class="start-img" src="star.png" alt="">
                                    
                                </div>
                                
                            </div> */}
