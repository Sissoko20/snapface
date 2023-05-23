import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snaps-models';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps:FaceSnap[]=[
     
    {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
      location:"Bamako"
  },

  {
    title:'Archibald', description:'My best Friend',createdDate:new Date(),snaps:0,
    imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
  },

  {
    title: 'Un bon repas',
    description: 'Mmmh que c\'est bon !',
    imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    createdDate: new Date(),
    snaps: 0
  }

]

    
  
  constructor() { }
}
