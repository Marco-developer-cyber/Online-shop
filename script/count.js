let minus = document.querySelectorAll(".minus")
let plus = document.querySelectorAll(".plus")
let count = document.querySelectorAll(".count")

let cnt = 0
plus.forEach((item, num) => {
    item.addEventListener('click', ()=> {
        count[num].value = parseInt(count[num].value) + 1
    })
})
minus.forEach((item, num) => {
    item.addEventListener('click', ()=> {
        count[num].value = parseInt(count[num].value) - 1
    })
})