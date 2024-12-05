let bascet_section = document.querySelector(".bascet_section")
let basket_json = [
    {
        'img': 'ice-cream/01.png',
        'name': 'Zolotoy',
        'price': 15000,
        'count': 3,
        'total_price': 45000
    },
    {
        'img': 'chocolate/04.png',
        'name': 'Kit Kat',
        'price': 12000,
        'count': 1,
        'total_price': 12000
    },
    {
        'img': 'drink/03.png',
        'name': 'coca-cola',
        'price': 14000,
        'count': 3,
        'total_price': 42000
    },
    {
        'img': 'chocolate/13.png',
        'name': 'Alpen Gold',
        'price': 13000,
        'count': 3,
        'total_price': 39000
    },
]

for (let i = 1; i < basket_json.length; i++) {
    let div = document.createElement("div")
    div.classList.add("product_bascet")
    div.innerHTML = `
    <div class="check">
    <img src="../media/${basket_json[i]['img']}" alt="" class="bas_img">
    <span>name: ${basket_json[i]['name']}</span>
    <span>price: ${basket_json[i]['price']}</span>
    <span>count: ${basket_json[i]['count']}</span>
    <span>total price: ${basket_json[i]['total_price']}</span>
    <button>Delete</button>
</div>
    `
    bascet_section.appendChild(div)
}