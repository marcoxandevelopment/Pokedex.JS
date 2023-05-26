     fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(response => response.json())
        .then(allpokemon => {



            var pokemons = [];
               
       allpokemon.results.map((val)=>{
 

            fetch(val.url)
            .then(response => response.json())
            .then(pokeSingle => {

              
               pokemons.push({
                name:val.name,imagem: pokeSingle.sprites.front_default
            })

            if(pokemons.length == 10){


                var pokeboxium = document.querySelector('.pokebox');
                pokeboxium.innerHTML = '';
                pokemons.map((val)=>{
                     
       
           pokeboxium.innerHTML+=`

           <div class="pokeboxuser">
           <img src="`+val.imagem+`" alt="" class="">
           <p>`+val.name+`</p>
           </div>


           `;
                })
            }

            })
    
            
       })

       pokemons.map((val)=>{
        console.log(val.name)
       })

        })