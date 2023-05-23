import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snaps-models';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
@Input()faceSnapv!:FaceSnap

  snaps!:number;

  buttonText!:string
  
  imageUrl!: string;

  constructor(private  snapfaceservice:FaceSnapsService){
    
  }
  ngOnInit(){

 
  this.buttonText="Oh Snap"
  
  }

  onSnap(){
if(this.buttonText=== "Oh Snap"){
 this.snapfaceservice.snapFaceSnapById(this.faceSnap.id, 'snap')
 this.buttonText="Ooops ! Unsnapped" 
}
else{
  this.snapfaceservice.snapFaceSnapById(this.faceSnap.id,'unsap')
  this.buttonText="Oh Snap"
}
    
  }


}
