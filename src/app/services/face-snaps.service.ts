import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snaps-models';


@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Bamako',
    },

    {
      id: 2,
      title: 'Archibald',
      description: 'My best Friend',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    },

    {
      id: 3,
      title: 'Un bon repas',
      description: "Mmmh que c'est bon !",
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
  ];

  constructor() {}
  getAllSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  snapFaceById(FaceSnapId: number): void {
    const facesnap = this.faceSnaps.find(
      (facesnap) => facesnap.id === FaceSnapId
    );
    if (facesnap) {
      facesnap.snaps++;
    } else {
      throw new Error('FaceSnap not found !');
    }
  }
  unSnapsnapFaceById(id: number): void {
    const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === id);
    if (faceSnap) {
      faceSnap.snaps--;
    } else {
      throw new Error('FaceSnap not found !');
    }
  }

  getFaceSnapById(snapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnaps) => faceSnaps.id === snapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId:number, snapType:'snap' | 'unsap'):void{
    const facesnap=this.getFaceSnapById(faceSnapId);
    snapType=== 'snap' ? facesnap.snaps++ : facesnap.snaps--;
  }
}


