let pelis = {};

fetch(' https://japceibal.github.io/japflix_api/movies-data.json')
.then(resp => resp.json())
.then(data => {
    console.log(data);
    pelis = data;
})



function buscar(){
    console.log(document.getElementById("inputBuscar").value)
    pelis.forEach(element => {
        if (element.title.includes(document.getElementById("inputBuscar").value)){
            console.log(element.title);

            let elementHTML = `

            <div class="container" style="border: black 1px solid;">
            <h3>${element.title}</h3>
            <p>${element.tagline}</p>
            </div>
            

            `

            document.getElementById("lista").innerHTML += elementHTML;

            console.log(elementHTML)
        } else {
            
        }
    });
}

document.getElementById("btnBuscar").addEventListener("click", function(){

    buscar();
})

