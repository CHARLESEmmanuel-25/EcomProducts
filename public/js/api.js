const next = document.getElementById('next');
const prev = document.getElementById('prev');
//const seeArticles = document.getElementById('seeArticles');
//const title =document.getElementById('title');
const article = document.getElementById('articles');
const allProducts = [];
let currentIndex = -1;


// Fetch products when the dom finish to charged

document.addEventListener("DOMContentLoaded", async (event) => {
    await callProdutcsAPI();
   
});

// next button slide
next.addEventListener('click', async () => {
    // incrementation index
    let index = ++currentIndex;
    //console.log(allProducts[index].name);

    // create image balise
    let productImage = document.createElement('img');
    // give the src images from bd
    productImage.src =`./images/${allProducts[index].image}` 

    // add a classe list for size images
    productImage.classList.add("images")

    //console.log(productImage);
    

    //hide the prev img balise fo the next 
    Array.from(article.getElementsByTagName('img')).forEach((pImg) =>{
        pImg.style.display = 'none';
    })
    
    // //hide the prev paragraphe balise fo the next 
    Array.from(article.getElementsByTagName('p')).forEach((pTag) => {
        pTag.style.display = 'none';
    });

    // display product name in a div element child of article
    let productName = document.createElement('p');
    productName.textContent = `${allProducts[index].name}`;
    const namProcuctDiv = document.createElement('div');
    namProcuctDiv.classList.add("nameProduct");
    // add in  DOM
    article.appendChild(productImage)
    article.appendChild(namProcuctDiv);
    namProcuctDiv.appendChild(productName);
});

prev.addEventListener('click', async () =>{
    let decrement = --currentIndex;

    let productImage = document.createElement('img');
    productImage.src =`./images/${allProducts[decrement].image}` 
    productImage.classList.add("images")

    //hide img balise
    Array.from(article.getElementsByTagName('img')).forEach((pImg) =>{
        pImg.style.display = 'none';
    })

       // select and hidden only paragraph balise 
       Array.from(article.getElementsByTagName('p')).forEach((pTag) => {
        pTag.style.display = 'none';
    });

    // Create new element an display it
    const productName = document.createElement('p');
    productName.textContent = `${allProducts[decrement].name}`;

    const namProcuctDiv = document.createElement('div');
    namProcuctDiv.classList.add("nameProduct");

    // add in  dom
    article.appendChild(productImage)
    article.appendChild(namProcuctDiv);
    namProcuctDiv.appendChild(productName);
})



// Fetch products from the server, a ecommerce api using mongo db for DB
async function callProdutcsAPI() {
    try {
        const response = await axios.get('https://api-rest-e-com.onrender.com/api/v1/');
        const fetchedProducts = response.data;
        allProducts.push(...fetchedProducts);  // Spread operator to push individual products 
    } catch (error) {
        console.error('Error fetching phones:', error);
    }
}
