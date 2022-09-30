let pelis = {};
//let puntaje = element.vote_average*10;
fetch(' https://japceibal.github.io/japflix_api/movies-data.json')
.then(resp => resp.json())
.then(data => {
    console.log(data);
    pelis = data;
})

function setPeliID(id){
    pelis.forEach(element => {
        if (element.id == id){
            document.getElementById("offcanvasTopLabel").innerHTML = element.title;
            document.getElementById("over_view").innerHTML = element.overview;
            element.genres.forEach( element => {;
                let elementHTML = `
                <li> ${element.name} </li>
                `
                document.getElementById("genres").innerHTML += elementHTML;
            });
            document.getElementById("release_date").innerHTML = element.release_date.substring(0,4);
            document.getElementById("runtime").innerHTML = element.runtime;
            document.getElementById("budget").innerHTML = element.budget;
            document.getElementById("revenue").innerHTML = element.revenue;
        }
    })
}


function buscar(){
    pelis.forEach(element => {
        let puntaje = element.vote_average*10;
        if (element.title.includes(document.getElementById("inputBuscar").value)){

            let elementHTML = `
            <div onclick="setPeliID(${element.id})" data-bs-toggle="offcanvas" class="list-group-item-action" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" style="border: black 1px solid;">
            <div class="row">
             <h3>${element.title}</h3>
            <p>${element.tagline}</p>
            <span class="score">
                <div class="score-wrap">
                    <span id="stars" class="stars-active" style="width:${puntaje}%">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span class="stars-inactive">
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                </div>
                </span>   
            </div>
            </div>
            `

            document.getElementById("lista").innerHTML += elementHTML;
            
         }else{
         if(element.overview.includes(document.getElementById("inputBuscar").value)){     

             let elementHTML = `

             <div onclick="setPeliID(${element.id})" class="container" style="border: black 1px solid;">
             <div class="row">
             <h3>${element.title}</h3>
             <p>${element.tagline}</p>
             <span class="score">
             <div class="score-wrap">
             <span id="stars" class="stars-active" style="width:${puntaje}%">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                 </span>
                 <span class="stars-inactive">
                     <i class="fa fa-star-o" aria-hidden="true"></i>
                     <i class="fa fa-star-o" aria-hidden="true"></i>
                     <i class="fa fa-star-o" aria-hidden="true"></i>
                     <i class="fa fa-star-o" aria-hidden="true"></i>
                     <i class="fa fa-star-o" aria-hidden="true"></i>
                 </span>
            </div>
            </span>   
            </div>
            </div>

             `
             document.getElementById("lista").innerHTML += elementHTML;

         }
        }
         if(element.tagline.includes(document.getElementById("inputBuscar").value)){
            let elementHTML = `

            <div onclick="setPeliID(${element.id})" class="container" style="border: black 1px solid;">
            <div class="row">
            <h3>${element.title}</h3>
            <p>${element.tagline}</p>
            <span class="score">
            <div class="score-wrap">
            <span id="stars" class="stars-active" style="width:${puntaje}%">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <span class="stars-inactive">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>
           </div>
           </span>   
           </div>
            
            `
            document.getElementById("lista").innerHTML += elementHTML;

         }else{
            
            element.genres.forEach( elemento => {
                    
                if(elemento.name.includes(document.getElementById("inputBuscar").value)){
                    
                    let elementHTML = `

                <div onclick="setPeliID(${element.id})" class="container" style="border: black 1px solid;">
                <div class="row">
                 <h3>${element.title}</h3>
                 <p>${element.tagline}</p>
                 <span class="score">
                 <div class="score-wrap">
                 <span id="stars" class="stars-active" style="width:${puntaje}%">
                 <i class="fa fa-star" aria-hidden="true"></i>
                 <i class="fa fa-star" aria-hidden="true"></i>
                 <i class="fa fa-star" aria-hidden="true"></i>
                 <i class="fa fa-star" aria-hidden="true"></i>
                 <i class="fa fa-star" aria-hidden="true"></i>
                     </span>
                     <span class="stars-inactive">
                         <i class="fa fa-star-o" aria-hidden="true"></i>
                         <i class="fa fa-star-o" aria-hidden="true"></i>
                         <i class="fa fa-star-o" aria-hidden="true"></i>
                         <i class="fa fa-star-o" aria-hidden="true"></i>
                         <i class="fa fa-star-o" aria-hidden="true"></i>
                     </span>
                </div>
                </span>   
                </div>
                </div>             
                 `
                 document.getElementById("lista").innerHTML += elementHTML;
                };
             });

        };

            
    });

};


document.getElementById("btnBuscar").addEventListener("click", function(){

    buscar();
});

