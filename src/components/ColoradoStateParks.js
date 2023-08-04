import React from "react";
import howManyParks from "./parks/howManyParks";
import * as myFunctions from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  myFunctions.wildlife();
  myFunctions.elevation()

  return (
  <div>
     <h1>Colorado State Parks!</h1>
     <MesaVerde />
  </div>
 

  );
}