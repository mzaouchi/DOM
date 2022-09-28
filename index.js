// var plus = document.querySelector('.btnPlus')
// var moins = document.querySelector('.btnMoins')



// plus.addEventListener('click',function(){
//     plus.previousElementSibling.innerHTML++
// })


// moins.addEventListener('click',function(){

//     if(moins.nextElementSibling.innerHTML>0){
//         moins.nextElementSibling.innerHTML--
//     }    
// })

var plus = document.querySelectorAll('.btnPlus')
var moins = document.querySelectorAll('.btnMoins')
var del = document.querySelectorAll('.delete')
var hear = document.querySelectorAll('.fa-heart')
// var del = document.getElementsByClassName('delete')
console.log(del)
// console.log(plus)

// console.log(plus[1])

for(let i = 0;i<plus.length;i++){
    plus[i].addEventListener('click',function(){
        plus[i].previousElementSibling.innerHTML++
        SommeTotale()

    })
}

for(let i = 0; i<moins.length;i++){
    moins[i].addEventListener('click',function(){
        if(moins[i].nextElementSibling.innerHTML>0){
            moins[i].nextElementSibling.innerHTML--
            SommeTotale()
        }        
    })
}

for(let i = 0; i<del.length;i++){
    del[i].addEventListener('click',function(){
        del[i].parentElement.remove()
        SommeTotale()
        // console.log(del)
    })
}


for (let i = 0; i < hear.length; i++) {
    hear[i].addEventListener('click',function(){
        hear[i].classList.toggle('brahim')
    })    
}

function SommeTotale(){
    var pri = document.querySelectorAll('.price')
    var qt = document.querySelectorAll('.qte')
    var somme = document.querySelector('#somme')
    var sum = 0

    for(let i = 0;i<pri.length;i++){
        sum = sum + pri[i].innerHTML*qt[i].innerHTML
    }

    somme.innerHTML = sum
}

