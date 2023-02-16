import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { listOfPlanets } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class SpaceEngineersService {

  constructor() { }

getContent(): Observable<IContent[]>{
  return of(listOfPlanets);
}

//Crudding methods below

// getIndex(idNum: number): Observable<IContent>{
//   let planetFound = listOfPlanets.find(planet => {
//     if(planet.id == idNum){
//       return planet;
//     }
//     return null;
//   }
//   );
//   return of(planetFound);
// }




getIndex(idNum: number): Observable<IContent>{
  let planetFound: IContent = {
    id: -1,
    name: "ERROR: NOT FOUND",
    author: "DUMMY",
    type: "DUMMY"
  }
  listOfPlanets.find(planet => {
    if(planet.id == idNum){
      planetFound = planet
    }
  }
  );
  return of(planetFound);
}


addItem(newItem: IContent){
  listOfPlanets.push(newItem);
  return of(listOfPlanets);
}


updateItem(itemToUpdate: IContent){
  listOfPlanets.forEach(planet=>{
    if(planet.id = itemToUpdate.id){
      planet = itemToUpdate;
    }
  })
  return of(listOfPlanets);
}


removeItem(idNum: number){
  var itemRemoved;
  listOfPlanets.forEach(planet=>{
    if(planet.id = idNum){
      itemRemoved = planet;
      delete listOfPlanets[itemRemoved.id];
    }
  })
  return of(itemRemoved);
}



}
