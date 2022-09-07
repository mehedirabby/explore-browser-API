document.getElementById('btn-add').addEventListener('click',function(){
    const nameField = document.getElementById('user-name');
    const newValue = nameField.value;
    


    localStorage.setItem('name',newValue)
})


document.getElementById('btn-age').addEventListener('click',function(){
    const ageField = document.getElementById('age-field');
    const newAge = ageField.value;


    localStorage.setItem('age',newAge);
})


document.getElementById('btn-remove').addEventListener('click',function(){
    localStorage.removeItem('name')
})
document.getElementById('btn-rmv-age').addEventListener('click',function(){
    localStorage.removeItem('age')
})

document.getElementById('btn-clr').addEventListener('click',function(){
    localStorage.clear();
})