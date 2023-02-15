import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { SpaceEngineersService } from '../services/space-engineers.service';

@Component({
  selector: 'app-content-list-item-search',
  templateUrl: './content-list-item-search.component.html',
  styleUrls: ['./content-list-item-search.component.scss']
})
export class ContentListItemSearchComponent implements OnInit {

  planet?: IContent;
  title = 'P_Simard_SpaceEngineers';

constructor(private spaceEngineersService: SpaceEngineersService) {

}

ngOnInit(): void{
  this.getTheNewItem("3");
}

getTheNewItem(newIdNumber: string): void{
  console.warn("Getting an item: ", newIdNumber);
  
this.spaceEngineersService.getIndex(Number(newIdNumber)).subscribe((listOfPlanets: IContent) => {
  console.log("This is a planet???");
  this.planet = listOfPlanets;
})
}





}
