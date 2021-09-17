
document.querySelector("#fetchbuton").addEventListener("click", fetchDictionary);


var url ="https://dog.ceo/api/breeds/list/all";
var link

function fetchDictionary(){
  var word=document.querySelector("#wordInput").value;
  var word1="hello";
  var keyData =0;
  var keyMeanings =0;
  var keyDefinitions =0;
  console.log(word);
  if(word!=""){
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
    .then(response =>response.json())
    .then(data => {
      Object.keys(data).map((data)=>{
        //console.log("data"+data);
        keyData++;
      })

      for(let i=0;i<keyData;i++){
        Object.keys(data[i]["meanings"]).map((meanings)=>{
          //console.log(i+"meanings"+meanings);
          var aux1=0;

          if(aux1==0){
            if((data[i]["phonetics"][0]["audio"])!=undefined){
              aux1=1;
              link="https:"+(data[i]["phonetics"][0]["audio"]);
              console.log(link);

              document.getElementById("audioLink").setAttribute("src",link);
              /*
              var audioEt= document.createElement("audio");
              document.getElementById("audioApi").appendChild(audioEt);

              //document.getElementById("audioApi").innerHTML="<p>hola</p>"
              var audioLink= document.createElement("source");
              audioEt.controls;
              audioEt.appendChild(audioLink);
              audioLink.type="audio/mp3"
              audioLink.src=link
              */
            }
          }
          
          keyMeanings++;
        })
        for(let j=0;j<keyMeanings;j++){
          Object.keys(data[i]["meanings"][j]["definitions"]).map((definitions)=>{
            if(keyDefinitions==0){
              var parOfSpeechApi= document.createElement("label");
              var valueParOfSpeech= document.createElement("output");
              document.getElementById("textApi").appendChild(parOfSpeechApi);
              document.getElementById("textApi").appendChild(valueParOfSpeech);

              parOfSpeechApi.innerHTML="<br>"+"Part Of Speech:";
              valueParOfSpeech.innerHTML=(data[i]["meanings"][j]["partOfSpeech"])+"<br>";
              console.log("partOfSpeech");
              console.log(data[i]["meanings"][j]["partOfSpeech"]);
            }
            //console.log(i+"definitions"+definitions);
            keyDefinitions++;
          })
          
          for(let k=0;k<keyDefinitions;k++){

            var definitionsApi= document.createElement("label");
            var valueDefinitions= document.createElement("output");
            document.getElementById("textApi").appendChild(definitionsApi);
            document.getElementById("textApi").appendChild(valueDefinitions);
    
            definitionsApi.innerHTML="<br>"+"Definicion:";
            valueDefinitions.innerHTML=(data[i]["meanings"][j]["definitions"][k]["definition"])+"<br>";

            if(data[i]["meanings"][j]["definitions"][k]["example"]!=undefined){
              var examplesApi= document.createElement("label");
              var valueExamples= document.createElement("output");
              document.getElementById("textApi").appendChild(examplesApi);
              document.getElementById("textApi").appendChild(valueExamples);
      
              examplesApi.innerHTML="<br>"+"Example:";
              valueExamples.innerHTML=(data[i]["meanings"][j]["definitions"][k]["example"])+"<br>";
            }

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
  }else{
    alert("por favor ingrese un valor primero")
  }
    
}



