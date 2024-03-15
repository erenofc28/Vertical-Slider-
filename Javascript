
let container= document.querySelector('.container')
let left= document.querySelector('.left')
let right= document.querySelector('.right')
let up= document.querySelector('.up')
let down= document.querySelector('.down')
let length=right.querySelectorAll('div').length


let active=0

left.style.top =`-${(length-1) * 100}vh`

up.addEventListener('click',()=>change('up'))
down.addEventListener('click',()=>change('down'))

const change =(val)=>{
     let joe=container.clientHeight
     console.log(joe)
     let packed=length-1
     if(val==='up'){
        active++
        console.log(active)
           if(active>packed){
                active=0
               console.log(active);
               }

     }
     else if(val==='down'){
        active--
        console.log(active);
        if(active<0){
            active= length-1
console.log(active);
        }

     }
right.style.transform=`translateY(-${active*joe}px)`
left.style.transform=`translateY(${active*joe}px)`

}
