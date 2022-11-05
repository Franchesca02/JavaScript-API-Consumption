
fetch("https://fakestoreapi.com/products/")
.then((data) => {
    return data.json()
})
.then((allData) =>{
    // console.log(allData)
    let result = "";
    allData.map((responses) =>{
        result+= `<div class="card">
        <h1 class="text-1xl text-gray-900 font-bold underline">${responses.title}</h1>
        <img src=${responses.image} alt="product images" class="image" />
        <p class="description">${responses.description}</p>
        <p class="category">${responses.category}</p>
        <p class="price">${responses.price}</p>
        </div>`
    })
    document.getElementById('cards').innerHTML = result
}).catch((err)=>{
    console.log(err)
})

