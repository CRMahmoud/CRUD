


var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");


var productContainer;


if(localStorage.getItem("myProduct") != null)
{
    productContainer =JSON.parse( localStorage.getItem("myProduct"));
    displayProduct (productContainer);
}
else
{
    productContainer = [];
}



function addProduct()
{

    if(validateProduct() &&  validateNumProduct () &&  validateCtegoryProduct () &&  validateDescProduct () ==true)
    {
        var product= {
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            desc:productDescInput.value,
        }
    
        productContainer.push(product)
    
    
    
        console.log(productContainer)
    
        localStorage.setItem("myProduct",JSON.stringify(productContainer));
    
        clearForm();
        displayProduct(productContainer);
    

    }
    else
    {
        alert('product valid')
    }

    
   

   
}

function clearForm()
{
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescInput.value="";

}

function displayProduct(productList){

    var cartoona =``;
    
    for ( var i =0; i < productList.length; i++){
        cartoona +=` <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td><button onclick="updateForm(${i})" class="btn btn-sm btn-warning">update</button></td>
        <td><button onclick="deletedProduct(${i})"  class="btn btn-sm btn-info">delete</button></td>
    </tr>`

    }
    document.getElementById('tableBody').innerHTML = cartoona;
    
}



function searchProduct(search)
{
    var searchResult = [];

    for(var i=0 ; i <productContainer.length ; i++)
    {
        if(productContainer[i].name.toLowerCase().includes(search.toLowerCase()) == true)
        {
            searchResult.push(productContainer[i]);
        }
    }


    displayProduct(searchResult);

}



function deletedProduct(delet){
    productContainer.splice(delet,1);
    localStorage.setItem("myProduct",JSON.stringify(productContainer));

    displayProduct(productContainer);
}

function updateForm(update)
{
    productNameInput.value = productContainer[update].name;
    productPriceInput.value = productContainer[update].price;
    productCategoryInput.value = productContainer[update].category;
    productDescInput.value = productContainer[update].desc;

    updateBtn.classList.replace('d-none' , 'd-inline-block') ;
    addBtn.classList.add('d-none'); 

}

function validateProduct ()
{
    var regex = /^[A-Z][a-z]{3,8}$/;  

    if(regex.test(productNameInput.value )==true)
    {
        productNameInput.classList.replace('is-invalid' , 'is-valid');
        
        return true;
    }
    else
    {
        productNameInput.classList.add('is-invalid');
       
        return false; 
    }
}


function validateNumProduct ()
{
    var regex = /^[0-9]{4,6}$/;  

    if(regex.test(productPriceInput.value )==true)
    {
        productPriceInput.classList.replace('is-invalid' , 'is-valid');
        
        return true;
    }
    else
    {
        productPriceInput.classList.add('is-invalid');
       
        return false; 
    }
}

function validateCtegoryProduct ()
{
    var regex = /^[A-Z][a-z]{3,8}$/;  

    if(regex.test(productCategoryInput.value )==true)
    {
        productCategoryInput.classList.replace('is-invalid' , 'is-valid');
        
        return true;
    }
    else
    {
        productCategoryInput.classList.add('is-invalid');
       
        return false; 
    }
}

function validateDescProduct ()
{
    var regex = /^[A-Z][a-z]{3,100}$/;  

    if(regex.test(productDescInput.value )==true)
    {
        productDescInput.classList.replace('is-invalid' , 'is-valid');
        
        return true;
    }
    else
    {
        productDescInput.classList.add('is-invalid');
       
        return false; 
    }
}

