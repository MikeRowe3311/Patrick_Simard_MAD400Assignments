import { isNgContent } from "@angular/compiler";
import { IContent } from "./IContent";

export class ContentList {


private _planets: IContent[];


constructor(){
    this._planets = []
}

get listOfPlanets(): IContent[]{
    return this._planets
}

// public addContent = IContent.push(_planets);

public addContent(planetToAdd: IContent) {
    this._planets.push(planetToAdd)
}

public arrayLength(){
    this._planets.length
}


public toString(number: IContent){
    



    // id: number;
    // name: string;
    // description?: string;
    // author: string;
    // imgSrc?: string;
    // type: string;
    // tags?: string[];

}



}
