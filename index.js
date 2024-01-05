
Api_key=`e9868d94&t`
async function makeApi(){
    try {
        let sercTerm = document.getElementById("searcTerm").value
        let res = await fetch(`https://www.omdbapi.com/?apikey=${Api_key}&s=${sercTerm}`);
        let result = await res.json()
        displayData(result.Search)
        // console.log(result);
    } catch (error) {
        console.log(error);
    }
}

let timerId;
let container = document.getElementById('container');
function debounce(cal,delay){
    if(timerId){
        clearTimeout(timerId)
    }
    timerId = setTimeout(()=>{
        cal()
    },delay)
}

function displayData(data){
    container.innerHTML=null;
    if(!data || data.length===0){
        container.innerHTML=`<p>No Movies Found</p>`
    }
    data.forEach(element => {
        console.log(element);
        let cart = document.createElement('div');
        cart.classList="cart"
        let items = `
            <img src = "${element.Poster}" class='image'/>
            <p class='title'> Title : ${element.Title}</p>
            <p class='year'> Year : ${element.Year}</p>
            <p class='type'> Type : ${element.Type}</p>
        `
        cart.innerHTML=items;
        container.appendChild(cart);
    });
     
}

