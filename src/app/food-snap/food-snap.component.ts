import { Component, Input, OnInit } from '@angular/core';
import { Food } from './../models/food-snaps-models';
import { FoodSnapsService } from '../services/food-snaps.service';



@Component({
  selector: 'app-food-snap',
  templateUrl: './food-snap.component.html',
  styleUrls: ['./food-snap.component.scss']
})
export class FoodSnapComponent implements OnInit {
  @Input()foodSnap!: Food;
 
  data:any
  constructor(public food:FoodSnapsService){
    
  }
  ngOnInit(){
    this.data=this.food.getAllFoodCake();

  }
}
