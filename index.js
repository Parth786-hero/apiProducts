const url = "https://dummyjson.com/products";
const father = document.querySelector(".father");
const input = document.querySelector("input");
let bag = "";
// console.log(father);
fetch(url)
    .then((e)=>e.json())
    .then((data)=>{
        bag = Array.from(data.products);
        bag.map((obj)=>{
            const ele = document.createElement("div");
            ele.className = "card";
            ele.innerHTML = `
            <div class="img-box">
            <img src="${obj.images[0]}" alt="sample image"/>
            </div>
            <div class="text-box">
                <h2>${obj.title}</h2>
                <p>${obj.description}</p>
                <p>Price : ${obj.price}</p>
            </div>
            `;
            father.append(ele);

        })
    })
    .catch()
input.addEventListener("input",search);
function search(e){
    const cardBag = document.querySelectorAll(".card");
    Array.from(cardBag).forEach((ele)=>{
        if(e.target.value !== ele.children[1].children[0].textContent.toLowerCase().slice(0,e.target.value.length)){
            ele.style.display = "none";
        }else{
            ele.style.display = "";
        }
    })
};
