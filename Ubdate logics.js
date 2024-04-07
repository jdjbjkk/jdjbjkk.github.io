function scrollDown() { //функция для скрола
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
let search_button = document.querySelector(".button-search")
let main = document.querySelector(".main")
let iphone = document.querySelector(".iphone")
let holodos = document.querySelector(".holodos")
let sigma = document.querySelector(".sigma")
let pc = document.querySelector(".pc")
let button_buy = document.querySelector(".button-buy")
// 1 - первый телефон, 2 - компьютер, 3- сигма телефон, 4- холодильник
search_button.addEventListener('click', function(){
    let ser_number =document.querySelector("input").value
    if(ser_number == 1){
        holodos.style.display = 'none'
        sigma.style.display = 'none'
        pc.style.display = 'none'
    }else{
        if(ser_number==2){
            iphone.style.display ="none"
            holodos.style.display = 'none'
            sigma.style.display = 'none'
        }else{
            if(ser_number==3){
                iphone.style.display ="none"
                holodos.style.display = 'none'
                pc.style.display = 'none'
            }else{
                if(ser_number==4){
                    iphone.style.display ="none"
                    sigma.style.display = 'none'
                    pc.style.display = 'none'
                }else{
                    alert("Товар не найден")
                }
            }
        }
    }
    
})
button_buy.addEventListener("click",function(){
    alert("Товара нет на складе")
})
// ('#1').on('change',function(){ не могу понять, как добавить реакцию на выбранный элемент выпадающего списка
//     if($(this).value() == 1){
//         alert("телефоны")
//     }
// })
