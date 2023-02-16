import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listOfPlanets } from '../data/mock-content';
import { IContent } from '../models/icontent';
import { SpaceEngineersService } from '../services/space-engineers.service';

@Component({
  selector: 'app-content-list-item-detail',
  templateUrl: './content-list-item-detail.component.html',
  styleUrls: ['./content-list-item-detail.component.scss']
})
export class ContentListItemDetailComponent implements OnInit{


id?: number;
planet?: IContent;

constructor(private route: ActivatedRoute, private spaceEngineerService: SpaceEngineersService){}


  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      this.id = Number(params.get('idNumberValue'))
      this.spaceEngineerService.getIndex(this.id).subscribe((singlePlanet: IContent)=>{
        this.planet = singlePlanet;
      })
    })
  }




}
