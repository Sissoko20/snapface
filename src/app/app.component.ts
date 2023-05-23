import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snaps-models';
import { Food } from './models/food-snaps-models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  faceSnaps!:FaceSnap[];
  foodSnap!:Food[];
  faceSnapsv!:FaceSnap[];

  ngOnInit(){


   


  }
}
