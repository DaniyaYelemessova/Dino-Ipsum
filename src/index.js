import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


function getDinoName(){
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=1`;

    request.addEventListener("loadend", function(){
      const response = JSON.parse(this.responseText);
      if(this.status === 200){
        console.log(`name: ${response}`);
        resolve(response);
      }else{
        reject(this);
      }
    });
    request.open("GET", url, true);
    request.send();
  });

  
}

function printElement(){
  
  getDinoName().then(function(results){
    const p = document.createElement("p");
    p.textContent = `Dino name: ${results[0]}`;
    document.getElementById("output").appendChild(p);
  }).catch(function(error){
    console.error("Error fetching dinosaur name:", error);
    document.getElementById("output").innerText = "Error fetching dinosaur name.";
  });
}


document.getElementById("btn").addEventListener("click", printElement);

