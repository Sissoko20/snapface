import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps-models';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnapsv!:FaceSnap[];

  constructor(private faceSnapsService:FaceSnapsService){

  }

  ngOnInit():void{
    this.faceSnapsv=this.faceSnapsService.faceSnaps;


  }

}
