const cube = document.querySelector(".cube");
let roteY = 0
let roteX = 0
cube.onmousemove = (e)=>{
  Move(e)

}

function  Move(e){
  console.log(e.x, e.y)
  if(e.x > 300 && e.x <400){
    const rotateX= `rotateY(-${roteX}deg)`
    cube.style.transform = rotateX
    roteX-=5
    console.log(rotateX)

  }

  else if(e.y<200 && e.y > 60 ){
    const rotateY= `rotateX(${roteY}deg)`
    cube.style.transform = rotateY
    roteY+=5
  }
  else if(e.y>300 && e.x > 400){
    const rotateY= `rotateX(-${roteY}deg)`
    cube.style.transform = rotateY
    roteY-=5
  }
  else{
    const rotateX= `rotateY(${roteX}deg)`
    cube.style.transform = rotateX
    roteX+=5
  } 
}


const btn = document.querySelector('.btn');

function random(){
  return Math.floor(1+Math.random()*6);
}
btn.addEventListener('click', ()=>{
  const value = random()
  
  switch(value){
    case 1:
      clear()
      cube.classList.add("show-front")
      break
    case 2:
      clear()
      cube.classList.add("show-right")
      break
    case 3:
      clear()
      cube.classList.add("show-back")
      break
    case 4:
      clear()
      cube.classList.add("show-left")
      break
    case 5:
      clear()
      cube.classList.add("show-top")
      break
    case 6:
      clear()
      cube.classList.add("show-bottom")
  }
})
function clear(){
  const para = ["front","right","back","left","top","bottom"]
  cube.removeAttribute("style")
  for(let i=0; i<para.length;i++){
    
    if(cube.classList.contains(`show-${para[i]}`)){
      cube.classList.remove(`show-${para[i-1]}`)
      cube.classList.remove(`show-${para[i]}`)
    }
  }
}