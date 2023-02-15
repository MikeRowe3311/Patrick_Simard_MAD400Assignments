import { Component, OnInit } from '@angular/core';
import { listOfPlanets } from './data/mock-content';
import { ContentListComponent } from './models/content-list/content-list.component';
import { IContent } from './models/icontent';
import { SpaceEngineersService } from './services/space-engineers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  
}
