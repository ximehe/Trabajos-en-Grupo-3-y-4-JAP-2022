let jsonData;
let URL= "https://images-api.nasa.gov/search?q=";


document.getElementById("btnBuscar").addEventListener("click",function(){
    
    const busqueda = document.getElementById("inputBuscar").value;
    console.log(URL + busqueda)
    fetch(URL + busqueda)
    .then(resp => resp.json())
    .then(data => {

        jsonData=data.collection.items;
        showList(jsonData);
        console.log(jsonData);
    });

    
    
 
 });


    

function showList(array){

    array.forEach(element => {
        
       
            
            var elementHTML = `
          
        
        <div class="col-md-4">
            
        <img class="bd-placeholder-img card-img-top" src="` + element.links[0].href + `"  class="img-thumbnail">

        <h4 class="m-3" align="center">`+ element.data[0].title +`</h4> 
        <p class="m-2"> `+ element.data[0].description +`</p>
        <small class="text-muted" >` + element.data[0].date_created + ` </small> 
    
        </div>

        `
       
        document.getElementById("contenedor").innerHTML += elementHTML; 
               

    })
}

