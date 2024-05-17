let containerList = document.querySelector('.container-list')
let input = document.querySelector('.input')

//---------------------------------------ADD BUTTON-----------------------------------//
function addList(){
    if(input.value ===''){
        alert('you have not enter anything yet')
    } else{
   let li = document.createElement('li');
   li.innerHTML = input.value;
   containerList.appendChild(li)
   li.id = 'List'

   let button = document.createElement('button')
button.innerHTML = "X"
li.appendChild(button)
button.classList.add('delete')
input.value ='';
}

 saveData();  
}


//---------------------------------------DELETE BUTTON-----------------------------------//
containerList.addEventListener('click',  (e) => {
    e.preventDefault();
    alert('are you sure you want to delete this item ')
    e.target.parentElement.remove();
    saveData();
 });

 //---------------------------------------local Storage-----------------------------------//
 function saveData(){
    localStorage.setItem('data', containerList.innerHTML)
 }

 //---------------------------------------Data Retained-----------------------------------//
 function showTask(){
    containerList.innerHTML = localStorage.getItem('data')
 }
 showTask();