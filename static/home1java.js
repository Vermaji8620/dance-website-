document.getElementById('s1').style.display='none'
document.getElementById('s2').style.display='none'

document.getElementById('yes').addEventListener('click', ()=>{
    document.getElementById('s1').style.display='block'
    document.getElementById('s2').style.display='none'
    document.getElementById('going').addEventListener('click', ()=>{
        document.getElementById('conclusion').innerHTML=`the value is ${document.getElementById('yes').value} and subvalue is ${document.getElementById('going').value}`
    })
    document.getElementById('coming').addEventListener('click', ()=>{
        document.getElementById('conclusion').innerHTML=`the value is ${document.getElementById('yes').value} and subvalue is ${document.getElementById('coming').value}`
    })
})

document.getElementById('no').addEventListener('click', ()=>{
    document.getElementById('s2').style.display='block'
    document.getElementById('s1').style.display='none'
    document.getElementById('notgoing').addEventListener('click', ()=>{
        document.getElementById('conclusion').innerHTML=`the value is ${document.getElementById('no').value} and subvalue is not ${document.getElementById('notgoing').value}`
    })
    document.getElementById('notcoming').addEventListener('click', ()=>{
        document.getElementById('conclusion').innerHTML=`the value is ${document.getElementById('no').value} and subvalue is not ${document.getElementById('notcoming').value}`
    })
})