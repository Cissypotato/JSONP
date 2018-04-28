

button.addEventListener('click',(e)=>{
    let script=document.createElement('script')
    let functionName='cissy'+parseInt(Math.random()*10000,10)
    window[functionName]=function(result){
        var amount=document.querySelector('#amount')
        if(result==="success"){
            amount.innerText= amount.innerText-1
        }else{}
    }
    script.src='/pay?callback='+functionName 
    document.body.appendChild(script)
    script.onload=function(e){
        // e.currentTarget.remove()
        
    }
    script.onerror=function(e){
        alert('failed')
        e.currentTarget.remove()
       
    }
})
