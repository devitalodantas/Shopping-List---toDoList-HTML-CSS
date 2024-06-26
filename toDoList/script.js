const localStorageKey = "box-list-gn";

function newProduct(){
    let input = document.getElementById("button-product");


    if(!input.value){
        alert("Digite um produto a ser inserido!")

    }else if(validateExistProduct()){
        alert("Já existe o produto digitado em sua lista.")
    }
    else if(!isNaN(input.value)){
        alert("Não é válido a entrada de números")
    }
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
      
            values.push({
                name: input.value
            })
   
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        input.value = "";
        showProducts()
    }

}

function showProducts(){
   
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('box-list')
    list.innerHTML = ''
    
    for(let i = 0; i < values.length; i++){
        list.innerHTML += 
        `<li> ${values[i]['name']} 
            <div id="box-quantidade">                
                <select id=""> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button id="button-delete" onclick='deleteProduct("${values[i]['name']}")' class="bi bi-trash-fill" title="Click to remove"></button>
            </div>
        </li>`
    }
}

/*
function diminuiQtd(index) {
    let input = document.getElementById(`quantityInput${index}`);
    let quantity = parseInt(input.value);
    if (quantity > 1) {
        input.value = quantity - 1;
    }
}

function aumentaQtd(index) {
    let input = document.getElementById(`quantityInput${index}`);
    let quantity = parseInt(input.value);
    input.value = quantity + 1;
}
*/

function validateExistProduct(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById("button-product").value;
    let exists = false

    for(let i = 0; i < values.length; i++){
        if(values[i].name === inputValue){

            exists = true
        }
    }
    return exists
}

function deleteProduct(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showProducts()
}