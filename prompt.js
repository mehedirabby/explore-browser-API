console.log('cncted')
// alert('whats up man')



const showAlert=()=>{

    document.body.style.backgroundColor="yellow";
    const num = Math.random()*10;
    
    console.log(num)

    if(num <5){
        alert('dhurru mia ki koitasen');
    }
}

const askSomething=()=>{
    const desicion =confirm('are you coming to that time')
    console.log(desicion)
    if(desicion === true){
        alert('send money')
    }
    else{
        alert('okay bye')
    }
}


const getUserInfo=()=>{
   const name = prompt('tell us your name')
   console.log(name);
   if(!!name){
    console.log('welcome here',name)
   }
}