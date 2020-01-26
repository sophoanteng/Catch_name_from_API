

function onFilterInput() {
    let listElement = document.getElementsByTagName("li");
    let inputElement = document.querySelector('input').value;
    let filter = inputElement.toUpperCase();
    let textValue;
    for(let i = 0 ; i < listElement.length; i++){
        textValue = listElement[i].textContent || listElement[i].innerText;
        let isFind = textValue.indexOf(filter) > -1;
        if(isFind){
            listElement[i].style.display="block";
        }else{
            listElement[i].style.display="none";
        }
    }
}
document.addEventListener('keyup', onFilterInput);




