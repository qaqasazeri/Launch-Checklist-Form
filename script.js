
   	 window.addEventListener("load", function() {
      let form = document.querySelector("form");
 fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
      	 const destination = document.getElementById("missionTarget");
console.log(json);
     destination.innerHTML=	`<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>

<img src="${json[0].image}">`
        
      });
   });

      form.addEventListener("submit", function(event) {

         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel=document.querySelector("input[name=fuelLevel");
         let cargoMass=document.querySelector("input[name=cargoMass");


         if (pilotName.value === "" || copilotName.value === ""||fuelLevel.value===""||cargoMass.value==="") {
            alert("All fields are required!");
            event.preventDefault();
     }


       else if(isNaN(fuelLevel.value)||isNaN(cargoMass.value)){
      
       alert("Fuel level and cargoMass should be Number");
            event.preventDefault();
      }
            
        else if(!isNaN(pilotName.value)||!isNaN(copilotName.value)){
        	
        alert("Pilot name and Co-pilot name should be String");
}
       
        else{
        	event.preventDefault();
         let faultyItems=document.getElementById('faultyItems');
         let pilotStatus=document.getElementById('pilotStatus');
         let copilotStatus=document.getElementById('copilotStatus');
         let fuelStatus=document.getElementById('fuelStatus');
         let cargoStatus=document.getElementById('copilotStatus');
         let launchStatus=document.getElementById('launchStatus')
}

         
        if(fuelLevel.value<=10000&&cargoMass.value<=10000){
            pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch.`
            copilotStatus.innerHTML=`Pilot ${copilotName.value} is ready for launch.`
        	faultyItems.style.visibility="visible";
        	fuelStatus.innerHTML="There is not enough fuel for the journey";
        	launchStatus.innerHTML="Shuttle not ready for launch";
        	launchStatus.style.color="red";

        } 
        else if(fuelLevel.value>=10000&&cargoMass.value>=10000){

            pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch.`
            copilotStatus.innerHTML=`Pilot ${copilotName.value} is ready for launch.`
            faultyItems.style.visibility="visible";
        	cargoStatus.innerHTML="There is too much mass for the shuttle to take off";
        	launchStatus.innerHTML="Shuttle not ready for launch";
        	launchStatus.style.color="red";

        }

        else if(fuelLevel.value<=10000&&cargoMass.value>=10000){
            pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch.`
            copilotStatus.innerHTML=`Pilot ${copilotName.value} is ready for launch.`
            faultyItems.style.visibility="visible";
            fuelStatus.innerHTML="There is not enough fuel for the journey";
            cargoStatus.innerHTML="There is too much mass for the shuttle to take off";
        	launchStatus.innerHTML="Shuttle is NOT ready for launch";
        	launchStatus.style.color="red";
         
        }
        else{
        	
        	launchStatus.innerHTML="Shuttle is  ready for launch";
        	launchStatus.style.color="green";
        }

       
     });
     });    
      

