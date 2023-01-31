import { Component } from '@angular/core';
import { IContent } from '../IContent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  listOfPlanets: IContent[];

  constructor(){
    this.listOfPlanets = [];
    this.listOfPlanets.push({
      id: 1,
      name: 'Earth-Like',
      imgSrc: '301.png',
      description: 'Earth like planet is the first and most diverse planet in Space Engineers. It might be initially, the easiest planet to survive on, but it is also one of the more difficult planets to escape from due to its lack of platinum ore and uranium ore. Earth like planets terrain is highly varied and proves to be both easy and difficult to traverse in a wheeled vehicle.',
      author: 'Patrick Simard',
      type: 'Planet',
      tags: ["Planet", "Easy", "#0301"]
    },
    {
      id: 2,
      name: 'Moon',
      imgSrc: '302.png',
      description: 'Its the earth likes moon. It is airless and full of uneven craters and hills. Small rovers will have a hard time navigating this terrain. Its a weatherless rock, that allows easy departure from its surface as it contains no atmosphere.',
      author: 'Patrick Simard',
      type: 'Moon',
      tags: ["Moon", "Medium", "#0302"]
    },
    {
      id: 3,
      name: 'Mars',
      imgSrc: '303.png',
      description: 'Mars is the second planet added to the game. Its a rocky desert with deep trenches and steep hills. Ice can be found on the planet but not in large enough quantities to allow the use of hydrogen based ships. The atmosphere allows for strong storms but also provides a slightly easier planetary escape compared to Earth like',
      author: 'Patrick Simard',
      type: "Planet",
      tags: ["Planet", "Medium", "#0303"]
    },
    {
      id: 4,
      name: 'Europa',
      imgSrc: '304.png',
      description: 'Europas terrain consist of rolling ice hills, ice valleys, and ice cliffs. The planet is basically composed of ice, and a few other resources when digging deeper. This body is best used for a refueling station.',
      author: 'Patrick Simard',
      type: "Moon",
      tags: ["Moon", "Hard", "#0304"]
    },
    {
      id: 5,
      name: 'Triton',
      imgSrc: '305.png',
      description: 'Triton does not support life. Snow and ice are abundant, making it ideal for hydrogen based crafts. The planet is well suited for rovers.',
      author: 'Patrick Simard',
      type: "Planet",
      tags: ["Planet", "Medium", "#0305"]
    },
    {
      id: 6,
      name: 'Pertam',
      imgSrc: '306.png',
      description: 'Pertams terrain features many mountains, large canyons and also flat desert plains. A rover is ideal for this planet but hold many challenges for traversing its terrain.',
      author: 'Patrick Simard',
      type: 'Planet',
      tags: ["Planet", "Hard", "#0306"]
    },
    {
      id: 7,
      name: 'Alien Planet',
      imgSrc: '307.png',
      description: 'Alien Planet is one of the harder start locations in the game. Its terrain is extremely difficult to traverse while using a rover, but aircraft will have a harder time finding resources.',
      author: 'Patrick Simard',
      type: 'Planet',
      tags: ["Planet", "Hard", "#0307"]
    },
    {
      id: 8,
      name: 'Titan',
      imgSrc: '308.png',
      description: 'Titan is a relatively flat, airless, cold, Mars-like rock planet. It holds icy craters and resources can be found of plenty just with effort to retrieve. The atmosphere allows for easy escape and the planets location suits a deep space operation.',
      author: 'Patrick Simard',
      type: 'Moon',
      tags: ["Moon", "Medium", "#0308"]
    }

    )
  }


}
