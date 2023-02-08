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






}
