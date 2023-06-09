import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps-models';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Food } from '../models/food-snaps-models';
import { FoodSnapsService } from '../services/food-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnapsv!: FaceSnap[];
  food!: Food[];
  data:any

  constructor(
    private faceSnapsService: FaceSnapsService,
    private foodservice: FoodSnapsService
  ) {}

  ngOnInit(): void {
    this.faceSnapsv = this.faceSnapsService.getAllSnaps();
    this.food = this.foodservice.food;
  }
}
