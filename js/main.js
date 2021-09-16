
document.querySelector("#fetchbuton").addEventListener("click", fetchDictionary);

var url ="https://dog.ceo/api/breeds/list/all";


/*
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
  .then(response => response.json())
  .then(data => {
    //guarda todo lo que esta en data.message en una lista
    //map hace iteracion y me devuelve bred
    //Object.keys(data.definition).map((definition)=>{
    //    console.log(definition);
   //});
    console.log(data.origin);
  });
  */

function fetchDictionary(){
  var word=document.querySelector("#wordInput").value;
  var word1="hello";
  var keyData =0;
  var keyMeanings =0;
  var keyDefinitions =0;
  console.log(word);

  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
  .then(response =>response.json())
  .then(data => {
    Object.keys(data).map((data)=>{
      //console.log("data"+data);
      keyData++;
    })
    console.log("numero"+keyData);
    for(let i=0;i<keyData;i++){
      Object.keys(data[i]["meanings"]).map((meanings)=>{
        //console.log(i+"meanings"+meanings);
        keyMeanings++;
      })
      for(let j=0;j<keyMeanings;j++){
        Object.keys(data[i]["meanings"][j]["definitions"]).map((definitions)=>{
          if(keyDefinitions==0){
            console.log("partOfSpeech");
            console.log(data[i]["meanings"][j]["partOfSpeech"]);
          }
          //console.log(i+"definitions"+definitions);
          keyDefinitions++;
        })
        
        for(let k=0;k<keyDefinitions;k++){
            console.log("Definiciones");
            console.log(data[i]["meanings"][j]["definitions"][k]["definition"]);
            if(data[i]["meanings"][j]["definitions"][k]["example"]!=undefined){
            console.log("Ejemplos");
            console.log(data[i]["meanings"][j]["definitions"][k]["example"]);
            }
        }
        keyDefinitions=0;
        break;
        
      }
      

    }


  });
  /*
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
  .then(response =>response.json())
  .then(data => {
      console.log(data[0]["meanings"][0]["definitions"][0]["example"]);
  });
*/
}


