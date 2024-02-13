
const url = "https://65c705abe7c384aada6e1d67.mockapi.io/category"
const tabs = document.querySelectorAll('.search-box');
const boxes = document.querySelector('.boxes');




// document.addEventListener('DOMContentLoaded', setActiveTab);


function openTab(tabID){
    for (const tab of tabs){
        tab.style.display = 'none';
    }
    document.getElementById(tabID).style.display = 'flex';
}


 async function getCategory(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.forEach(el => {
        boxes.innerHTML += showCategory(el);
    })
}

getCategory();


function showCategory(item){
    return`
     <div class="box">
            <div class="box-text">
                <h3>${item.name}</h3>
                <p>Подробее> </p>
            </div>
            <div class="box-image" >
                <img  width="125"  src="${item.image}" alt="">
</div>
        </div>
    `
}
const activeTab = document.querySelector(".search-box.active");
function setActiveTab() {
    tabs.forEach(tab => {
        if (tab.classList.contains("active")) {
            // tab.style.border = "1px solid b";
            tab.style.display = "flex";
        } else {
            tab.style.border = "none";
            tab.style.display = "none";
        }
    });
}
document.addEventListener('DOMContentLoaded', setActiveTab);
