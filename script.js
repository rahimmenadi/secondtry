// Define the Product class

// let firstChoice = document.getElementById('choice-1');
// let secondChoice = document.getElementById('choice-2');
// document.getElementById('select-choice').innerHTML=secondChoice;

// const { default: axios } = require("axios");


//guest page
let productList = [];












//json
//============================
// FIRST METHODE :axios API, syntax : axios(config)
/*
axios({
    url:'/todos',
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'get'
})
.then((response)=>{
    // hundle success
    console.log(response.data)
})
.catch((err)=>{
    // hundle error
    console.log(err)
})
.then(() => {
    //always excuted
    console.log('end http request');
})
*/
//axios(config) https://jsonplaceholder.typicode.com/todos

//Request config

//response Shema (response object)
/* there are many object like status , statusText , header , config , request
you just write response.status
*/

//performing a GET request & with params

// axios({
//     url:'/todos',
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     method: 'get',
//     params: {
//         id:1 //he will get the object that there id equal 1
//     }
// })
// .then((response)=>{
//     // hundle success
//     console.log(response.data)
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })
// .then(() => {
//     //always excuted
//     console.log('end http request');
// })

// if you have api by restfull or ... you should install it and include it in your project
// and copy the link and send the data from your server side
/*
axios({
    url:'http://localhost:3000/api/books',
    method: 'get',
})
.then((response)=>{
    // hundle success
    console.log(response.data)
})
.catch((err)=>{
    // hundle error
    console.log(err)
})


*/
//Performing a POST request
/*
axios({
    url:'http://localhost:3000/api/books',
    method: 'post',
    data: {
        title:"learn c++",
        author: "mr.c++"
    }
})
.then((response)=>{
    // hundle success
    console.log("the book was added successfully")
})
.catch((err)=>{
    // hundle error
    console.log(err)
})
*/
//=================================

//SECOND METHODE Request methode aliases


// axios.post('https://jsonplaceholder.typicode.com/todos',{
//     title:'i just learn',
//     completed:true,
// })
// .then((response)=>{
//     // hundle success
//     console.log("data was seccessfully added")
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })


// axios.delete('https://jsonplaceholder.typicode.com/todos/1')
// .then((response)=>{
//     // hundle success
//     console.log("seccusfully deleted")
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })


axios.get('https://tiny-jade-reindeer-cape.cyclic.app/api/v1/products')
  .then(response => {
    productList = response.data.data;
    
    console.log(productList)

    displayProduct();
  })
  .catch(error => {
    console.log(error)
  });



/*
Request method aliases
for convenience aliases have been provided for all supported request methods
axias.request(config)
axias.get(url[, config])
axias.delete(url[, config])
axias.head(url[, config])
axias.options(url[, config])
axias.post(url[,data[, config[]])
axias.put(url[,data[, config[]])
axias.patch(url[,data[, config[]])

*/
//use async/awaint with axios

// const getAllbooks = async () =>{
//     try {
//         const response = await axios.get("lingk")
//         console.log(response.data);
//     } catch (e) {
//         console.log(e)
//     }
// }
// getAllbooks();
// console.log('start .....')

//Creating an instance

// const books = axios.create({
//     baseURL:"url",
//     url:'/books'
// })

// const todos = axios.create({
//     baseURL:"url",
// })

// todos.get('/todos')
// .then((response)=>{
//     // hundle success
//     console.log(response.data)
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })

// config Defaults

//axios.defaults.baseURL = "url";
// axios.get('/todos')
// .then((response)=>{
//     // hundle success
//     console.log(response.data)
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })


// Axios multiple requests

// axios.all({
//     todos.get('/todos'),
//     books.get('/books')
// })
// .then(axios.spread((todosResponse,postsResponses) => {
//     console.log(todosResponse.data)
//     console.log(postsResponses.data)
// }))

// interceptors

 















// Define the Product class
class Product {
    constructor(name, category, review, link, img, description, quantity, price, oldPrice) {
      this.name = name;
      this.category = category;
      this.review = review;
      this.link = link;
      this.img = img;
      this.description = description;
      this.quantity = quantity;
      this.price = price;
      this.oldPrice = oldPrice;
    }
  }




// let firstProduct = new Product(
//     "SHOES",
//     "shoes",
//     4.8,
//     "https://example.com/product3",
//     "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     "Description of Product SHOES",
//     2,
//     29.99,
//     34.99
//   );
// for (let index = 0; index < 50; index++) {

//     productList.push(firstProduct);
// }
// console.log(productList)


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
            <div class="name">${productList[i].title}</div>
            <div class="info">
            ${productList[i].description}
            </div>
            <div class="price">${productList[i].priceAfterDiscount} USD</div>
            <div class="old-price">${productList[i].price} USD</div>
            <div class="review">
                <div class="review-is">${productList[i].ratingAverage}</div>
                <img class="start-img" src="../star.png" alt="">
                
            </div>
            
        </div>
        `
    
    document.getElementById('items-container').innerHTML = table;
   
    }
    
    
    
    
}

// <!-- Initialize Swiper -->
let j = 1;
let degree=30;

function repeate(){
    j=j+1;
    degree = degree+120;
    switch (j % 10) {
        case (0):
        document.documentElement.style.setProperty("--selection-background", "#444");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (1):
        document.documentElement.style.setProperty("--selection-background", "#bbb");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (2):
        document.documentElement.style.setProperty("--selection-background", "#f7f705");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (3):
        document.documentElement.style.setProperty("--selection-background", "#f78605");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (4):
        document.documentElement.style.setProperty("--selection-background", "#A4CDFF");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (5):
        document.documentElement.style.setProperty("--selection-background", "#5d2871");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (6):
        document.documentElement.style.setProperty("--selection-background", "#c500bf");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (7):
        document.documentElement.style.setProperty("--selection-background", "#000dc5");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (8):
        document.documentElement.style.setProperty("--selection-background", "#c500ab");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (9):
        document.documentElement.style.setProperty("--selection-background", "#00c52b");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
    
        default:
            break;
    }
}
function repeateLeft(){
    j=j+1;
    degree = degree-120;
    switch (j % 10) {
        case (0):
        document.documentElement.style.setProperty("--selection-background", "#444");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (1):
        document.documentElement.style.setProperty("--selection-background", "#bbb");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (2):
        document.documentElement.style.setProperty("--selection-background", "#f7f705");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (3):
        document.documentElement.style.setProperty("--selection-background", "#f78605");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (4):
        document.documentElement.style.setProperty("--selection-background", "#A4CDFF");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (5):
        document.documentElement.style.setProperty("--selection-background", "#5d2871");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (6):
        document.documentElement.style.setProperty("--selection-background", "#c500bf");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (7):
        document.documentElement.style.setProperty("--selection-background", "#000dc5");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (8):
        document.documentElement.style.setProperty("--selection-background", "#c500ab");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (9):
        document.documentElement.style.setProperty("--selection-background", "#00c52b");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
    
        default:
            break;
    }
}

let butotn = document.getElementById('swipe');
function reee(){
    butotn.click();
    
}
let btnPreviews = document.getAnimations('swipe-left');

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  allowTouchMove:false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed:400,
  navigation: {
    nextEl: ".button",
    prevEl: ".button-previews",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  
  centeredSlides: true,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed:400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

setInterval(reee, 4000);3