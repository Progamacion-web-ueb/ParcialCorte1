
document.querySelector("#fetchbuton").addEventListener("click", fetchF);
var url ="https://dog.ceo/api/breeds/list/all";
var urlimg;
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
  .then(response => response.json())
  .then(data => {
    //guarda todo lo que esta en data.message en una lista
    // map hace iteracion y me devuelve bred
    //Object.keys(data.message).map((random)=>{
    //    console.log(random);
   // });
    console.log(data);
  });
    
   

function fetchF(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            urlimg= data.message
            console.log(data.message);
            this.img = document.createElement("img");
        this.img.src = data.message;
        src = document.getElementById("imgdog");
        src.appendChild(this.img);
        });
        //console.log(data.message);
        
        
}


