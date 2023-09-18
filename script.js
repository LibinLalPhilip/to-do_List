const btn=document.querySelector('button');
const input=document.querySelector('#input-box')
const listContainer=document.querySelector('#list-container')




btn.addEventListener('click',()=>{
  if(input.value===''){
    alert('write something')
  }else{

    let task=document.createElement("li")
    task.innerHTML=input.value;
    listContainer.appendChild(task);
    let span=document.createElement('span');
    span.innerHTML="\u00d7"
    task.appendChild(span)
  }

  input.value=''
  
})

listContainer.addEventListener('click',(e)=>{
  if(e.target.innerHTML==="\u00d7"){
     document.querySelector('li').remove()
  }
})

listContainer.addEventListener('click',(e)=>{
  if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked')
    
  }
})



