import { Component } from '@angular/core';
import { listOfPlanets } from 'src/app/data/mock-content';
import { SpaceEngineersService } from 'src/app/services/space-engineers.service';
import { IContent } from '../icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  listOfPlanets: IContent[] = [];

  constructor(private service: SpaceEngineersService){
    
  }

  ngOnInit() {
    this.service.getContent().subscribe(listOfPlanets => this.listOfPlanets = listOfPlanets);
    }
    

    



}
